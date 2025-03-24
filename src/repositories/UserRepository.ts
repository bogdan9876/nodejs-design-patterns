import { injectable } from "inversify";
import { IUserRepository } from './interfaces/IUserRepository';
import { User } from '../models/User';
import { Booking } from '../models/Booking';
import { Review } from '../models/Review';

@injectable()
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
        const user = await User.findByPk(id);
        if (!user) return null;
        return await user.update(data);
    }

    async delete(id: number) {
        const user = await User.findByPk(id);
        if (!user) return;
        await user.destroy();
    }
}

export default UserRepository;