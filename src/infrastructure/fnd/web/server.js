/**Express server import */
const express = require('../external_interface/express');
const { json, urlencoded } = require('../external_interface/express')
/**Morgan Middleware */
const { morgan_mid } = require('../external_interface/morgan')
/**Cors */
const cors = require("../external_interface/cors")
/**Routers */
const HealthyRoutes = require("./routes/healthy")

class Server {

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() {
        //MIDDLEWARES
        /**Morgan to see logs in dev */
        this.app.use(morgan_mid);
        /**To process json request */
        this.app.use(json());
        /** to recognize the incoming Request Object as strings or arrays */
        this.app.use(urlencoded({ extended: true }))
        /**To give cors permissions */
        this.app.use(cors());
        this.app.options('*', cors());
    }

    routes() {
        /**Healthy routes */
        this.app.use(new HealthyRoutes().router)
    }

}

const server = new Server();

module.exports = server.app;



