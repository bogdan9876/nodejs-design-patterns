import BaseRouter from "./BaseRouter";
import LocationController from "../controllers/LocationController";

class LocationRouter extends BaseRouter {
    constructor() {
        super(LocationController);
    }
}

export default new LocationRouter().getRouter();
