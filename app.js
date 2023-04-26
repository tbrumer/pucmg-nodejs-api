require('dotenv').config()

const express = require('express')
const https = require('https');
const cors = require('cors');
const path = require('path')
const fs = require('fs');

const routerV1 = require('./api/routes/router-v1')

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/pucmg.vps.webdock.cloud/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/pucmg.vps.webdock.cloud/fullchain.pem')
};
const port = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// paths
app.use('/app', express.static(path.join(__dirname, '/public')))
app.use('/api', routerV1)

// app.listen(port)
https.createServer(options, app).listen(port);
