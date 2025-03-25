import DataRepository from '../repositories/DataRepository';

class DataService {
    async get() {
        try {
            return await DataRepository.get();
        } catch (error) {
            console.error(error);
        }
    }
}

export default DataService;