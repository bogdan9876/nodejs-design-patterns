const UserService = require('../services/UserService.js');

class UserController {
    async create(req, res) {
        try {
            const user = await UserService.create(req.body)
            res.json(user);
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getAll(req, res) {
        try {
            const users = await UserService.getAll()
            return res.json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getOne(req, res) {
        try {
            const user = await UserService.getOne(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    

    async update(req, res) {
        try {
            const updatedUser = await UserService.update(req.body)
            return res.json(updatedUser)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    async delete(req, res) {
        try {
            const user = await UserService.delete(req.params.id)
            return res.json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = new UserController;