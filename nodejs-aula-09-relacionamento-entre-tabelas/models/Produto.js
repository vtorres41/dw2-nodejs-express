import connection from "../config/sequelize-config.js";

import Sequelize from "sequelize";

const Produto = connection.define("produtos", {
    Marca: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Modelo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Ano: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});
Produto.sync({ force: false });

export default Produto;
