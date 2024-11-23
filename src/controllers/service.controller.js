const BaseController = require('./base.controller');
const serviceService = require('../services/service.service');

class ServiceController extends BaseController {
    constructor() {
        super(serviceService);
    }
}

module.exports = new ServiceController();
