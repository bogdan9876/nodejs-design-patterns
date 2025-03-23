const { Container } = require("inversify");
const BookingService = require("./services/BookingService.js");
const BookingRepository = require("./repositories/BookingRepository.js");
const IBookingRepository = require("./repositories/interfaces/IBookingRepository.js");
const IBookingService = require("./services/interfaces/IBookingService.js");

const container = new Container();

container.bind(IBookingRepository).to(BookingRepository).inSingletonScope();
container.bind(IBookingService).to(BookingService).inSingletonScope();

module.exports = container;
