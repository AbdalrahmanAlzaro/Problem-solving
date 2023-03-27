// Fibonacci Series 

function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  function fibonacciSeries(count) {
    let series = [];
    for (let i = 0; i < count; i++) {
      series.push(fibonacci(i));
    }
    return series;
  }

  console.log(fibonacciSeries(10));
  






  // The sum of Array Elements

  const myArray = [1, 2, 3, 4, 5];

  function sumArray(arr) {

    if (arr.length === 0) {
      return 0;
    }
   
    else {
      return arr[0] + sumArray(arr.slice(1));
    }
  }

    const sum = sumArray(myArray);
    console.log("The sum of the elements in the array is: " + sum);







  // Reverse a String

  function rev (str) {
    if (str === "") {
      return "";
    } else {
      return rev(str.substr(1)) + str.charAt(0);
    }
  }

  console.log(rev("hello"));
  
  

