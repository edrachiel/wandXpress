    const { Router } = require("express");
    const specificList = require('../libs/specificList.js');


    const router = Router();



    router.get('/spec_faqs', (request, response) => {
        response.send(specificList);
    });

    router.get('/spec_faqs/:id', (request, response) => {
        const { id } = request.params;
        const result = specificList.filter(val => val.id === id);
        response.send(result);
    });

    router.post('/spec_faqs', (request, response) => {
        console.log(request.body);
        specificList.push(request.body);
        response.sendStatus(201);
    });

    module.exports = router;
