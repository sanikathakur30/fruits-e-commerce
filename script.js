document.addEventListener('DOMContentLoaded', function () {
    const productData = [
        { name: 'Pomegranate', price: 100, image: 'images/product1.jpg' },
        { name: 'Orange', price: 110, image: 'images/product2.jpg' },
        { name: 'Kiwi', price: 180, image: 'images/product3.jpg' },
        { name: 'Banana', price: 80, image: 'images/product4.jpg' },
        { name: 'Apple', price: 80, image: 'images/product5.jpg' },
        { name: 'Pineapple', price: 99, image: 'images/product6.jpg' },
        { name: 'Mango', price: 300, image: 'images/product7.jpg' },
        { name: 'Strawberry', price: 190, image: 'images/product8.jpg' },
    ];

    const productList = document.getElementById('product-list');

    // Display products
    productData.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.classList.add('product-img');

        const name = document.createElement('h3');
        name.textContent = product.name;

        const price = document.createElement('p');
        price.textContent = `₹${product.price.toFixed(2)}`;

        const buyBtn = document.createElement('button');
        buyBtn.textContent = 'Buy Now';
        buyBtn.classList.add('buy-btn');
        buyBtn.addEventListener('click', () => alert(`Thank you for purchasing ${product.name}!`));

        productCard.appendChild(img);
        productCard.appendChild(name);
        productCard.appendChild(price);
        productCard.appendChild(buyBtn);

        productList.appendChild(productCard);
    });
});
