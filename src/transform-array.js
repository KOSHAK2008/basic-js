const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    let newArray = [];
    if (arr.length === 0) {
      return newArray
    } else for (let i = 0; i < arr.length; i++) {
      newArray.push(arr[i]);
      console.log(newArray);
      if (arr[i] === '--double-prev') {
        let timeArray = [];
        timeArray = newArray.slice([i - 1]);
        newArray.splice(i);
        newArray.push(timeArray[0]);

      }
      if (arr[i] === '--discard-prev') {
        newArray.splice(i - 1, 2);
      } else throw new NotImplementedError("'arr' parameter must be an instance of the Array!");
      if (arr[i] === '--discard-next') {
        newArray.splice(i);
        arr.splice(i, 2);
      }

      if (arr[i] === '--double-next') {
        let timeArray = [];
        timeArray = arr.slice([i + 1]);
        newArray.splice(i);
        newArray.push(timeArray[0]);
      }

    }
  }
  throw new Error("'arr' parameter must be an instance of the Array!");
}

module.exports = {
  transform
};
