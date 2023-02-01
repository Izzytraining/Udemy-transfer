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
};


/////////////////////////
const getLocation = () => {
  return fetch(`https://ipinfo.io/json?token=0ab06b9229e93b`).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error("Unable to fetch url")
    }
  })
}