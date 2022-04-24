const express = require("express");
const router = express.Router();

const { Operation, insertOperation } = require("./models.js");

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
	
	Operation.findAll().then(
	function(resultado) {
		return res.send(resultado)
		},
		function(err) {
			return res.send(err)}
);	  
});

module.exports = router;
