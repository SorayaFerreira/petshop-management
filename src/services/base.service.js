class BaseService {
    constructor(model) {
        this.model = model;
    }

    async getAll() {
        return await this.model.findMany();
    }

    async getById(id) {
        return await this.model.findUnique({
            where: { id: parseInt(id) }
        });
    }

    async create(data) {
        return await this.model.create({ data });
    }

    async update(id, data) {
        return await this.model.update({
            where: { id: parseInt(id) },
            data,
        });
    }

    async delete(id) {
        return await this.model.delete({
            where: { id: parseInt(id) }
        });
    }
}

module.exports = BaseService;
