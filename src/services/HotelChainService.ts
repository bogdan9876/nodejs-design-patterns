import { HotelChain } from '../models/HotelChain';
import { IHotelChainService } from './interfaces/IHotelChainService';
import HotelChainRepository from '../repositories/HotelChainRepository';

class HotelChainService implements IHotelChainService {
    async create(data: Partial<HotelChain>) {
        return await HotelChainRepository.create(data);
    }

    async getAll() {
        return await HotelChainRepository.getAll();
    }

    async getById(id: number) {
        return await HotelChainRepository.getById(id);
    }

    async update(id: number, data: Partial<HotelChain>) {
        return await HotelChainRepository.update(id, data);
    }

    async delete(id: number) {
        return await HotelChainRepository.delete(id);
    }
}

export default new HotelChainService();