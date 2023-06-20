# xpathpro

xpath for browser usage.

[English](https://github.com/xo1988/xpathjs/blob/main/README.md)
[中文](https://github.com/xo1988/xpathjs/blob/main/README_zh.md)

## Install

```javascript
npm install xpathpro

import {getXpathOfElement, getElementsByXpath} from 'xpathpro'
```

## Usage

1. Get the xpath of html element
2. Get html elements by xpath

Function as below.

```javascript
function getXpathOfElement(element, isSample=true, isAbs=true)
function getElementsByXpath(sXPath)
```

## Example

Get the xpath of html element

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

Get element by xpath

```javascript
getElementsByXpath("/html/body[@class='mac os chrome modal-open']/div[@id='teambition-web-content']/div[@class='project-app-view']/div[@class='project-app-inner']/div[@class='smart-group-view fade in']/div[@class='agile-view']/div[@class='agile-view-wrapper']/div[@class='table-board-view']/div[@class='bi-table__k1IR']/div[@class='swim-table__oo_M']/div[@class='swim-grid__0FuN']/div[@class='scrollbar-filling-space__g3rY']/div[@class='scrollbar-horz-container__xHRO']/div[@class='scrollbar-horz-handler__KUYd']")
// [div.scrollbar-horz-handler__KUYd]
````

<img src="https://github.com/xo1988/xpathjs/blob/main/bmc_qr.png" width="180">
