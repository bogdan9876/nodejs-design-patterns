const BaseRepository = require('./BaseRepository.js');
const {User} = require('../models');

class UserRepository extends BaseRepository {
    constructor() {
        super(User);
    }
}

module.exports = new UserRepository;