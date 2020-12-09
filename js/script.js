'use strict';

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.create = function(){
    let elem;
    let elemSelector;
    if(this.selector[0] === '.'){
        elem = document.createElement('div');
        let str = this.selector;
        elemSelector = str.slice(1, str.length + 1);
        elem.className = elemSelector;
        elem.innerHTML = `Это блок с классом ${elemSelector}`;
        document.body.append(elem);
    } else if(this.selector[0] === '#'){
        elem = document.createElement('p');
        let str = this.selector;
        elemSelector = str.slice(1, str.length + 1);
        elem.id = elemSelector;
        elem.innerHTML = `Это параграф с id ${elemSelector}`;
        document.body.append(elem);
    }
    let getElem = document.querySelector(this.selector);
    getElem.style.height = this.height;
    getElem.style.width = this.width;
    getElem.style.backgroundColor = this.bg;
    getElem.style.fontSize = this.fontSize;
};

let domElem1 = new DomElement('.classed', '200px', '200px', '#ffedb9', '11px');

domElem1.create();
console.log(domElem1);