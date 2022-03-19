/*
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
        }

    })
}
console.log(filterPrice(goods, 1000, '<'))

/*function filteredPrice(array, benchmark, symbol){
    return goods.filter(array => (symbol === '<') ? array.price < benchmark : array.price > benchmark);
}
console.log(filteredPrice([goods], 1000, '>'));*!/

const filter = (arr) => {
    let group1 = [];
    let group2 = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i].price > 800){
            group2.push(arr[i].name);
        } else if(arr[i].price < 800){
            group1.push(arr[i].name);
        }
    }
    return{
        group1, // group1:group1
        group2 // group2:group2
    }
}
console.log(filter(goods));*/
