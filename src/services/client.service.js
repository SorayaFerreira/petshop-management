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
            where: { id: parseInt(id) },
            include: {
                pets: true
            },
        });
    }
}

module.exports = new ClientService();