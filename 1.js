const list = [
  [1, 21, 49, 5, 7, 8, 3],
  [4, 6, 7, 2, 3, 5, 7],
  [1, 7, 2, 9, 67, 8, 61],
  [6, 8, 2, 5, 6, 8, 9],
  [1, 1, 90, 3, 13, 81, 3],
  [1, 21, 41, 5, 7, 8, 3],
];

const list2 = list.sort((a, b) => {
  if (a[0] > b[0]) {
    return 1
  }
  if (a[0] < b[0]) {
    return -1
  }
  if (a[1] > b[1]) {
    return 1
  }
  if (a[1] < b[1]) {
    return -1
  }
  return 0
})


const list3 = list.sort((a, b) => {
  const arr = [0, 1, 2]
  do {
    const index = arr.shift()
    if (a[index] > b[index]) {
      return 1
    }
  } while (arr.length > 0)
  const arr2 = [0, 1, 2]
  do {
    const index = arr2.shift()
    if (a[index] < b[index]) {
      return -1
    }
  } while (arr2.length > 0)
  return 0
})


console.log(list3)
