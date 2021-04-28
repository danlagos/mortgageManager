const express = require('express');
const mongoose = require('mongoose');

// set up express server
const app = express();

// use JSON
app.use(express.json());

// Listen on port 5000 for development
app.listen(5000, () => console.log(`Server started in port 5000`));

// end point



// routers
app.use("/pipeline", require("./routers/mortgageRouter"));
