import { inject, injectable } from "inversify";
import { IUserService } from "./interfaces/IUserService";
import { IUserRepository } from "../repositories/interfaces/IUserRepository";
import { User } from "../models/User";

@injectable()
class UserService implements IUserService {
    private userRepository: IUserRepository;

    constructor(@inject("IUserRepository") userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async create(data: Partial<User>) {
        return await this.userRepository.create(data);
    }

    async getAll() {
        return await this.userRepository.getAll();
    }

    async getById(id: number) {
        return await this.userRepository.getById(id);
    }

    async update(id: number, data: Partial<User>) {
        return await this.userRepository.update(id, data);
    }

    async delete(id: number) {
        return await this.userRepository.delete(id);
    }
}

export default UserService;