import { Request, Response } from "express";
import DataService from "../services/DataService";

class DataController {
    async get(req: Request, res: Response): Promise<void> {
        try {
            const result = await new DataService().get();
            res.status(200).json({ message: "The data has been populated successfully" });
        } catch (error) {
            if (error instanceof Error)
            res.status(400).json({ message: error.message });
        }
    }
}

export default new DataController();