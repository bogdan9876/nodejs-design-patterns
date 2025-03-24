import { IRoomService } from "./interfaces/IRoomService";
import RoomRepository from "../repositories/RoomRepository";
import { Room } from "../models/Room";

class RoomService implements IRoomService {
    async create(data: Partial<Room>) {
        return await RoomRepository.create(data);
    }

    async getAll() {
        return await RoomRepository.getAll();
    }

    async getById(id: number) {
        return await RoomRepository.getById(id);
    }

    async update(id: number, data: Partial<Room>) {
        return await RoomRepository.update(id, data);
    }

    async delete(id: number) {
        return await RoomRepository.delete(id);
    }
}

export default new RoomService();
