'use strict'

function deleteTextNodes(node) {
    if (node.hasChildNodes()) {

        for(var i = 0; i < node.childNodes.length; i++) {
            console.log('i: ', i,' child: ', node.childNodes[i]);

            if (node.childNodes[i].nodeType === 3) {
                console.log('Remoute: ', node.childNodes[i]);
               node.removeChild(node.childNodes[i]);
               //"ChildNodes" живая коллекция, потому что после удаления следующий узел займет индекс удаленного узла
               i--; 
            } 
        } 
        console.log('innerHTML:', document.body.innerHTML);     
    } else {
        console.log('Element does not contain text-nodes.');
    }  
}

deleteTextNodes(document.body);