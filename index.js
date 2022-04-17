const data = {
    'filter': {
                
        'visibility': 'ALL'
    },
    'last_id': '',
    'limit': 10
}

const getList = () => {
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
        const dataItem = {
            'offer_id': res.result.items[0].offer_id,
            'product_id': res.result.items[0].product_id,
            'sku': 0
        }
        return fetch('https://api-seller.ozon.ru/v2/product/info', {
            method: 'POST',
            headers: {
                'Client-Id': '75295',
                'Api-Key': '3ea47e53-0fbb-48af-9571-acd109d16798',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataItem)
        })
    })
    .then(res => res.json())
    .then(res => console.log(res))

   
    
    .catch(err => {console.log(err)})
}


getList()
