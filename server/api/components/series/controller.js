const store = require("./store");

function popular() {
  return new Promise((resolve, reject) => {
    resolve(store.popular());
  });
}
function toprated() {
  return new Promise((resolve, reject) => {
    resolve(store.toprated());
  });
}
function fetchNetflixOriginals() {
  return new Promise((resolve, reject) => {
    resolve(store.fetchNetflixOriginals());
  });
}

module.exports = {
  upcoming,
  popular,
  toprated,
  fetchNetflixOriginals,
};
