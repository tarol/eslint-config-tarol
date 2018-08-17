module.exports = {
  "import/no-self-import": 2, // 不import自身
  "import/no-useless-path-segments": 2, // 去除path中的冗余项，如src/index.js中import '../src/style.less'
  "import/no-deprecated": 1, // 导入了注释中@deprecated声明的函数
  "import/no-extraneous-dependencies": 2, // import了非dependencies的依赖包
  "import/no-mutable-exports": 2, // 导出可以更改的值，必须导出const
  "import/unambiguous": 1, // 使用script语法，但sourceType为module
  "import/first": 2, // import必须在文件开头，不禁止动态import
  "import/exports-last": 2, // exports必须在文件末尾
  "import/extensions": 2, // 导入时是否需要添加文件的后缀，默认never
  "import/order": [
    2,
    {
      groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
      "newlines-between": "always-and-inside-groups"
    }
  ],
  "import/newline-after-import": 2,
  "import/prefer-default-export": 2, // 当模块只导出一个时，使用default
  "import/no-named-default": 2 // 禁止使用import { default as a } from './a'
};
