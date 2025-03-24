import BaseController from "./BaseController";
import LocationService from "../services/LocationService";

class LocationController extends BaseController<typeof LocationService> {
    constructor() {
        super(LocationService);
    }
}

export default new LocationController();
