/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the `greetAndUppercase` function. This function uses
 *    Async/Await. How is this function different than a regular (non-async)
 *    function? What is its return type?
 * 
 * 1A. With the `greetAnduppercase` function, whenever the await keyword is
 *     used, JavaScript will wait until the code that await was called upon
 *     finishes before continuing to execute the following code on the lines
 *     below. This is different from a normal JavaScript function, where the
 *     currently executing code will continue to run without waiting for
 *     anything. The return type of this function is a Promise with a resolved
 *     or rejected value.
 * 
 * 
 * 2. Uncomment block #1 and run the code using `node challenge3.js`. What is
 *    printed when we use `greetAndUppercase` like a regular function?
 * 
 * 2A. A pending promise is printed.
 * 
 * 
 * 3. Uncomment block #2 and run the code again. What happens now?
 * 
 * 3A. The function now works as intended.
 * 
 * 
 * 4. Write an asynchronous method 'spacer' that takes a string as input and 
 *    returns the input string with a space added between each character. You 
 *    can use your solution from Part 3.
 * 
 *    Call 'spacer' in the `greetAndUppercase` method and run your code again.
 *    You should see something like:
 * 
 *    'H E L L O   T H E R E ,   D U C K Y'
 * 
 * 
 *******************************************************************************
 */


 /**
  * Asynchronously returns a greeting for a specified name.
  * @param name The name of the person to greet.
  */
 function greet(name) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (typeof name === 'string') { 
          resolve('Hello there, ' + name);
        } else {
          reject('Name must be a string!');
        }
      }, 500);
    });
}

/**
 * Returns the uppercased version of a string.
 * @param {*} str The string to uppercase.
 */
function uppercaser(str) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        if (typeof str === 'string') {
            resolve(str.toUpperCase());
        } else {
            reject('Argument to uppercaser must be string');
        }
        }, 500);
    });
}

function spacer(str) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (typeof str === 'string') { 
        resolve(str.split('').join(' '));
      } else {
        reject('Argument to spacer must be string');
      }
    }, 500);
  });
}

async function greetAndUppercase(name) {
    greeting = await greet(name)
    uppercasedGreeting = await uppercaser(greeting)
    spacedUppercasedGreeting = await spacer(uppercasedGreeting)
    return spacedUppercasedGreeting
}

/* Uncomment me! #1 */
// result = greetAndUppercase('Ducky')
// console.log(result)

/* Uncomment me! #2 */
greetAndUppercase('Ducky')
    .then(function(result) {
        console.log(result)
    })
    .catch(function(err) {
        console.log(err)
    })