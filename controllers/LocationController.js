const BaseController = require('./BaseController.js');
const LocationService = require('../services/LocationService.js');

class LocationController extends BaseController {
    constructor() {
        super(LocationService);
    }
}

module.exports = new LocationController;