
//Given an array of unsorted numbers, return the index of the following target if the target exists in the array.
// If the target is not found, return null
//let num = [45,12,6,89,2,5]
//let target = 6

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const number = Math.floor(arr.length / 2);
  const firstnumber = arr.slice(0, number);
  const secondnumber = arr.slice(number,);

  return merge(mergeSort(firstnumber), mergeSort(secondnumber));
}

function merge(firstnumber, secondnumber) {
  let newArray = [];
  let x = 0;
  let y = 0;

  while (x < firstnumber.length && y < secondnumber.length) {
    if (firstnumber[x] < secondnumber[y]) {
      newArray.push(firstnumber[x]);
      x++;
    } else {
      newArray.push(secondnumber[y]);
      y++;
    }
  }

  return newArray.concat(firstnumber.slice(x)).concat(secondnumber.slice(y));
}

function findIndex(arr, target) {
  const sortedArray = mergeSort(arr);
  let firstnumber = 0;
  let secondnumber= sortedArray.length - 1;

  while (firstnumber <= secondnumber) {
    const number= Math.floor((firstnumber + secondnumber) / 2);
    if (sortedArray[number] === target) {
      return arr.indexOf(sortedArray[number]);
    } else if (sortedArray[number] < target) {
      firstnumber= number + 1;
    } else {
      secondnumber = number - 1;
    }
  }

  return null;
}

const num = [45, 12, 6, 89, 2, 5];
const mytarget = 6;
console.log(findIndex(num, mytarget));


//Given an unsorted array of numbers return the sorted array in descending order
let array=[123,89,5,23,9,56];


array.sort(function(a, b) {
  return b - a;
});

console.log(array); 


//Given the following array, search for the following target
let owntarget = 34
let arr2 = [1,4,78,2,67,3];



arr2.sort((a, b) => a - b);


let low = 0;
let high = arr2.length - 1;
let mid;

while (low <= high) {
  mid = Math.floor((low + high) / 2);
  if (arr2[mid] === owntarget) {
    console.log(` ${owntarget} at index ${mid}`);
    break;
  } else if (arr2[mid] < owntarget) {
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

if (low > high) {
  console.log(`${owntarget} doesn't exist in the array`);
}

