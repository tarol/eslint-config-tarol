const { _import } = require('../utils/others');
const rules = require('../rules/import');

module.exports = Object.assign({}, _import, {
  rules
});
