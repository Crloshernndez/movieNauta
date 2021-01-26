const store = require("./store");

function upcoming() {
  return new Promise((resolve, reject) => {
    resolve(store.upcoming());
  });
}
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
function documentaries() {
  return new Promise((resolve, reject) => {
    resolve(store.documentaries());
  });
}

module.exports = {
  upcoming,
  popular,
  toprated,
  documentaries,
};
