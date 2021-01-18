const { Router } = require('express');

class HealthyRoutes {

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        const indRoutes = new HealthyController();
        this.router.get('/readiness', indRoutes.readiness);
        this.router.get('/health', indRoutes.health);
    }

}

class HealthyController {

    readiness(req, res) {
        try {
            res.sendStatus(200);
        } catch (error) {
            res.status(400);
            res.json({ error: error.message });
        }
    }

    health(req, res) {
        try {
            res.sendStatus(200);
        } catch (error) {
            res.status(400);
            res.json({ error: error.message });
        }
    }

}

module.exports = HealthyRoutes