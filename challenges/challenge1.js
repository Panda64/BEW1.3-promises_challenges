/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 * 
 * 1A. The outputs will be printed in the following order: "Step 1", "Step 3", 
 *     and "Step 2". Although the code is in the order of "Step 1", "Step 2", 
 *     and "Step 3", "Step 2" is put into the snooze() function, which waits 
 *     2000 miliseconds before executing the inputted action, meaning that 
 *     "Step 3" will have time to execute before "Step 2" does.
 * 
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 * 
 * 2A. "Step 1", "Step 3", "Step 2", and "Async Action completed via callback"
 * 
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 * 
 * 3A. Now, the order will be "Step 1", "Step 2", and "Step 3". This is because 
 *     setting a delay of 0 miliseconds is the equivalent of happening instantly,
 *     so the code is now free to run in the order in which is was typed. 
 *     Re-running the code atually turns out to prove me wrong. The order is
 *     still "Step 1", "Step 3", and "Step 2". After rethinking my approach, I
 *     have realised that since JavaScript is single-threaded, and the snooze()
 *     function still puts the action inside of setTimeout(), this action is
 *     automaticaly going to be executed after all existing code has finished
 *     running no matter what the delay is set to. I beleive that in order to 
 *     get a "proper" 1-2-3 step execution, setTimeout() would have to be
 *     removed.
 * 
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

