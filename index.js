import * as consts from './src/consts.js';








consts.menuButton.addEventListener('click', () => {
    consts.popup.classList.toggle('popup__isOpened');

   
})

consts.popupCloseButton.addEventListener('click', () => {
    consts.popup.classList.toggle('popup__isOpened');

})


consts.popup.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('popup__window') && evt.target.classList.contains('popup__isOpened')) {
        consts.popup.classList.toggle('popup__isOpened');

    }
})
