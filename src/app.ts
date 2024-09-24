 


import express, {response} from 'express';
import bodyParser from "body-parser";


/* WEB APPLICATION */
// @ts-ignore
const app : express = express();

import cors from 'cors';

app.use(cors())

const corsOptions = {

    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204

}


app.use(bodyParser.json());

app.use(express.urlencoded({extended: false}))

const port : number = 3001;

const arrayRange = (start, stop, step) =>
    Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    );

app.get('/data', (req, res) => {


    res.send({
        size: arrayRange(34, 47, 1),
        color: ["#000000", "#ffffff", "#ff0000", "#49b821"],
        brand: ["Nike", "Puma", "Adidas", "Boss", "NewBalance"]

    })


});




app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});