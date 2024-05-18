// let arr = []
// console.log(typeof arr)

let myarr = [1,2,3,4,5,6,7,8]
console.log(myarr.length) // 8 
myarr.push(9)
console.log(myarr); // [1, 2, 3, 4, 5,6, 7, 8, 9]
myarr.pop()
console.log(myarr); // [1, 2, 3, 4, 5,6, 7, 8]

myarr.unshift(0)
console.log(myarr); // [0, 1, 2, 3, 4, 5,6, 7, 8]

myarr.shift()
console.log(myarr);// [1, 2, 3, 4, 5,6, 7, 8]

// slice and splice  

let testingArr = [1,2,3,4,5,6]
testingArr.slice(1,4)   // it will not change orignal array 
console.log(testingArr);  //  [1,2,3,4,5,6] 


let spliceArr = [1,2,3,4,5,6]
spliceArr.splice(1,3) // it will remove these index value to main array 
console.log(spliceArr);  // [ 1, 5, 6 ]