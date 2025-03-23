const BaseRouter = require("./BaseRouter.js");
const BookingController = require("../controllers/BookingController.js");
const BookingService = require("../services/BookingService.js");
const BookingRepository = require("../repositories/BookingRepository.js");

class BookingRouter extends BaseRouter {
    constructor() {
        const bookingRepository = new BookingRepository();
        const bookingService = new BookingService(bookingRepository);
        const bookingController = new BookingController(bookingService);
        super(bookingController);
    }
}

module.exports = new BookingRouter().getRouter();
