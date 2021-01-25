const store = require("./store");

function upcoming() {
  return new Promise((resolve, reject) => {
    resolve(store.upcoming());
  });
}

module.exports = {
  upcoming,
};
