import { IBookingService } from "./interfaces/IBookingService";
import BookingRepository from "../repositories/BookingRepository";
import { Booking } from "../models/Booking";

class BookingService implements IBookingService {
    async create(data: Partial<Booking>) {
        return await BookingRepository.create(data);
    }

    async getAll() {
        return await BookingRepository.getAll();
    }

    async getById(id: number) {
        return await BookingRepository.getById(id);
    }

    async update(id: number, data: Partial<Booking>) {
        return await BookingRepository.update(id, data);
    }

    async delete(id: number) {
        return await BookingRepository.delete(id);
    }
}

export default new BookingService();
