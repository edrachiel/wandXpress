const { Router } = require("express");
const descriptionList = require('../libs/descriptionList.js');

const router = Router();



router.get('/descriptions', (request, response) => {
    response.send(descriptionList);
});

router.get('/descriptions/:language', (request, response) => {
    const { language } = request.params;
    const result = descriptionList.find(val => val.language === language);
    response.send(result);
});

router.post('/descriptions', (request, response) => {
    console.log(request.body);
    descriptionList.push(request.body);
    response.sendStatus(201);
});

module.exports = router;
