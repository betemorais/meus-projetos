// alert('oi')
(function full(win, doc){
    'use strict';

    let input = doc.getElementsByTagName('input')[0];
    let div = doc.getElementsByTagName('div')[0];
    let button = doc.getElementById('cad');
    

    input.addEventListener('input', function(){
        div.innerHTML= input.value;
    }, false);


    button.addEventListener('click', function(){
        localStorage.setItem(div.innerHTML, div);
    }, false)
    

    
})(window, document);