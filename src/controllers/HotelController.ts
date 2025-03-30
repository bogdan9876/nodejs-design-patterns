import { inject, injectable } from "inversify";
import { IHotelService } from "../services/interfaces/IHotelService";
import BaseController from "./BaseController";
import { Request, Response } from "express";

@injectable()
class HotelController extends BaseController<IHotelService> {
    constructor(@inject("IHotelService") hotelService: IHotelService) {
        super(hotelService);
    }

    async getAll(req: Request, res: Response): Promise<void> {
        await this.handleRequest(req, res, async () => {
            try {
                const hotels = await this.service.getAll();
                res.render( 'index' ,{ hotels });
            } catch (error) {
                res.status(500).json({ message: (error as Error).message });
            }
        });
    }
}

export default HotelController;