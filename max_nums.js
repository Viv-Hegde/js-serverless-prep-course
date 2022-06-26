// start coding your function here!
function find_max(arr){
  let max = arr[0];
  for (let i=1; i <arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}

//console.log(find_max([1, 2, 3, 3, -1]));
exports.find_max = find_max;