function clone(obj) {
  const ret = {};
  for (let key in obj) {
    const value = obj[key];
    if (typeof value === "object") {
      if (Array.isArray(value)) {
        ret[key] = value.slice(0);
      } else {
        ret[key] = clone(value);
      }
    } else {
      ret[key] = value;
    }
  }
  return ret;
};

function switchLevel(obj, from = 2, to = 1) {
  const ret = clone(obj);
  for (let rule in ret) {
    const value = ret[rule];
    if (value === from) {
      ret[rule] = to;
    } else if (Array.isArray(value)) {
      if (value[0] === from) {
        value[0] = to;
      }
    }
  }
  return ret;
}

exports.clone = clone;
exports.switchLevel = switchLevel;