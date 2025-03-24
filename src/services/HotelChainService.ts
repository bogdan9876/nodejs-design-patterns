import { inject, injectable } from "inversify";
import { IHotelChainService } from './interfaces/IHotelChainService';
import { IHotelChainRepository } from '../repositories/interfaces/IHotelChainRepository';
import { HotelChain } from '../models/HotelChain';

@injectable()
class HotelChainService implements IHotelChainService {
    private hotelChainRepository: IHotelChainRepository;

    constructor(@inject("IHotelChainRepository") hotelChainRepository: IHotelChainRepository) {
        this.hotelChainRepository = hotelChainRepository;
    }

    async create(data: Partial<HotelChain>) {
        return await this.hotelChainRepository.create(data);
    }

    async getAll() {
        return await this.hotelChainRepository.getAll();
    }

    async getById(id: number) {
        return await this.hotelChainRepository.getById(id);
    }

    async update(id: number, data: Partial<HotelChain>) {
        return await this.hotelChainRepository.update(id, data);
    }

    async delete(id: number) {
        return await this.hotelChainRepository.delete(id);
    }
}

export default HotelChainService;