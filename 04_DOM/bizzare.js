/**
 * Created by Natasha on 13.07.2016.
 */


// You need to find all values of attribute named "base64" in bizzare.html.
// After that make one long string and decode it. Mind the name of attribute. Follow instructions.


var attrList = document.querySelectorAll('[base64]');

function getLine (list) {
    var attrArr = [];
    list.forEach(function(el) {
        attrArr.push(el.getAttribute("base64"));
        return attrArr;
    });
    return  attrArr.join('');
}

var base64 = getLine(attrList);

var decoded = window.atob(base64);
console.log(decoded);


// Create and execute function like: Function(string), where string
// is concatenated value of all Comment nodes from this document



var comments =[],
    node,
    iterator = document.createNodeIterator(
        document,
        NodeFilter.SHOW_COMMENT,
        function (node) {
            return node.nodeName === '#comment' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
    );

while(node = iterator.nextNode()) {
    comments.push(node.nodeValue);
}

var commentStr = comments.join('');

Function(commentStr)();
