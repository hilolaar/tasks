const goods = [
    {
        name:'Iphone 12',
        price:790
    },
    {
        name:'Iphone 12 pro',
        price:800
    },
    {
        name:'Iphone 12 pro max',
        price:1050
    },
    {
        name:'Iphone 13',
        price: 800
    },
    {
        name:'Iphone 13 pro ',
        price:1200
    },
    {
        name:'Iphone 13 pro max',
        price:1200
    }
]

//filterPrice(arr, 800 , <);

const filterPrice = (goodsArray, price, operator) => {
    return goodsArray.filter(good =>{
        if(operator === '>'){
            return good.price > price;
        } else if(operator === '<'){
            return good.price < price;
        } else {
            return 'Параметр operator неизвестен';
        }

    })
}

console.log(filterPrice(goods, 1000, '<'))




/*const filter1 = goods.filter(function (currentValue) {
    return currentValue.price < 800;
})
console.log(filter1);*/


/*
const filter2 = goods.filter(currentValue => currentValue.price  < 800);
console.log(filter2);
*/

