import { inject, injectable } from "inversify";
import { IHotelService } from "../services/interfaces/IHotelService";
import BaseController from "./BaseController";
import { Request, Response } from "express";

@injectable()
class HotelController extends BaseController<IHotelService> {
    constructor(@inject("IHotelService") hotelService: IHotelService) {
        super(hotelService);
    }

    async showAddHotelPage(req: Request, res: Response): Promise<void> {
        try {
            res.render('add_hotel');
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    async editHotelPage(req: Request, res: Response): Promise<void> {
        try {
            const hotel = await this.service.getById(req.params.id);
            if (!hotel) {
                res.status(404).send("Hotel not found");
                return;
            }
            res.render('edit_hotel', { hotel });
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    async create(req: Request, res: Response): Promise<void> {
        try {
            const newHotel = await this.service.create(req.body);
            res.redirect("/api/hotel");
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    async getAll(req: Request, res: Response): Promise<void> {
        await this.handleRequest(req, res, async () => {
            try {
                const hotels = await this.service.getAll();
                res.render('index', { hotels });
            } catch (error) {
                res.status(500).json({ message: (error as Error).message });
            }
        });
    }
}

export default HotelController;