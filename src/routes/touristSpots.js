const { Router } = require("express");
const touristList = require("../../libs/touristList.js");





const router = Router();

router.get('/touristSpots', (request, response) => {
    response.json(touristList);
});
const path = require('path');

router.get('/touristSpots/:name', (request, response) => {
    const { name } = request.params;
    const result = touristList.find(val => val.name.toLowerCase() === name.toLowerCase());
    if (result) {
        response.json(result);
    } else {
        response.status(404).json({ error: "Tourist spot not found" });
    }
});

router.post('/touristSpots', (request, response) => {
    const newSpot = request.body;
    if (!newSpot || !newSpot.name || !newSpot.location || !newSpot.open_hours) {
        response.status(400).json({ error: "Incomplete tourist spot information" });
    } else {
        touristList.push(newSpot);
        response.status(201).json({ message: "Tourist spot added successfully", newSpot });
    }
});



module.exports = router;
