const BaseController = require('./BaseController.js');
const RoomService = require('../services/RoomService.js');

class RoomController extends BaseController {
    constructor() {
        super(RoomService);
    }
}

module.exports = new RoomController;