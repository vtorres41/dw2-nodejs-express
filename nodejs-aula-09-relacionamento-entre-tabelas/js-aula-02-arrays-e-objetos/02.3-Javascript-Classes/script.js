class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  buzinar() {
    return "Beep! Beep!";
  }
}

const carroPopoular = new Carro("Fiat", "Uno", "2012");

document.write(`
    <p>O carro ${carroPopoular.marca} modelo ${carroPopoular.modelo} é do ano ${carroPopoular.ano} e quando ele buzina faz ${carroPopoular.buzinar()}</p>`);
