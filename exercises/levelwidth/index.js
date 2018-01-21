// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  var arr = [root, 's'];
  var counters = [0];
  while (arr.length > 1){
    const node = arr.shift();
    if(node === 's'){
      counters.push(0);
      arr.push('s');
    }else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }
  return counters
}


// My implementation (not completely valid)
// function levelWidth(root) {
//   var result = [0];
//   var arr = [root, 's'];
//   var counter = 0;
//   while (arr.length){
//     var node = arr.shift();
//     if(node === 's' && arr.length === 0){
//       return result
//     } else if(node === 's' && arr.length > 1){
//       result.push(counter)
//     }
//     arr.push(...node.children)
//     for(elem in arr){
//       arr.shift()
//       counter++
//     }
//   }
//   return result
// }

module.exports = levelWidth;
