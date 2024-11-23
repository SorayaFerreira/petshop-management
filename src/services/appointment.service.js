const BaseService = require('./base.service');
const prisma = require('../prisma/client');

class AppointmentService extends BaseService {
    constructor() {
        super(prisma.appointment);
    }

    async getAll() {
        return await this.model.findMany({
            include: {
                pet: true,
                employee: true,
                appointmentServices: {
                    include: {
                        service: true,
                    },
                },
            }
        });

    }

    async getById(id) {
        return await this.model.findUnique({
            where: { id: parseInt(id) },
            include: {
                pet: true,
                employee: true,
                appointmentServices: true
            },
        });
    }
}

module.exports = new AppointmentService();