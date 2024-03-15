const express = require('express');
const descriptionRoute = require('./routes/descriptions.js');
const questionRoute = require('./routes/questions.js');
const specificRoute = require('./routes/specificQuestions.js');
const touristRoute = require('./routes/touristSpots.js');
const cors = require("cors");

const app = express();
const PORT = 8001;



app.use(express.static('public'));
app.use(express.json());
app.use(cors());


// Mounting descriptionRoute at the /api route path
app.use('/api', descriptionRoute);
app.use('/api', questionRoute);
app.use('/api', specificRoute);
app.use('/api', touristRoute);

// Starting the Express server
app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}!`));





