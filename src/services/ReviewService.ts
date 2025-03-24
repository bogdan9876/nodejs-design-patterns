import { IReviewService } from "./interfaces/IReviewService";
import ReviewRepository from "../repositories/ReviewRepository";
import { Review } from "../models/Review";

class ReviewService implements IReviewService {
    async create(data: Partial<Review>) {
        return await ReviewRepository.create(data);
    }

    async getAll() {
        return await ReviewRepository.getAll();
    }

    async getById(id: number) {
        return await ReviewRepository.getById(id);
    }

    async update(id: number, data: Partial<Review>) {
        return await ReviewRepository.update(id, data);
    }

    async delete(id: number) {
        return await ReviewRepository.delete(id);
    }
}

export default new ReviewService();
