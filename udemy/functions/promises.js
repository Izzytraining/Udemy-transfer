//callback
const getDataCallBack = (num, callback) => {
  setTimeout(() => {
    if (typeof num === "number") {
      callback(undefined, num * 2);
    } else {
      callback("Number must be provided");
    }
  }, 2000);
};

getDataCallBack(2, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    getDataCallBack(data, (err, data) => {
      if (err) {
        console.log("error");
      } else {
        console.log(data);
      }
    });
  }
});

//Promise

const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("Number must be provided");
      //   resolve(`This is the promise data: ${data}`);
      //   reject("Promise error");
      //   reject("Promise error");
    }, 2000);
  });

getDataPromise(2).then(
  (data) => {
    getDataPromise(data).then(
      (data) => {
        console.log(`Promise data: ${data}`);
      },
      (err) => {
        console.log(err);
      }
    );
  },
  (err) => {
    console.log(err);
  }
);

//////////////////
//Promise chaining

getDataPromise(10)
  .then((data) => {
    return getDataPromise(data);
  })
  .then((data) => {
    return getDataPromise(data);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
