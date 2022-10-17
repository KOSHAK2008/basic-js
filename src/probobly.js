function getSumOfDigits(n) {
    let arr = Array.from(n.toString());
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += parseFloat(arr[i]);
    }
    let sumArray = Array.from(sum.toString());
    if (sumArray.length > 1) {
        let sum = 0;
        for (let i = 0; i < sumArray.length; i++) {
            sum += parseFloat(sumArray[i]);
        } return sum;
    }
}

getSumOfDigits(91);
// 6);
console.log(getSumOfDigits(91));
  // 1;