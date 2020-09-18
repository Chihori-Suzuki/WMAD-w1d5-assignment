/**
 * Create a function that takes two numbers as arguments (num, length) 
 * and returns an array of multiples of num up to length
 */

const arrayOfMultiples = function(num, length) {
    let arr = [];
    let list =0;
    for(i = 1; i <= length; i++){
        list += num;
        arr.push(list);
    }
    return arr;
};
  


console.log(arrayOfMultiples(12, 10));
//➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(17, 6));
//➞ [17, 34, 51, 68, 85, 102]

