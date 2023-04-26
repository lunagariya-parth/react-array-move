//returns an array that is changed but not original array modified
function arrayMoveImmutable(array, pos1, pos2) {
  let arr = [...array];
  let box = arr[pos2];
  arr[pos2] = arr[pos1];
  arr[pos1] = box;
  return arr;
}

//Original array that is modified
function arrayMoveMutable(array, pos1, pos2) {
    if (pos2 >= array.length) {
      let k = pos2 - array.length + 1;
      while (k--) {
        array.push(undefined);
      }
    }
    array.splice(pos2, 0, array.splice(pos1, 1)[0]);
    return array;
  }
