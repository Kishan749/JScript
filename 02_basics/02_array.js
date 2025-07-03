const marvel_heros = ["thor", "Ironman", "blackwidow"];
const dc_heros = ["flash", "Batman", "superman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

// *****spread operator******

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)


const multiArr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]
const simpleArr = multiArr.flat(Infinity)
// console.log(simpleArr)


console.log(Array.isArray("Kishan"))
console.log(Array.from("Kishan"))
console.log(Array.from({ name: "Kishan" }))// simply returns an empty array because it has no clue how to “loop through” your object.


let score1 = 200
let score2 = 300
let score3 = 600

console.log(Array.of(score1,score2,score3))
