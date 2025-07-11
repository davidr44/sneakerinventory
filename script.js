// Dados dos teus produtos
const products = [
    {
        id: 1,
        name: "adidas Campus 00s Dark Green White Cloud White",
        sku: "H03472", // Por favor, adicione o SKU se tiver
        price: 80.00, // POR FAVOR, SUBSTITUA PELO PREÇO REAL
        image: "https://img.hypeboost.com/products/adidas-originals-campus-00s-dark-green/w900/img01.jpg", // POR FAVOR, SUBSTITUA PELA URL REAL DA IMAGEM
        sizes: [
            { size: "35.5", qty: 1 },
            { size: "39 1/3", qty: 1 }
        ]
    },
    {
        id: 2,
        name: "adidas Handball Spezial Sporty & Rich Green",
        sku: "IH2148",
        price: 120.00,
        image: "https://img.hypeboost.com/products/adidas-handball-spezial-sporty-rich-green/w900/img01.jpg",
        sizes: [
            { size: "36 2/3", qty: 1 }
        ]
    },
    {
        id: 3,
        name: "Nike Dunk Low Photon Dust (Women's)",
        sku: "DD1503-103",
        price: 0.00,
        image: "https://img.hypeboost.com/products/nike-dunk-low-photon-dust-w/w900/img01.jpg",
        sizes: [
            { size: "35.5", qty: 1 },
            { size: "36", qty: 1 },
            { size: "44.5", qty: 1 } // Note que este tamanho aparece mais abaixo na sua lista, agrupei aqui.
        ]
    },
    {
        id: 4,
        name: "adidas Campus 00s Core Black",
        sku: "HQ8708",
        price: 0.00,
        image: "https://szopex.blob.core.windows.net/shops/media/f1000/2023/adidas/214937/adidas-campus-00s-core-black-hq8708-66605a93a67a6.webp",
        sizes: [
            { size: "36", qty: 1 },
            { size: "37 1/3", qty: 1 }, // Note que este tamanho aparece mais abaixo na sua lista, agrupei aqui.
            { size: "38", qty: 1 } // Note que este tamanho aparece mais abaixo na sua lista, agrupei aqui.
        ]
    },
    {
        id: 5,
        name: "adidas Campus 00s Dark Green White (Kids)", // Assume-se que é o mesmo modelo do primeiro, mas para Kids
        sku: "IH7492",
        price: 0.00,
        image: "https://mthorshop.com/cdn/shop/products/adidas-campus-00s-dark-green-cloud-white-enfant-1.png?v=1715339115",
        sizes: [
            { size: "36 2/3", qty: 1 }
        ]
    },
    {
        id: 6,
        name: "Nike Dunk High Aluminum (Women's)",
        sku: "DD1869-107",
        price: 0.00,
        image: "https://img.hypeboost.com/products/nike-dunk-high-aluminum-w/w900/img01.jpg",
        sizes: [
            { size: "36.5", qty: 1 }
        ]
    },
    {
        id: 7,
        name: "adidas Campus 00s Grey Gum (Kids)",
        sku: "HQ6507",
        price: 0.00,
        image: "https://collectkicks.pt/cdn/shop/files/AdidasCampus00sGreyWhiteGSlateral_1080x.webp?v=1710785206",
        sizes: [
            { size: "36 2/3", qty: 2 }
        ]
    },
    {
        id: 8,
        name: "adidas Handball Spezial Sporty & Rich Pink",
        sku: "IH2610",
        price: 0.00,
        image: "https://img.hypeboost.com/products/adidas-handball-spezial-sporty-rich-pink/w900/img01.jpg",
        sizes: [
            { size: "35.5", qty: 1 }
        ]
    },
    {
        id: 9,
        name: "Nike Dunk Low UNC (2021) (GS)",
        sku: "CW1590-103",
        price: 0.00,
        image: "https://img.hypeboost.com/products/nike-dunk-low-unc-2021-gs/w900/img01.jpg",
        sizes: [
            { size: "38", qty: 1 }
        ]
    },
    {
        id: 10,
        name: "Nike Dunk Low Pink Corduroy (Women's)",
        sku: "FN7167-100",
        price: 0.00,
        image: "https://img.hypeboost.com/products/nike-dunk-low-pink-corduroy-w/w900/img01.jpg",
        sizes: [
            { size: "38.5", qty: 1 }
        ]
    },
    {
        id: 11,
        name: "adidas Samba OG Cream White Strata (Women's)",
        sku: "ID0478",
        price: 0.00,
        image: "https://img.hypeboost.com/products/adidas-samba-og-cream-white-sand-strata-womens/w900/img01.jpg",
        sizes: [
            { size: "38 2/3", qty: 1 }
        ]
    },
    {
        id: 12,
        name: "Ami Paris Small Red Ami De Coeur T-shirt- White", // Não sei se é diferente do primeiro DG White
        sku: "BFUTS001.724",
        price: 0.00,
        image: "https://hypevision.pt/cdn/shop/files/amiwhitetee-single.jpg?v=1751637812&width=720",
        sizes: [
            { size: "M", qty: 1 }
        ]
    },
    {
        id: 13,
        name: "adidas Handball Spezial Aluminum - Core Black (Women's)",
        sku: "IF6562",
        price: 0.00,
        image: "https://img.hypeboost.com/products/adidas-handball-spezial-aluminum-core-black-womens/w900/img01.jpg",
        sizes: [
            { size: "39 1/3", qty: 2 }
        ]
    },
    {
        id: 14,
        name: "Corteiz Green Alcatraz Trucker Hat",
        sku: "N/A",
        price: 0.00,
        image: "https://images1.vinted.net/t/04_00c63_DwS2vKnTgH6uydToLTeuJULP/f800/1743872946.jpeg?s=c97a457732377bedd379ba6939cc2ebc747a2c16",
        sizes: [
            { size: "Tamanho Unico", qty: 1 }
        ]
    },
    {
        id: 15,
        name: "Jordan 1 Retro High OG Palomino",
        sku: "DZ5485-020",
        price: 0.00,
        image: "https://img.hypeboost.com/products/air-jordan-1-retro-high-og-palomino/w900/img01.jpg",
        sizes: [
            { size: "40", qty: 1 }
        ]
    },
    {
        id: 16,
        name: "Nike Dunk Low Cacao Wow (Women's)",
        sku: "DD1503-124",
        price: 0.00,
        image: "https://img.hypeboost.com/products/nike-dunk-low-cacao-wow-w/w900/img01.jpg",
        sizes: [
            { size: "40", qty: 1 }
        ]
    },
    {
        id: 17,
        name: "Nike SB Dunk Low Pro White Gum",
        sku: "CD2563-101",
        price: 0.00,
        image: "https://img.hypeboost.com/products/nike-sb-dunk-low-white-gum/w900/img01.jpg",
        sizes: [
            { size: "40", qty: 1 }
        ]
    },
    {
        id: 18,
        name: "Nike Dunk Low Midnight Navy University Blue",
        sku: "FN7800-400",
        price: 0.00,
        image: "https://img.hypeboost.com/products/nike-dunk-low-midnight-navy-university-blue/w900/img01.jpg",
        sizes: [
            { size: "40.5", qty: 1 },
            { size: "42.5", qty: 2 }, // Note que este tamanho aparece mais abaixo na sua lista, agrupei aqui.
             // Note que este tamanho aparece mais abaixo na sua lista, agrupei aqui.
        ]
    },
    {
        id: 19,
        name: "Nike SB Dunk Low Pro J-Pack Chicago (2020/2024)",
        sku: "BQ6817-600",
        price: 0.00,
        image: "https://img.hypeboost.com/products/nike-sb-dunk-low-j-pack-chicago/w900/img01.jpg",
        sizes: [
            { size: "40.5", qty: 1 }
        ]
    },
    {
        id: 20,
        name: "Nike Air Max 95 Corteiz Honey Black",
        sku: "FB2709-003",
        price: 0.00,
        image: "https://img.hypeboost.com/products/nike-air-max-95-corteiz-honey-black/w900/img01.jpg",
        sizes: [
            { size: "41", qty: 1 }
        ]
    },
    {
        id: 21,
        name: "Nike SB Dunk Low Pro ISO Orange Label Wolf",
        sku: "DV5464-001",
        price: 0.00,
        image: "https://img.hypeboost.com/products/nike-sb-dunk-low-pro-iso-orange-label-grey-gum/w900/img01.jpg",
        sizes: [
            { size: "41", qty: 1 }
        ]
    },
    {
        id: 22,
        name: "adidas Yeezy Slide Bone (2022 Restock)",
        sku: "FZ5897",
        price: 0.00,
        image: "https://img.hypeboost.com/products/adidas-yeezy-slide-bone-2022/w900/img01.jpg",
        sizes: [
            { size: "43", qty: 1 }
        ]
    },
    {
        id: 23,
        name: "Nike SB Dunk Low 'City Of Love Light Bone'",
        sku: "FZ5654-100",
        price: 0.00,
        image: "https://img.hypeboost.com/products/nike-sb-dunk-low-city-of-love-light-bone/w900/img01.jpg",
        sizes: [
            { size: "44", qty: 1 }
        ]
    },
    {
        id: 24,
        name: "Nike SB Dunk Low The Powerpuff Girls Blossom",
        sku: "FD2631-600",
        price: 0.00,
        image: "https://img.hypeboost.com/products/the-powerpuff-girls-x-nike-sb-dunk-low-blossom/w900/img01.jpg",
        sizes: [
            { size: "44", qty: 1 }
        ]
    },
    {
        id: 25,
        name: "adidas Yeezy Slide Slate Marine",
        sku: "ID2349",
        price: 0.00,
        image: "https://img.hypeboost.com/products/yeezy-slide-slate-marine/w900/img01.jpg",
        sizes: [
            { size: "44.5", qty: 1 }
        ]
    },
    {
        id: 26,
        name: "adidas Campus 00s Youth of Paris",
        sku: "IE8349",
        price: 0.00,
        image: "https://img.hypeboost.com/products/youth-of-paris-x-adidas-campus-00s-black/w900/img01.jpg",
        sizes: [
            { size: "46", qty: 1 }
        ]
    },
     {
        id: 27,
        name: "Jordan 1 Retro High OG SP Union LA Bephies Beauty Supply Summer of ‘96",
        sku: "FD2565-100",
        price: 0.00,
        image: "https://www.resellzonecesena.com/cdn/shop/files/air-jordan-1-retro-high-og-sp-union-la-bephies-beauty-supply-summer-of-96-fd2565-100-resellzone.jpg?v=1717598769",
        sizes: [
            { size: "40", qty: 1 }
        ]
    },
    {
        id: 28,
        name: "Nike Dunk Low Retro White Black Panda (Women's)",
        sku: "DD1503-101",
        price: 0.00,
        image: "https://img.hypeboost.com/products/nike-dunk-low-white-black-2021-w/w900/img01.jpg",
        sizes: [
            { size: "36", qty: 1 }
        ]
    },
     {
        id: 29,
        name: "adidas Yeezy Slide Azure",
        sku: "ID4133",
        price: 0.00,
        image: "https://decokicks.pt/cdn/shop/files/unnamed_d4eb9af9-510f-4ddf-84d7-e94ec6afebc6.png?v=1704899477",
        sizes: [
            { size: "43", qty: 1 }
        ]
    },
    {
        id: 30,
        name: "Corteiz Car Crash Tee White",
        sku: "n/a",
        price: 0.00,
        image: "https://images.stockx.com/images/Corteiz-Car-Crash-Tee-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1690990064",
        sizes: [
            { size: "S", qty: 1 }
        ]
    },
];

// Variáveis de estado
let currentFilter = 'all'; // 'all', 'price-asc', 'price-desc'
let currentSearchTerm = '';
let selectedSizes = []; // AGORA É UM ARRAY PARA MULTIPLAS SELEÇÕES DE TAMANHO


// Referências DOM
const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');

// Seleciona os botões de filtro de ordenação (Padrão, Menor-Maior, Maior-Menor)
// Excluímos o toggleSizeFilterBtn para não o incluir nesta coleção, pois ele tem um comportamento diferente.
const filterButtons = document.querySelectorAll('.controls .filter-btn:not(#toggleSizeFilterBtn)');

const toggleSizeFilterBtn = document.getElementById('toggleSizeFilterBtn');
const sizeFilterDropdown = document.getElementById('sizeFilterDropdown');
const footwearSizeOptions = document.getElementById('footwearSizeOptions');
const applySizeFilterBtn = document.getElementById('applySizeFilterBtn');
const selectedSizeChipsContainer = document.getElementById('selectedSizeChipsContainer');
const selectedSizeChipsWrapper = document.getElementById('selectedSizeChipsWrapper');


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
                <a href="https://wa.me/351925263235?text=Ol%C3%A1,%20tenho%20interesse%20no%20${encodeURIComponent(product.name)}%20(SKU:%20${product.sku}).%20Pode%20dar-me%20mais%20informa%C3%A7%C3%B5es?" target="_blank" class="whatsapp-btn">
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

    // 2. Filtrar por tamanhos selecionados (verifica se o produto tem PELO MENOS UM dos tamanhos selecionados com qty > 0)
    if (selectedSizes.length > 0) {
        filtered = filtered.filter(product => {
            return selectedSizes.some(selectedSize =>
                product.sizes.some(s => s.size === selectedSize && s.qty > 0)
            );
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

// Função para gerar as tags de tamanho únicas para o pop-up
function generateUniqueSizeTags() {
    const allSizes = new Set();
    products.forEach(product => {
        product.sizes.forEach(s => {
            if (s.qty > 0) { // Apenas tamanhos em stock
                allSizes.add(s.size);
            }
        });
    });

    // Lógica de ordenação personalizada para tamanhos (ex: "35 1/2" antes de "36")
    const sortedSizes = Array.from(allSizes).sort((a, b) => {
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

    footwearSizeOptions.innerHTML = ''; // Limpa a secção
    sortedSizes.forEach(size => {
        const sizeTag = document.createElement('button');
        sizeTag.classList.add('size-tag');
        sizeTag.textContent = size;
        sizeTag.dataset.size = size;

        if (selectedSizes.includes(size)) {
            sizeTag.classList.add('selected');
        }

        sizeTag.addEventListener('click', () => {
            if (sizeTag.classList.contains('selected')) {
                sizeTag.classList.remove('selected');
                selectedSizes = selectedSizes.filter(s => s !== size);
            } else {
                sizeTag.classList.add('selected');
                selectedSizes.push(size);
            }
            updateSelectedSizeChips(); // Atualiza os chips em tempo real
        });
        footwearSizeOptions.appendChild(sizeTag);
    });
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
        }
        return a.localeCompare(b);
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
            generateUniqueSizeTags(); // Atualiza o estado das tags no pop-up
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

// Botões de filtro (Padrão, Menor-Maior, Maior-Menor)
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active')); // Desativa outros botões de ordenação
        toggleSizeFilterBtn.classList.remove('active'); // Desativa o botão "Filtrar por Tamanho" também, se estiver ativo
        button.classList.add('active'); // Ativa o botão clicado

        // Esconde o dropdown de tamanho se ele estiver visível
        sizeFilterDropdown.classList.remove('show');

        currentFilter = button.dataset.filter;
        filterAndSortProducts();
    });
});

// Event Listener para o botão "Filtrar por Tamanho" (para mostrar/esconder o pop-up)
toggleSizeFilterBtn.addEventListener('click', () => {
    sizeFilterDropdown.classList.toggle('show');
    toggleSizeFilterBtn.classList.toggle('active'); // Ativa/desativa o próprio botão de toggle

    if (sizeFilterDropdown.classList.contains('show')) {
        // Se o dropdown for aberto, remove 'active' dos outros botões de ordenação
        filterButtons.forEach(btn => btn.classList.remove('active'));
        generateUniqueSizeTags(); // Garante que as tags no pop-up estão atualizadas cada vez que abre
    } else {
        // Se o dropdown for fechado (sem aplicar filtro explicitamente),
        // e não há tamanhos selecionados, o botão padrão deve ficar ativo.
        if (selectedSizes.length === 0) {
            document.querySelector('[data-filter="all"]').classList.add('active');
        }
    }
    filterAndSortProducts(); // Aplica o filtro imediatamente ao abrir/fechar o pop-up
});

// Event Listener para o botão "Aplicar Filtro" no pop-up
applySizeFilterBtn.addEventListener('click', () => {
    sizeFilterDropdown.classList.remove('show'); // Esconde o pop-up

    // Se há tamanhos selecionados, o botão "Filtrar por Tamanho" deve ficar ativo (preto).
    // Caso contrário, deve voltar ao estado normal.
    if (selectedSizes.length > 0) {
        toggleSizeFilterBtn.classList.add('active');
        // Remove a classe 'active' de outros botões de ordenação se algum tamanho for aplicado
        filterButtons.forEach(btn => btn.classList.remove('active'));
    } else {
        toggleSizeFilterBtn.classList.remove('active');
        // Se nenhum tamanho for selecionado, o botão "Padrão" deve ser ativo.
        document.querySelector('[data-filter="all"]').classList.add('active');
    }

    filterAndSortProducts(); // Aplica o filtro com os tamanhos selecionados
});

// Fechar o dropdown de tamanho se clicar fora dele
document.addEventListener('click', (event) => {
    // Verifica se o clique foi fora do botão de toggle e fora do próprio dropdown
    // Adiciona searchInput.contains(event.target) para não fechar se clicar na search bar
    if (!toggleSizeFilterBtn.contains(event.target) && !sizeFilterDropdown.contains(event.target) && !searchInput.contains(event.target)) {
        if (sizeFilterDropdown.classList.contains('show')) {
            sizeFilterDropdown.classList.remove('show');
            // Se fechar e não houver tamanhos selecionados, reativa o botão Padrão
            if (selectedSizes.length === 0) {
                toggleSizeFilterBtn.classList.remove('active');
                document.querySelector('[data-filter="all"]').classList.add('active');
            }
        }
    }
});


// --- Inicialização ---
// Apenas renderiza os produtos inicialmente, os tamanhos são gerados ao abrir o pop-up
document.addEventListener('DOMContentLoaded', () => {
    // Certifica-te que o botão 'Padrão' está ativo na carga inicial
    document.querySelector('[data-filter="all"]').classList.add('active');
    updateSelectedSizeChips(); // Garante que chips existentes (se houver, ex: na recarga) são mostrados
    filterAndSortProducts(); // Exibe os produtos iniciais
});
