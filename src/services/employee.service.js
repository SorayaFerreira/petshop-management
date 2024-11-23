const BaseService = require('./base.service');
const prisma = require('../prisma/client');

class EmployeeService extends BaseService {
    constructor() {
        super(prisma.employee);
    }
}

module.exports = new EmployeeService();