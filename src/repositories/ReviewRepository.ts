import { IReviewRepository } from './interfaces/IReviewRepository';
import { Review } from '../models/Review';


class ReviewRepository  implements IReviewRepository  {
    async create(data: Partial<Review>) {
        return await Review.create(data);
    }

    async getAll() {
        return await Review.findAll();
    }

    async getById(id: number) {
        return await Review.findByPk(id);
    }
    
    async update(id: number, data: Partial<Review>) {
        const review = await Review.findByPk(id);
        if (!review) return null;
        return await review.update(data);
    }

    async delete(id: number) {
        const review = await Review.findByPk(id);
        if (!review) return;
        await review.destroy();
    }
}

export default new ReviewRepository();