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

async function insertOperation(a,b,operationType,result){
    await Operation.create({
        type: operationType,
        args: {
            a: a,
            b: b,
        },
		creation: Date('now'),
        result,
    });
}

module.exports = {
    Operation,
    init,
    insertOperation,
};
