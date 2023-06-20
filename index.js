export function getXpathOfElement(element, isSample=true, isAbs=true) {
    console.log('is abs ', isAbs)
    if (isAbs) {
        if (element===document) return ''
    } else {
        if (element.id !== '')
            return "//*[@id='"+element.id+"']"
    }

    var childindex = 0, childcount = 0;
    var nodes = element.parentNode.childNodes;
    let nodeid = ''
    var nodeclass = ''
    let xpath = ''
    for (var i= 0; i < nodes.length; i++) {
        var node = nodes[i];
        
        if (node===element) {
            xpath = getXpathOfElement(element.parentNode, isSample, isAbs) + '/' + element.tagName.toLowerCase();

            if (isSample == false) {
                nodeid = node.getAttribute('id')
                nodeclass = node.getAttribute('class')
                if (nodeid) {
                    xpath += `[@id='${nodeid}']`
                } else if (nodeclass) {
                    xpath += `[@class='${nodeclass}']`
                }
            }
        }
    }

    for (var i= 0; i < nodes.length; i++) {
        var node = nodes[i];
        
        if (node.nodeType===1 && node.tagName === element.tagName) {
            if (isSample == false) {
                if (nodeid) {
                    childcount = 1
                } else if (nodeclass) {
                    if (node.getAttribute('class') == nodeclass) {
                        childcount++
                    }
                } else {
                    childcount++
                }
            } else {
                childcount++
            }
        }

        if (node===element) {
            childindex = childcount
        }
    }

    if (childcount > 1) {
        xpath += `[${childindex}]`
    }

    return xpath;
}

export function getElementsByXpath(sXPath) {
    var oEvaluator = new XPathEvaluator();
    var oResult = oEvaluator.evaluate(sXPath, document, null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    var aNodes = [];
    if (oResult != null) {
        var oElement = oResult.iterateNext();
        while (oElement) {
            aNodes.push(oElement);
            oElement = oResult.iterateNext();
        }
    }
    aNodes = aNodes.map(function(element) {
        return element;
    })
    return aNodes;
}
