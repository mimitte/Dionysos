let CellarModel = require('../models/CellarModel');
let ZoneModel = require('../models/ZoneModel');

let CellarController = {
  findAll: async (req, res) => {
    let allCellars = await CellarModel.find();
    res.json(allCellars);
  },
  find: async (req, res) => {
    let zones = await ZoneModel.find({ cellar: req.params.id});
    let foundCellar = await CellarModel.findOne({ _id: req.params.id });
    foundCellar.zones = zones;
    res.json(foundCellar);
  },
  create: async (req, res) => {
    delete req.body._id;
    let newCellar = new CellarModel(req.body);
    let savedCellar = await newCellar.save();
    res.json(savedCellar);
  },
  delete: async (req, res) => {
    await CellarModel.remove({ _id: req.params.id });
    res.json({ "message": "Cellar supprimée" });
  },
  deleteAll: async (req, res) => {
    await CellarModel.deleteMany();
    res.json({ "message": "Deleted all" });
  },
  edit: async (req, res) => {
    await CellarModel.updateOne({ _id: req.params.id }, { $set: { ...req.body } });
    res.status(200).json({ "message": "Cellar modified" });
  },
  findAllZonesByCellarId: async (req, res) => {
    let foundZones = await ZoneModel.find({ cellar: req.params.id });
    res.json(foundZones);
  },
  findAllCellarByUserId: async (req, res) => {
    let cellars = await CellarModel.find({ userId: req.params.id });
    res.json({ cellars });
  }
}

module.exports = CellarController;
