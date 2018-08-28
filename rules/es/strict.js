/*
 * 建议性规范
 */
module.exports = {
  camelcase: 2, // 驼峰命名
  "consistent-this": 2, // this 只能赋给 that，默认that
  "func-name-matching": 1, // var a = function b() {}，函数名和变量名必须保持一致
  "function-paren-newline": [2, { minItems: 4 }], // 函数创建或调用时(后的换行，默认multiline
  "handle-callback-err": 2, // callback中第一个参数为 err 时是否对err进行了处理，默认err
  "id-length": [
    2,
    {
      min: 2, // fd(formData)，fr(fileReader)等
      max: 30,
      properties: "never",
      exceptions: ["e", "i", "j", "k", "m", "n", "v", "x", "y", "z"] // e用于 error，i、j、k、m、n、x、y、z用于遍历，v用于 value
    }
  ], // 变量名长度限制
  "max-classes-per-file": 1, // 单个文件中最多声明几个类，默认1
  "max-depth": 1, // 防止{}地狱，块的最大层级，默认{ "max": 4 }
  "max-lines-per-function": 1, // 单函数最大行数，默认{ max: 50 }
  "max-nested-callbacks": [1, { max: 3 }], // 防止回调地狱，回调的最大层级，默认{ max: 10 }
  "max-params": 1, // 函数允许的最大参数数，默认{ max: 3 }
  "max-statements-per-line": 1, // 单行最大表达式数，默认{ "max": 1 }
  "no-await-in-loop": 1, // 循环语句中不能存在await
  "no-duplicate-imports": 2, // 禁止多次引入同一个包
  "no-func-assign": 1, // 函数变量不能被再次赋值
  "no-implied-eval": 1, // setTimeout/setInterval不能传入执行语句字符串
  "no-invalid-this": 2, // 禁止非法的this关键字，比如全局环境下this.a = 0; var a = () => this
  "no-restricted-imports": [2, { patterns: ["lodash/*", "!lodash/fp"] }], // 禁止import指定包
  "no-restricted-modules": [2, { patterns: ["lodash/*", "!lodash/fp"] }], // 禁止require指定包
  "no-restricted-syntax": [2, "SequenceExpression"], // 禁止指定的ast node
  "no-return-assign": 2, // return 语句禁止使用赋值表达式
  "no-template-curly-in-string": 1, // 禁止在普通的字符串字面量中存在${a}
  "no-throw-literal": 1, // 禁止抛出字面量，而应该是Error实例
  "no-undefined": 2, // 禁止使用undefined，而是使用void 0
  "no-unmodified-loop-condition": 1, // 在循环体中必须对条件中的变量进行修改
  "no-use-before-define": [2, { functions: false }], // 未声明不可使用，默认{ "functions": true, "classes": true, variables: true }
  "no-useless-call": 2, // 禁止无意义的 call 和apply，如foo.call(null); obj.foo.call(obj)
  "no-var": 1, // 禁止使用var声明变量
  'one-var': [2, { var: 'consecutive', let: 'consecutive', const: 'consecutive', separateRequires: true }], // 一个作用域内的声明必须是一个语句
  "prefer-const": 1, // 变量声明优先使用const
  "symbol-description": 2, // Symbol()必须传参
  "valid-jsdoc": 2, // 注释的正确性
  "vars-on-top": 2, // 变量声明必须要在作用于的顶端
  "wrap-iife": 2 // 立即执行函数的包裹方式，默认outside，即大括号括在CallExpression的外面，inside时大括号括在FunctionExpression外面
};
