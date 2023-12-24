document.addEventListener('DOMContentLoaded', function () {
    const productData = [
        { name: 'Pomegranate', price: 100, image: 'https://img.freepik.com/free-photo/exotic-delicious-pomegranate-white-background_144627-12571.jpg?w=996&t=st=1703398538~exp=1703399138~hmac=be00f9395079e866a7ddf1106644d26315ebce1a0f62180112850e97f31c9490' },
        { name: 'Orange', price: 110, image: 'https://img.freepik.com/free-photo/orange-juicy-ripe-circle-citrus_1172-203.jpg?w=996&t=st=1703399140~exp=1703399740~hmac=b36201e13e93affcc8a4c4cd0baa919868491314e565449b8419c2315e883f17' },
        { name: 'Kiwi', price: 180, image: 'https://img.freepik.com/free-photo/fresh-kiwi-fruit-isolated_144627-30034.jpg?w=996&t=st=1703398792~exp=1703399392~hmac=236234cdede6e52b207a7aa349c2d72855c81ba6432c15554adff97024e6fa37' },
        { name: 'Banana', price: 80, image: 'https://as2.ftcdn.net/v2/jpg/05/41/89/19/1000_F_541891941_stPnspo1LYbbMiUYPJ219RcnTni1U1xL.jpg' },
        { name: 'Apple', price: 120, image: 'https://img.freepik.com/free-photo/apples-red-fresh-mellow-juicy-perfect-whole-white-desk_179666-271.jpg?w=996&t=st=1703399180~exp=1703399780~hmac=6c8c0462c0c32a4c839e72f1e222566ce4e98311f41de879e46a3d545df1acdb' },
        { name: 'Pineapple', price: 99, image: 'https://img.freepik.com/free-photo/pineapple-fruit_1203-7747.jpg?w=996&t=st=1703403811~exp=1703404411~hmac=46bfc5a104cba0257584842058e71babc8d44da642c8a0954de014e9bb4862c5' },
        { name: 'Mango', price: 300, image: 'https://img.freepik.com/free-photo/mango_1203-8851.jpg?w=996&t=st=1703403919~exp=1703404519~hmac=315e0ba3e167db82f82d147a7605f3f68fb54e366ad77fd79ffc463c0c5f79d7' },
        { name: 'Strawberry', price: 190, image: 'https://img.freepik.com/free-photo/red-fresh-strawberries-with-green-leaves_114579-10506.jpg?w=996&t=st=1703404014~exp=1703404614~hmac=2fd762e026d5c4e9ec4aa83d5b91f8b02bfb444f97cfc506867c672b68c13ca4' },
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
