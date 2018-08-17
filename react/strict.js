const { react } = require("../utils/others");
const { strict } = require("../rules/react");

module.exports = Object.assign({}, react, {
  rules: Object.assign({}, strict)
});
