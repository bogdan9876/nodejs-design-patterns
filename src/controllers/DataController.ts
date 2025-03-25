import { Request, Response } from "express";
import DataService from '../services/DataService';

class DataController {
    async get(req: Request, res: Response) {
        try {
            const result = await DataService.get();
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ message: error});
        }
    }
}

export default DataController;