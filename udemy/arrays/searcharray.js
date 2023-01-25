const bucketList = [
  {
    location: "Iceland",
    completed: true,
  },
  {
    location: "Peru",
    completed: false,
  },
  {
    location: "Spain",
    completed: false,
  },
  {
    location: "Belgium",
    completed: true,
  },
];

// const deletebucketList = function (bucketList, bucketListLocation) {
//   const index = bucketList.findIndex(function (bucketList) {
//     return (
//       bucketList.location.toLowerCase() === bucketListLocation.toLowerCase()
//     );
//   });
//   if (index > -1) {
//     bucketList.splice(index, 1);
//   }
// };

// deletebucketList(bucketList, "Peru");
// console.log(bucketList);

const getLocationsToGo = function (bucketList, query) {
  return bucketList.filter(function (bucketList) {
    return bucketList.completed === false;
  });
};

console.log(getLocationsToGo(bucketList));

/////sortingArrays
//takes a compare function

//console.log("a" < "b");

const sortBucketList = function (bucketList) {
  bucketList.sort(function (a, b) {
    if (a.completed === false && b.completed === true) {
      return -1;
    } else if (b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortBucketList(bucketList);

console.log(bucketList);
