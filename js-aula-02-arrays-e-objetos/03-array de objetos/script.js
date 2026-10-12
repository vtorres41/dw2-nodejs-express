const produto = {
  nome: "Computador",
  marca: "Lenovo",
  preco: 3000,
  descricao: "PC Moderno com bom desempenho",
};

document.write(`<p>${produto}</p>`);

document.write(
  `<p> ${produto.nome}, ${produto.marca}, custa R$ ${produto.preco} <br> ${produto.descricao} </p>`,
);

document.write("<h3>Array de objetos:</h3>");
const listaProdutos = [
  {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC Moderno com bom desempenho",
  },
  {
    nome: "Notebook",
    marca: "Sansung",
    preco: 2000,
    descricao: "Ótima Velocidade de Processamento",
  },
  {
    nome: "Smartphone",
    marca: "Sansung",
    preco: 1000,
    descricao: "Durável, Rápido e Agradável",
  },
];

document.write(`<h4>Produtos em Promoção:</h4>`);

listaProdutos.forEach((produto) => {
  document.write(`
        Produto: ${produto.nome} <br>
        Marca: ${produto.marca} <br>
        Preço: ${produto.preco} <br>
        Descrição: ${produto.descricao} <br><br>
        `);
});
