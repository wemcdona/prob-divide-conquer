function countZeroes(arr) {
  let val = 0;
  for (let i in arr) {
    if(arr[i] === 0 && arr[i] === parseInt(arr[i], 10)) {
        val += 1;
    }
  }
  return val;
}

module.exports = countZeroes