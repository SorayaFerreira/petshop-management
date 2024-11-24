const BaseService = require('./base.service');
const prisma = require('../prisma/client');

class EmployeeService extends BaseService {
    constructor() {
        super(prisma.employee);
    }

    async getAll() {
        return await this.model.findMany({
            include: {
                appointments: true
            },
        });
    }

    async getById(id) {
        return await this.model.findUnique({
            where: { cpf: id },
            include: {
                appointments: true
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

module.exports = new EmployeeService();