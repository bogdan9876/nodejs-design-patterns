class BookingController {
    constructor(bookingService) {
        this.bookingService = bookingService;
    }

    async create(req, res) {
        try {
            const result = await this.bookingService.create(req.body);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const result = await this.bookingService.getAll();
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getOne(req, res) {
        try {
            const result = await this.bookingService.getById(req.params.id);
            if (!result) return res.status(404).json({ message: "Not found" });
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const result = await this.bookingService.update(req.params.id, req.body);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            await this.bookingService.delete(req.params.id);
            res.json({ message: "Deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = BookingController;
