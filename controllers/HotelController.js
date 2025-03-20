const BaseController = require('./BaseController.js');
const HotelService = require('../services/HotelService.js');

class HotelController extends BaseController {
    constructor() {
        super(HotelService);
    }
}

module.exports = new HotelController;