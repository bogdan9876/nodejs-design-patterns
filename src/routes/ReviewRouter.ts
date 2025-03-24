import BaseRouter from "./BaseRouter";
import ReviewController from "../controllers/ReviewController";

class ReviewRouter extends BaseRouter {
    constructor() {
        super(ReviewController);
    }
}

export default new ReviewRouter().getRouter();
