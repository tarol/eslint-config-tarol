const whitespace = {
  "react/jsx-closing-bracket-location": [2, "line-aligned"], // />的位置，方便添加prop，tag-aligned在app.add(<Comp test1 test2="123" />)时存在bug
  "react/jsx-closing-tag-location": 2, // </div>的位置
  "react/jsx-curly-brace-presence": 2, // 必须要的{}，比如data={"data"}，默认{ props: "never", children: "never" }
  "react/jsx-curly-spacing": 2, // {"data"}前后的空格，默认never
  "react/jsx-equals-spacing": 2, // data={"data"}中=前后的空格，默认never
  "react/jsx-first-prop-new-line": 2, // 第一个prop之前的换行，默认multiline-multiprop
  // "react/jsx-indent": [2, 2],  // fix时会乱，和eslint5的indent冲突
  // "react/jsx-indent-props": [2, 2],
  "react/jsx-max-props-per-line": [2, { maximum: 1, when: "multiline" }], // 可以写成单行，也可以写成多行
  // "react/jsx-one-expression-per-line": [2, { allow: "literal" }], // jsx表达式换行，不够方便，比如<div>{data}:</div>会被分割成4行
  "react/jsx-props-no-multi-spaces": 2,
  "react/jsx-tag-spacing": [
    2,
    {
      closingSlash: "never",
      beforeSelfClosing: "always",
      afterOpening: "never",
      beforeClosing: "never"
    }
  ]
};

const syntax = {
  "react/jsx-boolean-value": [2, "never"],
  "react/self-closing-comp": 2 // 没有children的元素必须是自闭合标签
};

const sort = {
  "react/jsx-sort-props": [
    2,
    {
      shorthandFirst: true,
      callbacksLast: true,
      reservedFirst: ["children", "dangerouslySetInnerHTML", "key", "ref"]
    }
  ],
  "react/sort-comp": 2,
  "react/sort-prop-types": [
    2,
    { callbacksLast: true, requiredFirst: true, sortShapeProp: true }
  ]
};

const override = {
  "react/display-name": 1,
  "react/jsx-key": 1,
  "react/jsx-no-target-blank": 0,
  "react/prop-types": 0,
  "react/no-find-dom-node": 0
};

const base = {
  "react/jsx-no-bind": [
    1,
    {
      ignoreRefs: true,
      allowArrowFunctions: true
    }
  ],
  "react/no-children-prop": 2,
  "react/prefer-stateless-function": 1,
  "react/no-did-mount-set-state": 1,
  "react/no-did-update-set-state": 2,
  "react/no-will-update-set-state": 2
};

const strict = {
  "react/default-props-match-prop-types": 2,
  "react/jsx-pascal-case": 2,
  "react/no-access-state-in-setstate": 2,
  "react/no-multi-comp": 2,
  "react/no-redundant-should-component-update": 2,
  "react/no-typos": 2,
  "react/no-unused-prop-types": 2,
  // "react/no-unused-state": 2,  // 有bug， https://github.com/yannickcr/eslint-plugin-react/issues/1964
  "react/prefer-es6-class": 2,
  "react/style-prop-object": 2,
  "react/void-dom-elements-no-children": 2
};

module.exports = {
  loose: Object.assign({}, whitespace, syntax, override, base),
  strict: Object.assign({}, whitespace, syntax, sort, override, base, strict)
};
