//Model Cliente
//O Model é uma representação de uma entidade do sistema (Tabela)

//Importando o arquivo de conexão
import connection from "../config/sequelize-config.js";
// Importando a biblioteca Sequelize
import Sequelize from "sequelize";

// O método Define() defie a estrutura de uma tabela no banco
const Cliente = connection.define("clientes", {
  // Atributos da Tabela 'clientes'
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
//o Método .sync() sincroniza a estrutura do model com a tabela no banco de dados
// force : false -> sincroniza a tabela somente na primeira vez (somente se não existir)
Cliente.sync({force: false})

// Exportando o Módulo
export default Cliente;