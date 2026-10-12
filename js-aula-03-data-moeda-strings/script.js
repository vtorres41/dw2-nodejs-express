document.write("<h3>Manipulando datas:</h3>");

const dataAtual = new Date();

document.write(dataAtual);

const dia = dataAtual.getDate();
document.write(`<p>Hoje é dia ${dia}.</p>`);

const mes = dataAtual.getMonth() + 1;
document.write(`<p>Hoje é mês ${mes}.</p>`);

const ano = dataAtual.getFullYear();
document.write(`<p>Estamos no ano ${ano}.</p>`);

document.write(`Data de Hoje ${dia}/${mes}/${ano}`);

//Manipulando data

dataAtual.setDate(dataAtual.getDate() + 3);

document.write(`<p>Daqui a 3 dias será dia ${dataAtual.getDate()}`);

dataAtual.setMonth(dataAtual.getMonth() + 3);

document.write(`<p>Daqui a 3 meses será o mês ${dataAtual.getMonth() + 1}`);

dataAtual.setFullYear(dataAtual.getFullYear() + 2);

document.write(`<p>Daqui a 2 anos será o ano de ${dataAtual.getFullYear()}`);
//############################################################################

document.write("<h3>Manipulando moedas:</h3>");
const futuroSalario = 41000.3;
document.write(`<p>${futuroSalario}</p>`);

document.write(`<p>${futuroSalario.toFixed(2)}</p>`);

document.write(`<p>${futuroSalario.toFixed(0)}</p>`);

document.write(`<p>${futuroSalario.toFixed(2).replace(".", ",")}</p>`);


document.write(`<p>
    ${futuroSalario.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    })}
    </p>`)

document.write(`<p>
    ${futuroSalario.toLocaleString("en", {
        style: "currency",
        currency: "USD"
    })}
    </p>`)

    //###################################

    document.write("<h3>Formatação de Strings:</h3>")
    const nome = "Vtorres 41";

    document.write(`<p>${nome.toUpperCase()}</p>`);
    document.write(`<p>${nome.toLowerCase()}</p>`);

    const cidade = "Juquiá SP";
    const cidadeFormatada = cidade.split(" ").map(palavra => palavra.
    charAt(0).toUpperCase() + palavra.slice(1)).join(" ");

    document.write(`<p>${cidadeFormatada}</p>`);

    document.write(`Seu nome tem ${nome.replace(/\s/g, "").length} letras.</p>`);