
// You should implement your task here.

module.exports = function towelSort (matrix) {
let z = 0;
let arr = [];
if (!Array.isArray(matrix)) return arr;
    for (let i = 0; i < matrix.length; i++) {
        if (i == 0 || i % 2 == 0) {
            for (let y = 0; y < matrix[i].length; y++) {
                arr[z] = matrix[i][y];
                z++;
            }
        } else {
            for (let y = matrix[i].length - 1; y > -1; y--) {
                arr[z] = matrix[i][y];
                z++;
            }
        }
    }

  

  return arr;
}
