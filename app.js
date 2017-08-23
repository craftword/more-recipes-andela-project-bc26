import morgan from "morgan";
import bodyParser from "body-parser";
import express from "express";
import http from "http";
// Set up the express app
const app = express(); 

// Log requests to the console.
app.use(morgan("dev"));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
/*import appApi from "./server/routes";
appApi(app);
*/
app.get("*", (req, res) => res.status(200).send({
    message: "Welcome to the beginning of nothingness.",
}));

//Listen to the server

const port = process.env.PORT|| 6969;
app.set("port", port);

const server = http.createServer(app);
server.listen(port);

export default app;