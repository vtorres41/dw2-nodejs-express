let frutas = ["Laranja", "Maçã", "Banana"];

document.write(`<p>Os itens do nosso vetor são: ${frutas}</p>`);

frutas[3] = "Morango";

document.write(`<p>Agora a Lista é: ${frutas}</p>`);

frutas.push("Abacaxi");

document.write(`<p>Agora a Lista é: ${frutas}</p>`);

frutas[0] = "Pera";

document.write(`<p>Agora a Lista é: ${frutas}</p>`);

frutas.unshift("Pera");
document.write(`<p>Agora a Lista é: ${frutas}</p>`);

document.write(`Na nossa lista temos ${frutas.length} frutas.`);

document.write(`<p>O primeiro item da lista é ${frutas[0]}</p>`);

let frutasOrdenadas = frutas.sort();

document.write(`<p>O primeiro item da lista é ${frutasOrdenadas[0]}</p>`);

document.write(`<p>Lista de frutas ordenadas: ${frutasOrdenadas}</p>`);

let numeros = [6, 8, 2, 9, 3, 800, 200];

document.write(`<p>Os números são: ${numeros}</p>`);

document.write(`<p>Os números ordenados são: ${numeros.sort()}</p>`);

document.write(
  `<p>Os números ordenados de forma crescente são: ${numeros.sort((a, b) => a - b)}</p>`,
);

document.write(
  `<p>Os números ordenados de forma decrescente são: ${numeros.sort((a, b) => b - a)}</p>`,
);
