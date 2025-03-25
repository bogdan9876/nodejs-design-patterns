import { Request, Response } from "express";

class BaseController<T> {
    private service: T;

    constructor(service: T) {
        this.service = service;
    }

    private async isDatabaseEmpty(): Promise<boolean> {
        try {
            const allData = await (this.service as any).getAll();
            return !allData || allData.length === 0;
        } catch (error) {
            return true;
        }
    }

    async handleRequest(req: Request, res: Response, action: Function): Promise<void> {
        try {
            if (await this.isDatabaseEmpty()) {
                res.status(400).json({
                    message: "Database is empty, please, redirect to /data enpoint"
                });
                return;
            }

            const result = await action();
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    async create(req: Request, res: Response): Promise<void> {
        await this.handleRequest(req, res, () => (this.service as any).create(req.body));
    }

    async getAll(req: Request, res: Response): Promise<void> {
        await this.handleRequest(req, res, () => (this.service as any).getAll());
    }

    async getOne(req: Request, res: Response): Promise<void> {
        await this.handleRequest(req, res, () => (this.service as any).getById(req.params.id));
    }

    async update(req: Request, res: Response): Promise<void> {
        await this.handleRequest(req, res, () => (this.service as any).update(req.params.id, req.body));
    }

    async delete(req: Request, res: Response): Promise<void> {
        await this.handleRequest(req, res, () => (this.service as any).delete(req.params.id));
    }
}

export default BaseController;
