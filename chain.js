// data access
const data = [{ id: 1, name: 'abul', address: 'kochu khet'}]

// console.log(data[0].address);


const products = {
    count: 100,
    data:[
        {id: 1, name: 'Lonovo', price: 65000},
        {id: 10, name: 'Macbook', price: 150000}
    ]
}

// console.log(products.count)

const user = {
    id: 1001,
    name: 'Rafiul islam',
    address: {
        street: {
            first: '50/1 Ghatail Tangail',
            second: '11/2 Madhupur Tangail',
            third: 'Dhaka, Bangladesh'
        },
        city: 'Dhaka'
    }
}

// console.log(user.address.street.first)


const user2 = {
    id: 1002,
    name: 'pori bibir majar',
    address: {
        city: 'chittagong',
        country: 'Bangladesh'
    }
};

console.log(user2.address.street?.first)
















