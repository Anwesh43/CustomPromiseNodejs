const MyPromise = require('./customPromise')
const createTimeoutPromise = (data, n) => new MyPromise((resolve, reject) => {
    if (n < 10) {
        setTimeout(() => {
            resolve(data)
        }, n * 1000)
    }
    else {
        reject("time must be less than 10 seconds")
    }
})
module.exports = createTimeoutPromise
