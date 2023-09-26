const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const config = require('config')
const app = express();

const port = config.port;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());

app.use('/', express.static(path.join('web')));


// app.use('/api/.....', someRouter);

app.listen(port, '0.0.0.0', () => {
    console.log(`Api started at ${port}`);
});