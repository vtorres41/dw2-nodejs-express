//ATV 1
const Name = "Victor De Torres";
const Cidade = "Juquiá";
const Idade = "19 anos";

function userMessage() {
  document.write(
    `<p>Meu nome é ${Name} ,Tenho ${Idade} e moro em ${Cidade} </p>`
  );
}
userMessage();

//ATV 2
const num1 = 10;
const num2 = 2;

function divi(num1, num2) {
  let resultado = num1 / num2;
  document.write(`<p>A divisão de ${num1} por ${num2} é ${resultado}</p>`);
}
divi(num1, num2);

//ATV 3
const nu1 = 20;
const nu2 = 10;
const nu3 = 30;

function multiplicar(num1, num2, num3) {
  return num1 * num2 * num3;
}
// CORRIGIDO: Alterado para nu1, nu2 e nu3 para bater com as constantes criadas acima
document.write(
  `<p>A multiplicação de ${nu1} com ${nu2} e ${nu3} é igual a ${multiplicar(nu1, nu2, nu3)}</p>`
);

//ATV 4
const num = 19;
function maiorIdade() {
  if (num >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}
document.write(`<p>Você é ${maiorIdade()}!</p>`); // Ajustado: não precisa passar 'num' pois a função não recebe parâmetros na definição

//ATV 5
const verificarAprovacao = function(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    if (media <= 5) {
        return "Reprovado";
    } else {
        return "Aprovado";
    }
};
document.write(`<p>Status do aluno: ${verificarAprovacao(7, 7)}</p>`);

//ATV 6
const triplo = (y) => {
  return y * 3;
};
const y = 20;
document.write(`<p>O triplo de ${y} é ${triplo(y)}</p>`);

//ATV 7
const somar = (n1, n2, n3, n4) => { 
    return n1 + n2 + n3 + n4; 
}; 

// CORRIGIDO: Mudado o nome das variáveis para não dar conflito com a ATV 2
const s1 = 10; 
const s2 = 20; 
const s3 = 30; 
const s4 = 40; 

document.write(`<p>O resultado da soma é igual a ${somar(s1, s2, s3, s4)}</p>`);

//ATV 8
(function(nome) {
    // Ajustado: Adicionado <p></p> para pular linha corretamente no navegador
    document.write(`<p>Olá, ${nome}! Seja muito bem-vindo!.</p>`);
})("Victor");
