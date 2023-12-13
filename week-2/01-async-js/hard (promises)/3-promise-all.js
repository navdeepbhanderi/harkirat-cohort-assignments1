/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

    function waitOneSecond() {
    return new Promise(resolve => setTimeout(resolve , 1000))
    }
    
    function waitTwoSecond() {
        return new Promise(resolve => setTimeout(resolve , 2000))
    }
    
    
    function waitThreeSecond() {
        return new Promise(resolve => setTimeout(resolve , 3000))
    }
    
    
    async function calculateTime() {
    
     const startTime =  new Date().getTime();
     await Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]);
     const endTime =  new Date().getTime();
     const elapsedTime = endTime - startTime;
     console.log(elapsedTime/1000)
    }
    calculateTime()
module.exports = calculateTime;
