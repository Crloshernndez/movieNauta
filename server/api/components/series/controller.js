const store = require("./store");

function getPopular() {
  return new Promise((resolve, reject) => {
    resolve(store.getPopular());
  });
}
function getTop_rated() {
  return new Promise((resolve, reject) => {
    resolve(store.getTop_rated());
  });
}
function getNetflixOriginals() {
  return new Promise((resolve, reject) => {
    resolve(store.getNetflixOriginals());
  });
}

module.exports = {
  getPopular,
  getTop_rated,
  getNetflixOriginals,
};
