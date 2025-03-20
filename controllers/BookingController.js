const BaseController = require('./BaseController.js');
const BookingService = require('../services/BookingService.js');

class BookingController extends BaseController {
    constructor() {
        super(BookingService);
    }
}

module.exports = new BookingController;