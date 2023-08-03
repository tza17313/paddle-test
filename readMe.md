# paddle.js ocr

## 开发时，需要复制的文件

dev文件，index.html 略作调整即可


## 源文件打包

source 文件夹

- index.js 用来导出 ocr给页面使用
- ocr.js 为 从 https://paddlejs.baidu.com/ocr 源码复制出来的
  - F12 => 源代码 =>  webpack:// => node_modules => @paddlejs-models => ocr/lib => index.js

###为什么要复制demo网站的源码
因为 npm安装的包，无法使用demo网站的 models / ocr_v2_det_new、ocr_v2_rec_320
会js保存；

使用默认的 model地址，只要一添加图片，就会爆显存，浏览器黑屏；

models文件夹下的模型，也是从demo网站网络请求中复制出来的，这样可以实现识别效果与官网demo一致；

## webpack打包静态文件给网页使用

source/index.js 用来引入ocr；然后设置全局变量给后面实际开发时的html调用



