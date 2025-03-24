import { IUserRepository } from './interfaces/IUserRepository';
import { User } from '../models/User';
import { Booking } from '../models/Booking';
import { Review } from '../models/Review';


class UserRepository implements IUserRepository {
    async create(data: Partial<User>) {
        return await User.create(data);
    }

    async getAll() {
        return await User.findAll({
            include: [
                { model: Booking, as: "bookings" },
                { model: Review, as: "reviews" }
            ]
        });
    }

    async getById(id: number) {
        return await User.findByPk(id, {
            include: [
                { model: Booking, as: "bookings" },
                { model: Review, as: "reviews" }
            ]
        });
    }

    async update(id: number, data: Partial<User>) {
        const hotel = await User.findByPk(id);
        if (!hotel) return null;
        return await hotel.update(data);
    }

    async delete(id: number) {
        const hotel = await User.findByPk(id);
        if (!hotel) return;
        await hotel.destroy();
    }
}

export default new UserRepository();