    const { Router } = require("express");
    const specificList = require('../libs/specificList.js');


    const router = Router();



    router.get('/tourist_one', (request, response) => {
        response.send(specificList.cloudList);
    });

    router.get('/tourist_one/:language', (request, response) => {
        const { language } = request.params;
        const result = specificList.cloudList.find(val => val.language === language);
        response.send(result);
    });

    router.post('/tourist_one', (request, response) => {
        console.log(request.body);
        specificList.cloudList.push(request.body);
        response.sendStatus(201);
    });

    router.get('/tourist_two', (request, response) => {
        response.send(specificList.sohotonList);
    });

    router.get('/tourist_two/:language', (request, response) => {
        const { language } = request.params;
        const result = specificList.sohotonList.find(val => val.language === language);
        response.send(result);
    });

    router.post('/tourist_two', (request, response) => {
        console.log(request.body);
        specificList.sohotonList.push(request.body);
        response.sendStatus(201);
    });

    router.get('/tourist_three', (request, response) => {
        response.send(specificList.magpupungkoList);
    });

    router.get('/tourist_three/:language', (request, response) => {
        const { language } = request.params;
        const result = specificList.magpupungkoList.find(val => val.language === language);
        response.send(result);
    });

    router.post('/tourist_three', (request, response) => {
        console.log(request.body);
        specificList.magpupungkoList.push(request.body);
        response.sendStatus(201);
    });

    router.get('/tourist_four', (request, response) => {
        response.send(specificList.sugbaList);
    });

    router.get('/tourist_four/:language', (request, response) => {
        const { language } = request.params;
        const result = specificList.sugbaList.find(val => val.language === language);
        response.send(result);
    });

    router.post('/tourist_four', (request, response) => {
        console.log(request.body);
        specificList.sugbaList.push(request.body);
        response.sendStatus(201);
    });

    router.get('/tourist_five', (request, response) => {
        response.send(specificList.guyamList);
    });

    router.get('/tourist_five/:language', (request, response) => {
        const { language } = request.params;
        const result = specificList.guyamList.find(val => val.language === language);
        response.send(result);
    });

    router.post('/tourist_five', (request, response) => {
        console.log(request.body);
        specificList.guyamList.push(request.body);
        response.sendStatus(201);
    });

    router.get('/tourist_six', (request, response) => {
        response.send(specificList.dakuList);
    });

    router.get('/tourist_six/:language', (request, response) => {
        const { language } = request.params;
        const result = specificList.dakuList.find(val => val.language === language);
        response.send(result);
    });

    router.post('/tourist_six', (request, response) => {
        console.log(request.body);
        specificList.dakuList.push(request.body);
        response.sendStatus(201);
    });

    router.get('/tourist_seven', (request, response) => {
        response.send(specificList.taktakList);
    });

    router.get('/tourist_seven/:language', (request, response) => {
        const { language } = request.params;
        const result = specificList.taktakList.find(val => val.language === language);
        response.send(result);
    });

    router.post('/tourist_seven', (request, response) => {
        console.log(request.body);
        specificList.taktakList.push(request.body);
        response.sendStatus(201);
    });

    router.get('/tourist_eight', (request, response) => {
        response.send(specificList.maasinList);
    });

    router.get('/tourist_eight/:language', (request, response) => {
        const { language } = request.params;
        const result = specificList.maasinList.find(val => val.language === language);
        response.send(result);
    });

    router.post('/tourist_eight', (request, response) => {
        console.log(request.body);
        specificList.maasinList.push(request.body);
        response.sendStatus(201);
    });

    router.get('/tourist_nine', (request, response) => {
        response.send(specificList.nakedList);
    });

    router.get('/tourist_nine/:language', (request, response) => {
        const { language } = request.params;
        const result = specificList.nakedList.find(val => val.language === language);
        response.send(result);
    });

    router.post('/tourist_nine', (request, response) => {
        console.log(request.body);
        specificList.nakedList.push(request.body);
        response.sendStatus(201);
    });

    router.get('/tourist_ten', (request, response) => {
        response.send(specificList.coconutList);
    });

    router.get('/tourist_ten/:language', (request, response) => {
        const { language } = request.params;
        const result = specificList.coconutList.find(val => val.language === language);
        response.send(result);
    });

    router.post('/tourist_ten', (request, response) => {     
        console.log(request.body);
        specificList.coconutList.push(request.body);
        response.sendStatus(201);
    });

    module.exports = router;
