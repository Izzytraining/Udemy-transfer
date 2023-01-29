//throwing an error if someone has used the function wrong

const getTip = (amount) => {
  if (typeof amount === "number") {
    return amount * 0.25;
  } else {
    throw Error("Argument must be a number");
  }
};

try {
  const result = getTip(10);
  console.log(result);
} catch (e) {
  console.log("catch block is running");
}
