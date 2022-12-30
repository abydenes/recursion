function mergeSort(array) {
  if (array.length <= 1) return array;

  let low = 0;
  let high = array.length;

  let mid = Math.ceil((low + high) / 2);
  let left = mergeSort(array.slice(low, mid));
  let right = mergeSort(array.slice(mid, high));
  return merge(left, right);
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
console.log(`${mergeSort([1, 6, 3, 4, 8, 9, 2])}`);
