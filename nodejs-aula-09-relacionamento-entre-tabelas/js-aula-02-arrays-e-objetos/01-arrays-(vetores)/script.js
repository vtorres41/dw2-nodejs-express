let produtos = ["Computador", "Notebook", "Celular", "Tablet"];

document.write(
  `O Tipo da Variável que recebe um vetor no Javascript é: ${typeof produtos}`,
);

document.write(
  `<br><br> O Tipo da Variável aluno é: <strong> ${typeof aluno} </strong`,
);

document.write(
  `<br><br> Exibindo os itens do vetor pelo <strong> índice </strong>: <br>`,
);

document.write(`<p>${produtos[0]}</p>`);
document.write(`<p>${produtos[1]}</p>`);
document.write(`<p>${produtos[2]}</p>`);
document.write(`<p>${produtos[3]}</p>`);

document.write(
  "<br>Exibindo os itens do vetor através do <strong> forEach: </strong>",
);
produtos.forEach((produto) => {
  document.write(`<p>${produto}</p>`);
});

document.write("<br>Exibindo os itens do vetor e os índices com o foreach");

produtos.write((produto, indice)=> {
    document.write(`<p> ${indice + 1} - ${produto}</p>`);
}) 