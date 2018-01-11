
export const filter = function(row, col, dims) {
  let check = [
    (row-1)*dims[1] + col-1,
    (row-1)*dims[1] + col,
    (row-1)*dims[1] + col+1,
    (row)*dims[1] + col-1,
    (row)*dims[1] + col+1,
    (row+1)*dims[1] + col-1,
    (row+1)*dims[1] + col,
    (row+1)*dims[1] + col+1
  ]

  return check
}

export const neighbours = function(check, cycles) {
  let count = 0

  for (let i = 0; i < check.length; i++) {
    if (cycles[check[i]] === 1) {
      count += 1
    }
  }

  return count
}