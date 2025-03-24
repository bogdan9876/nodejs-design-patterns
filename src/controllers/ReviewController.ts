import BaseController from "./BaseController";
import ReviewService from "../services/ReviewService";

class ReviewController extends BaseController<typeof ReviewService> {
    constructor() {
        super(ReviewService);
    }
}

export default new ReviewController();
