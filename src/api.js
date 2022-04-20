





const data = {
    'filter': {
                
        'visibility': 'VISIBLE'
    },
    'last_id': '',
    'limit': 30
}

export const getList = () => {
    return fetch('https://api-seller.ozon.ru/v2/product/list', {
        method: 'POST',
        headers: {
            'Client-Id': '75295',
            'Api-Key': '3ea47e53-0fbb-48af-9571-acd109d16798',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        
    })
    .then(res => {
        if (res.ok) {
            
            return res.json();
        }
    })
    .then(res => {
        console.log(res);


        const dataItem = {
            'offer_id': [],
            'product_id': [],
            'sku': []
        } 


        
        res.result.items.forEach((el) => {
            //console.log(typeof el.product_id); 
            dataItem.product_id.push(el.product_id);
            //ataItem.offer_id.push(el.offer_id);
        })

        
        return fetch('https://api-seller.ozon.ru/v2/product/info/list', {
            method: 'POST',
            headers: {
                'Client-Id': '75295',
                'Api-Key': '3ea47e53-0fbb-48af-9571-acd109d16798',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataItem),
        }) 
    })
    
}



