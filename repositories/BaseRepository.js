class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        return await this.model.create(data);
    }

    async getAll() {
        return await this.model.findAll();
    }

    async getById(id) {
        return await this.model.findByPk(id);
    }

    async update(id, data) {
        const record = await this.model.findByPk(id);
        return await record.update(data);
    }

    async delete(id) {
        const record = await this.model.findByPk(id);
        return await record.destroy();
    }
}

module.exports = BaseRepository;
