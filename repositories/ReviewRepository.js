const BaseRepository = require('./BaseRepository.js');
const {Review} = require('../models');

class ReviewRepository extends BaseRepository {
    constructor() {
        super(Review);
    }
}

module.exports = new ReviewRepository;