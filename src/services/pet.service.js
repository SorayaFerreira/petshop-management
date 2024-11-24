const BaseService = require('./base.service');
const prisma = require('../prisma/client');

class PetService extends BaseService {
    constructor() {
        super(prisma.pet);
    }

    async getAll() {
        return await this.model.findMany({
            include: {
                client: true,
                appointments: true
            },
        });
    }

    async getById(id) {
        return await this.model.findUnique({
            where: { id: parseInt(id) },
            include: {
                client: true,
                appointments: true
            },
        });
    }

}

module.exports = new PetService();
