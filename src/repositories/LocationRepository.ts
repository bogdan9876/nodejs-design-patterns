import { ILocationRepository } from './interfaces/ILocationRepository';
import { Location } from '../models/Location';


class LocationRepository  implements ILocationRepository  {
    async create(data: Partial<Location>) {
        return await Location.create(data);
    }

    async getAll() {
        return await Location.findAll();
    }

    async getById(id: number) {
        return await Location.findByPk(id);
    }

    async update(id: number, data: Partial<Location>) {
        const location = await Location.findByPk(id);
        if (!location) return null;
        return await location.update(data);
    }

    async delete(id: number) {
        const location = await Location.findByPk(id);
        if (!location) return;
        await location.destroy();
    }
}

export default new LocationRepository();