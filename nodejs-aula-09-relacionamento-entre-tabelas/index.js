// Importando o Express com ES6 Modules
import express from "express";
// Importando o arquivo de conexão do Sequelize
import connection from "./config/sequelize-config.js";
// Iniciando o Express na variável app
const app = express();

// Importando os Controllers (onde estão as rotas)
import PedidosController from "./controllers/PedidosController.js";
import ClientesController from "./controllers/ClientesController.js";
import ProdutoController from "./controllers/ProdutosController.js";

// Importando os Models
import Cliente from "./models/Cliente.js";
import Pedido from "./models/Pedido.js";
import Produto from "./models/Produto.js";

app.use(express.urlencoded({ extended: false }));
// Configurações do Express
// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));

// Definindo o uso das rotas dos Controllers
app.use("/", PedidosController);
app.use("/", ClientesController);
app.use("/", ProdutoController); // Agora a variável coincide com a importação

// REALIZANDO A CONEXÃO COM O BANCO DE DADOS
connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
  })
  .catch((error) => {
    console.log(
      `Ocorreu um erro ao se conectar ao banco de dados. Erro: ${error}`,
    );
  });

// CRIANDO O BANCO DE DADOS SE ELE NÃO EXISTIR
const DB_NAME = "loja";
connection
  .query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME};`)
  .then(() => {
    console.log(`O Banco de Dados ${DB_NAME} Está criado!`);
  })
  .catch((error) => {
    console.log(`Ocorreu um erro ao criar o Banco de dados. Erro: ${error}`);
  });

// ROTA PRINCIPAL
app.get("/", function (req, res) {
  res.render("index");
});

// ROTA PRODUTOS

// INICIA O SERVIDOR NA PORTA 8080
app.listen(8080, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
