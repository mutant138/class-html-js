// console.log(username)
// var username = "nazith"

// var username="sanjith"
// console.log(username)

// test()
// function test(){
//     console.log("Hello world")
// }

"Cannot access 'username' before initialization. --> let" 

"userpass is not defined ---> not exist"

// Variable decalaration

// 3 types (var --> old way, let and const --> new way)

// const userpass = "123456"

// userpass = "1232344"

// const obj = {
//     name: "surya",
//     age: 12
// }

// const arr = [1,2,3,4]


// let username = "skdjnfhun "

// console.log(userpass)
// function test(){
//     if(true){
//         let username = "Sanjith"
//         username = "Surya"
//         console.log(username)
//     }
//     // console.log(username)
// }

// test()

// console.log(username)

/*
   I can access before initialisation without any issue,
   I can re-decalaration of the same variable. (bug),
   I can re-assigning the variable with different value,
   Global scope , 
*/


// Temporal Dead Zone

// let username


// username="surya"


// Call stack and FEC in js


// var num1 = 10s
// var num2 = 20


// function square(ganesha){
//     console.log("Inside Function")
//     var result = ganesha * ganesha
//     return result
// }

// var ans1 = square(num1)
// var ans2 = square(num2)
// console.log(ans1, ans2)


// scope vs closure difference


// function test(){
//     var count = 0
//     return function(){
//         count++
//         console.log(count)
//     }
// }

// var ans = test()
// console.log(ans())
// console.log(ans())
// console.log(ans())
// console.log(ans())


// Javascript basics class


// function declaration

// function test(cb, num){
//     //
//    var sqr = cb(num)
//    return sqr - num
// }

// console.log(test())

// function expression 

// var foo = function(n){
//       return n * n
// }

// console.log(foo())

// var fooRes = foo()
// console.log(fooRes)

// Arrow function

// var bar = (num, num1) => num*num1


// console.log(bar(3, 4))
// console.log(bar(4, 10))


// Callback function

// console.log(test(foo , 10))


// Higher order function

// Function which accepts a another function as an argument it is called HOF

// Data types

// String
// Number
// Boolean
// null
// NaN
// undefined


// name = "string"

// age = 12


// const arr = [1,2,3]

// const arr1 = new Array(5)

// let a = "10"

// console.log(typeof Number(a))

// console.log("10" == 10)
// console.log("10"+"10")
// console.log(10 + +"10")


// console.log(arr.length)

// for (let i = 0; i < arr.length; i++) {
   //    const element = arr[i];
//    console.log("Elements " + element)
// }

// let i = 0; 
// while(i<arr.length){
//    const element = arr[i];
//    console.log("Elements " + element)
//    i++
// }

// do {
//    const element = arr[i];
//    console.log("Elements " + element)
// } while (false);


// for (const key in arr) {
//    const element = arr[key]
//    console.log(element + " element")
// }

// for (const element of arr) {
//    console.log(element, " elements")
// }

// let bool = false
// if(bool){
//    console.log("Ganesha")
// }else{
//    console.log("Darun")
// }


// Array methods

// let arr = ["Surya", "Nazith", "Sanjith","Prem","Sabari"]
// let arr1 = ["Partha", "Ganesha", "Manoj", "Deepak", "Darun" ,"JP"]

// const pushedArr = arr.push("Ganesha")
// console.log(pushedArr)
// let poppedElem = arr.pop()
// console.log(poppedElem)
// console.log(arr)

// function printEle(item){
//    console.log()
// }

// arr.every()

// console.log(arr + arr1)

// console.log(arr.concat(arr1))
// console.log(newArr)



// Very very important array methods
// arr.forEach(). ->
// arr.map()   ->
// arr.filter()
// arr.reduce()



// function myFunction(prev , curr){
//    return prev + curr
// }

// const returnedVal = numArr.forEach(myFunction)
// console.log(returnedVal)

// const mappedReturnedArr = numArr.map(myFunction)
// console.log(mappedReturnedArr)

// const returnedFilterArr = numArr.filter(myFunction)
// console.log(returnedFilterArr)


// const returnReducedVal = numArr.reduce(myFunction , 5)
// console.log(returnReducedVal)


// Methods chaining
// const returnedVal = numArr.map( item=> item*2).filter(item => item > 60).reduce((prev, curr)=> prev + curr).toFixed(3)
// console.log(returnedVal)


// let obj = {
//    name: "surya",
//    getInfo: function(){
//       console.log("Name", this.name )
//    }
// }

// obj.getInfo()


// let numArr = [100,40,5,60,20,30]

// let antherArrr = ["Surya", "Deepak" , "Ganesha", "Jeyavishnu", "Sabari"]


// const logs = numArr.every((num)=> num > 10)
// const logs = numArr.some((num)=> num > 70)
// const logs = numArr.reverse()
// const logs = numArr.slice(-2)
// const logs = numArr.splice(2, 1, "Ganesha", "Nazith", "surya")

// const logs = numArr.sort((a,b)=> b-a)

// const logs = numArr.indexOf(1000)

// console.log(numArr)
// console.log(logs)




// IIFE (Immediately Invoked Function Expression)


// (function(){
//   console.log("It is IIFE")
// })();

// (()=> {
//   console.log("This runs immediately!");
// })();


// let obj = {
//    username: "surya",
//    age: 25,
//    greet :function (params) {
//       console.log("Hello")
//    }
// }


// let stud = [
//    {studentName : "Surya", marks: 50},
//    {studentName : "Nazith", marks: 100},
//    {studentName : "Manoj", marks: 40},
//    {studentName : "Jeya", marks: 60},
//    {studentName : "Deepak", marks: 30},
// ]


// let res= stud.reduce((acc,curr)=> acc + curr.marks , 0)

// console.log(res)

// let name = "Nazith"

// let stud = {
//    name: "surya",
//    getInfo: function(){
//       return `Hello ! this is ${this.name}`
//    },
//    getData : ()=>{
//       return `Hello ! this is ${this.name}`
//    },
//    age: 25
// }


// console.log(stud.getData())

// const res = Object.values(stud)
// const res = Object.keys(stud)
// Object.freeze()
// let res = Object.bin(stud)

// console.log(res)

// function test(){
//    console.log("Time delay function")
// }

// setTimeout(test, 5000)

// console.log("Hi Non delay Function")

// setTimeout(()=>{
//    console.log("Timer 0 function")
// },0)


// JSON 

// const data = [
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   },
//   {
//     "userId": 1,
//     "id": 3,
//     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//   },
//   {
//     "userId": 1,
//     "id": 4,
//     "title": "eum et est occaecati",
//     "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
//   },
// ]

// console.log(data)

// const lists = document.getElementById("lists")

// const response = fetch("https://jsonplaceholder.typicode.com/pos")
// .then((res)=>{
// //   console.log(res, "<<<<<<< inside then")
//   const data =  res.json()
//   return data
// })
// .then((data)=>{
//     data.map((item)=>{
//   const li = document.createElement("li")
//   li.textContent = item.title
//   lists.appendChild(li)
// })
// })
// .catch((err)=>{
//    console.log(err, "error")
// })

// console.log(response)

// const res = data.map((item)=>{
//   const li = document.createElement("li")
//   li.textContent = item.title
//   lists.appendChild(li)
// })

// Promise

// new Array(5)

// class Human{
//    constructor(gender = "Boy"){
//       this.gender = gender
//    }
//    greet(){
//       console.log(`Hi I am a ${this.gender}`)
//    }
// }
// class Student extends Human{
//     constructor(name = "Guest" , age = 18, gender){
//       super(gender)
//       this.studentName = name
//       this.studentAge = age
//     }

//    getInfo(place = "MDU"){
//      console.log(`Hi I am ${this.studentName} and I am ${this.studentAge} years old
//       I am from ${place}`)
//    }
// }



// const student1 = new Student("Nazith", 20, "Boy")
// const student2 = new Student("Darani", 21, "Girl")
// const student3 = new Student()

// console.log(student2.gender)
// student1.greet()

// console.log(student1.studentName)

// console.log(student3.studentName)


// student1.getInfo("Madurai")

// student2.getInfo()


// class MyArray{
//    constructor(){
//       this.length= 0
//       this.data = []
//    }

//    myPush(item){
//       this.data[this.length] = item
//       this.length++
//       return this.length
//    }
//    myPop(){
//       let lastItem = this.data[this.length-1] 
//       delete this.data[this.length-1]
//       this.length--
//       return lastItem
//    }
// }


// const myArr = new MyArray()
// const antherArr = new MyArray()

// console.log(myArr.myPush(10))
// console.log(myArr.myPush(20))
// console.log(myArr.myPush(30))

// console.log(myArr.myPop())
// console.log(myArr.myPop())

// console.log(myArr.myPop())


// console.log(myArr.length)
// // console.log(antherArr.length)


// console.log(myArr.data)


// const p = new Promise(res, rej)

// console.log(p)


const getFullDetails = function (hometown){
   console.log(`I am ${this.firstName} ${this.lastName} from ${hometown}`)
}
let obj = {
   firstName: "Udhaya",
   lastName: "Surya",
}

// getFullDetails.call(obj,"Madurai")

let obj1 = {
   firstName: "Jeya",
   lastName: "Prekash",
}

// Obj DEsctructuring
// let userFirstName = obj.firstName
// let userLastName = obj.lastName

// let {firstName , lastName } = obj

// console.log(firstName)
// console.log(lastName)

// Array Destrcuturing

// const arr = ["Ganesha", "Sabari", "Prem"]

// let [ , b ,c] = arr
// console.log(b)

// const arr = ["Ganesha", "Sabari", "Prem"]
// const arr1 = ["Surya", "Sanjith", "Manoj"]

// const combinedArr = [...arr,...arr1]

// console.log(combinedArr)
// Function Burrowing

// getFullDetails.call(obj1, "Chennai")

// const homeTown = ["Delhi"]

// getFullDetails.apply(obj, homeTown)

// const fullNameFunc = getFullDetails.bind(obj1)

// fullNameFunc("Mumbai")


// function add(x,y,z , ...ganesha){
//    console.log(x,y,z)
//    console.log(ganesha)
// }

// add(1,2,3,4,5,6,7,8,9)