import 'dotenv/config'

import express from 'express'
import https from 'https'
import cors from 'cors'
import path from 'path'
import fs from 'fs'

const routerV1 = require('./api/routes/router-v1').default

const port = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// paths
app.use('/app', express.static(path.join(__dirname, '/public')))
app.use('/api', routerV1)

if (process.env.ENVIRONMENT === "dev")
    app.listen(process.env.PORT)
else {
    const options = {
        key: fs.readFileSync('/etc/letsencrypt/live/pucmg.vps.webdock.cloud/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/pucmg.vps.webdock.cloud/fullchain.pem')
    };

    https.createServer(options, app).listen(port)
}
