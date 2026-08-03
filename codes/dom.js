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

// arr.forEach()
// arr.map()
// arr.filter()
// arr.reduce()

