const products = [];

var student = [
    {
        id: 1,
        image: 'assets/images/p1.jpg',
        name: 'APPLE',
        price: '$9000',
    },
    {
        id: 2,
        image: 'assets/images/p2.jpg',
        name: 'SAMSUNG',
        price: '$1000',
    },
    {
        id: 3,
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

var Qt = 0;
const add = (i) => {


    Qt++;
    var id = student[i].id;
    var img = student[i].image;
    var name = student[i].name;
    var price = student[i].price;

    let updateObj = { id, img, name, price, Qt };
    products.push(updateObj);
    saveToLocalStorage();
}


function saveToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
}

function loadFromLocalStorage() {
    const storedRecords = localStorage.getItem('products');
    if (storedRecords) {
        products = JSON.parse(storedRecords);
        // updateTable();
    }
}

console.log(products)