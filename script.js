// Dados de produtos com fotos por URL
const produtos = [
  { id: 1, nome: "Carregador h'maston 15W tipo C", categoria: "carregadores", preco: 25, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2FWhatsApp%20Image%202025-12-30%20at%2011.35.20.jpeg?alt=media&token=fb8a8ebb-1fa0-4643-99fd-a49f8ebf7744" },
  { id: 2, nome: "Cabo de transferência e carga : Iphone(ios)", categoria: "cabos", preco: 29.90, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2FWhatsApp%20Image%202025-12-30%20at%2011.37.04.jpeg?alt=media&token=53de3dcc-4b43-4bdd-a197-c55b08737104" },
  { id: 3, nome: "Headphone Lehmox Gamer", categoria: "fones", preco: 90, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2FWhatsApp%20Image%202025-12-30%20at%2011.39.11.jpeg?alt=media&token=d1938676-17ae-40a0-bc16-fb70a67b1a14" },
  { id: 4, nome: "KTS charge carregador V8", categoria: "carregadores", preco: 20, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2FWhatsApp%20Image%202025-12-30%20at%2011.35.38.jpeg?alt=media&token=4ea45dfa-ef0e-4346-997a-e0faaeedaada" },
  { id: 5, nome: "Headphone E-Sports Gamer", categoria: "fones", preco: 120, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2FWhatsApp%20Image%202025-12-30%20at%2011.40.28.jpeg?alt=media&token=dc12c10b-2f0f-413c-9bf4-22cd69f51b71" },
];

// Estado
let carrinho = [];

// Elementos
const produtosEl = document.getElementById("produtos");
const menuEl = document.getElementById("menuCategorias");
const carrinhoEl = document.getElementById("carrinho");
const listaCarrinhoEl = document.getElementById("listaCarrinho");
const menuIconEl = document.getElementById("menuIcon");
const cartIconEl = document.getElementById("cartIcon");
const fecharCarrinhoEl = document.getElementById("fecharCarrinho");
const finalizarEl = document.getElementById("finalizar");

// Render de produtos
function renderizarProdutos(lista) {
  produtosEl.innerHTML = "";
  lista.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.nome}">
      <h3 class="title">${p.nome}</h3>
      <p class="price">R$ ${p.preco.toFixed(2)}</p>
      <div class="actions">
        <button class="btn success full" onclick="adicionarCarrinho(${p.id})">Adicionar</button>
      </div>
    `;
    produtosEl.appendChild(card);
  });
}

// Filtro por categoria
function filtrarCategoria(cat) {
  const lista = cat === "todos" ? produtos : produtos.filter(p => p.categoria === cat);
  renderizarProdutos(lista);
}

// Atualiza UI do carrinho
function atualizarCarrinho() {
  listaCarrinhoEl.innerHTML = "";
  carrinho.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="name">${item.nome}</span>
      <span class="price">R$ ${item.preco.toFixed(2)}</span>
      <button class="remove" onclick="removerItem(${index})">Remover</button>
    `;
    listaCarrinhoEl.appendChild(li);
  });
}

// Remover item
function removerItem(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

// Adicionar ao carrinho e abrir carrinho automaticamente
function adicionarCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  if (!produto) return;
  carrinho.push(produto);
  atualizarCarrinho();
  // Fecha menu se estiver aberto e abre carrinho
  if (menuEl.classList.contains("open")) menuEl.classList.remove("open");
  if (!carrinhoEl.classList.contains("open")) carrinhoEl.classList.add("open");
  // Scroll suave para topo (garantir visibilidade do carrinho)
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Finalizar no WhatsApp
finalizarEl.addEventListener("click", () => {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }
  const mensagemLinhas = carrinho.map(item => `- ${item.nome} (R$ ${item.preco.toFixed(2)})`);
  const texto = encodeURIComponent(`Olá, gostaria de comprar:\n${mensagemLinhas.join("\n")}`);
  // Substitua pelo seu número (com DDI/DDD) ex: 55 65 9XXXX-XXXX
  const url = `https://wa.me/5565993090239?text=${texto}`;
  window.open(url, "_blank");
});

// Alternar carrinho (e fechar menu se aberto)
cartIconEl.addEventListener("click", () => {
  if (menuEl.classList.contains("open")) menuEl.classList.remove("open");
  carrinhoEl.classList.toggle("open");
});

// Fechar carrinho
fecharCarrinhoEl.addEventListener("click", () => {
  carrinhoEl.classList.remove("open");
});

// Alternar menu categorias (e fechar carrinho se aberto)
menuIconEl.addEventListener("click", () => {
  if (carrinhoEl.classList.contains("open")) carrinhoEl.classList.remove("open");
  menuEl.classList.toggle("open");
});

// Inicialização
renderizarProdutos(produtos);
