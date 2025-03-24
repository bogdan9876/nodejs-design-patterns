import { IUserService } from "./interfaces/IUserService";
import UserRepository from "../repositories/UserRepository";
import { User } from "../models/User";

class UserService implements IUserService {
    async create(data: Partial<User>) {
        return await UserRepository.create(data);
    }

    async getAll() {
        return await UserRepository.getAll();
    }

    async getById(id: number) {
        return await UserRepository.getById(id);
    }

    async update(id: number, data: Partial<User>) {
        return await UserRepository.update(id, data);
    }

    async delete(id: number) {
        return await UserRepository.delete(id);
    }
}

export default new UserService();
