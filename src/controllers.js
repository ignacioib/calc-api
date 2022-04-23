const express = require("express");
const router = express.Router();

const { Operation, insertOperation } = require("./models.js");
var db1 = require('./basededatos.js')

router.get("/add/:a/:b", async function (req, res) {
    const params = req.params;
    const a = Number(params.a);
    const b = Number(params.b);
    const result = a + b;

    await insertOperation(a,b,"ADD",result);

    return res.send({ result });
});

router.get("/res/:a/:b", async function (req, res) {
    const params = req.params;
    const a = Number(params.a);
    const b = Number(params.b);
    const result = a - b;

    await insertOperation(a,b,"LESS",result);

    return res.send({ result });
});

router.get("/mul/:a/:b", async function (req, res) {
    const params = req.params;
    const a = Number(params.a);
    const b = Number(params.b);
    const result = a * b;

    await insertOperation(a,b,"MUL",result);

    return res.send({ result });
});

router.get("/pow/:a/:b", async function (req, res) {
    const params = req.params;
    const a = Number(params.a);
    const b = Number(params.b);
    const result = Math.pow(a, b);

    await insertOperation(a,b,"POW",result);

    return res.send({ result });
});

router.get("/div/:a/:b", async function (req, res) {
    const params = req.params;
    const a = Number(params.a);
    const b = Number(params.b);
    const result = (b === 0) ? "Error: div by 0" : (a / b); 

    await insertOperation(a,b,"DIV",result);

    return res.send({ result });
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
