/*
 * 基本的指导性规范
 */
module.exports = {
  "max-len": [
    2,
    {
      code: 120,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }
  ], // 单行最大字符长度，默认80
  "max-lines": [
    2,
    {
      max: 500
    }
  ], // 单文件最大行数，默认{ max: 300 }
  "no-alert": 2,
  "no-array-constructor": 2, // 使用字面量而不是构造函数新建数组
  "no-async-promise-executor": 2, // Promise传入的 executor 不能是async函数
  "no-caller": 2, // 禁止使用arguments.caller/callee
  "no-console": 0,
  "no-debugger": 2,
  "no-labels": 2,
  "no-lone-blocks": 2, // 禁止无意义的block，比如{function test() {}}，而{const a = 1;}是有意义的block
  "no-multi-str": 2,  // 禁止使用\分隔多行str字面量
  "no-new": 2, // 禁止作为 ExpressionStatement 的newExpression
  "no-new-object": 2, // 使用字面量而不是构造函数新建对象
  "no-new-require": 2, // require语句不能直接被 new，如new require('event');
  "no-new-wrappers": 2, // 不用构造器方式调用包装器，如new String(123)
  "no-path-concat": 2, // 不使用__dirname + 'file.ext' 的方式生成路径，使用path.join/resolve等，防止路径不合法
  "no-proto": 2, // 不使用__proto__访问原型，而使用Object.getPrototype，因为__proto__非标准规范
  "no-self-compare": 2, // 禁止相同表达式之间的比较，比如+a === +a，防误写
  // "no-unused-expressions": [2, { allowShortCircuit: true, allowTernary: true }], // 禁止无意义的表达式语句，默认{ allowShortCircuit: false, allowTernary: false }，暂不支持do expression
  "no-unused-vars": [2, { ignoreRestSiblings: true }], // 禁止未被使用的变量声明
  "no-useless-constructor": 2, // 禁止不必要的constructor，如class A {constructor() {}}
  "no-warning-comments": 1, // 禁止存在某几种注释，默认{ "terms": ["todo", "fixme", "xxx"], "location": "start" }，提示开发人员注意
  "prefer-rest-params": 2, // 使用...args，而不是arguments，简化写法
  "prefer-spread": 2, // 使用foo(...args)，而不是foo.apply(null, args)，简化写法
  "prefer-template": 2, // 使用string template 而不是string +，简化写法
  "require-await": 2 // async 函数必须存在await关键字，防误写
};
