import { inject, injectable } from "inversify";
import { IRoomService } from "./interfaces/IRoomService";
import { IRoomRepository } from "../repositories/interfaces/IRoomRepository";
import { Room } from "../models/Room";

@injectable()
class RoomService implements IRoomService {
    private roomRepository: IRoomRepository;

    constructor(@inject("IRoomRepository") roomRepository: IRoomRepository) {
        this.roomRepository = roomRepository;
    }

    async create(data: Partial<Room>) {
        return await this.roomRepository.create(data);
    }

    async getAll() {
        return await this.roomRepository.getAll();
    }

    async getById(id: number) {
        return await this.roomRepository.getById(id);
    }

    async update(id: number, data: Partial<Room>) {
        return await this.roomRepository.update(id, data);
    }

    async delete(id: number) {
        return await this.roomRepository.delete(id);
    }
}

export default RoomService;