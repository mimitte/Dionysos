const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Routes
const userRoutes = require('./routes/userRoutes');
const cellarRoutes = require('./routes/cellarRoutes');
const zoneRoutes = require('./routes/zoneRoutes');
const bottleRoutes = require('./routes/bottleRoutes');

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');

const api_conf = require('./api_conf.json');

const app = express();

mongoose.connect(api_conf.development.api_url,
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/auth', userRoutes);
app.use('/api/cellar', cellarRoutes);
app.use('/api/zone', zoneRoutes);
app.use('/api/bottle', bottleRoutes);

module.exports = app;