"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
/* WEB APPLICATION */
// @ts-ignore
var app = (0, express_1.default)();
var cors_1 = __importDefault(require("cors"));
app.use((0, cors_1.default)());
var corsOptions = {
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(body_parser_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
var port = 3001;
var arrayRange = function (start, stop, step) {
    return Array.from({ length: (stop - start) / step + 1 }, function (value, index) { return start + index * step; });
};
app.get('/data', function (req, res) {
    res.send({
        size: arrayRange(34, 47, 1),
        color: ["#000000", "#ffffff", "#ff0000", "#49b821"],
        brand: ["Nike", "Puma", "Adidas", "Boss", "NewBalance"]
    });
});
app.listen(port, function () {
    console.log("App running on port ".concat(port, "."));
});
