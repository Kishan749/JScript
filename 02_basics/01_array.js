// Array

const myArr = [0, 1, 2, 3, 4, 5]

// console.log(myArr[3])

// Array Methods

// myArr.push(9)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()


// console.log(myArr.includes(3))


// const newArr = myArr.join()// convert whole array in strings

// console.log(myArr)
// console.log(typeof(newArr))

// Slice and Spice

console.log("A", myArr)
 
const myn1 = myArr.slice(1, 3)// dont make changes in original array
console.log(myn1)

console.log("B", myArr)

const myn2 = myArr.splice(1, 3); // does make changes in original array 
console.log(myn2)//  [ 1, 2, 3 ]
console.log(myArr)// [ 0, 4, 5 ]

