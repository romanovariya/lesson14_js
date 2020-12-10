
document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    function DomElement(selector = '#anyOne', height = '100px', width = '250px', bg = 'tomato', fontSize = '25px', position = 'absolute') {
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.position = position;
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
            font-size: ${this.fontSize};
            position: ${this.position};`;

        let axisX = 0;
        let axisY = 0;
        const moveElem = ( event ) => {
            if ( event.code === 'ArrowUp' ) {
                axisY -= 10;
                getElem.style.top = `${axisY}px`;
            } 
            if ( event.code === 'ArrowDown' ) {
                axisY += 10;
                getElem.style.top = `${axisY}px`;
            } 
            if ( event.code === 'ArrowRight' ) {
                axisX += 10;
                getElem.style.left = `${axisX}px`;
            }
            if ( event.code === 'ArrowLeft' ) {
                axisX -= 10;
                getElem.style.left = `${axisX}px`;
            }
          
        };
        document.addEventListener( 'keydown', moveElem );
    };

    let domElem1 = new DomElement('.classed', '100px', '100px', '#ffedb9', '30px');

    domElem1.create();
});

