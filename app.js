import 'dotenv/config'

import express from 'express'
import https from 'https'
import cors from 'cors'
import path from 'path'
import fs from 'fs'

import routerV1 from './src/api/routes/router-v1'
import routerV2 from './src/api/routes/router-v2'

const port = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// paths
app.use('/app', express.static(path.join(__dirname, '/src/public')))
app.use('/api', routerV1, routerV2)

if (process.env.ENVIRONMENT === "dev") {
    console.log("### DEVELOPMENT MODE ###")
    app.listen(process.env.PORT)
} else {
    console.log("### PRODUCTION MODE ###")
    const options = {
        // key: fs.readFileSync('/etc/letsencrypt/live/pucmg.vps.webdock.cloud/privkey.pem'),
        // cert: fs.readFileSync('/etc/letsencrypt/live/pucmg.vps.webdock.cloud/fullchain.pem')
    };

    https.createServer(options, app).listen(port)
}
