let a = "100"

let b = Number(a)

// console.log(typeof(b))
// console.log(b)



let p = Symbol(111)
let q = 111

console.log(p === q)
console.log(typeof p, typeof q)




// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;


let c = "1"

let d = Boolean(c)

// console.log(typeof d)
// console.log(d)

// 1 => true
// 0 => false
// "1" => true
// "0" => true



let e = 10
let f = e++

// console.log(e)
// console.log(f)

let g = 10
let h = ++g

// console.log(g)
// console.log(h)


// setInterval and setTimeout

x = 0

// setInterval(() => {
//     console.log(x)
// }, 5000);



// setTimeout(() => {
//     console.log('Time out ho gya')
// }, 10000);


// What is the difference between = , ==, ===
// '=' : we assign value using this
// '==' : it compares value (data type is checked and converted to similar data type)
// '===' : it strictly compares value (data type is also compared)

