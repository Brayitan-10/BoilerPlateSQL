const { DataTypes } = require("sequelize");
//const sequelize = require("../db");
// ⚠ SE EXPORTA UNA FUNCION A db.js QUE RECIBIRÁ SEQUELIZE COMO ARGUMENTO Y CONECTARÁ
module.exports = (sequelize) => {
    sequelize.define(
        "Category",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            title: {
                type:DataTypes.STRING,
                allowNull: false,
            },
        },
        { timestamps: true }
    );
};
