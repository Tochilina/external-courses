'use strict'


function scanDOM() {
    const nodes = document.body.childNodes;

    let statistic = {};
    statistic.tag = {};
    statistic.elemWithClass = {};
    statistic.nodeText = 0;
    
    function sort(nodes) {
        for(let i = 0; i < nodes.length; i++) {

            if(nodes[i].nodeType === 1) {
                if(nodes[i].nodeName in statistic.tag ) {
                    statistic.tag[nodes[i].nodeName]++;
                } else {
                    statistic.tag[nodes[i].nodeName] = 1;
                }

                if(nodes[i].className !== '') {
                    for(let j = 0; j < nodes[i].classList.length; j++){
                        if (nodes[i].classList[j] in statistic.elemWithClass) {
                            statistic.elemWithClass[nodes[i].classList[j]]++;
                        } else {
                            statistic.elemWithClass[nodes[i].classList[j]] = 1;
                        }
                    }
                }

                if (nodes[i].hasChildNodes()) {
                    sort(nodes[i].childNodes);
                }
            } else if (nodes[i].nodeType === 3) { 
                statistic.nodeText++;
            }
        }
    }

    sort(nodes);
    printAnswer(statistic);
}


function printAnswer(obj) {
    let objSmall;

    for(let key in obj) {
        if(!(obj[key] instanceof Object)) {
            console.log('Текстовых узлов : ' + obj[key]);
        } else {
            
            if(obj[key].length === 0) {
                continue;
            }

            objSmall = obj[key];

            for(let keySmall in objSmall) {
                if(key === "tag") {
                    console.log('Тегов ' + keySmall + ': ' + objSmall[keySmall]);
                } else {
                    console.log('Элементов с классом ' + keySmall + ': ' + objSmall[keySmall]);
                }
            }
        }
    }
}

scanDOM();