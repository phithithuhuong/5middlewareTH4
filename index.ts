import express from 'express';
import bodyParser from "body-parser";
import {responseTime} from "./src/middleware/responseTime";
import axios from "axios";
import router from "./src/router/router";
import routers from "./src/router/router";
const app = express();
app.use(bodyParser.json());
app.use(responseTime);// thêm application-level middleware responseTime
app.get('/', async (req,res)=>{
    try {

        const url = 'https://pokeapi.co/api/v2/ability/?limit=100&offset=0';

        const response = await axios.get(url);

        const data = response.data;
        console.log(data,1)

        if (data) {

            res.status(200).json({data: data})

        } else {

            res.end('<h1>Error<h1>')

        }

    } catch (err) {

        res.end('<h1>Error<h1>')

    }

});
app.use(routers)
app.listen(3333,()=>{
    console.log('Server is running')
})