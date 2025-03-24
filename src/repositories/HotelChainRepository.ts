import { IHotelChainRepository } from './interfaces/IHotelChainRepository';
import { HotelChain } from '../models/HotelChain';
import { Hotel } from '../models/Hotel';


class HotelChainRepository implements IHotelChainRepository {
    async create(data: Partial<HotelChain>) {
        return await HotelChain.create(data);
    }

    async getAll() {
        return await HotelChain.findAll({
            include: [{ model: Hotel, as: 'hotels' }]
        });
    }

    async getById(id: number) {
        return await HotelChain.findByPk(id, {
            include: [{ model: Hotel, as: 'hotels' }],
        });
    }

    async update(id: number, data: Partial<HotelChain>) {
        const hotelChain = await HotelChain.findByPk(id);
        if (!hotelChain) return null;
        return await hotelChain.update(data);
    }

    async delete(id: number) {
        const hotelChain = await HotelChain.findByPk(id);
        if (!hotelChain) return;
        await hotelChain.destroy();
    }
}

export default new HotelChainRepository();