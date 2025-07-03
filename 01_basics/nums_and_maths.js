const score = 499
// console.log(score)// js automatically detects Datatypes
// console.log(typeof(score))

const balance = new Number(100)
// console.log(balance) // we specifically declared it number
// console.log(typeof score);

// number -> convert -> string -> then all features of string can be applied on it

// console.log(balance.toString().length)//3
// console.log(balance.toFixed(3))//100.000

const otherNumber = 123.989
// console.log(otherNumber.toPrecision(3))// round off krdeta hai


const hundreds = 10000000000
// console.log(hundreds.toLocaleString('en-IN'))

// *********************** Maths ***********************

// console.log(Math)
// console.log(Math.abs(-4))//-> (-ve to +ve)
// console.log(Math.ceil(4.6))


// console.log(Math.random()) // => give random no between 0<=x<1
console.log((Math.random() * 10) + 1) // this will give no between 1<x<10 as multiplied by 10 and plus for edge case 0

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+ min)

