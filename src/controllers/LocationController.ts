import { inject, injectable } from "inversify";
import { ILocationService } from "../services/interfaces/ILocationService";
import BaseController from "./BaseController";

@injectable()
class LocationController extends BaseController<ILocationService> {
    constructor(@inject("ILocationService") locationService: ILocationService) {
        super(locationService);
    }
}

export default LocationController;