const UserRepository = require('../repositories/UserRepository.js');

class UserService {
    async create(data) {
        const createdUser = await UserRepository.createUser(data)
        return createdUser;
    }

    async getAll(req, res) {
        try {
            const users = await UserRepository.getAllUsers();
            return users;
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    
    async getOne(id) {
        if (!id) {
            return res.status(404).json({ message: 'User not found' });
        }
        const user = await UserRepository.getUserById(id)
        return user;
    }

    async update(user) {
        if (!user.id) {
            res.status(400).json({ message: 'id is invalid' })
        }
        const updatedPost = await UserRepository.updateUser(user.id, user)
        return updatedPost
    }

    async delete(id) {
        if (!id) {
            res.status(400).json({ message: 'id is invalid' })
        }
        const user = await UserRepository.deleteUser(id)
        return user;
    }
}

module.exports = new UserService;