import { inject, injectable } from "inversify";
import { IBookingService } from "./interfaces/IBookingService";
import { IBookingRepository } from "../repositories/interfaces/IBookingRepository";
import { Booking } from "../models/Booking";

@injectable()
class BookingService implements IBookingService {
    private bookingRepository: IBookingRepository;

    constructor(@inject("IBookingRepository") bookingRepository: IBookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    async create(data: Partial<Booking>) {
        return await this.bookingRepository.create(data);
    }

    async getAll() {
        return await this.bookingRepository.getAll();
    }

    async getById(id: number) {
        return await this.bookingRepository.getById(id);
    }

    async update(id: number, data: Partial<Booking>) {
        return await this.bookingRepository.update(id, data);
    }

    async delete(id: number) {
        return await this.bookingRepository.delete(id);
    }
}

export default BookingService;
