function addTwoDigits(n) {
  arr = n.toString().split('');
  ans = 0;
  console.log(arr)
  for (let i = 0; i < arr.length ; i++) {
    console.log(i);
    ans = ans + parseInt(arr[i]);
  }
  return ans;
}

console.log(addTwoDigits(21))