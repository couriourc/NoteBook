# Bug 乱存

## Cannot use import statement outside a module

问题： 使用 vs code 调试js 代码，出现“SyntaxError: Cannot use import statement outside a module”

// cal.js

```js
let count = 0;
const add = function (a, b) {
  count += 1;
  return a + b;
};
export { count, add };

//index.js
import { count, add } from "./cal.js" ;
console.log(count); // 0（对 calculator.js 中 count 值的映射）
add(2, 3);
console.log(count); // 1（实时反映calculator.js 中 count值的变化）
```

解决过程：

```shell
npm init -y
```

在 package.json 中添加字段 type

```json
package.json
{
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

终端运行 node index.js 或者 vs code F5运行 都可以了。

## wxs 数据更新但是视图不更新

wxs 根据官方说法本就不能导致视图的Dom 减少，但是可以考虑对Dom 样式调整更新，也就是说直接对样式修改还是可以的，总结来说，wxs 属于是属性增量更新，不能决定文档的属性，因此在wx:if = “{{wxs.isShow}}”的时候可能就是变成了节点为 \<view wx:if=“false”/>,这个是没有经过逻辑层转译的；
