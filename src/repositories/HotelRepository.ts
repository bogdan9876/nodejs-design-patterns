import { injectable } from "inversify";
import { IHotelRepository } from './interfaces/IHotelRepository';
import { Room } from '../models/Room';
import { Review } from '../models/Review';
import { Location } from '../models/Location';
import { Hotel } from '../models/Hotel';

@injectable()
class HotelRepository implements IHotelRepository {
    async create(data: Partial<Hotel>) {
        return await Hotel.create(data);
    }

    async getAll() {
        return await Hotel.findAll({
            include: [
                { model: Location, as: "location" },
                { model: Room, as: "rooms" },
                { model: Review, as: "reviews" }
            ]
        });
    }

    async getById(id: number) {
        return await Hotel.findByPk(id, {
            include: [
                { model: Location, as: "location" },
                { model: Room, as: "rooms" },
                { model: Review, as: "reviews" }
            ]
        });
    }

    async update(id: number, data: Partial<Hotel>) {
        const hotel = await Hotel.findByPk(id);
        if (!hotel) return null;
        return await hotel.update(data);
    }

    async delete(id: number) {
        const hotel = await Hotel.findByPk(id);
        if (!hotel) return;
        await hotel.destroy();
    }
}

export default HotelRepository;