const createTimeoutPromise = require('./createTimeoutPromise')
const MyPromise = require('./customPromise')
createTimeoutPromise("hello world", 5).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})

createTimeoutPromise("Hi Worldy", 9).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})

createTimeoutPromise("hello world", 12).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})

new MyPromise((res, rej) => {
    res("hola!!")
}).then((data) => {
    console.log(data)
})

console.log("more more")

console.log("231")
