'use strict'

function deleteTextNodes(node) {
    if (node.hasChildNodes()) {

        for(var i = 0; i < node.childNodes.length; i++) {
            console.log('i: ', i,' child: ', node.childNodes[i]);
            if (!node.childNodes[i].hasChildNodes()) {

                if (node.childNodes[i].nodeType === 3) {
                    console.log('Remoute: ', node.childNodes[i]);
                    node.removeChild(node.childNodes[i]);
                    //"ChildNodes" живая коллекция, поэтому после удаления следующий узел займет индекс удаленного узла
                    i--; 
                } 
            } else {
                deleteTextNodes(node.childNodes[i]);
            } 
        } 
    } else {
        console.log('Element does not contain text-nodes.');
    }  
}

deleteTextNodes(document.body.children[0].lastChild);