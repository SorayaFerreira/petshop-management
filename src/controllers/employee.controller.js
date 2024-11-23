const BaseController = require('./base.controller');
const employeeService = require('../services/employee.service');

class EmployeeController extends BaseController {
    constructor() {
        super(employeeService);
    }
}

module.exports = new EmployeeController();
