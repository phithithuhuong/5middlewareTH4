"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const responseTime_1 = require("./src/middleware/responseTime");
const axios_1 = __importDefault(require("axios"));
const router_1 = __importDefault(require("./src/router/router"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(responseTime_1.responseTime);
app.get('/', async (req, res) => {
    try {
        const url = 'https://pokeapi.co/api/v2/ability/?limit=100&offset=0';
        const response = await axios_1.default.get(url);
        const data = response.data;
        console.log(data, 1);
        if (data) {
            res.status(200).json({ data: data });
        }
        else {
            res.end('<h1>Error<h1>');
        }
    }
    catch (err) {
        res.end('<h1>Error<h1>');
    }
});
app.use(router_1.default);
app.listen(3333, () => {
    console.log('Server is running');
});
//# sourceMappingURL=index.js.map