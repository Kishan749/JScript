// const tinderUser = new Object()//  => Singleton object
const tinderUser = {} // => Non-Singleton object

tinderUser.name = "Sam"
tinderUser.id = 3434;
tinderUser.isLoggedin = false

// console.log(tinderUser)

const regularUser = {
    email: "sam@gmail.com",
    fullName: {
        userfullname: {
            firstname: "sam",
            lastname: "snow"
        }
    } 

}

// console.log(regularUser.fullName.userfullname)

const obj1 = {1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b" }

// ***** Addition **********

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({} , obj1 , obj2)
// const obj3 = {...obj1, ...obj2}

// console.log(obj3);

// *********** ways to access ojbc values ********************

// console.log(Object.keys(tinderUser))// <-1
// console.log(Object.values(tinderUser)) <-2
// console.log(Object.entries(tinderUser)) <-3

// console.log(tinderUser.hasOwnProperty('isLoggedinj'))

//************ Destructureing( ways to access ojbc value) *********************************
 
const course = {
    coursename: "javascript",
    price: "1000",
    courseInstructor: "max"
}

//course.courseInstructor

const { courseInstructor: mentor } = course// destructure done of "courseInstructor" to "mentor"
console.log(mentor)

//************************************API***************************//

// medium to access data from server
// ususally gets data back in form of "JSON"

// gets values in form of similar to object
// {
//         "name": "Kishan",
//         "city": "delhi",
//         "age": "21"
        
// }

// api in array format

[
    {},
    {},
    {}
]





