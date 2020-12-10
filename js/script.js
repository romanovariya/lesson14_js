'use strict';

function DomElement(selector = '#anyOne', height = '100px', width = '250px', bg = 'tomato', fontSize = '25px') {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.create = function(){
    let elem;
    let elemSelector;
    elem = (this.selector[0] === '.') ? document.createElement('div') : document.createElement('p');
    let str = this.selector;
    elemSelector = str.slice(1, str.length + 1);
    elem.className = elemSelector;
    
    if(this.selector[0] === '.'){
        elem.className = elemSelector;
        elem.innerHTML = `Это блок с классом ${elemSelector}`;
    } else if(this.selector[0] === '#'){
        elem.id = elemSelector;
        elem.innerHTML = `Это параграф с id ${elemSelector}`;
    }
    document.body.append(elem);
    
    let getElem = document.querySelector(this.selector);
    getElem.style.cssText = `height: ${this.height};
        width: ${this.width};
        background-color: ${this.bg};
        font-size: ${this.fontSize};`;
};

let domElem1 = new DomElement('.classed', '200px', '200px', '#ffedb9', '30px');

domElem1.create();