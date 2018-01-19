// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  const cut = (array,size) => {
    if (array.length <= size){
      return chunked.push(array)
    }
    chunked.push(array.splice(1,size))
    return cut(array,size)
  }
  cut(ary,size)
  return chunked;
}

function chunk(array,size){
  let ary = [];
  while (array.length > size){
    const last = ary[ary.length - 1];
    if (!last || last.length === size){
      chunked.push([element])
    }
  }
}
function chunk(array,size){
  const chunked = [];
  for (let elem of array){
    const last = chunked[chunked.length - 1];
    if(!last || last.length === size){
      chunked.push([elem]);
    } else {
      last.push(ele);
    }
  }
  return chunked
}
// function chunk(array, size) {
//   const chunked = [];
//   for (let element of array){
//     const last = chunked[chunked.length - 1];
//     if (!last || last.length === size){
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return chunked;
// }


module.exports = chunk;
