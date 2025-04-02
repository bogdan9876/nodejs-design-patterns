import { container } from "../config/inversify";
import BaseRouter from "./BaseRouter";
import HotelController from "../controllers/HotelController";

class HotelRouter extends BaseRouter {
    constructor() {
        const hotelController = container.get<HotelController>("HotelController");
        super(hotelController);
    }

    registerRoutes(): void {
        this.router.get("/add", this.controller.showAddHotelPage.bind(this.controller));
        this.router.post("/", this.controller.create.bind(this.controller));
        this.router.get("/", this.controller.getAll.bind(this.controller));
        this.router.get("/:id", this.controller.getOne.bind(this.controller));
        this.router.put("/:id", this.controller.update.bind(this.controller));
        this.router.delete("/:id", this.controller.delete.bind(this.controller));
    }
}

export default new HotelRouter().getRouter();