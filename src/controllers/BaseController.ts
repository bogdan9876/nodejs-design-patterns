import { Request, Response } from "express";

class BaseController<T> {
    protected service: T;

    constructor(service: T) {
        this.service = service;
    }

    async create(req: Request, res: Response): Promise<void> {
        try {
            const result = await (this.service as any).create(req.body);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const result = await (this.service as any).getAll();
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    async getOne(req: Request, res: Response): Promise<void> {
        try {
            const result = await (this.service as any).getById(req.params.id);
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
            const result = await (this.service as any).update(req.params.id, req.body);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            await (this.service as any).delete(req.params.id);
            res.json({ message: "Deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }
}

export default BaseController;
