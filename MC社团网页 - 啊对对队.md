# 技术简介
## 技术栈
### HTML
网站的主页、展示某些文档或资料的页面、一个注册和登录页面、新闻页面、加入团队页面和服务器状态页面或与服务器相关的内容展示页面的主题均有HTML组成。使用HTML5构建语义化的页面结构，提高网页的可读性和可维护性。使用ARIA（Accessible Rich Internet Applications）标签，提高网页的无障碍性，使更多用户能够访问。
### CSS
使用CSS进行样式设计，包括页面布局、字体、颜色等。采用预处理器Sass，简化和优化CSS代码的编写，支持嵌套、变量和混合宏等特性。实现动画效果和网站风格的设计，提高用户体验。使用CSS3动画和过渡效果，增强页面的动态表现。使用Flexbox和Grid布局，实现复杂布局的简洁实现。
### JavaScript
实现动态内容更新、表单验证、用户交互、动画效果和操作DOM。使用jQuery简化DOM操作和事件处理，增强代码的可读性和可维护性。采用ES6+语法，利用箭头函数、模板字符串、解构赋值、模块化等特性，提升代码的简洁性和可维护性。使用AJAX和Fetch API进行异步数据请求，实现无刷新数据更新。
## 开发工具和环境
### 开发环境
使用Visual Studio Code (VS Code) 作为主要的代码编辑器，配置了丰富的插件（如Prettier、ESLint、Sass等）提高开发效率。使用Edge浏览器的调试工具进行代码调试和测试，利用其强大的开发者工具（如Console、Network、Elements等）进行性能分析和问题排查。
### 版本控制
使用Git进行版本控制，管理代码的修改和版本记录，使用Git Flow工作流规范分支管理。通过GitHub托管代码库，进行协同开发和代码共享。利用GitHub Issues和Projects进行任务管理和进度跟踪。配置Git Hooks实现代码提交前的检查和格式化，提高代码质量。
# 设计思路
## 主题页面设计
分为三个部分， header body 和 footer
Header中引入icon，同时定义事件监听器管理窗口大小自适应
Body中第一部分为导航栏，第二部分设计成MC背景图加logo，第三部分为具体内容，第二第三部分中间由波浪动画效果隔开。
### 设计点一
响应式设计：使用CSS媒体查询使网站能够在不同设备（如桌面、平板和手机）上都有良好的显示效果。
### 设计点二
动态交互：通过JavaScript和jQuery，实现用户交互的动态效果，如导航栏的切换、内容的异步加载。
### 设计点三
模块化结构：将网站的不同功能模块化，提高代码的可维护性和可重用性。
### 设计点四
视觉效果：利用CSS和JavaScript，为网站添加一些动画效果和视觉交互，提高用户体验，如波浪分界线，加载页面过程中的翻页动画等
# 具体实现
## 主题页面部分
### css js文件链接及监听器定义
![image.png](https://cdn.nlark.com/yuque/0/2024/png/43230254/1717332247610-e791d168-417c-45ac-a6bd-854d98a9d0df.png#averageHue=%23242221&clientId=ucaa157f9-d9b8-4&from=paste&height=297&id=ue6c9c5a4&originHeight=519&originWidth=865&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=298696&status=done&style=none&taskId=uc0c8ba37-1a2f-4a0d-a6bd-e3d86cf8830&title=&width=494.2857142857143)
## Pjax实现
![image.png](https://cdn.nlark.com/yuque/0/2024/png/43230254/1717332255210-6fff220e-ef85-4032-92bd-d110e5b2232c.png#averageHue=%23222120&clientId=ucaa157f9-d9b8-4&from=paste&height=255&id=u9904682f&originHeight=447&originWidth=763&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=144956&status=done&style=none&taskId=ufd055309-9386-4ae8-88c4-a61ee53d482&title=&width=436)
在导航时只加载必要的页面部分，减少整体页面刷新，提升加载速度和用户体验。
同时在页面加载和切换时，显示加载动画，具体动画实现如下
![image.png](https://cdn.nlark.com/yuque/0/2024/png/43230254/1717332261150-1eb04b5f-af93-4cc2-9011-b9d994343e39.png#averageHue=%2321201f&clientId=ucaa157f9-d9b8-4&from=paste&height=249&id=u4d673407&originHeight=435&originWidth=865&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=143323&status=done&style=none&taskId=u77b45a6a-e333-4b91-9784-1272280770c&title=&width=494.2857142857143)
## 切换页面等待时书本翻页动画设计
### 定义书皮
![image.png](https://cdn.nlark.com/yuque/0/2024/png/43230254/1717332270268-4f9a050a-40d0-4870-bc53-42c7f233cfe1.png#averageHue=%2321201f&clientId=ucaa157f9-d9b8-4&from=paste&height=271&id=rsLQp&originHeight=475&originWidth=456&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=98307&status=done&style=none&taskId=ub23d3913-e148-436a-b2d1-486ad4df2bd&title=&width=260.57142857142856)
### 定义书页
![image.png](https://cdn.nlark.com/yuque/0/2024/png/43230254/1717332272905-6ca398e8-d98a-432a-921c-6a8ca2db7b3f.png#averageHue=%2321201f&clientId=ucaa157f9-d9b8-4&from=paste&height=217&id=uc9fec6f8&originHeight=380&originWidth=490&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=66884&status=done&style=none&taskId=ub3f73f5b-2740-4c9a-900c-038a022cb80&title=&width=280)
### 定义函数控制翻页
![image.png](https://cdn.nlark.com/yuque/0/2024/png/43230254/1717332277146-ff427cce-886d-47d9-a3f6-78320391ac2a.png#averageHue=%23222120&clientId=ucaa157f9-d9b8-4&from=paste&height=202&id=u92de49b5&originHeight=353&originWidth=677&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=106508&status=done&style=none&taskId=u2d1c4483-7147-4fe2-bcf7-89926631e3e&title=&width=386.85714285714283)
## 其他动画设计：波浪分界线
### 部分Css
![image.png](https://cdn.nlark.com/yuque/0/2024/png/43230254/1717332305612-83b575fd-6f79-4bfb-923d-032dd6844cc0.png#averageHue=%2321201f&clientId=ucaa157f9-d9b8-4&from=paste&height=171&id=u40cd2c7d&originHeight=300&originWidth=487&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=48609&status=done&style=none&taskId=u115a44b2-fd8d-40cb-9c0c-6293e6667c2&title=&width=278.2857142857143)
![debf6b580acf52f23fbd4798b20570a.png](https://cdn.nlark.com/yuque/0/2024/png/43230254/1717332760249-06f97c7e-7e77-44a5-8d59-56e45b96fb22.png#averageHue=%232b2925&clientId=ucaa157f9-d9b8-4&from=paste&height=419&id=uccaa5ab6&originHeight=1105&originWidth=1781&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=573449&status=done&style=none&taskId=u40e3197d-44a9-4b59-8dbc-a0879f2d5d5&title=&width=675.4285888671875)
### 部分js
![image.png](https://cdn.nlark.com/yuque/0/2024/png/43230254/1717332315082-c06f5dfc-fd04-4925-b092-d2ef846eafb6.png#averageHue=%2320201f&clientId=ucaa157f9-d9b8-4&from=paste&height=207&id=u7d7c3c39&originHeight=362&originWidth=638&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=99826&status=done&style=none&taskId=u5120bab4-f8e9-435c-a64d-a0646f723a3&title=&width=364.57142857142856)
# 结果测试
## 主页
![](https://cdn.nlark.com/yuque/0/2024/png/43230254/1717332984301-e1804f8c-5d01-4400-80ac-ad5d91a91699.png#averageHue=%23545168&height=215&id=hiSkL&originHeight=321&originWidth=1010&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=675.4285888671875)
## 导航
![](https://cdn.nlark.com/yuque/0/2024/png/43230254/1717332984645-d54a9441-f342-48ca-86ae-e65fad7bcc93.png#averageHue=%235b605f&height=50&id=qh1b2&originHeight=162&originWidth=2154&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=670.4285888671875)
## 页脚
![](https://cdn.nlark.com/yuque/0/2024/gif/43230254/1717332984959-598f6411-ff76-4a3f-b730-e358bbff3f5f.gif#averageHue=%2353503a&height=272&id=zdP84&originHeight=305&originWidth=753&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=672.4285888671875)
## 切换页面
![](https://cdn.nlark.com/yuque/0/2024/gif/43230254/1717332985475-7a507170-e97d-4d79-82dd-224f23aba87a.gif#averageHue=%235e5c72&height=274&id=GDC7n&originHeight=305&originWidth=753&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=675.4285888671875)
## 搜索框
![](https://cdn.nlark.com/yuque/0/2024/png/43230254/1717332985896-f997718c-3a96-4d8a-ba4a-bcc6b740b74e.png#averageHue=%23f2f3f5&height=298&id=qrQFn&originHeight=406&originWidth=922&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=676.4285888671875)
## 外部链接
![](https://cdn.nlark.com/yuque/0/2024/png/43230254/1717332986215-2cab8024-832f-4d37-9d31-33cfe8ab9f1a.png#averageHue=%23f8f8f8&id=XBgKz&originHeight=241&originWidth=937&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
## 登录页面
![](https://cdn.nlark.com/yuque/0/2024/png/43230254/1717332986407-2c9f063e-031e-4654-961e-b6e785a7d5d1.png#averageHue=%23e8e7e5&height=415&id=T5gkf&originHeight=872&originWidth=1422&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=677.4285888671875)
## 注册页面
![](https://cdn.nlark.com/yuque/0/2024/png/43230254/1717332986650-243cf4d8-22fa-44cf-ab96-c911866ed5b1.png#averageHue=%23fefefe&height=482&id=xlXTi&originHeight=957&originWidth=696&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=&width=350.4285888671875)
## 动态页面动画
![](https://cdn.nlark.com/yuque/0/2024/gif/43230254/1717332987110-a11556b1-f0e8-4067-b650-c1ba4b48b02c.gif#averageHue=%23333920&id=qlabj&originHeight=305&originWidth=753&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
