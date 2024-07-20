'use strict';

// Express
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const path = require('path')
app.use(bodyParser.json());

const cors = require('cors')
app.use(cors())

// services
const calculateTotal = require('./services/calculate.js');
const getDiscount = require('./services/discountCode');

app.get('/discount/:code', (req, res) => {
    const code = req.params.code
    console.log(code)
    const discount = getDiscount(code)
    if (discount) {
        res.send({discount})
    } else {
        res.status(404).send('Invalid Discount Code')
    }
})

app.post('/invoice', (req, res) => {
    const invoice = req.body
    console.log(invoice)
    try {
        const orderTotals = calculateTotal(invoice)
        res.send(orderTotals)
    } catch(error) {
        console.log(error)
        res.status(400).send('Bad Request')
    }
})

app.use(express.static(path.join(__dirname, "/client/build")));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/"];
    if (!goodPageRoutes.includes(req.url)) {
        // if url not in expected page routes, set status to 404.
        res.status(404);
    }

    // send index.html
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

////////// DO NOT CHANGE THE CODE OR PORT NUMBER BELOW
const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
});