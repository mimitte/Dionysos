const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');

// import swaggerUi from "swagger-ui-express";
// import swaggerDocument from "./swagger/swagger.json";

const api_conf = require('./api_conf.json');

const Bottle = require('./models/bottle');
const bottle = require('./models/bottle');

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

app.post('/api/bottle', (req, res, next) => {
  delete req.body._id;
  const bottle = new Bottle({
    ...req.body
  });
  bottle.save()
    .then(() => res.status(201).json({ message: "bottle created !"}))
    .catch(error => res.status(400).json({ error }));
});

app.get('/api/bottle', (req, res, next) => {
  bottle.find()
    .then(bottles => res.status(200).json(bottles))
    .catch(error => res(400).json({ error }));
});

app.get('/api/bottle/:id', (req, res, next) => {
  bottle.findOne({ _id: req.params.id })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(400).json({error}));
});

app.delete('/api/bottle/:id', (req, res, next) => {
  bottle.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet supprimé !"}))
    .catch(error => res.status(400).json({ error }));
})

module.exports = app;