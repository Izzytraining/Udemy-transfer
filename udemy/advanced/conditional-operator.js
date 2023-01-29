const myAge = 17;
// const message = myAge >= 18 ? "You can vote" : "You cannot vote";
// console.log(message);

const myPage = 27;
const showPage = () => {
  return "showing the page";
};

const showErrorPage = () => {
  return "Showing error page";
};

const message = myAge <= 21 ? showPage() : showErrorPage();
console.log(message);

const team = ["Jack", "Robert"];
console.log(
  team.length <= 4
    ? `Team size: ${team.length}`
    : `Too many people on your team`
);
