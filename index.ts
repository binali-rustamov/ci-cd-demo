// Required imports
import "reflect-metadata";
import mongoose from "mongoose";

// Import controllers here
import "./controller/TodoController";

import {InversifyExpressServer} from "inversify-express-utils";
import {container} from "./container";
import * as bodyParser from 'body-parser';

// create server
let run = async () => {
    console.log("Connecting to mongo...")
    try {
        await connectToMongo()
    } catch (e) {
        console.log(e);
    }
    console.log("Starting server...");
    let server = new InversifyExpressServer(container);
    server.setConfig((app) => {
        // add body parser
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());
    });

    let app = server.build();
    app.listen(3000);
}
run();

async function connectToMongo() {
    let user = process.env.MONGO_USER;
    let host = process.env.MONGO_HOST;
    let port = process.env.MONGO_PORT;
    let password = process.env.MONGO_PASS;
    let db = process.env.MONGO_DB;
    let initDb = process.env.MONGO_INITDB;
    await mongoose.connect(`mongodb://${user}:${password}@${host}:${port}/${db}?authSource=${initDb}`,
        {useNewUrlParser: true, useUnifiedTopology: true});
}