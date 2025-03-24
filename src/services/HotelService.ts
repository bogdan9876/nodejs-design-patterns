import { inject, injectable } from "inversify";
import { IHotelService } from "./interfaces/IHotelService";
import { IHotelRepository } from "../repositories/interfaces/IHotelRepository";
import { Hotel } from "../models/Hotel";

@injectable()
class HotelService implements IHotelService {
    private hotelRepository: IHotelRepository;

    constructor(@inject("IHotelRepository") hotelRepository: IHotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    async create(data: Partial<Hotel>) {
        return await this.hotelRepository.create(data);
    }

    async getAll() {
        return await this.hotelRepository.getAll();
    }

    async getById(id: number) {
        return await this.hotelRepository.getById(id);
    }

    async update(id: number, data: Partial<Hotel>) {
        return await this.hotelRepository.update(id, data);
    }

    async delete(id: number) {
        return await this.hotelRepository.delete(id);
    }
}

export default HotelService;