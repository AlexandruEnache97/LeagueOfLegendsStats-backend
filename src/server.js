const express = require('express');
const serverConfig = require('./config/config');
const routes = require('./routes');

// create the server express
const app = express();

// add middleware for parsing JSON
app.use(express.json());

// set routes of the server
routes(app);
const port = process.env.PORT || serverConfig.PORT;
const hostname = process.env.HOST_NAME || serverConfig.HOSTNAME;

// app listener
app.listen(port, () => {
    console.log(`Server is running at https://${hostname}:${port}`)
})