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
        await mongoose.connect('mongodb://root:example@localhost:27017/todo?authSource=admin',
            {useNewUrlParser: true, useUnifiedTopology: true});
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