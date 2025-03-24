import { inject, injectable } from "inversify";
import { IReviewService } from "./interfaces/IReviewService";
import { IReviewRepository } from "../repositories/interfaces/IReviewRepository";
import { Review } from "../models/Review";

@injectable()
class ReviewService implements IReviewService {
    private reviewRepository: IReviewRepository;

    constructor(@inject("IReviewRepository") reviewRepository: IReviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    async create(data: Partial<Review>) {
        return await this.reviewRepository.create(data);
    }

    async getAll() {
        return await this.reviewRepository.getAll();
    }

    async getById(id: number) {
        return await this.reviewRepository.getById(id);
    }

    async update(id: number, data: Partial<Review>) {
        return await this.reviewRepository.update(id, data);
    }

    async delete(id: number) {
        return await this.reviewRepository.delete(id);
    }
}

export default ReviewService;