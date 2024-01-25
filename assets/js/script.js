const products = [
    {
        id: 1,
        name: 'APPLE',
        price: 20.99,
        image: 'assets/images/p1.jpg'
    },
    {
        id: 2,
        name: 'SAMSUNG',
        price: 30.49,
        image: 'assets/images/p2.jpg'
    },
    {
        id: 3,
        name: 'VIVO',
        price: 50.89,
        image: 'assets/images/p3.jpeg'
    }
];

const productListContainer = document.getElementById('row');
products.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.className = 'col-4';
    productDiv.innerHTML = `
            <div class="card px-3">
                <img src="${product.image}" alt="${product.name}" width="100%">
                <h3 class="text-uppercase fw-bold fs-4 mt-1">${product.name}</h3>
                <p class="text-uppercase fw-bold fs-5 text-primary">Price: $${product.price.toFixed(2)}</p>
                <button class="btn bg-success mb-2 text-white" onclick="addToCart(${product.id})">ADD TO CART</button>
            </div>
`;
    productListContainer.appendChild(productDiv);
});

function addToCart(productId) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const selectedProduct = products.find((product) => {
        return product.id === productId
    });

    const cartItem = {
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity: 1
    };

    const existingItemIndex = cartItems.findIndex((item) => {
        return item.id === cartItem.id
    });

    if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity += 1;
    } else {
        cartItems.push(cartItem);
    }

    // localStorage.setItem('cart', JSON.stringify(cartItems));
}


