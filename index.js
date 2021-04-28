const express = require('express');
const mongoose = require('mongoose');

// set up express server
const app = express();

// parse JSON
app.use(express.json());

// Listen on port 5000. Development
app.listen(5000, () => console.log(`Server started in port 5000`));

// routers
app.use("/pipeline", require("./routers/mortgageRouter"));
