# todayInHistory-wechat-applet

微信小程序练手项目 - 历史上的今天。历史是生活的一面镜子，历史上的每一天，都是喜忧参半。历史是不能忘记的，历史上的今天，看看都发生了什么重大事件。

数据接口来源：[易源数据-历史上的今天](https://www.showapi.com/api/view/119)

## 项目预览

![Preview](GIF.gif)

## 数据接口说明

* 请求
```js

wx.request({
  url: "http://route.showapi.com/119-42",
  data: {
    showapi_appid: "68354",
    showapi_sign: "255dd762226b4cb689d9b5c244374e81",
    date: "0629"
  },
  success: function (res) {
    // res.data 为返回的数据
  }
});

```
* 返回的数据
```json

{
  "showapi_res_code": 0,
  "showapi_res_error": "",
  "showapi_res_body": {
    "ret_code": 0,
    "list": [
      {
        "title": "世界卫生组织宣布已经成功控制SARS",
        "month": 7,
        "img": "http://img.showapi.com/201107/5/099368663.jpg",
        "year": "2003",
        "day": 5
      } 
    ]
  }
}

```

## 项目涉及的技术

- [x] wxml、wxss文件的使用
- [x] view、image等组件的使用
- [x] 微信API，request、getStorage、setStorage等的使用
- [x] javascript

## 获取项目

* 将本项目git到本地目录

```

$ git clone https://github.com/Cxy1287338537/todayInHistory-wechat-applet.git

```

* 将项目拖拽至微信开发者工具直接打开即可

## 联系方式

[作者](#) 橙续缘

- [x] 微信： Jack1287338537
- [x] 邮箱： 13560784981@163.com
