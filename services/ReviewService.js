const BaseService = require('./BaseService.js');
const ReviewRepository = require('../repositories/ReviewRepository.js');

class ReviewService extends BaseService {
    constructor() {
        super(ReviewRepository);
    }
}

module.exports = new ReviewService;
