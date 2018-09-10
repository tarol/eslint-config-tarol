/*
 * 可以使用eslint --fix修正的规范
 */

// 空格和换行规则
const whiteSpacing = {
  "array-bracket-spacing": 2, // 数组字面量的中括号到内容的空格，默认never
  "arrow-spacing": 2, // 箭头函数箭头前后的空格，默认{ "before": true, "after": true }
  "block-spacing": 2, // 大括号的空格，默认always
  "brace-style": 2, // 大括号的换行，默认1tbs，allowSingleLine会导致行太长
  "comma-spacing": 2, // 逗号前后的空格，默认{ "before": false, "after": true }
  "comma-style": 2, // 逗号的换行，默认last
  "computed-property-spacing": 2, // a[b]中中括号的空格，默认never
  "dot-location": [2, "property"], // MemberExpression换行时，dot 跟随的 node，默认'object'
  "eol-last": 2, // 文件末尾空行，默认always
  "func-call-spacing": 2, // 函数调用时函数名和参数括号之间的空格，默认never
  "generator-star-spacing": 2, // generator声明时*前后的空格，默认{ "before": true, "after": false }
  // "implicit-arrow-linebreak": 2, // 箭头函数箭头后的换行，默认beside，开启后容易超出单行最大字符数
  indent: [
    2,
    2,
    {
      SwitchCase: 1,
      VariableDeclarator: { var: 2, let: 2, const: 3 },
      MemberExpression: 1
    }
  ], // 缩进，第二个参数是空格数，即一个缩进几个空格，第三个参数里的数字是单位数，即几个缩进
  "key-spacing": [
    2,
    {
      beforeColon: true,
      align: "colon"
    }
  ], // object字面量中 key、冒号、value之间的空格
  "keyword-spacing": 2, // 关键字前后的空格，默认{ "before": true, "after": true }
  "lines-around-directive": [2, { before: "never", after: "always" }], // 指令的前后换行，默认always
  "lines-between-class-members": 2, // 类成员间的换行，默认always
  "newline-after-var": 2, // 变量声明后的换行
  "newline-per-chained-call": 2, // 链式调用的换行，默认{ "ignoreChainWithDepth": 2 }，链条长度不大于此时不换行
  "no-multi-spaces": 2, // 去除多余的空格
  "no-trailing-spaces": 2, // 禁止行末的空格
  "no-whitespace-before-property": 2, // 禁止属性前的空格
  "object-curly-spacing": [2, "always"], // object字面量大括号的空格，默认never
  "object-shorthand": [2, "always"], // object字面量的属性缩写
  "one-var-declaration-per-line": 2, // 声明语句的换行规则，默认是initializations，在赋值表达式后换行。如var a = 1, b; 要换行。而var a, b = 1; 不换行
  "padded-blocks": [
    2,
    {
      blocks: "never",
      classes: "always",
      switches: "never"
    }
  ], // 块作用域开始和结束的空行，默认always
  "rest-spread-spacing": 2, // ...args中...和args间的空格，默认never
  "semi-spacing": 2, // 分号前后的空格，默认{"before": false, "after": true}
  "semi-style": 2, // 分号的位置，即分号前换行还是分号后，默认last
  "space-before-blocks": 2, // 块大括号前的空格，默认always
  "space-before-function-paren": [
    2,
    {
      anonymous: "never",
      named: "never",
      asyncArrow: "always"
    }
  ], // 函数参数括号前的空格，默认always
  "space-in-parens": 2, // 小括号的内部空格，默认never
  "space-infix-ops": 2, // 多元运算符的空格
  "space-unary-ops": 2, // 单元运算符的空格
  "spaced-comment": 2, // 注释行前面的空格，默认always
  "switch-colon-spacing": 2, // switch语句中的冒号前后的空格，默认{"after": true, "before": false}
  "template-curly-spacing": 2 // 字符串模板大括号内的空格，默认never
};

// 标点符号
const sign = {
  "comma-dangle": [2, "always-multiline"], // 末尾的逗号，默认default
  curly: 2, // 大括号，默认all
  "jsx-quotes": 2, // jsx中属性的引号，默认prefer-double
  "quote-props": [2, "as-needed"], // object 字面量中 property key的引号，默认always
  quotes: [2, "single"], // 引号，默认{"avoidEscape": true, "allowTemplateLiterals": true}
  semi: 2 // 分号
};

const syntax = {
  "dot-notation": 2, // 禁止访问属性时不必要的computed property，{ allowKeywords: true, allowPattern: void 0 }
  eqeqeq: [2, "smart"], // 强制使用===，默认always
  "no-extra-bind": 2, // 去除无意义的bind，比如函数体中没有访问this关键字，函数是箭头函数
  "no-extra-parens": 2, // 去除多余的括号，默认all
  "no-floating-decimal": 2, // 使用更严格的模式规范浮点数字面量，.5 => 0.5
  // "no-lonely-if": 2, // 去除多余的if，if(a) {} else { if (b) {} } => if(a) {} else if(b) {}，影响阅读性
  "no-unneeded-ternary": [2, { defaultAssignment: false }], // 禁止不必要的三元表达式，如 x ? x : 1 => x || 1
  "no-useless-computed-key": 2, // 禁止object 字面量中不必要的computed property key，如 a['b' + 'c'] => a.bc
  "no-useless-rename": 2, // 去除不必要的rename，如import { foo as foo } from "bar"
  "no-useless-return": 2, // 去除不必要的return，如function foo() { return; }
  "operator-assignment": 2, // 是否允许赋值表达式的多操作符，如a += 1，默认always
  "prefer-numeric-literals": 2, // 使用数字字面量而不是parseInt，parseInt('11', 2) => 0b11
  strict: 2, // 'use strict'的使用问题
  yoda: 2 // 使用尤达表达式，即常亮 === 变量，默认never
};

module.exports = Object.assign({}, whiteSpacing, sign, syntax);
