const BaseService = require('./base.service');
const prisma = require('../prisma/client');

class ServiceService extends BaseService {
    constructor() {
        super(prisma.service);
    }
}

module.exports = new ServiceService();