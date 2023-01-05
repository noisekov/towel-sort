
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  for (let prop in matrix) {
    if (prop % 2 === 1) {
      result.push(...matrix[prop].reverse());
    } else {
      result.push(...matrix[prop]);
    }
  }
  return result;
}
