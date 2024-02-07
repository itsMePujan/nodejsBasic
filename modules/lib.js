// convert module m to km

const convertM = (meter) => {
  return meter / 1000;
};

module.exports = { convertM };

// properCase

const properCase = (string) => {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1, word.length))
    .join(" ");
};

module.exports = { properCase };
