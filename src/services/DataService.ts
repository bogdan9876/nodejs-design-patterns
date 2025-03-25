import DataRepository from "../repositories/DataRepository";

class DataService {
    async get(): Promise<any> {
        try {
            return await new DataRepository().get();
        } catch (error) {
            throw error;
        }
    }
}

export default DataService;