const BaseController = require('./BaseController.js');
const ReviewService = require('../services/ReviewService.js');

class ReviewController extends BaseController {
    constructor() {
        super(ReviewService);
    }
}

module.exports = new ReviewController;