
const produtos = [
  { id: 1, nome: "Carregador h'maston 15W tipo C", categoria: "carregadores", preco: 25, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2FWhatsApp%20Image%202025-12-30%20at%2011.35.20.jpeg?alt=media&token=fb8a8ebb-1fa0-4643-99fd-a49f8ebf7744" },
  { id: 2, nome: "Cabo de transferência e carga : Iphone(ios) e V8", categoria: "cabos", preco: 29.90, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2FWhatsApp%20Image%202025-12-30%20at%2011.37.04.jpeg?alt=media&token=53de3dcc-4b43-4bdd-a197-c55b08737104" },
  { id: 3, nome: "Headphone Lehmox Gamer", categoria: "fones", preco: 90, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2FWhatsApp%20Image%202025-12-30%20at%2011.39.11.jpeg?alt=media&token=d1938676-17ae-40a0-bc16-fb70a67b1a14" },
  { id: 4, nome: "KTS charge carregador V8", categoria: "carregadores", preco: 20, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2FWhatsApp%20Image%202025-12-30%20at%2011.35.38.jpeg?alt=media&token=4ea45dfa-ef0e-4346-997a-e0faaeedaada" },
  { id: 5, nome: "Headphone E-Sports Gamer", categoria: "fones", preco: 120, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2FWhatsApp%20Image%202025-12-30%20at%2011.40.28.jpeg?alt=media&token=dc12c10b-2f0f-413c-9bf4-22cd69f51b71" },
  { id: 6, nome: "Karaoke portatil", categoria: "som", preco: 70, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2Fkaraoke%20portatil.jpeg?alt=media&token=611e819e-0fcd-48ec-bc7a-89e970f9140b" },
  { id: 7, nome: "Caixa de som Lotso-A1", categoria: "som", preco: 60, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2Flotso%20a1.jpeg?alt=media&token=44aea9ec-b8be-41ec-93b9-cbb0f41b2820" },
  { id: 8, nome: "Carregador motorola 50 turbo", categoria: "carregadores", preco: 50, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2Fcarregador%20motorola%2050.jpeg?alt=media&token=1a93c7c0-8a8e-4381-99b3-2bfdbd1e39c7" },
  { id: 9, nome: "Carregador por indução", categoria: "carregadores", preco: 70, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2FCarregador%20por%20indu%C3%A7%C3%A3o.jpeg?alt=media&token=03bdbc97-5e1c-4d5f-961e-a521d3475b17" },
  { id: 10, nome: "Controle de Tv box", categoria: "controles", preco: 25, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2Fcontrole%20tv%20box.jpeg?alt=media&token=0eaedda7-b5cb-4a4d-83c9-2430775971f0" },
  { id: 11, nome: "Controle Universal", categoria: "controles", preco: 30, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2FControle%20universal.jpeg?alt=media&token=99624d14-051a-480a-90e7-004862e1d54b" },
  { id: 12, nome: "Controle De Ar", categoria: "controles", preco: 45, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2FControle%20de%20ar.jpeg?alt=media&token=228507d9-f3a7-47d1-b982-bafee443c63a" },
  { id: 13, nome: "Carregador sem cabo 2 entrada turbo", categoria: "carregadoresveicular", preco: 25, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2Fcarregador%20veicular%2Fcarregador%20veicular%20sem%20cabo.jpeg?alt=media&token=c4dec5c1-e66b-41db-a11d-938b00ed5003" },
  { id: 14, nome: "Carregador Com cabo, tipo C, v8 E iOS turbo", categoria: "carregadoresveicular", preco: 35, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2Fcarregador%20veicular%2FCarregador%20veicular%20com%20cabo.jpeg?alt=media&token=3bc550b0-12bd-4a3a-abd6-ab8fc2680eff" },
  { id: 15, nome: "Carregador sem cabo 8 entrada turbo", categoria: "carregadoresveicular", preco: 50, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2Fcarregador%20veicular%2Fcarregador%20veicular%208%20entrada.jpeg?alt=media&token=a2a70eb1-27f6-4d42-8168-d6ac2513aac9" },
  { id: 16, nome: "Carregado sem cabo 5 entrada turbo", categoria: "carregadoresveicular", preco: 45, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2Fcarregador%20veicular%2Fcarregador%20veicular%205%20entrada.jpeg?alt=media&token=16aee24b-2bc0-4e91-b859-14b5ed58da56" },
  { id: 17, nome: "Carregador Turbo Iphone(IOS)", categoria: "carregadores", preco: 32, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2FCarregador%20iphone.jpeg?alt=media&token=407ece36-1b62-4e8f-b634-ee09ab987478" },
  { id: 18, nome: "Carregador turbo 2 ponta tipo C", categoria: "carregadores", preco: 50, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2Fcarregador%20turbo%202%20ponta%20tipo%20C.jpeg?alt=media&token=406f420f-1c2b-4d3a-a146-6174d74790f5" },
  { id: 19, nome: "Suporte de celular completo para Moto", categoria: "suportes", preco: 40, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2Fsuporte%20de%20celular%2Fsuporte%20de%20celular%20para%20motos.jpeg?alt=media&token=2e1b21c2-896e-47c9-a687-9013fe990fbb" },
  { id: 20, nome: "Suporte de celular para carro", categoria: "suportes", preco: 25, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2Fsuporte%20de%20celular%2Fsuporte%20de%20celular%20para%20carros.jpeg?alt=media&token=6f5966b2-78fc-4e8a-81ea-807cf25b7eac" },
  { id: 21, nome: "Fone de bluetooth gamer m10", categoria: "fones", preco: 45, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2Ffone%20de%20bluetooth%20gamer.jpeg?alt=media&token=fdf90f65-3d64-4263-8cc3-999baeca9cc2" },
  { id: 22, nome: "Cabo HDMI 3M qualidade", categoria: "cabos", preco: 29.99, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2FCabo%20hdmi.jpeg?alt=media&token=a4e1bc87-5f38-43a8-b29c-040e419a078f" },
  { id: 23, nome: "Caixa de som H006", categoria: "som", preco: 55, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2Fcaixa%20de%20so%20pequena.jpeg?alt=media&token=e5aa470e-f51d-4712-8187-4b9cef10ee84" },
  { id: 24, nome: "Fone para capacetes", categoria: "fones", preco: 90, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2Ffone%20para%20motos.jpeg?alt=media&token=996039ac-5015-429e-a784-f4c85fdb359f" },
  { id: 25, nome: "Cabo ponta P2 e ios", categoria: "cabos", preco: 25, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2FCabo%20ponta%20P2%20e%20Ios.jpeg?alt=media&token=8e57ff2c-7068-443c-9a84-c5c9c0afae31" },
  { id: 26, nome: "Cabo tipo C de qualidade", categoria: "cabos", preco: 25, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2FCabos%20tipo%20c.jpeg?alt=media&token=7f555b68-1095-4020-8f51-1c140be63634" },
  { id: 27, nome: "Cabo V8", categoria: "cabos", preco: 15, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2FCabo%20v8.jpeg?alt=media&token=bf97189f-0fc7-4cbb-b5e3-3169f2282e4f" },
  { id: 28, nome: "Fonte 12v", categoria: "fontes", preco: 25, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2Ffontes%2FFonte%2012volts.jpeg?alt=media&token=1f501dc7-815f-40df-8956-e8d1820b3099" },
  { id: 29, nome: "Fonte de Pc atx200W", categoria: "fontes", preco: 120, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2Ffontes%2Ffonte%20de%20pc%20200w.jpeg?alt=media&token=077f921f-c568-49e5-9f31-7fa2a6e79d5a" },
  { id: 30, nome: "Fones simples", categoria: "fones", preco: 15, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2Ffones%2Ffones%20simples.jpeg?alt=media&token=dd0f69a3-ad3f-4443-9192-8586028c2d0b" },
  { id: 31, nome: "Fones de qualidade", categoria: "fones", preco: 25, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2Ffones%2Ffones%20de%20qualidade.jpeg?alt=media&token=0ff77927-5a93-4db1-975c-ec5ee041bce9" },
  { id: 32, nome: "Fones JbL E Samsung", categoria: "fones", preco: 25, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2Ffones%2Ffones%20jbl%20e%20samsung.jpeg?alt=media&token=d6d745fe-894a-46f1-8adf-a06ddeb91b2d" },
  { id: 33, nome: "Fones de entrada iphone", categoria: "fones", preco: 25, img: "https://firebasestorage.googleapis.com/v0/b/mensal-66e32.appspot.com/o/img%20loja%20online%2Ffones%2Ffones%20ios.jpeg?alt=media&token=f28696d1-6428-4e0b-b893-487e7d505e08" },


];



let carrinho = [];


const produtosEl = document.getElementById("produtos");
const menuEl = document.getElementById("menuCategorias");
const carrinhoEl = document.getElementById("carrinho");
const listaCarrinhoEl = document.getElementById("listaCarrinho");
const menuIconEl = document.getElementById("menuIcon");
const cartIconEl = document.getElementById("cartIcon");
const fecharCarrinhoEl = document.getElementById("fecharCarrinho");
const finalizarEl = document.getElementById("finalizar");


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


function filtrarCategoria(cat) {
  const lista = cat === "todos" ? produtos : produtos.filter(p => p.categoria === cat);
  renderizarProdutos(lista);
}


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


function removerItem(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}


function adicionarCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  if (!produto) return;
  carrinho.push(produto);
  atualizarCarrinho();

  if (menuEl.classList.contains("open")) menuEl.classList.remove("open");
  if (!carrinhoEl.classList.contains("open")) carrinhoEl.classList.add("open");
  
  window.scrollTo({ top: 0, behavior: "smooth" });
}


finalizarEl.addEventListener("click", () => {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }
  const mensagemLinhas = carrinho.map(item => `- ${item.nome} (R$ ${item.preco.toFixed(2)})`);
  const texto = encodeURIComponent(`Olá, gostaria de comprar:\n${mensagemLinhas.join("\n")}`);
 
  const url = `https://wa.me/5565993090239?text=${texto}`;
  window.open(url, "_blank");
});


cartIconEl.addEventListener("click", () => {
  if (menuEl.classList.contains("open")) menuEl.classList.remove("open");
  carrinhoEl.classList.toggle("open");
});


fecharCarrinhoEl.addEventListener("click", () => {
  carrinhoEl.classList.remove("open");
});


menuIconEl.addEventListener("click", () => {
  if (carrinhoEl.classList.contains("open")) carrinhoEl.classList.remove("open");
  menuEl.classList.toggle("open");
});


renderizarProdutos(produtos);
