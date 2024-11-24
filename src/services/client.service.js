const BaseService = require('./base.service');
const prisma = require('../prisma/client');

class ClientService extends BaseService {
    constructor() {
        super(prisma.client);
    }

    async getAll() {
        return await this.model.findMany({
            include: {
                pets: true
            },
        });
    }

    async getById(id) {
        return await this.model.findUnique({
            where: { cpf: id },
            include: {
                pets: true
            },
        });
    }

    async update(id, data) {
        return await this.model.update({
            where: { cpf: id },
            data,
        });
    }

    async delete(id) {
        return await this.model.delete({
            where: { cpf: id }
        });
    }

}

module.exports = new ClientService();