// WRITE A F() THAT TAKES IN AN INT N AND RETURNS AN ARR OF FIB NUMBERS TO N

[0, 1, 1, 2, 3, 5, 8, 13]

const fib = (n) => {
  let a = 0
  let b = 1
  let res = [a, b]
  for (let i = 3; i <= n; i++) {
    let c = a + b
    a = b
    b = c
    res.push(b)
  }
  return res
}

// console.log(fib(8))

const fibRec = (n) => {
  if (n == 1) return [0]
  if (n == 2) return [0, 1]
  return [...fibRec(n-1), fibRec(n-1)[n-2] + fibRec(n-1)[n-3]]
}

// console.log(fibRec(8))