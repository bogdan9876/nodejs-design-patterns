const { Container } = require("inversify");
const { IBookingService } = require("./services/interfaces/IBookingService");
const { BookingService } = require("./services/BookingService");
const { IBookingRepository } = require("./repositories/interfaces/IBookingRepository").default;
const { BookingRepository } = require("./repositories/BookingRepository");

const container = new Container();

container.bind(IBookingService).to(BookingService).inSingletonScope();
container.bind(IBookingRepository).to(BookingRepository).inSingletonScope();

module.exports = container;
