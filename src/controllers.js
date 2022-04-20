const express = require("express");
const router = express.Router();

const { Operation } = require("./models.js");
var db1 = require('./basededatos.js')

router.get("/add/:a/:b", async function (req, res) {
    const params = req.params;
    const a = Number(params.a);
    const b = Number(params.b);
    const result = a + b;

    await Operation.create({
        type: "ADD",
        args: {
            a: a,
            b: b,
        },
		creation: Date('now'),
        result,
    });

    return res.send({ result });
});

router.get("/res/:a/:b", async function (req, res) {
    return res.send({ result: "No implementado" });
});

router.get("/mul/:a/:b", async function (req, res) {
    return res.send({ result: "No implementado" });
});

router.get("/div/:a/:b", async function (req, res) {
    // Tener en cuenta division por 0
    // Si b es 0 retornar "Error: div by 0"

    return res.send({ result: "No implementado" });
});

router.get("/history", async function (req, res) {
	
var sql = "select * from Operations"
    var params = []
    db1.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
	  
    return res.setHeader('Content-Type','application/json')
    return res.send(JSON.stringify(rows))
});



module.exports = router;
