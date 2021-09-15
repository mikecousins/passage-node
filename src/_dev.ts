import passage, { Passage } from '.'

import express from 'express';
import { PassageConfig } from "./types/PassageConfig";
const app = express();
const port = 3000;

require('dotenv').config();

let passageConfig: PassageConfig = {
    appID: process.env.APP_ID ? process.env.APP_ID : '',
    apiKey: process.env.API_KEY ? process.env.API_KEY : '',
    authStrategy: "HEADER",
}

app.get('/authentication', passage(passageConfig), async (req, res) => {

    // let result_1 = await res.passage.user.get("USER_ID_HERE");
    // console.log(result_1);


    res.send("This is an authenticated route!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
