const BaseController = require('./base.controller');
const petService = require('../services/pet.service');

class PetController extends BaseController {
    constructor() {
        super(petService);
    }
}

module.exports = new PetController();
