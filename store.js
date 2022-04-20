import {getList} from "./src/api.js";
import {addCard, createCard} from './src/cards.js';

getList().then(res => res.json())
.then(res => {
    console.log(res);
    addCard(res.result.items);
})
.catch(err => {console.log(err)});
