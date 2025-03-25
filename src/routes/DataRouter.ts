import { Router } from "express";
import DataController from "../controllers/DataController";

class DataRouter {
    constructor() {
        this.registerRoutes();
    }
    
    router = Router();

    registerRoutes() {
        this.router.get("/", (req, res) => DataController.get(req, res));
    }

    getRouter() {
        return this.router;
    }
}

export default new DataRouter().getRouter();