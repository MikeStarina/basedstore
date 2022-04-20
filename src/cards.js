import {shop, cardTemplate} from './consts.js';


export const createCard = (name, primaryImage, price, stock, sku) => {


    console.log(name, primaryImage, price, stock);
    const card = cardTemplate.content.cloneNode(true);

    const cardImage = card.querySelector('.shop__card-image');
    const cardTitle = card.querySelector('.shop__card-title');
    const cardPrice = card.querySelector('.shop__card-price');
    const cardStock = card.querySelector('.shop__stock');
    const cardLink = card.querySelector('.shop__card-link');


    cardImage.src = primaryImage;
    cardImage.alt = name;

    cardTitle.textContent = name;
    cardPrice.textContent = price;
    cardStock.textContent = stock;
    cardLink.href = `https://www.ozon.ru/context/detail/id/${sku}`

    return card;


}



export const addCard = (cardsData) => {
    console.log(cardsData);
    cardsData.forEach((item) => {
        
        shop.prepend(createCard(item.name, item.primary_image, item.price, item.stocks.present, item.fbo_sku));
    })
        
}