const { Router } = require("express");
const genList = require('../libs/genList.js');

const router = Router();



router.get('/questions', (request, response) => {
    response.send(genList);
});

router.get('/questions/:language', (request, response) => {
    const { language } = request.params;
    const result = genList.find(val => val.language === language);
    response.send(result);
});

router.post('/questions', (request, response) => {
    console.log(request.body);
    genList.push(request.body);
    response.sendStatus(201);
});

module.exports = router;
