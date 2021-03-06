import { createFrame } from "./imgSliderPage";

function backArrow() {
    const arrow = document.createElement('span');
    arrow.classList.add('back-arrow');
    arrow.innerText = '«';

// Arrow style
    arrow.style.color = 'white';
    arrow.style.fontSize = '3rem';
    arrow.style.position = 'absolute';
    arrow.style.left = '0';
    arrow.style.padding = '1rem';
    arrow.style.transition = 'transform 200ms ease-in-out';
    arrow.style.zIndex = '1';
    arrow.style.backgroundColor = 'rgb(0, 0, 0, .8)';
    arrow.style.borderTopRightRadius = '.5rem';
    arrow.style.borderBottomRightRadius = '.5rem';

    return arrow
}


function forwardArrow() {
    const arrow = document.createElement('span');
    arrow.classList.add('forward-arrow');
    arrow.innerText = '»';

    // Arrow style
    arrow.style.color = 'white';
    arrow.style.fontSize = '3rem';
    arrow.style.position = 'absolute';
    arrow.style.right = '0';
    arrow.style.padding = '1rem';
    arrow.style.transition = 'transform 200ms ease-in-out';
    arrow.style.zIndex = '1';
    arrow.style.backgroundColor = 'rgb(0, 0, 0, .8)';
    arrow.style.borderTopLeftRadius = '.5rem';
    arrow.style.borderBottomLeftRadius = '.5rem';
    
    

    return arrow
}

function imageSelectorUI(array) {
    const imgSelector = document.createElement('div');
    imgSelector.classList.add('img-selector');

    for(let i = 0; i < array.length; i++) {
        const selector = document.createElement('span');
        selector.classList.add('dot-selector');
        imgSelector.append(selector);
    };

    return imgSelector
};




export {forwardArrow, backArrow, imageSelectorUI}