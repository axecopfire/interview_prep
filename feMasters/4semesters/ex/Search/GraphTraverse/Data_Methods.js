const list = require('./data');

let getUser = (id) => id <= 1000 && id > 0 ? list[id-1] : null;

let getMe = () => getUser(11);

module.exports = {
  getUser,
  getMe
}