const { Router } = require("express");

class BaseRouter {
    constructor(controller) {
        this.controller = controller;
        this.router = Router();
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.post("/", (req, res) => this.controller.create(req, res));
        this.router.get("/", (req, res) => this.controller.getAll(req, res));
        this.router.get("/:id", (req, res) => this.controller.getOne(req, res));
        this.router.put("/:id", (req, res) => this.controller.update(req, res));
        this.router.delete("/:id", (req, res) => this.controller.delete(req, res));
    }

    getRouter() {
        return this.router;
    }
}

module.exports = BaseRouter;
