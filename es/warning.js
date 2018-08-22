const { es } = require("../utils/others");
const fixable = require("../rules/es/fixable");
const base = require("../rules/es/base");
const strict = require("../rules/es/strict");
const { switchLevel } = require("../utils/obj");

module.exports = Object.assign({}, es, {
  rules: Object.assign({}, fixable, base, switchLevel(strict))
});
