import { inject, injectable } from "inversify";
import { IBookingService } from "../services/interfaces/IBookingService";
import BaseController from "./BaseController";

@injectable()
class BookingController extends BaseController<IBookingService> {
    constructor(@inject("IBookingService") bookingService: IBookingService) {
        super(bookingService);
    }
}

export default BookingController;
