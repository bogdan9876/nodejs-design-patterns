import { Container } from "inversify";
import { IBookingRepository } from "../repositories/interfaces/IBookingRepository";
import { IBookingService } from "../services/interfaces/IBookingService";
import BookingRepository from "../repositories/BookingRepository";
import BookingService from "../services/BookingService";
import BookingController from "../controllers/BookingController";

const container = new Container();

container.bind<IBookingRepository>("IBookingRepository").to(BookingRepository);
container.bind<IBookingService>("IBookingService").to(BookingService);
container.bind<BookingController>("BookingController").to(BookingController);

export { container, BookingController };
