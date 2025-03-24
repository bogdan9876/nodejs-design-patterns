import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { IBookingService } from "../services/interfaces/IBookingService";

@injectable()
class BookingController {
    private bookingService: IBookingService;

    constructor(@inject("IBookingService") bookingService: IBookingService) {
        this.bookingService = bookingService;
    }

    async create(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.bookingService.create(req.body);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.bookingService.getAll();
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    async getOne(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.bookingService.getById(Number(req.params.id));  // Перетворити id на число
            if (!result) {
                res.status(404).json({ message: "Not found" });
                return;
            }
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.bookingService.update(Number(req.params.id), req.body);  // Перетворити id на число
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            await this.bookingService.delete(Number(req.params.id));  // Перетворити id на число
            res.json({ message: "Deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }
}

export default BookingController;
