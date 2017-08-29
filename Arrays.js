var arr = [1, 2, 3, 4, 5]

console.log("Our array is currently: " + arr)
console.log("The length of our array is: " + arr.length)
console.log('__')
console.log("If we use the push function we can add to the end of the array")
console.log('__')

arr.push(6, 7) //pushes 6 & 7 to the end of the array

console.log("The array is now: " + arr)
console.log('__')
console.log("If we use the pop function we can remove the end item")
console.log('__')

arr.pop() //pops off the end item from the array

console.log("Which leaves the array like this: " + arr)
console.log('__')
console.log('To return a specific item in the array we use an index')
console.log("Like this: console.log(arr[3]) which would return the 4th item")
console.log('__')

console.log("The 4th item in the array is: " + arr[4])
console.log('__')

console.log("We can convert the arr to a string using arr.toString()")
console.log('__')

console.log(arr.toString()) //converts to string with commas no spaces

console.log('__')
console.log("Or we can use arr.join(', ') which allows us to use a separator")
console.log('__')

console.log(arr.join(', ')) //behaves in same way as toString with separator