//Promise

const getDataPromise = new Promise (data) => {
    return new Promise((resolve, reject) => {
setTimeout(() => {
  reject("Promise error");
  reject("Promise error");
}, 2000);
})
}

const myPromise = getDataPromise(123)
myPromise.then((data) =>{
    console.log(data)
}, (err) => {
    console.log(err)
})

myPromise.then((data)=> {
    console.log(data)
}, (err) => {
console.log(err)
})

