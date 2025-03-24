import { container } from "../config/inversify";
import BaseRouter from "./BaseRouter";
import BookingController from "../controllers/BookingController";

class BookingRouter extends BaseRouter {
    constructor() {
        const bookingController = container.get<BookingController>("BookingController");
        super(bookingController);
    }
}

export default new BookingRouter().getRouter();
