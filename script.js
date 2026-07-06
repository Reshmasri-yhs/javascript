const products = [
    { id: "1", name: "MacBook Air M3", category: "Electronics", price: 10000.00 },
    { id: "2", name: "Wireless Headphones", category: "Electronics", price: 349.99 },
    { id: "3", name: "Leather Backpack", category: "Accessories", price: 89.99 },
    { id: "4", name: "Notebook Set", category: "Stationery", price: 14.99 },
    { id: "5", name: "iPhone 16", category: "Electronics", price: 999.99 },
    { id: "6", name: "Office Chair", category: "Accessories", price: 299.99 },
    { id: "7", name: "Gel Pens", category: "Stationery", price: 19.99 },
    { id: "8", name: "Galaxy Watch", category: "Electronics", price: 279.99 },
    { id: "9", name: "Water Bottle", category: "Accessories", price: 24.99 },
    { id: "10", name: "Mechanical Keyboard", category: "Electronics", price: 129.99 }
];

function getCategories() {
    return ['All', ...new Set(products.map(p => p.category))];
}

function renderCategoryButtons() {
    const container = document.getElementById('categoryFilters');
    container.innerHTML = '';
    
    getCategories().forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `category-btn ${cat === 'All' ? 'active' : ''}`;
        btn.textContent = cat;
        btn.dataset.category = cat;
        
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProducts();
        });
        
        container.appendChild(btn);
    });
}

function createCard(product) {
    const emojis = { Electronics: '💻', Accessories: '🎒', Stationery: '✏️' };
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">${emojis[product.category] || '📦'}</div>
        <div class="card-content">
            <div class="product-name">${product.name}</div>
            <div class="product-category">${product.category}</div>
            <div class="price">$${product.price}</div>
            <small>ID: ${product.id}</small>
        </div>
    `;
    return card;
}

function filterProducts() {
    const search = document.getElementById('searchInput').value.toLowerCase().trim();
    const activeCat = document.querySelector('.category-btn.active').dataset.category;
    
    let filtered = products;
    
    if (activeCat !== 'All') filtered = filtered.filter(p => p.category === activeCat);
    if (search) filtered = filtered.filter(p => p.name.toLowerCase().includes(search));
    
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    if (filtered.length === 0) {
        const msg = document.createElement('div');
        msg.className = 'no-results';
        msg.textContent = 'No matching products found.';
        grid.appendChild(msg);
        return;
    }
    
    filtered.forEach(product => grid.appendChild(createCard(product)));
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCategoryButtons();
    filterProducts();
    document.getElementById('searchInput').addEventListener('input', filterProducts);
});