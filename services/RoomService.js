const IRoomService = require('./interfaces/IRoomService.js');

class RoomService extends IRoomService {
    constructor(roomRepository) {
        super();
        this.roomRepository = roomRepository;
    }

    async create(data) {
        return await this.roomRepository.create(data);
    }

    async getAll() {
        return await this.roomRepository.getAll();
    }

    async getById(id) {
        return await this.roomRepository.getById(id);
    }

    async update(id, data) {
        return await this.roomRepository.update(id, data);
    }

    async delete(id) {
        return await this.roomRepository.delete(id);
    }
}

module.exports = new RoomService;
