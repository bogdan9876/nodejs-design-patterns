import { inject, injectable } from "inversify";
import { IReviewService } from "../services/interfaces/IReviewService";
import BaseController from "./BaseController";

@injectable()
class ReviewController extends BaseController<IReviewService> {
    constructor(@inject("IReviewService") reviewService: IReviewService) {
        super(reviewService);
    }
}

export default ReviewController;