const products = [];

var student = [
    {
        id: 0,
        image: 'assets/images/p1.jpg',
        name: 'APPLE',
        price: '$9000',
    },
    {
        id: 1,
        image: 'assets/images/p2.jpg',
        name: 'SAMSUNG',
        price: '$1000',
    },
    {
        id: 2,
        image: 'assets/images/p3.jpeg',
        name: 'VIVO',
        price: '$5000',
    },

];

for (var i = 0; i < student.length; i++) {
    document.getElementById('row').innerHTML += `
    <div class="col-xl-4 col-md-6">
        <div class="card">
            <div class="card-content">
            <img src=${student[i].image} width="100%" alt="">
            <h2>${student[i].name}</h2>
            <span class="fs-4 text-success">${student[i].price}</span>
            <button onclick=add(${i}) class="btn btn-primary">ADD TO CART</button>
            </div>
        </div>
    </div>
`;
}

const add = (productId) => {
    const cartItem = {
        id: student[productId].id,
        name: student[productId].name,
        price: student[productId].price,
        image: student[productId].image,
        quantity: 1
    };
    checkQuantity(cartItem);
}

const checkQuantity = (cartItem) => {
    const existingItemIndex = products.findIndex((item) => {
        return item.id === cartItem.id
    });

    // console.log(existingItemIndex);

    if (existingItemIndex !== -1) {
        products[existingItemIndex].quantity += 1;
    } else {
        products.push(cartItem);
    }
    saveToLocalStorage();

}

function saveToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
}

// function loadFromLocalStorage() {
//     const storedRecords = localStorage.getItem('products');
//     if (storedRecords) {
//         products = JSON.parse(storedRecords);
//         // updateTable();
//     }
// }

// console.log(products)