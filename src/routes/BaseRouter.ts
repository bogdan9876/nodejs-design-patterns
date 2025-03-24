import { Router } from "express";

class BaseRouter {
    router: Router;
    controller: any;

    constructor(controller: any) {
        this.router = Router();
        this.controller = controller;
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.post("/", this.controller.create.bind(this.controller));
        this.router.get("/", this.controller.getAll.bind(this.controller));
        this.router.get("/:id", this.controller.getOne.bind(this.controller));
        this.router.put("/:id", this.controller.update.bind(this.controller));
        this.router.delete("/:id", this.controller.delete.bind(this.controller));
    }

    getRouter() {
        return this.router;
    }
}

export default BaseRouter;
