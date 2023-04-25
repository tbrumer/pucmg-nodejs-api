// require('dotenv').config()

// const express = require('express')
// const cors = require('cors');
// const path = require('path')
// const app = express()
// const port = process.env.PORT || 3000

// app.use(cors())
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/app', express.static(path.join(__dirname, '/public')))

// app.listen(port)

const express = require('express');
const https = require('https');
const fs = require('fs');
const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/pucmg.vps.webdock.cloud/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/pucmg.vps.webdock.cloud/fullchain.pem')
};
const app = express();
app.use((req, res) =>
{
    res.end('Hello World');
});

https.createServer(options, app).listen(8000);
