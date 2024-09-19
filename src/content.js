// content.js

function getUrlParams(key) {
  var url = location.search.substr(1);
  if (url == "") {
    return false;
  }
  var paramsArr = url.split("&");
  for (var i = 0; i < paramsArr.length; i++) {
    var combina = paramsArr[i].split("=");
    if (combina[0] == key) {
      return combina[1];
    }
  }
  return false;
}

let url = location.href;
let newUrl = "";
if (
  url.indexOf("link.zhihu.com") != -1 ||
  url.indexOf("link.juejin.cn") != -1 ||
  url.indexOf("link.csdn.net") != -1  ||
  //少数派 如：https://sspai.com/link?target=https%3A%2F%2Frime.im%2Fdownload%2F
  url.indexOf("sspai.com/link") != -1 ||
  //腾讯云
  url.indexOf("cloud.tencent.com/developer/tools/blog-entry") != -1
) {
  newUrl = decodeURIComponent(getUrlParams("target"));
} else if (url.indexOf("www.jianshu.com/go-wild") != -1 ||
  //腾讯文档
  url.indexOf("docs.qq.com/scenario/link.html") != -1 ||
  //开源中国 https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fgithub.com%2Fwaylau%2Fharmonyos-tutorial
  url.indexOf("www.oschina.net/action/GoToLink") != -1
) {
  newUrl = decodeURIComponent(getUrlParams("url"));
}
if (newUrl) {
  location.href = newUrl;
}

// alert("Hello from your Chrome extension!" + firstHref);

// content.js
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.message === "clicked_browser_action") {
//     var firstHref = $("a[href^='http']").eq(0).attr("href");

//     console.log(firstHref);

//     // This line is new!
//     chrome.runtime.sendMessage({ message: "open_new_tab", url: firstHref });
//   }
// });
