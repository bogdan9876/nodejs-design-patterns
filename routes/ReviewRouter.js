const BaseRouter = require("./BaseRouter.js");
const ReviewController = require("../controllers/ReviewController.js");

class ReviewRouter extends BaseRouter {
    constructor() {
        super(ReviewController);
    }
}

module.exports = new ReviewRouter().getRouter();
