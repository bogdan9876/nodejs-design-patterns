import { injectable } from "inversify";
import { IBookingRepository } from "./interfaces/IBookingRepository";
import { Booking } from "../models/Booking";
import { Review } from "../models/Review";

@injectable()
class BookingRepository implements IBookingRepository {
    async create(data: Partial<Booking>) {
        return await Booking.create(data);
    }

    async getAll() {
        return await Booking.findAll({
            include: [{ model: Review, as: 'review' }]
        });
    }

    async getById(id: number) {
        return await Booking.findByPk(id, {
            include: [{ model: Review, as: 'review' }]
        });
    }

    async update(id: number, data: Partial<Booking>) {
        const booking = await Booking.findByPk(id);
        if (!booking) return null;
        return await booking.update(data);
    }

    async delete(id: number) {
        const booking = await Booking.findByPk(id);
        if (!booking) return;
        await booking.destroy();
    }
}

export default BookingRepository;