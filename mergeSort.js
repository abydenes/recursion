function mergeSort(array) {
  
}

function merge(left, right) {
  let resultArr = [];
  for (let i = 0, j = 0; i < left.length, j < right.length; ) {
    if (left[i] < right[j]) {
      resultArr.push(left.splice(i, 1));
    } else {
      resultArr.push(right.splice(j, 1));
    }
  }
  left.length ? resultArr.push(...left) : false;
  right.length ? resultArr.push(...right) : false;
  return resultArr;
}

// TEST CASES
console.log(`[6], [5] merged => ${merge([6], [5])}`);
console.log("________________");
console.log(
  `[1, 3, 4, 5], [7, 8, 9] merged => ${merge([1, 3, 4, 5], [7, 8, 9])}`
);
console.log("________________");
console.log(`[5, 4, 9], [3, 1, 2]  merged => ${merge([4, 5, 9], [1, 2, 3])}`);
