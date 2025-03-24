import { container } from "../config/inversify";
import BaseRouter from "./BaseRouter";
import LocationController from "../controllers/LocationController";

class LocationRouter extends BaseRouter {
    constructor() {
        const locationController = container.get<LocationController>("LocationController");
        super(locationController);
    }
}

export default new LocationRouter().getRouter();