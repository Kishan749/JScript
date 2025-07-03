// stack(primitive)  heap(non-primitive)

let name1 = "Kishan";
let name2 = name1;
name2 = "Baki";

// console.log(name1)
// console.log(name2)

let userOne = {
  email: "max@gmail.com",
  address: "delhi",
};

let userTwo = userOne;

userTwo.email = "john@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
