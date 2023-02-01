const getPuzzle = (wordCount) => {
  return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch puzzle");
      }
    })
    .then((data) => {
      return data.puzzle;
    });
};
//////////////////////////

const getCountry = (countryCode) => {
  return fetch(`https://restcountries.com/v2/all?countryCode=${countryCode}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch country data");
      }
    })
    .then((data) => data.find((country) => country.alpha2Code === countryCode));
  //   return country;
  // });
};
// const countryRequest = new XMLHttpRequest();

// countryRequest.addEventListener("readystatechange", (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText);
//     const country = data.find(
//       (country) => country.alpha2Code === countryCode
//     );
//     resolve(country);
//   } else if (e.target.readyStatet === 4) {
//     reject("Unable to fetch  data");
//   }
// });

// countryRequest.open("GET", "https://restcountries.com/v2/all");
// countryRequest.send();