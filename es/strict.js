const { es } = require("../utils/others");
const fixable = require("../rules/es/fixable");
const base = require("../rules/es/base");
const strict = require("../rules/es/strict");

module.exports = Object.assign({}, es, {
  rules: Object.assign({}, fixable, base, strict)
});
