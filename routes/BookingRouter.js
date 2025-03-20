const BaseRouter = require("./BaseRouter.js");
const BookingController = require("../controllers/BookingController.js");

class BookingRouter extends BaseRouter {
    constructor() {
        super(BookingController);
    }
}

module.exports = new BookingRouter().getRouter();
