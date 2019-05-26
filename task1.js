function sortWithSavePositions(array) {
  let newArray = array.map((item, i, arr) => {
    return [i, arr[i]]
  });
  newArray.sort((a,b) => {
    if (a[1] > b[1])
      return 1;
    if (a[1] < b[1])
      return -1;
    return 0;
  });
  return newArray;
}


function binarySearch(array, element){
  let newArray = sortWithSavePositions(array);
  let newElement = null;
  let leftBorder = 0;
  let rightBorder = newArray.length - 1;
  while (leftBorder <= rightBorder) {
    let middle = Math.floor((rightBorder + leftBorder) / 2);
    newElement = newArray[middle][1];
    if (newElement < element)
      leftBorder = middle + 1;
    else if (newElement > element)
      rightBorder = middle - 1;
    else
      return newArray[middle][0]
  }
  return -1;
}
