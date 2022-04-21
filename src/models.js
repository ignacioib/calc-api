const Sequelize = require("sequelize");
const db = require("./db.js");

const Operation = db.define("Operation", {
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    args: {
        type: Sequelize.JSON,
        allowNull: false,
    },
    creation: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    result: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
});

function init() {
    return Operation.sync();
}

module.exports = {
    Operation,
    init,
};
