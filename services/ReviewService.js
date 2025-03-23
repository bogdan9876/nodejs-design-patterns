const IReviewService = require('./interfaces/IReviewService.js');

class ReviewService extends IReviewService {
    constructor(reviewService) {
       this.reviewService = reviewService;
    }

    async create(data) {
        return await this.reviewService.create(data);
    }

    async getAll() {
        return await this.reviewService.getAll();
    }

    async getById(id) {
        return await this.reviewService.getById(id);
    }

    async update(id, data) {
        return await this.reviewService.update(id, data);
    }

    async delete(id) {
        return await this.reviewService.delete(id);
    }
}

module.exports = ReviewService;
