import { IHotelService } from "./interfaces/IHotelService";
import HotelRepository from "../repositories/HotelRepository";
import { Hotel } from "../models/Hotel";

class HotelService implements IHotelService {
    async create(data: Partial<Hotel>) {
        return await HotelRepository.create(data);
    }

    async getAll() {
        return await HotelRepository.getAll();
    }

    async getById(id: number) {
        return await HotelRepository.getById(id);
    }

    async update(id: number, data: Partial<Hotel>) {
        return await HotelRepository.update(id, data);
    }

    async delete(id: number) {
        return await HotelRepository.delete(id);
    }
}

export default new HotelService();
