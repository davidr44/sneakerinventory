// Dados dos teus produtos
const products = [
    // Adidas Campus
    {
        id: 1,
        name: "adidas Campus 00s Dark Green White Cloud White",
        sku: "H03472",
        price: 65.00,
        image: "https://hypevision.pt/cdn/shop/files/campusg-front.jpg?v=1751637933&width=720",
        sizes: [
            { size: "35.5", qty: 1 },
            { size: "39 1/3", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 4,
        name: "adidas Campus 00s Core Black",
        sku: "HQ8708",
        price: 75.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/adidas-campus-00s-black-hq6638-resellzone.jpg?v=1714558427&width=700",
        sizes: [
            { size: "36", qty: 1 },
            { size: "37 1/3", qty: 1 },
            { size: "38", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 7,
        name: "adidas Campus 00s Grey Gum (Kids)",
        sku: "HQ6507",
        price: 60.00,
        image: "https://hypevision.pt/cdn/shop/files/campusgrey-front.jpg?v=1751637891",
        sizes: [
            { size: "36 2/3", qty: 2 }
        ],
        category: "footwear"
    },
    {
        id: 5,
        name: "adidas Campus 00s Dark Green White (Kids)",
        sku: "IH7492",
        price: 50.00,
        image: "https://img01.ztat.net/article/spp-media-p1/59c4a1cbd62d41159c75677e9a5fe869/afcb006d75f54509b4c62d431540fe03.jpg?imwidth=1800&filter=packshot",
        sizes: [
            { size: "36 2/3", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 26,
        name: "adidas Campus 00s Youth of Paris",
        sku: "IE8349",
        price: 110.00,
        image: "https://i.ebayimg.com/images/g/6ZUAAOSwgGZmppfl/s-l1200.jpg",
        sizes: [
            { size: "46", qty: 1 }
        ],
        category: "footwear"
    },

    // Adidas Spezial e Samba
    {
        id: 11,
        name: "adidas Samba OG Cream White Strata (Women's)",
        sku: "ID0478",
        price: 75.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/adidas-samba-og-cream-white-sand-strata-id0478-resellzone.jpg?v=1736586570&width=900",
        sizes: [
            { size: "38 2/3", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 2,
        name: "adidas Handball Spezial Sporty & Rich Green",
        sku: "IH2148",
        price: 110.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/adidas-handball-spezial-sporty-rich-green-ih2148-resellzone.jpg?v=1722926991&width=700",
        sizes: [
            { size: "36 2/3", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 8,
        name: "adidas Handball Spezial Sporty & Rich Pink",
        sku: "IH2610",
        price: 110.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/adidas-handball-spezial-sporty-rich-pink-ih2610-resellzone.jpg?v=1717533476&width=900",
        sizes: [
            { size: "35.5", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 13,
        name: "adidas Handball Spezial Aluminum - Core Black (Women's)",
        sku: "IF6562",
        price: 80.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/adidas-handball-spezial-aluminum-core-black-if6562-resellzone.jpg?v=1742482381&width=900",
        sizes: [
            { size: "39 1/3", qty: 2 }
        ],
        category: "footwear"
    },

    // Nike SB Dunks
    {
        id: 17,
        name: "Nike SB Dunk Low Pro White Gum",
        sku: "CD2563-101",
        price: 120.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/nike-sb-dunk-low-pro-white-gum-cd2563-101-resellzone.jpg?v=1716626988&width=900",
        sizes: [
            { size: "40", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 19,
        name: "Nike SB Dunk Low Pro J-Pack Chicago (2020/2024)",
        sku: "BQ6817-600",
        price: 120.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/nike-sb-dunk-low-pro-j-pack-chicago-bq6817-600-resellzone.jpg?v=1716623695&width=900",
        sizes: [
            { size: "40.5", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 21,
        name: "Nike SB Dunk Low Pro ISO Orange Label Wolf",
        sku: "DV5464-001",
        price: 180.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/nike-sb-dunk-low-iso-orange-label-wolf-grey-gum-dv5464-001-resellzone.jpg?v=1716626354&width=900",
        sizes: [
            { size: "41", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 23,
        name: "Nike SB Dunk Low 'City Of Love Light Bone'",
        sku: "FZ5654-100",
        price: 170.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/nike-sb-dunk-low-city-of-love-light-bone-fz5654-100-resellzone.jpg?v=1716623778&width=900",
        sizes: [
            { size: "44", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 24,
        name: "Nike SB Dunk Low The Powerpuff Girls Blossom",
        sku: "FD2631-600",
        price: 280.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/nike-sb-dunk-low-the-powerpuff-girls-blossom-fd2631-600-resellzone.jpg?v=1716625325&width=900",
        sizes: [
            { size: "44", qty: 1 }
        ],
        category: "footwear"
    },

    // Nike Dunk Low
    {
        id: 3,
        name: "Nike Dunk Low Photon Dust (Women's)",
        sku: "DD1503-103",
        price: 70.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/nike-dunk-low-photon-dust-dd1503-103-resellzone.jpg?v=1717965290&width=700",
        sizes: [
            { size: "35.5", qty: 1 },
            { size: "36", qty: 1 },
            { size: "44.5", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 10,
        name: "Nike Dunk Low Pink Corduroy (Women's)",
        sku: "FN7167-100",
        price: 170.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/nike-dunk-low-pink-corduroy-fn7167-100-resellzone.jpg?v=1717962392&width=900",
        sizes: [
            { size: "38.5", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 16,
        name: "Nike Dunk Low Cacao Wow (Women's)",
        sku: "DD1503-124",
        price: 70.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/nike-dunk-low-cacao-wow-dd1503-124-resellzone.jpg?v=1717965367&width=900",
        sizes: [
            { size: "40", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 18,
        name: "Nike Dunk Low Midnight Navy University Blue",
        sku: "FN7800-400",
        price: 90.00,
        image: "https://i0.wp.com/www.garmspot.com/wp-content/uploads/2024/04/nike-dunk-low-navy-baby-blue_w1024_h1024_pad_-jpg.webp?fit=1024%2C1280&ssl=1",
        sizes: [
            { size: "40.5", qty: 1 },
            { size: "42.5", qty: 2 },
        ],
        category: "footwear"
    },
    {
        id: 28,
        name: "Nike Dunk Low Retro White Black Panda (Women's)",
        sku: "DD1503-101",
        price: 60.00,
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
        price: 80.00,
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
        price: 140.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/adidas-yeezy-slide-bone-fz5897-resellzone.jpg?v=1714496926&width=900",
        sizes: [
            { size: "43", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 25,
        name: "adidas Yeezy Slide Slate Marine",
        sku: "ID2349",
        price: 110.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/adidas-yeezy-slide-slate-marine-id2349-resellzone.jpg?v=1718714152&width=900",
        sizes: [
            { size: "44.5", qty: 1 }
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
        price: 190.00,
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
        image: "https://www.resellzonecesena.com/cdn/shop/files/air-jordan-1-retro-high-og-sp-union-la-bephies-beauty-supply-summer-of-96-fd2565-100-resellzone.jpg?v=1717598769",
        sizes: [
            { size: "40", qty: 1 }
        ],
        category: "footwear"
    },
    {
        id: 20,
        name: "Nike Air Max 95 Corteiz Honey Black",
        sku: "FB2709-003",
        price: 220.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/nike-air-max-95-corteiz-honey-black-fb2709-003-resellzone.jpg?v=1746002333&width=900",
        sizes: [
            { size: "41", qty: 1 }
        ],
        category: "footwear"
    },

    // T-shirts
    {
        id: 30,
        name: "Corteiz Car Crash Tee White",
        sku: "N/A",
        price: 35.00,
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
        price: 25.00,
        image: "https://images1.vinted.net/t/04_00c63_DwS2vKnTgH6uydToLTeuJULP/f800/1743872946.jpeg?s=c97a457732377bedd379ba6939cc2ebc747a2c16",
        sizes: [
            { size: "N/A", qty: 1 }
        ],
        category: "accessories"
    },
];

// Variáveis de estado
let currentFilter = 'all';
let currentSearchTerm = '';
let selectedSizes = [];

// Referências DOM
const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.controls .filter-btn:not(#toggleSizeFilterBtn)');
const toggleSizeFilterBtn = document.getElementById('toggleSizeFilterBtn');
const sizeFilterDropdown = document.getElementById('sizeFilterDropdown');
const footwearSizeOptionsDiv = document.getElementById('footwearSizeOptions'); // Renomeado para evitar conflito
const clothingSizeOptionsDiv = document.getElementById('clothingSizeOptions'); // NOVO: Referência para a div de Clothing
const applySizeFilterBtn = document.getElementById('applySizeFilterBtn');
const selectedSizeChipsContainer = document.getElementById('selectedSizeChipsContainer');
const selectedSizeChipsWrapper = document.getElementById('selectedSizeChipsWrapper');


// --- DEFINIÇÃO DOS TAMANHOS FIXOS DE ROUPA ---
const CLOTHING_SIZES = ["XS", "S", "M", "L", "XL", "XXL"]; // Tamanhos de roupa como pediste

// Função para exibir os produtos
function displayProducts(productsToDisplay) {
    productGrid.innerHTML = '';

    if (productsToDisplay.length === 0) {
        productGrid.innerHTML = '<p class="no-results">Nenhum produto encontrado com os filtros aplicados.</p>';
        return;
    }

    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Cria a lista de tamanhos disponíveis com quantidade e classe out-of-stock
        const sizesHtml = product.sizes.map(s => {
            // Ignora "Tamanho Unico" ao exibir nos cards
            if (s.size === "Tamanho Unico") return ''; 

            const qtyDisplay = s.qty > 0 ? ` (${s.qty})` : '';
            const outOfStockClass = s.qty === 0 ? ' out-of-stock' : '';
            return `<span class="size-tag-display${outOfStockClass}">${s.size}${qtyDisplay}</span>`;
        }).join('');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="sku">SKU: ${product.sku}</p>
                <p class="product-price">€${product.price.toFixed(2).replace('.', ',')}</p>
            </div>
            <div class="available-sizes">
                <span>Tamanhos Disponíveis:</span>
                ${sizesHtml}
            </div>
            <div class="product-actions">
                <a href="https://wa.me/351925263235?text=Ol%C3%A1,%20tenho%20interesse%20no%20produto%20${encodeURIComponent(product.name)}%20(SKU:%20${product.sku}).%20Pode%20dar-me%20mais%20informa%C3%A7%C3%B5es?" target="_blank" class="whatsapp-btn">
                    <i class="fab fa-whatsapp"></i> Contactar
                </a>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Função principal para filtrar e ordenar produtos
function filterAndSortProducts() {
    let filtered = [...products];

    // 1. Filtrar por termo de pesquisa
    if (currentSearchTerm) {
        const searchTermLower = currentSearchTerm.toLowerCase();
        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(searchTermLower) ||
            product.sku.toLowerCase().includes(searchTermLower)
        );
    }

    // 2. Filtrar por tamanhos selecionados
    if (selectedSizes.length > 0) {
        filtered = filtered.filter(product => {
            return selectedSizes.some(selectedSize => {
                // Ignora "Tamanho Unico" nos produtos ao filtrar, a menos que tenhas uma categoria específica para isso
                if (selectedSize === "Tamanho Unico") return false; 
                
                // Verifica se o produto tem o tamanho selecionado E se a quantidade é > 0
                return product.sizes.some(s => s.size === selectedSize && s.qty > 0);
            });
        });
    }

    // 3. Ordenar
    if (currentFilter === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentFilter === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    }

    displayProducts(filtered);
}

// Função para gerar as tags de tamanho para o pop-up
function generateSizeOptionsInDropdown() {
    // 1. Coleta tamanhos de Calçado (apenas de produtos de calçado e em stock)
    const footwearSizes = new Set();
    products.forEach(product => {
        if (product.category === 'footwear') {
            product.sizes.forEach(s => {
                if (s.qty > 0 && s.size !== "Tamanho Unico") { // Adicionado s.size !== "Tamanho Unico" para garantir
                    footwearSizes.add(s.size);
                }
            });
        }
    });

    // Ordenação personalizada para tamanhos de calçado
    const sortedFootwearSizes = Array.from(footwearSizes).sort((a, b) => {
        const parseSize = (sizeStr) => {
            sizeStr = sizeStr.replace(',', '.').trim();
            if (sizeStr.includes(' ')) {
                const parts = sizeStr.split(' ');
                let whole = parseFloat(parts[0]);
                if (parts[1] === '1/2') return whole + 0.5;
                if (parts[1] === '1/3') return whole + 1/3;
                if (parts[1] === '2/3') return whole + 2/3;
            }
            return parseFloat(sizeStr);
        };

        const numA = parseSize(a);
        const numB = parseSize(b);

        if (!isNaN(numA) && !isNaN(numB)) {
            return numA - numB;
        } else if (!isNaN(numA)) {
            return -1;
        } else if (!isNaN(numB)) {
            return 1;
        }
        return a.localeCompare(b);
    });

    // Popula a secção de calçado
    footwearSizeOptionsDiv.innerHTML = '';
    sortedFootwearSizes.forEach(size => {
        const sizeTag = document.createElement('button');
        sizeTag.classList.add('size-tag');
        sizeTag.textContent = size;
        sizeTag.dataset.size = size;

        if (selectedSizes.includes(size)) {
            sizeTag.classList.add('selected');
        }
        sizeTag.addEventListener('click', handleSizeTagClick); // Reusa o handler de clique
        footwearSizeOptionsDiv.appendChild(sizeTag);
    });

    // 2. Popula os tamanhos de Roupa (usando o array fixo)
    clothingSizeOptionsDiv.innerHTML = '';
    CLOTHING_SIZES.forEach(size => {
        const sizeTag = document.createElement('button');
        sizeTag.classList.add('size-tag');
        sizeTag.textContent = size;
        sizeTag.dataset.size = size;

        // Se o tamanho estiver selecionado, marca como selecionado
        if (selectedSizes.includes(size)) {
            sizeTag.classList.add('selected');
        }
        // Adiciona a lógica de clique
        sizeTag.addEventListener('click', handleSizeTagClick); // Reusa o handler de clique
        clothingSizeOptionsDiv.appendChild(sizeTag);
    });
}

// Handler para cliques nos botões de tamanho (reutilizado para calçado e roupa)
function handleSizeTagClick() {
    const size = this.dataset.size;
    if (this.classList.contains('selected')) {
        this.classList.remove('selected');
        selectedSizes = selectedSizes.filter(s => s !== size);
    } else {
        this.classList.add('selected');
        selectedSizes.push(size);
    }
    updateSelectedSizeChips(); // Atualiza os chips em tempo real
    // Não chama filterAndSortProducts() aqui, só ao clicar em "Aplicar Filtro"
}


// Função para atualizar os chips de tamanho selecionados
function updateSelectedSizeChips() {
    selectedSizeChipsContainer.innerHTML = ''; // Limpa os chips existentes

    // Adiciona ou remove a classe 'active' do wrapper dos chips
    if (selectedSizes.length > 0) {
        selectedSizeChipsWrapper.classList.add('active');
    } else {
        selectedSizeChipsWrapper.classList.remove('active');
    }

    const sortedSelectedSizes = [...selectedSizes].sort((a, b) => {
        // Lógica de ordenação para chips (prioriza números, depois alfabético)
        const parseSize = (sizeStr) => {
            sizeStr = sizeStr.replace(',', '.').trim();
            if (!isNaN(parseFloat(sizeStr))) {
                return parseFloat(sizeStr);
            }
            // Para tamanhos como XS, S, M, L, XL
            const order = { "XS": 1, "S": 2, "M": 3, "L": 4, "XL": 5, "XXL": 6 };
            return order[sizeStr] || 99; // Retorna um número alto para tamanhos não reconhecidos
        };
        const numA = parseSize(a);
        const numB = parseSize(b);

        if (numA !== 99 && numB !== 99) { // Ambos são tamanhos de roupa ou numéricos
            return numA - numB;
        } else if (numA !== 99) { // A é roupa/numérico, B não
            return -1;
        } else if (numB !== 99) { // B é roupa/numérico, A não
            return 1;
        }
        return a.localeCompare(b); // Ambos são outros tipos, ordena alfabeticamente
    });

    sortedSelectedSizes.forEach(size => {
        const chip = document.createElement('div');
        chip.classList.add('selected-size-chip');
        chip.innerHTML = `
            <span>${size}</span>
            <button class="remove-chip-btn" data-size="${size}">x</button>
        `;
        chip.querySelector('.remove-chip-btn').addEventListener('click', (event) => {
            const sizeToRemove = event.target.dataset.size;
            selectedSizes = selectedSizes.filter(s => s !== sizeToRemove);
            updateSelectedSizeChips();
            generateSizeOptionsInDropdown(); // Atualiza o estado das tags no pop-up
            filterAndSortProducts();
        });
        selectedSizeChipsContainer.appendChild(chip);
    });
}


// --- Event Listeners ---

// Pesquisa
searchInput.addEventListener('input', (event) => {
    currentSearchTerm = event.target.value.trim();
    filterAndSortProducts();
});

// Botões de filtro de ordenação (Padrão, Menor-Maior, Maior-Menor)
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        toggleSizeFilterBtn.classList.remove('active'); // Desativa o botão "Filtrar por Tamanho" também, se estiver ativo
        button.classList.add('active');

        sizeFilterDropdown.classList.remove('show'); // Esconde o dropdown de tamanho

        currentFilter = button.dataset.filter;
        filterAndSortProducts();
    });
});

// Event Listener para o botão "Filtrar por Tamanho" (para mostrar/esconder o pop-up)
toggleSizeFilterBtn.addEventListener('click', () => {
    sizeFilterDropdown.classList.toggle('show');
    toggleSizeFilterBtn.classList.toggle('active');

    if (sizeFilterDropdown.classList.contains('show')) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        generateSizeOptionsInDropdown(); // Garante que as tags no pop-up estão atualizadas cada vez que abre
    } else {
        // Se o dropdown for fechado (sem aplicar filtro explicitamente), e não há tamanhos selecionados, o botão padrão deve ficar ativo.
        if (selectedSizes.length === 0) {
            document.querySelector('[data-filter="all"]').classList.add('active');
        }
    }
    filterAndSortProducts(); // Aplica o filtro imediatamente ao abrir/fechar o pop-up
});

// Event Listener para o botão "Aplicar Filtro" no pop-up
applySizeFilterBtn.addEventListener('click', () => {
    sizeFilterDropdown.classList.remove('show');

    if (selectedSizes.length > 0) {
        toggleSizeFilterBtn.classList.add('active');
        filterButtons.forEach(btn => btn.classList.remove('active'));
    } else {
        toggleSizeFilterBtn.classList.remove('active');
        document.querySelector('[data-filter="all"]').classList.add('active');
    }

    filterAndSortProducts(); // Aplica o filtro com os tamanhos selecionados
});

// Fechar o dropdown de tamanho se clicar fora dele
document.addEventListener('click', (event) => {
    if (!toggleSizeFilterBtn.contains(event.target) && !sizeFilterDropdown.contains(event.target) && !searchInput.contains(event.target)) {
        if (sizeFilterDropdown.classList.contains('show')) {
            sizeFilterDropdown.classList.remove('show');
            if (selectedSizes.length === 0) {
                toggleSizeFilterBtn.classList.remove('active');
                document.querySelector('[data-filter="all"]').classList.add('active');
            }
        }
    }
});


// --- Inicialização ---
document.addEventListener('DOMContentLoaded', () => {
    // Certifica-te que o botão 'Padrão' está ativo na carga inicial
    document.querySelector('[data-filter="all"]').classList.add('active');
    updateSelectedSizeChips(); // Garante que chips existentes (se houver, ex: na recarga) são mostrados
    filterAndSortProducts(); // Exibe os produtos iniciais
});
