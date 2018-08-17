const { react } = require("../utils/others");
const { loose } = require("../rules/react");

module.exports = Object.assign({}, react, {
  rules: Object.assign({}, loose)
});
