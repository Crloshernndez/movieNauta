const store = require("./store");

function getUpcoming() {
  return new Promise((resolve, reject) => {
    resolve(store.getUpcoming());
  });
}
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
function getDocumentaries() {
  return new Promise((resolve, reject) => {
    resolve(store.getDocumentaries());
  });
}

module.exports = {
  getUpcoming,
  getPopular,
  getTop_rated,
  getDocumentaries,
};
