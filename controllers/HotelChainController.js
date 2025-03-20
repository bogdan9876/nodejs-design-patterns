const BaseController = require('./BaseController.js');
const HotelChainService = require('../services/HotelChainService.js');

class HotelChainController extends BaseController {
    constructor() {
        super(HotelChainService);
    }
}

module.exports = new HotelChainController;