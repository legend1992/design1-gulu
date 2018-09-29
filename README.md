# VUE UI组件库

[![Build Status](https://travis-ci.org/legend1992/design1-gulu.svg?branch=master)](https://travis-ci.org/legend1992/design1-gulu)

[![NPM](https://nodei.co/npm/design1-gulu.png)](https://npmjs.org/package/design1-gulu)

## 介绍

个人学习vue项目顺便造下的轮子

## 开始使用

1. 添加css样式

请在css中设置box-sizing(IE8及以上版本浏览器支持)
```
    *, *::before, *::after{ box-sizing: border-box; }
```
还需设置默认css变量
```
    :root {
      --button-height: 32px;
      --font-size: 14px;
      --button-bg: white;
      --button-active-bg: #eee;
      --border-radius: 4px;
      --color: #333;
      --border-color: #999;
      --border-color-hover: #666;
    }
```

2. 安装gulu
```
    npm install design1-gulu --save
```

3. 引入gulu
```
    import { Button, Icon, ButtonGroup} from 'design1-gulu'
    import 'design1-gulu/dist/index.css'
    export default {
      name: 'app',
      components: {
        'g-button': Button
      }
    }
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码