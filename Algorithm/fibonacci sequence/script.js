// @ts-check
//FIBONACCI SEQUENCE

{{
    
    
    /**
     * @type {Array<number>}
     */
    
    /**
     * @param {number} n1 - first number
     * @param {number} n2 - second number
     */
    let fibonacciNumbers = [];
    let n1 = 0;
    fibonacciNumbers.push(n1);
    let n2 = 1;
    fibonacciNumbers.push(n2);
    for (let x = null; x = fibonacciNumbers[fibonacciNumbers.length-1] + fibonacciNumbers[fibonacciNumbers.length-2]; ) {
        
        fibonacciNumbers.push(x)
        if (fibonacciNumbers.length > 10 ) {
            break
        }
    }
        
console.log(fibonacciNumbers)

}}

