const { Router } = require("express");
const genList = require('../libs/genList.js');

const router = Router();



router.get('/gen_faqs', (request, response) => {
    response.send(genList);
});

router.get('/gen_faqs/:language', (request, response) => {
    const { language } = request.params;
    const result = genList.find(val => val.language === language);
    response.send(result);
});

router.post('/gen_faqs', (request, response) => {
    console.log(request.body);
    genList.push(request.body);
    response.sendStatus(201);
});

module.exports = router;
