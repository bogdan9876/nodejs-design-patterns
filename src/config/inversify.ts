import { Container } from "inversify";

import { IBookingRepository } from "../repositories/interfaces/IBookingRepository";
import { IHotelChainRepository } from "../repositories/interfaces/IHotelChainRepository";
import { IHotelRepository } from "../repositories/interfaces/IHotelRepository";
import { ILocationRepository } from "../repositories/interfaces/ILocationRepository";
import { IReviewRepository } from "../repositories/interfaces/IReviewRepository";
import { IRoomRepository } from "../repositories/interfaces/IRoomRepository";
import { IUserRepository } from "../repositories/interfaces/IUserRepository";

import BookingRepository from "../repositories/BookingRepository";
import HotelChainRepository from "../repositories/HotelChainRepository";
import HotelRepository from "../repositories/HotelRepository";
import LocationRepository from "../repositories/LocationRepository";
import ReviewRepository from "../repositories/ReviewRepository";
import RoomRepository from "../repositories/RoomRepository";
import UserRepository from "../repositories/UserRepository";

import { IBookingService } from "../services/interfaces/IBookingService";
import { IHotelChainService } from "../services/interfaces/IHotelChainService";
import { IHotelService } from "../services/interfaces/IHotelService";
import { ILocationService } from "../services/interfaces/ILocationService";
import { IReviewService } from "../services/interfaces/IReviewService";
import { IRoomService } from "../services/interfaces/IRoomService";
import { IUserService } from "../services/interfaces/IUserService";

import BookingService from "../services/BookingService";
import HotelChainService from "../services/HotelChainService";
import HotelService from "../services/HotelService";
import LocationService from "../services/LocationService";
import ReviewService from "../services/ReviewService";
import RoomService from "../services/RoomService";
import UserService from "../services/UserService";

import BookingController from "../controllers/BookingController";
import HotelChainController from "../controllers/HotelChainController";
import HotelController from "../controllers/HotelController";
import LocationController from "../controllers/LocationController";
import ReviewController from "../controllers/ReviewController";
import RoomController from "../controllers/RoomController";
import UserController from "../controllers/UserController";

const container = new Container();

container.bind<IBookingRepository>("IBookingRepository").to(BookingRepository);
container.bind<IHotelChainRepository>("IHotelChainRepository").to(HotelChainRepository);
container.bind<IHotelRepository>("IHotelRepository").to(HotelRepository);
container.bind<ILocationRepository>("ILocationRepository").to(LocationRepository);
container.bind<IReviewRepository>("IReviewRepository").to(ReviewRepository);
container.bind<IRoomRepository>("IRoomRepository").to(RoomRepository);
container.bind<IUserRepository>("IUserRepository").to(UserRepository);

container.bind<IBookingService>("IBookingService").to(BookingService);
container.bind<IHotelChainService>("IHotelChainService").to(HotelChainService);
container.bind<IHotelService>("IHotelService").to(HotelService);
container.bind<ILocationService>("ILocationService").to(LocationService);
container.bind<IReviewService>("IReviewService").to(ReviewService);
container.bind<IRoomService>("IRoomService").to(RoomService);
container.bind<IUserService>("IUserService").to(UserService);

container.bind<BookingController>("BookingController").to(BookingController);
container.bind<HotelChainController>("HotelChainController").to(HotelChainController);
container.bind<HotelController>("HotelController").to(HotelController);
container.bind<LocationController>("LocationController").to(LocationController);
container.bind<ReviewController>("ReviewController").to(ReviewController);
container.bind<RoomController>("RoomController").to(RoomController);
container.bind<UserController>("UserController").to(UserController);

export { container };
