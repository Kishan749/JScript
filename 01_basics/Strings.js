const name = "Kishan"
const repoct = 50

// console.log(name + repoct) out dated syntax

// new way to add

// console.log(`Hello my name is ${name} and my repoct is ${repoct}`)

const gameName = new String('Kishan')

// console.log(gameName[4])
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName)// original will not change after do it to upper case

// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('d'))

// substring

const newString = gameName.substring(0, 4)
// console.log(newString)

const anotherString = gameName.slice(-5,5)
console.log(anotherString)

const newName = "     Kishan   "
console.log(newName)
console.log(newName.trim())
console.log(newName.replace('s', 'S'))

let sentence = "Hello world from Kishan";
let words = sentence.split(" ");
console.log(words);




