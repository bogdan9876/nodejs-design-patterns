import BaseRouter from "./BaseRouter";
import BookingController from "../controllers/BookingController";

class BookingRouter extends BaseRouter {
    constructor() {
        super(BookingController);
    }
}

export default new BookingRouter().getRouter();
