// Inventário: um objeto por produto. Para atualizar stock ou preços, edita esta lista.
// price = preço atual; originalPrice (opcional) = preço antes da promoção, aparece riscado.
const products = [
    // Adidas Campus
    {
        id: 4,
        name: "adidas Campus 00s Core Black",
        sku: "HQ8708",
        price: 70.00,
        originalPrice: 120.00,
        image: "https://www.lisabonastreetwear.pt/cdn/shop/files/Adidas-Campus-00s-Core-Black_grande.jpg?v=1750927446",
        sizes: [
            { size: "36", qty: 1 },
            { size: "38", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 7,
        name: "adidas Campus 00s Grey Gum (Kids)",
        sku: "HQ6507",
        price: 60.00,
        originalPrice: 90.00,
        image: "https://hypevision.pt/cdn/shop/files/campusgrey-front.jpg?v=1751637891",
        sizes: [
            { size: "36 2/3", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 5,
        name: "adidas Campus 00s Dark Green White (Kids)",
        sku: "IH7492",
        price: 55.00,
        originalPrice: 90.00,
        image: "https://img01.ztat.net/article/spp-media-p1/59c4a1cbd62d41159c75677e9a5fe869/afcb006d75f54509b4c62d431540fe03.jpg?imwidth=1800&filter=packshot",
        sizes: [
            { size: "36 2/3", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 2,
        name: "adidas Handball Spezial Sporty & Rich Green",
        sku: "IH2148",
        price: 80.00,
        originalPrice: 120.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/adidas-handball-spezial-sporty-rich-green-ih2148-resellzone.jpg?v=1722926991&width=700",
        sizes: [
            { size: "36 2/3", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 13,
        name: "adidas Handball Spezial Aluminum - Core Black (Women's)",
        sku: "IF6562",
        price: 75.00,
        originalPrice: 110.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/adidas-handball-spezial-aluminum-core-black-if6562-resellzone.jpg?v=1742482381&width=900",
        sizes: [
            { size: "39 1/3", qty: 1 }
        ],
        category: "footwear"
    },
    // Nike Dunk Low
    {
        id: 3,
        name: "Nike Dunk Low Photon Dust (Women's)",
        sku: "DD1503-103",
        price: 75.00,
        originalPrice: 120.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/nike-dunk-low-photon-dust-dd1503-103-resellzone.jpg?v=1717965290&width=700",
        sizes: [
            { size: "35.5", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 10,
        name: "Nike Dunk Low Pink Corduroy (Women's)",
        sku: "FN7167-100",
        price: 170.00,
        originalPrice: 220.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/nike-dunk-low-pink-corduroy-fn7167-100-resellzone.jpg?v=1717962392&width=900",
        sizes: [
            { size: "38.5", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 28,
        name: "Nike Dunk Low Retro White Black Panda (Women's)",
        sku: "DD1503-101",
        price: 70.00,
        originalPrice: 120.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/nike-dunk-low-retro-white-black-panda-dd1391-100-resellzone.jpg?v=1717964863&width=900",
        sizes: [
            { size: "36", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 9,
        name: "Nike Dunk Low UNC (2021) (GS)",
        sku: "CW1590-103",
        price: 70.00,
        originalPrice: 95.00,
        image: "https://hypevision.pt/cdn/shop/files/DUNKUNC-single.jpg?v=1738324364",
        sizes: [
            { size: "38", qty: 1 }
        ],
        category: "footwear"
    },

    // Nike Dunk High
    {
        id: 6,
        name: "Nike Dunk High Aluminum (Women's)",
        sku: "DD1869-107",
        price: 70.00,
        originalPrice: 120.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/nike-dunk-high-aluminum-dd1869-107-resellzone.jpg?v=1716359832&width=700",
        sizes: [
            { size: "36.5", qty: 1 }
        ],
        category: "footwear"
    },

    // Yeezys
    {
        id: 22,
        name: "adidas Yeezy Slide Bone (2022 Restock)",
        sku: "FZ5897",
        price: 130.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/adidas-yeezy-slide-bone-fz5897-resellzone.jpg?v=1714496926&width=900",
        sizes: [
            { size: "43", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 29,
        name: "adidas Yeezy Slide Azure",
        sku: "ID4133",
        price: 80.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/adidas-yeezy-slide-azure-id4133-resellzone.jpg?v=1714497313&width=900",
        sizes: [
            { size: "43", qty: 1 }
        ],
        category: "footwear"
    },

    // Restantes Pares (Jordan)
    {
        id: 15,
        name: "Jordan 1 Retro High OG Palomino",
        sku: "DZ5485-020",
        price: 191.99,
        originalPrice: 230.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/air-jordan-1-retro-high-og-palomino-dz5485-020-resellzone.jpg?v=1717597519&width=700",
        sizes: [
            { size: "40", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 27,
        name: "Jordan 1 Retro High OG SP Union LA Bephies Beauty Supply Summer of ‘96",
        sku: "FD2565-100",
        price: 180.00,
        originalPrice: 200.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/air-jordan-1-retro-high-og-sp-union-la-bephies-beauty-supply-summer-of-96-fd2565-100-resellzone.jpg?v=1717598769",
        sizes: [
            { size: "40", qty: 1 }
        ],
        category: "footwear"
    },
   

    // T-shirts
    {
        id: 30,
        name: "Corteiz Car Crash Tee White",
        sku: "n/a",
        price: 40.00,
        originalPrice: 70.00,
        image: "https://images.stockx.com/images/Corteiz-Car-Crash-Tee-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1690990064",
        sizes: [
            { size: "S", qty: 1 }
        ],
        category: "clothing"
    },

    // Chapéus
    {
        id: 14,
        name: "Corteiz Green Alcatraz Trucker Hat",
        sku: "N/A",
        price: 29.90,
        originalPrice: 50.00,
        image: "https://images1.vinted.net/t/04_00c63_DwS2vKnTgH6uydToLTeuJULP/f800/1743872946.jpeg?s=c97a457732377bedd379ba6939cc2ebc747a2c16",
        sizes: [
            { size: "N/A", qty: 1 }
        ],
        category: "accessories"
    },
];

// --- Contactos -------------------------------------------------------------
const WHATSAPP_NUMBER = '351925263235';
const INSTAGRAM_HANDLE = '44snkrs.pt';

// --- Tamanhos ----------------------------------------------------------------
const CLOTHING_ORDER = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const ONE_SIZE_VALUES = ['tamanho unico', 'tamanho único', 'n/a', 'one size'];

function isOneSize(size) {
    return ONE_SIZE_VALUES.includes(String(size).trim().toLowerCase());
}

function hasSku(product) {
    return product.sku && product.sku.trim().toLowerCase() !== 'n/a';
}

// Converte tamanhos EU em número para ordenar: "36 2/3" → 36.67, "38,5" → 38.5
function parseShoeSize(sizeStr) {
    const clean = String(sizeStr).replace(',', '.').trim();
    const [whole, fraction] = clean.split(' ');
    const base = parseFloat(whole);
    if (fraction === '1/2') return base + 1 / 2;
    if (fraction === '1/3') return base + 1 / 3;
    if (fraction === '2/3') return base + 2 / 3;
    return base;
}

// Ordem: tamanhos de roupa pela ordem XS → XXL, depois numéricos, depois o resto
function compareSizes(a, b) {
    const clothingA = CLOTHING_ORDER.indexOf(a);
    const clothingB = CLOTHING_ORDER.indexOf(b);
    if (clothingA !== -1 && clothingB !== -1) return clothingA - clothingB;
    if (clothingA !== -1) return -1;
    if (clothingB !== -1) return 1;

    const numA = parseShoeSize(a);
    const numB = parseShoeSize(b);
    if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
    if (!isNaN(numA)) return -1;
    if (!isNaN(numB)) return 1;
    return a.localeCompare(b);
}

// Só mostra no filtro os tamanhos que existem em stock nessa categoria
function sizesInStock(category) {
    const sizes = new Set();
    products
        .filter(product => product.category === category)
        .forEach(product => product.sizes.forEach(s => {
            if (s.qty > 0 && !isOneSize(s.size)) sizes.add(s.size);
        }));
    return Array.from(sizes).sort(compareSizes);
}

function formatPrice(value) {
    return `€${value.toFixed(2).replace('.', ',')}`;
}

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

const IMAGE_FALLBACK = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 60">' +
    '<text x="80" y="35" font-family="sans-serif" font-size="12" fill="#999" text-anchor="middle">Imagem indisponível</text></svg>'
);

// --- Estado ------------------------------------------------------------------
let currentFilter = 'all';     // ordenação ativa
let currentSearchTerm = '';
let selectedSizes = [];        // tamanhos aplicados (os que filtram a grelha)
let pendingSizes = [];         // tamanhos escolhidos no pop-up, ainda por aplicar

// --- Referências DOM ---------------------------------------------------------
const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const sortButtons = document.querySelectorAll('.filter-btn[data-filter]');
const toggleSizeFilterBtn = document.getElementById('toggleSizeFilterBtn');
const sizeFilterDropdown = document.getElementById('sizeFilterDropdown');
const footwearSizeSection = document.getElementById('footwearSizeSection');
const clothingSizeSection = document.getElementById('clothingSizeSection');
const footwearSizeOptionsDiv = document.getElementById('footwearSizeOptions');
const clothingSizeOptionsDiv = document.getElementById('clothingSizeOptions');
const applySizeFilterBtn = document.getElementById('applySizeFilterBtn');
const selectedSizeChipsContainer = document.getElementById('selectedSizeChipsContainer');
const selectedSizeChipsWrapper = document.getElementById('selectedSizeChipsWrapper');

// --- Grelha de produtos ------------------------------------------------------
function buildWhatsAppLink(product) {
    const reference = hasSku(product) ? ` (SKU: ${product.sku})` : '';
    const message = `Olá, tenho interesse no ${product.name}${reference}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function displayProducts(productsToDisplay) {
    productGrid.innerHTML = '';

    if (productsToDisplay.length === 0) {
        productGrid.innerHTML = '<p class="no-results">Nenhum produto encontrado com os filtros aplicados.</p>';
        return;
    }

    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const sizesHtml = product.sizes.map(s => {
            if (isOneSize(s.size)) return '<span class="size-tag-display">Tamanho único</span>';
            const qtyDisplay = s.qty > 0 ? ` (${s.qty})` : '';
            const outOfStockClass = s.qty === 0 ? ' out-of-stock' : '';
            return `<span class="size-tag-display${outOfStockClass}">${escapeHtml(s.size)}${qtyDisplay}</span>`;
        }).join('');

        // Com promoção: preço atual + preço antigo riscado
        const priceHtml = product.originalPrice
            ? `<span class="current-price">${formatPrice(product.price)}</span>
               <span class="original-price">${formatPrice(product.originalPrice)}</span>`
            : formatPrice(product.price);

        const name = escapeHtml(product.name);
        const skuHtml = hasSku(product) ? `<p class="sku">SKU: ${escapeHtml(product.sku)}</p>` : '';

        productCard.innerHTML = `
            <img src="${escapeHtml(product.image)}" alt="${name}" loading="lazy" decoding="async">
            <div class="product-info">
                <h3>${name}</h3>
                ${skuHtml}
                <p class="product-price">${priceHtml}</p>
            </div>
            <div class="available-sizes">
                <span class="available-sizes-label">Tamanhos Disponíveis:</span>
                ${sizesHtml}
            </div>
            <div class="product-actions">
                <a href="${buildWhatsAppLink(product)}" target="_blank" rel="noopener noreferrer" class="whatsapp-btn">
                    <i class="fab fa-whatsapp" aria-hidden="true"></i> Comprar
                </a>
                <a href="https://ig.me/m/${INSTAGRAM_HANDLE}" target="_blank" rel="noopener noreferrer" class="instagram-btn">
                    <i class="fab fa-instagram" aria-hidden="true"></i> Comprar
                </a>
            </div>
        `;

        // As fotos vêm de outros sites; se uma falhar, o card não fica partido
        const img = productCard.querySelector('img');
        img.addEventListener('error', () => {
            img.src = IMAGE_FALLBACK;
            img.classList.add('img-fallback');
        }, { once: true });

        productGrid.appendChild(productCard);
    });
}

// Pesquisa → filtro de tamanhos → ordenação
function filterAndSortProducts() {
    let filtered = [...products];

    if (currentSearchTerm) {
        const term = currentSearchTerm.toLowerCase();
        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(term) ||
            product.sku.toLowerCase().includes(term)
        );
    }

    if (selectedSizes.length > 0) {
        filtered = filtered.filter(product =>
            product.sizes.some(s => selectedSizes.includes(s.size) && s.qty > 0)
        );
    }

    if (currentFilter === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentFilter === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    }

    displayProducts(filtered);
}

// --- Filtro de tamanhos ------------------------------------------------------
function renderSizeOptions(container, section, sizes) {
    container.innerHTML = '';
    section.hidden = sizes.length === 0;

    sizes.forEach(size => {
        const sizeTag = document.createElement('button');
        sizeTag.type = 'button';
        sizeTag.classList.add('size-tag');
        sizeTag.textContent = size;
        sizeTag.dataset.size = size;
        sizeTag.classList.toggle('selected', pendingSizes.includes(size));
        sizeTag.setAttribute('aria-pressed', pendingSizes.includes(size));
        sizeTag.addEventListener('click', handleSizeTagClick);
        container.appendChild(sizeTag);
    });
}

function generateSizeOptionsInDropdown() {
    renderSizeOptions(footwearSizeOptionsDiv, footwearSizeSection, sizesInStock('footwear'));
    renderSizeOptions(clothingSizeOptionsDiv, clothingSizeSection, sizesInStock('clothing'));
}

// Escolher um tamanho no pop-up só conta depois de "Aplicar Filtro"
function handleSizeTagClick() {
    const size = this.dataset.size;
    if (pendingSizes.includes(size)) {
        pendingSizes = pendingSizes.filter(s => s !== size);
    } else {
        pendingSizes.push(size);
    }
    this.classList.toggle('selected', pendingSizes.includes(size));
    this.setAttribute('aria-pressed', pendingSizes.includes(size));
}

function updateSelectedSizeChips() {
    selectedSizeChipsContainer.innerHTML = '';
    selectedSizeChipsWrapper.classList.toggle('active', selectedSizes.length > 0);

    [...selectedSizes].sort(compareSizes).forEach(size => {
        const chip = document.createElement('div');
        chip.classList.add('selected-size-chip');

        const label = document.createElement('span');
        label.textContent = size;

        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.classList.add('remove-chip-btn');
        removeBtn.textContent = '×';
        removeBtn.setAttribute('aria-label', `Remover tamanho ${size}`);
        removeBtn.addEventListener('click', () => {
            selectedSizes = selectedSizes.filter(s => s !== size);
            pendingSizes = [...selectedSizes];
            refreshSizeFilterUi();
            filterAndSortProducts();
        });

        chip.append(label, removeBtn);
        selectedSizeChipsContainer.appendChild(chip);
    });
}

// O botão "Filtrar por Tamanho" fica ativo com o pop-up aberto ou com tamanhos aplicados
function refreshSizeFilterUi() {
    const isOpen = sizeFilterDropdown.classList.contains('show');
    toggleSizeFilterBtn.classList.toggle('active', isOpen || selectedSizes.length > 0);
    toggleSizeFilterBtn.setAttribute('aria-expanded', isOpen);
    updateSelectedSizeChips();
}

function openSizeFilter() {
    pendingSizes = [...selectedSizes];
    generateSizeOptionsInDropdown();
    sizeFilterDropdown.classList.add('show');
    refreshSizeFilterUi();
}

// Fechar sem aplicar descarta as escolhas por aplicar
function closeSizeFilter() {
    pendingSizes = [...selectedSizes];
    sizeFilterDropdown.classList.remove('show');
    refreshSizeFilterUi();
}

// --- Eventos -----------------------------------------------------------------
searchInput.addEventListener('input', (event) => {
    currentSearchTerm = event.target.value.trim();
    filterAndSortProducts();
});

// Ordenação e filtro de tamanhos são independentes: podem estar ativos ao mesmo tempo
sortButtons.forEach(button => {
    button.addEventListener('click', () => {
        sortButtons.forEach(btn => btn.classList.toggle('active', btn === button));
        currentFilter = button.dataset.filter;
        closeSizeFilter();
        filterAndSortProducts();
    });
});

toggleSizeFilterBtn.addEventListener('click', () => {
    if (sizeFilterDropdown.classList.contains('show')) {
        closeSizeFilter();
    } else {
        openSizeFilter();
    }
});

applySizeFilterBtn.addEventListener('click', () => {
    selectedSizes = [...pendingSizes];
    sizeFilterDropdown.classList.remove('show');
    refreshSizeFilterUi();
    filterAndSortProducts();
});

document.addEventListener('click', (event) => {
    const clickedInside = toggleSizeFilterBtn.contains(event.target) || sizeFilterDropdown.contains(event.target);
    if (!clickedInside && sizeFilterDropdown.classList.contains('show')) {
        closeSizeFilter();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && sizeFilterDropdown.classList.contains('show')) {
        closeSizeFilter();
        toggleSizeFilterBtn.focus();
    }
});

// --- Arranque ----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    refreshSizeFilterUi();
    filterAndSortProducts();
});
