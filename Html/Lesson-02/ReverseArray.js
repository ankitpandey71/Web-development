var arr = [1, 2, 3, 4, 5, 6];

var arrayi = [];
function rev() {
  var temp;
  for (i = arr.length - 1; i >= 0; i--) {
    arrayi.push(arr[i]);
  }
  return arrayi;
}
console.log(rev());
