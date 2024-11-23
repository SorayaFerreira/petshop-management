const express = require('express');
const app = express();
const appointmentRoutes = require('./routes/appointment.routes');
const clientRoutes = require('./routes/client.routes');
const employeeRoutes = require('./routes/employee.routes');
const petRoutes = require('./routes/pet.routes');
const serviceRoutes = require('./routes/service.routes');

app.use(express.json());

app.use(appointmentRoutes, clientRoutes, employeeRoutes, petRoutes, serviceRoutes);

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
