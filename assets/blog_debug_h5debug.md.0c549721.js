import{_ as e,o as a,c as t,Q as i}from"./chunks/framework.fd7a045e.js";const s="/git-blog/assets/setting.e66280fa.webp",p="/git-blog/assets/setting2.52f3bc85.webp",r="/git-blog/assets/usb.413e0952.webp",o="/git-blog/assets/devtools.e1956d95.webp",l="/git-blog/assets/remote-target.1ad54931.webp",n="/git-blog/assets/inspect.7b0ba1c8.webp",g="/git-blog/assets/preview.84e37942.webp",c="/git-blog/assets/preview2.ec45fd2c.gif",h="/git-blog/assets/setting-ios.4a718e1b.webp",b="/git-blog/assets/setting-safari.b81e1cad.webp",d="/git-blog/assets/setting-safari2.43902e27.webp",m="/git-blog/assets/preview-ios.41b7801c.webp",B=JSON.parse('{"title":"远程调试APP内h5","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"blog/debug/h5debug.md","filePath":"blog/debug/h5debug.md","lastUpdated":1694510232000}'),_={name:"blog/debug/h5debug.md"},u=i('<h1 id="远程调试app内h5" tabindex="-1">远程调试APP内h5 <a class="header-anchor" href="#远程调试app内h5" aria-label="Permalink to &quot;远程调试APP内h5&quot;">​</a></h1><p>APP业务中常常需要对线上h5页面排查定位问题 目前的痛点：</p><ul><li>chrome调试页面无法模拟真实app内环境</li><li>网页注入vconsole类插件，页面样式查看不方便、报错提示不清晰</li></ul><p>如何在chrome里调试App内的网页呢？</p><p>整理了一些目前各端的情况和方式以供参考：</p><h2 id="android远程调试" tabindex="-1">Android远程调试 <a class="header-anchor" href="#android远程调试" aria-label="Permalink to &quot;Android远程调试&quot;">​</a></h2><p>前置准备：</p><ul><li>Android手机</li><li>App测试包</li><li>USB数据线</li><li>Chrome浏览器</li></ul><h3 id="step1-开启webview远程调试" tabindex="-1">Step1: 开启Webview远程调试 <a class="header-anchor" href="#step1-开启webview远程调试" aria-label="Permalink to &quot;Step1: 开启Webview远程调试&quot;">​</a></h3><p>需要打开app测试包内的webview远程调试开关</p><p>以赶集App为例：“我的Tab &gt; 右上角设置 &gt; 开发者选项 &gt; WebView远程调试” <img src="'+s+'" alt="image.png"></p><h3 id="step2-启用开发者模式" tabindex="-1">Step2: 启用开发者模式 <a class="header-anchor" href="#step2-启用开发者模式" aria-label="Permalink to &quot;Step2: 启用开发者模式&quot;">​</a></h3><p>开发者模式的打开方法是，进入”设置 &gt; 关于手机”菜单，找到”内部版本号”这一项（或类似名称的条目），在上面连续按七次。退回上一级菜单，应该就能看到”开发者模式”。</p><p>进入其中，打开”USB 调试”选项。 <img src="'+p+'" alt="image.png"></p><h3 id="step3-连接手机" tabindex="-1">Step3: 连接手机 <a class="header-anchor" href="#step3-连接手机" aria-label="Permalink to &quot;Step3: 连接手机&quot;">​</a></h3><p>1、使用 USB 线将手机和电脑连接起来。手机可能会有弹框，询问是否允许访问手机数据，选择”允许”。 <img src="'+r+'" alt="image.png"></p><p>2、打开chrome浏览器，访问:<strong>chrome://inspect/#devices</strong> 选中 “Discover USB devices” 选项。</p><p><img src="'+o+'" alt="image.png"></p><p>可以看到连接成功（如果没有显示，打开app内任意h5页面） <img src="'+l+'" alt="image.png"></p><h3 id="step4-调试网页" tabindex="-1">Step4: 调试网页 <a class="header-anchor" href="#step4-调试网页" aria-label="Permalink to &quot;Step4: 调试网页&quot;">​</a></h3><p>1、打开app内h5页面 2、查看电脑chrome标签页(chrome://inspect/#devices)会新增一条页面信息 3、点击“inspect”按钮会弹窗独立调试窗口 <img src="'+n+'" alt="image.png"><img src="'+g+'" alt="image.png"></p><p>可以在独立的窗口调试页面 <img src="'+c+'" alt="bb 20211111 20.51.34 1.gif"></p><h2 id="ios远程调试" tabindex="-1">IOS远程调试 <a class="header-anchor" href="#ios远程调试" aria-label="Permalink to &quot;IOS远程调试&quot;">​</a></h2><p>前置准备：</p><ul><li>IOS手机</li><li>APP开发版(通过USB方式安装)</li><li>USB数据线</li><li>Safari浏览器</li></ul><h3 id="step1-启动iphone中safari调试模式" tabindex="-1">Step1: 启动iPhone中Safari调试模式 <a class="header-anchor" href="#step1-启动iphone中safari调试模式" aria-label="Permalink to &quot;Step1: 启动iPhone中Safari调试模式&quot;">​</a></h3><p>启用“Web 检查”功能，打开iPhone 依次进入“设置 &gt; Safari浏览器 &gt; 高级 &gt; 网页检查器 &gt; 启用”。 <img src="'+h+'" alt="image.png"></p><h3 id="step2-连接手机" tabindex="-1">Step2: 连接手机 <a class="header-anchor" href="#step2-连接手机" aria-label="Permalink to &quot;Step2: 连接手机&quot;">​</a></h3><p>使用 USB 将手机连接到电脑，如果弹出“是否信任此电脑”对话框，就选择“信任此电脑“</p><h3 id="step3-mac-safari调试" tabindex="-1">Step3: Mac Safari调试 <a class="header-anchor" href="#step3-mac-safari调试" aria-label="Permalink to &quot;Step3: Mac Safari调试&quot;">​</a></h3><p>1、打开Mac Safari浏览器开发菜单 运行 Safari 浏览器，然后依次选取“Safari 浏览器 &gt; 偏好设置”，点按“高级”面板，然后勾选“在菜单栏中显示开发菜单”。 <img src="'+b+'" alt="93443648ce0c618a6f49b05.png"> 2、调试h5页面 先用app打开要调试的页面，打开Mac的Safari浏览器，在“开发”菜单中选择连接的手机 <img src="'+d+'" alt="image.png"> 找到要调试的网页，点击弹出调试弹窗，可以开始调试页面了。 <img src="'+m+'" alt="image.png"></p><p>本文主要参考已有的远程调试方案进行汇总整理，解决无法真机调试的痛点，快速排查出问题。</p><p>参考：</p><ul><li><a href="http://www.ruanyifeng.com/blog/2019/06/android-remote-debugging.html" target="_blank" rel="noreferrer">http://www.ruanyifeng.com/blog/2019/06/android-remote-debugging.html</a></li><li><a href="https://www.jianshu.com/p/86bb2b814461" target="_blank" rel="noreferrer">https://www.jianshu.com/p/86bb2b814461</a></li></ul>',34),f=[u];function S(w,P,q,v,k,A){return a(),t("div",null,f)}const U=e(_,[["render",S]]);export{B as __pageData,U as default};
