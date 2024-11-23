const BaseController = require('./base.controller');
const clientService = require('../services/client.service');

class ClientController extends BaseController {
    constructor() {
        super(clientService);
    }
}

module.exports = new ClientController();
