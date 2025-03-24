import { inject, injectable } from "inversify";
import { ILocationService } from "./interfaces/ILocationService";
import { ILocationRepository } from "../repositories/interfaces/ILocationRepository";
import { Location } from "../models/Location";

@injectable()
class LocationService implements ILocationService {
    private locationRepository: ILocationRepository;

    constructor(@inject("ILocationRepository") locationRepository: ILocationRepository) {
        this.locationRepository = locationRepository;
    }

    async create(data: Partial<Location>) {
        return await this.locationRepository.create(data);
    }

    async getAll() {
        return await this.locationRepository.getAll();
    }

    async getById(id: number) {
        return await this.locationRepository.getById(id);
    }

    async update(id: number, data: Partial<Location>) {
        return await this.locationRepository.update(id, data);
    }

    async delete(id: number) {
        return await this.locationRepository.delete(id);
    }
}

export default LocationService;