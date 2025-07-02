// These are the four method by which variable can be created in JS [const, let, var , no data type]
// const and let are used mostly 

//account 1
const accountId = 2929203;
let accountEmail = "baki123@gmail.com";
var accountPass = "Baki";
accountCity = "delhi"
let accountState;// only variable decleration no initialization so it will give undefined
// accountId=932829 this cannot be changed cuz it's constant
console.log(accountId);

// account2

accountEmail = "max3839@gmail.com"
accountPass = "didk"
accountCity= "up"
/*
Prefer not to use "var"
because of issue in block and funtional scope
*/
console.table ([accountId, accountEmail,accountPass, accountState])



