import { IHotelChainRepository } from './interfaces/IHotelChainRepository';
import { Room } from '../models/Room';
import { Booking } from '../models/Booking';


class RoomRepository implements IHotelChainRepository {
    async create(data: Partial<Room>) {
        return await Room.create(data);
    }

    async getAll() {
        return await Room.findAll({
            include: [{ model: Booking, as: 'bookings' }]
        });
    }

    async getById(id: number) {
        return await Room.findByPk(id, {
            include: [{ model: Booking, as: 'bookings' }],
        });
    }

    async update(id: number, data: Partial<Room>) {
        const room = await Room.findByPk(id);
        if (!room) return null;
        return await room.update(data);
    }

    async delete(id: number) {
        const room = await Room.findByPk(id);
        if (!room) return;
        await room.destroy();
    }
}

export default new RoomRepository();