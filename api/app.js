const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');

const api_conf = require('./api_conf.json');

const CellarController = require('./controllers/CellarController');
const ZoneController = require('./controllers/ZoneController');
const BottleController = require('./controllers/BottleController');
const CellarModel = require('./models/CellarModel');

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

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/**
 * Callar routes
 */
app.route('/api/cellar')
  .get(CellarController.all)
  .post(CellarController.create)
  .delete(CellarController.deleteAll);

app.route('/api/cellar/:id')
  .get(CellarController.find)
  .patch(CellarController.edit)
  .delete(CellarController.delete);

app.get('/api/cellar/:id/zones', () => CellarController.findAllZones);

/**
 * Zone routes
 */
app.route('/api/zone')
  .get(ZoneController.all)
  .post(ZoneController.create)
  .delete(ZoneController.deleteAll);

app.route('/api/zone/:id')
  .get(ZoneController.find)
  .patch(ZoneController.edit)
  .delete(ZoneController.delete)

app.get('/api/zone/:id/bottle', ZoneController.findAllBottles);

/**
 * Bottle routes
 */
app.route('/api/bottle')
  .get(BottleController.all)
  .post(BottleController.create)
  .delete(BottleController.deleteAll);

app.route('/api/bottle/:id')
  .get(BottleController.find)
  .patch(BottleController.edit)
  .delete(BottleController.delete);

module.exports = app;