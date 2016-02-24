# atpl-loader

[![NPM version](https://img.shields.io/npm/v/atpl-loader.svg?style=flat)](https://npmjs.org/package/atpl-loader)
[![Build Status](https://img.shields.io/travis/sorrycc/atpl-loader.svg?style=flat)](https://travis-ci.org/sorrycc/atpl-loader)
[![Coverage Status](https://img.shields.io/coveralls/sorrycc/atpl-loader.svg?style=flat)](https://coveralls.io/r/sorrycc/atpl-loader)
[![NPM downloads](http://img.shields.io/npm/dm/atpl-loader.svg?style=flat)](https://npmjs.org/package/atpl-loader)

webpack loader for atpl.

---

## Install

```bash
$ npm install atpl-loader -g
```

## 使用

### 配置

模板文件后缀为`atpl`，如`index.atpl`

### 语法

+ 变量输出以及逻辑语句

````js

//左分割符为<%， 右分隔符为%>，暂不支持自定义
I am <%=name%>
//模板内支持JS逻辑,**不要在逻辑中声明out变量，内部使用**
<% if(name){ %>
  I am <%=name%>
<% }else{ %>
  Hello world !
<% } %>

````

+ 模板引用

**目前版本尚未解决循环引用的问题，如a引用b，b又引用了a，实际使用中需注意**

````js

//引用其他的模板文件
I am <%include('./test/a.tpl')%>,and i like playing <%=man.game%>.

````

### 引用并渲染

````js

// 引入模板
var tpl = require('./index.atpl');
// 数据源
var data = {
  ...
};

document.getElementById('#wrapper').innerHTML = tpl(data);

````


## LISENCE

Copyright (c) 2015 chencheng. Licensed under the MIT license.
