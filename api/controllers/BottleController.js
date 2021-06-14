let BottleModel = require('../models/BottleModel');
let ZoneModel = require('../models/ZoneModel');

let BottleController = {
  findAll: async (req, res) => {
    let offset = parseInt(req.query.offset, 10);
    let limit = parseInt(req.query.limit, 10);
    let zones;
    if (offset !== undefined && limit !== undefined) {
      zones = await BottleModel.find().skip(offset).limit(limit);
    } else {
      zones = await BottleModel.find();
    }
    res.status(200).json(zones);
  },
  find: async (req, res) => {
    let found = await BottleModel.find({ _id: req.params.id });
    res.json(found);
  },
  create: async (req, res) => {
    delete req.body._id;
    let zoneId = req.body.zone;

    if (!zoneId) {
      delete req.body.zone;
      delete req.body.location;
    }

    let newBottle = new BottleModel(req.body);
    let savedBottle = await newBottle.save();
    let newBottleId = savedBottle._id;

    if (zoneId) {
      ZoneModel
        .findOne({ _id: zoneId })
        .exec((err, zone) => {
          if (err) res.status(500).json({ err });
          let bottles = zone.bottles ? zone.bottles : [];
          bottles.push(newBottleId);
          ZoneModel
            .updateOne({ _id: zoneId }, { bottles: bottles })
            .exec((err, zone) => {
              if (err) res.status(500).json({ err })
              res.status(201).json(newBottle);
            });
        });
    }
    res.status(201).json(newBottle);
  },
  edit: async (req, res) => {
    await BottleModel.updateOne({ _id: req.params.id }, { $set: { ...req.body } });
    res.status(200).json({ "message": "Bottle modified" });
  },
  deleteAll: async (req, res) => {
    await BottleModel.deleteMany();
    res.json({ "message": "Deleted all" });
  },
  delete: async (req, res) => {
    await BottleModel.deleteOne({ _id: req.params.id });
    res.json({ "message": "Deleted bottle" });
  },
  findAllBottleByUserId: async (req, res) => {
    let userId = req.params.id;
    BottleModel
      .find({ user: userId })
      .exec((err, bottles) => {
        if (err) res.status(500).json({ err });
        res.status(200).json(bottles);
      });
  }
}

module.exports = BottleController;
