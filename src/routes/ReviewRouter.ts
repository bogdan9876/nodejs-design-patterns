import { container } from "../config/inversify";
import BaseRouter from "./BaseRouter";
import ReviewController from "../controllers/ReviewController";

class ReviewRouter extends BaseRouter {
    constructor() {
        const reviewController = container.get<ReviewController>("ReviewController");
        super(reviewController);
    }
}

export default new ReviewRouter().getRouter();