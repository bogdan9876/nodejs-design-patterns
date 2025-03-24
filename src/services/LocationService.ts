import { ILocationService } from "./interfaces/ILocationService";
import LocationRepository from "../repositories/LocationRepository";
import { Location } from "../models/Location";

class LocationService implements ILocationService {
    async create(data: Partial<Location>) {
        return await LocationRepository.create(data);
    }

    async getAll() {
        return await LocationRepository.getAll();
    }

    async getById(id: number) {
        return await LocationRepository.getById(id);
    }

    async update(id: number, data: Partial<Location>) {
        return await LocationRepository.update(id, data);
    }

    async delete(id: number) {
        return await LocationRepository.delete(id);
    }
}

export default new LocationService();
