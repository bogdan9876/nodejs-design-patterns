const { Container } = require("inversify");
const { IBookingService } = require("./interfaces/IBookingService");
const { IBookingRepository } = require("./repositories/interfaces/IBookingRepository");
const { BookingRepository } = require("./repositories/BookingRepository");
const { BookingService } = require("./services/BookingService");

const container = new Container();

container.bind(IBookingRepository).to(BookingRepository).inSingletonScope();
container.bind(IBookingService).to(BookingService).inSingletonScope();

module.exports = container;
