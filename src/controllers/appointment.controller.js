const BaseController = require('./base.controller');
const appointmentService = require('../services/appointment.service');

class AppointmentController extends BaseController {
    constructor() {
        super(appointmentService);
    }
}

module.exports = new AppointmentController();
