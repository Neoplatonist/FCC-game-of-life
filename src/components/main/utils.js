
export const filter = function(row, col) {
  let check = [
    [row-1, col-1],
    [row-1, col],
    [row-1, col+1],
    [row, col-1],
    [row, col+1],
    [row+1, col-1],
    [row+1, col],
    [row+1, col+1]
  ]

  return check
}

export const neighbours = function(check, cycles) {
  let arr = []
  let count = 0

  for (let i = 0; i < check.length; i++) {
    if (check[i][0] < 0) {
      check[i][0] = 0
    }

    if (check[i][1] < 0) {
      check[i][1] = 0
    }

    console.log(check[i])

    arr.push(check[i][0] * check[i][1])
  }

  console.log(arr)

  for (let i = 0; i < arr.length; i++) {
    if (cycles[arr[i]] === 1) {
      count += 1
    }
  }

  return count
}