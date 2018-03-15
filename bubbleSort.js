function bubbleSort(arr){
  let count = 0;
  for (let i = 0 ; i < arr.length ; i++){
    for(let j = 0 ; j < arr.length; j++){
      if(arr[j] > arr[j+1]){
        swap(arr, j, j + 1)
        count++;
      }
    }
  }
  console.log(
    `Array is sorted in ${count} swaps.`,
    `First Element: ${arr[0]}`,
    `Last Element: ${arr[arr.length-1]}`
  )
}

function swap(arr, i , j){
  let curr = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = curr;
}

bubbleSort([3,2,1])

// i // arr // numbers to sort in ascending order
// o // string // steps taken / first index / last index of sorted arr
// c // ---
// e // ---
