import connection from "../config/sequelize-config.js";

import Sequelize from "sequelize";

const Pedido = connection.define("pedidos", {
      // Atributos da Tabela 'pedidos'
  numero: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  valor: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

Pedido.sync({ force: false });

// Exportando o Módulo
export default Pedido;
