const IRoomService = require('./interfaces/IRoomService.js');

class RoomService extends IRoomService {
    constructor(roomService) {
       this.roomService = roomService;
    }

    async create(data) {
        return await this.roomService.create(data);
    }

    async getAll() {
        return await this.roomService.getAll();
    }

    async getById(id) {
        return await this.roomService.getById(id);
    }

    async update(id, data) {
        return await this.roomService.update(id, data);
    }

    async delete(id) {
        return await this.roomService.delete(id);
    }
}

module.exports = RoomService;
