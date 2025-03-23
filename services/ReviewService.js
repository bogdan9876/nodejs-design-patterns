const IReviewService = require('./interfaces/IReviewService.js');

class ReviewService extends IReviewService {
    constructor(reviewRepository) {
        super();
        this.reviewRepository = reviewRepository;
    }

    async create(data) {
        return await this.reviewRepository.create(data);
    }

    async getAll() {
        return await this.reviewRepository.getAll();
    }

    async getById(id) {
        return await this.reviewRepository.getById(id);
    }

    async update(id, data) {
        return await this.reviewRepository.update(id, data);
    }

    async delete(id) {
        return await this.reviewRepository.delete(id);
    }
}

module.exports = new ReviewService;
