
// ES6

// let , const , arrow function , spread , rest , destructuring


let obj = {
   username : "surya",
   userage : 26,
   isStudent : false
}

// let username = obj.username

// let { username } = obj
// console.log(username)

// const [username1, username2] = arr


// shallow copy 
let arr = ["Nazith", "Sabari", ["surya", "vishnu"],"Sanjith"]

// const newArr = [...arr]

// // console.log(newArr)
// newArr[2].push("Manoj")
// console.log(newArr , "<<<<NewArrr")
// console.log(arr , "<<<<arrr")

// Deep copy

const newArr2 = JSON.parse(JSON.stringify(arr))

newArr2[2].push("Manoj")
console.log(newArr2 , "<<<<NewArrr2")
console.log(arr , "<<<<arrr")
