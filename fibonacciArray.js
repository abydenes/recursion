function fibs(num) {
  if (num === 0) return [];
  if (num === 1) return [0];
  let arr = [0, 1];
  for (let i = 0; i < num - 2; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr;
}

function fibsRec(num) {
  if (num === 0) return [];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];
  let arr = fibsRec(num - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}

// TEST CASES
console.log("results of fibs...");
console.log(`fibs(0) => ${fibs(0)}`);
console.log(`fibs(1) => ${fibs(1)}`);
console.log(`fibs(2) => ${fibs(2)}`);
console.log(`fibs(4) => ${fibs(4)}`);
console.log(`fibs(8) => ${fibs(8)}`);
console.log("results of fibsRec...");
console.log(`fibsRec(0) => $  {fibsRec(0)}`);
console.log(`fibsRec(1) => ${fibsRec(1)}`);
console.log(`fibsRec(2) => ${fibsRec(2)}`);
console.log(`fibsRec(4) => ${fibsRec(4)}`);
console.log(`fibsRec(8) => ${fibsRec(8)}`);
