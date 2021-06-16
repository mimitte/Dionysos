let CellarModel = require('../models/CellarModel');
let ZoneModel = require('../models/ZoneModel');

let CellarController = {
  findAll: async (req, res) => {
    CellarModel
      .find()
      .populate({
        path: 'zones',
        populate: { path: 'bottles' }
      })
      .exec((err, cellars) => {
        if (err) res.stat(500).json({ err })
        res.status(200).json(cellars)
      });
  },
  find: async (req, res) => {
    CellarModel
      .findOne({ _id: req.params.id })
      .populate({
        path: 'zones',
        populate: { path: 'bottles' }
      })
      .exec((err, cellar) => {
        if (err) res.status(500).json({ err })
        res.status(200).json(cellar)
      });
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
    console.log(req.body);
    let { zones } = req.body;
    CellarModel
        .updateOne({ _id: req.params.id }, { $set: { ...req.body } })
        .then( (response) => res.status(200).json(response))
        .catch( (error) => res.status(500).json(error));
  },
  findAllByUser: async (req, res) => {
    CellarModel
      .find({ user: req.params.id })
      .populate({
        path: 'zones',
        populate: { path: 'bottles' }
      })
      .exec((err, cellars) => {
        if (err) res.stat(500).json({ err })
        res.status(200).json(cellars)
      });
  }
}

module.exports = CellarController;
