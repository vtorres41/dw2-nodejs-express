import express from "express";
import Cliente from "../models/Cliente.js";

const rota = express.Router();

// ROTA CLIENTES
rota.get("/clientes", function (req, res) {
  Cliente.findAll()
    .then((clientes) => {
      res.render("clientes", {
        clientes: clientes,
      });
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao listar os clientes. erro: ${error}`);
    });
});

//Rota de trabalho de clientes
rota.post("/clientes/cadastrar", (req, res) => {
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  //Chamando o model para gravar os dados no banco
  //Equivalente ao INSERT INTO...
  Cliente.create({
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao Cadastrar o cliente.
      Erro: ${error}`);
    });
});

//ROTA PARA DEIXAR UM CLIENTE
// :id -> Cria um parâmetro na rota
rota.get("/clientes/excluir/:id", (req, res) => {
  //CRIANDO UMA VARIÁVEL PARA ARMAZENAR O PARÂMETRO QUE CHEGA PELA URL
  const id = req.params.id;
  // CHAMANDO O MODEL E PEDINDO PARA EXCLUIR O CLIENTE
  Cliente.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao excluir o cliente. Erro: ${error}.`);
    });
});

// ROTA DE EDIÇÃO DE CLIENTE
rota.get("/clientes/editar/:id", (req, res) => {
  //colentando o parâmetro da URL
  const id = req.params.id;
  // Buscando o cliente no banco pela ID
  Cliente.findByPk(id)
    .then((cliente) => {
      res.render("clienteEditar", {
        // Enviando um objeyo com dados do cliente para a página
        cliente: cliente,
      });
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao buscar o cliente. Erro ${error}`);
    });
});

//ROTA QUE ALTERNA UM CLIENTE NO BANCO DE DADOS
rota.post("/clientes/alterar", (req, res) => {
  // Coletando os dados do formulário

  const id = req.body.id;
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  // Chamando o  model e pedindo para alterar no banco de dados
  Cliente.update(
    {
      nome: nome,
      cpf: cpf,
      endereco: endereco,
    },
    { where: { id: id } },
  )
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(`Ocorreu um erro ao alterar o cliente. Erro ${error}`);
    });
});

export default rota;
