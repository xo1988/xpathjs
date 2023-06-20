# xpathjs

浏览器获取xpath.

[English](https://github.com/xo1988/xpathjs/blob/main/README.md)
[中文](https://github.com/xo1988/xpathjs/blob/main/README_zh.md)

## 使用

1. 获取元素的xpath
2. 根据xpath获取元素

方法定义如下：

```javascript
function getXpathOfElement(element, isSample=true, isAbs=true)
function getElementsByXpath(sXPath)
```

## 例子

获取元素的xpath

```javascript
getXpathOfElement(ele, true, true)
// /html/body/div[3]/div/div/div[3]/div/div[3]/div[2]/div/div[1]/div[1]/div[3]/div/div

getXpathOfElement(ele, true, false)
// //*[@id="teambition-web-content"]/div/div/div[3]/div/div[3]/div[2]/div/div[1]/div[1]/div[3]/div/div

getXpathOfElement(ele, false, true)
// /html/body[@class='mac os chrome modal-open']/div[@id='teambition-web-content']/div[@class='project-app-view']/div[@class='project-app-inner']/div[@class='smart-group-view fade in']/div[@class='agile-view']/div[@class='agile-view-wrapper']/div[@class='table-board-view']/div[@class='bi-table__k1IR']/div[@class='swim-table__oo_M']/div[@class='swim-grid__0FuN']/div[@class='scrollbar-filling-space__g3rY']/div[@class='scrollbar-horz-container__xHRO']/div[@class='scrollbar-horz-handler__KUYd']

getXpathOfElement(ele, false, false)
// //*[@id='teambition-web-content']/div[@class='project-app-view']/div[@class='project-app-inner']/div[@class='smart-group-view fade in']/div[@class='agile-view']/div[@class='agile-view-wrapper']/div[@class='table-board-view']/div[@class='bi-table__k1IR']/div[@class='swim-table__oo_M']/div[@class='swim-grid__0FuN']/div[@class='scrollbar-filling-space__g3rY']/div[@class='scrollbar-horz-container__xHRO']/div[@class='scrollbar-horz-handler__KUYd']
```

根据xpath获取元素

```javascript
getElementsByXpath("/html/body[@class='mac os chrome modal-open']/div[@id='teambition-web-content']/div[@class='project-app-view']/div[@class='project-app-inner']/div[@class='smart-group-view fade in']/div[@class='agile-view']/div[@class='agile-view-wrapper']/div[@class='table-board-view']/div[@class='bi-table__k1IR']/div[@class='swim-table__oo_M']/div[@class='swim-grid__0FuN']/div[@class='scrollbar-filling-space__g3rY']/div[@class='scrollbar-horz-container__xHRO']/div[@class='scrollbar-horz-handler__KUYd']")
// [div.scrollbar-horz-handler__KUYd]
````

<img src="https://github.com/xo1988/xpathjs/blob/develop/bmc_qr.png" width="180">
