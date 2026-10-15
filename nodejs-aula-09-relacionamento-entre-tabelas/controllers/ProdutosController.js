import express from "express";
import Produto from "../models/Produto.js"; // Importado corretamente

const rota = express.Router();

// ROTA PRODUTOS
rota.get("/produtos", function (req, res) {
  
  // CORRIGIDO: Alterado de Cliente para Produto
  Produto.findAll()
    .then(produtos => { // CORRIGIDO: Nome da variável que recebe os dados do banco
      res.render("produtos", {
        produtos: produtos, // Agora a variável existe e vai para o EJS
      });
    })
    .catch(error => {
      console.log(`Ocorreu um erro ao listar os produtos. erro: ${error}`);
    });
});

export default rota;
