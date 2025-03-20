const BaseService = require('./BaseService.js');
const RoomRepository = require('../repositories/RoomRepository.js');

class RoomService extends BaseService {
    constructor() {
        super(RoomRepository);
    }
}

module.exports = new RoomService;
