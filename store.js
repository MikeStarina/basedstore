import {getList} from "./src/api.js";
import {addCard, createCard} from './src/cards.js';
import * as consts from './src/consts.js';

getList().then(res => res.json())
.then(res => {
    console.log(res);
    addCard(res.result.items);
})
.catch(err => {console.log(err)});









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
