const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Routes
const userRoutes = require('./routes/User');

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');

const api_conf = require('./api_conf.json');

const BottleController = require('./controllers/BottleController');

const app = express();

mongoose.connect(api_conf.development.api_url,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

const cellarRoutes = require('./routes/Cellar');
const zoneRoutes = require('./routes/Zone');
const bottleRoutes = require('./routes/Bottle');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/auth', userRoutes);
app.use('/api/cellar', cellarRoutes);
app.use('/api/zone', zoneRoutes);
app.use('/api/bottle', bottleRoutes);

module.exports = app;
