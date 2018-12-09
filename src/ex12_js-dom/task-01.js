'use strict';

function randomInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

 function prepend(container, newElement) { 
    container.insertBefore(newElement, container.firstChild);
} 

function dragDrop(elem) {
    let element = elem;

    element.onmousedown = function(e) {
        function moveAt(e) {
            element.style.left = e.pageX - element.offsetWidth / 2 + 'px';
            element.style.top = e.pageY - element.offsetHeight / 2 + 'px';
        }
        moveAt(e);
      
        document.onmousemove = function(e) {
          moveAt(e);
        }
      
        element.onmouseup = function() {
          document.onmousemove = null;
          element.onmouseup = null;
        }
      }
}

function createDiv() {
    let elem = document.createElement('div');
    let clientWidth = document.body.clientWidth;
    let clientHeight = document.body.clientHeight;
    console.log('clientWidth' + clientWidth);
    console.log('clientHeight' + clientHeight);

    elem.style.position = 'fixed';
    elem.style.backgroundColor = '#' + randomInt(0, 11184810).toString(16);
    elem.style.width = randomInt(10, clientWidth/5) + 'px';
    elem.style.height = randomInt(10, clientHeight/2) + 'px';
    elem.style.left = randomInt(1, clientWidth) + 'px';
    elem.style.top = randomInt(1, clientHeight ) + 'px';

    prepend(document.body, elem);
    dragDrop(elem);
}

document.getElementById('buttonAddDiv').addEventListener('click', createDiv);