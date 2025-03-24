import BaseController from "./BaseController";
import BookingService from "../services/BookingService";

class BookingController extends BaseController<typeof BookingService> {
    constructor() {
        super(BookingService);
    }
}

export default new BookingController();
