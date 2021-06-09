let ZoneModel = require('../models/ZoneModel');
let BottleModel = require('../models/BottleModel');

let ZoneController = {
    findAll: async (req, res) => {
        let allZones = await ZoneModel.find();
        res.json(allZones);
    },
    find: async (req, res) => {
        let bottles = await BottleModel.find({ zone: req.params.id });
        let foundZone = await ZoneModel.findOne({ _id: req.params.id });
        foundZone.bottles = bottles;
        res.json(foundZone);
    },
    create: async (req, res) => {
        delete req.body._id;
        let newZone = new ZoneModel(req.body);
        let savedZone = await newZone.save();
        res.json(savedZone);
    },
    edit: async (req, res) => {
        await ZoneModel.updateOne({ _id: req.params.id }, { $set: { ...req.body } });
        res.status(200).json({ "message": "Zone modified"})
    },
    deleteAll: async (req, res) => {
        await ZoneModel.deleteMany();
        res.json({ "message": "Deleted all" });
    },
    delete: async (req, res) => {
        await ZoneModel.remove({ _id: req.params.id });
        res.json({ "message": "Zone supprimée" });
    },
    findAllBottlesByZoneId: async (req, res) => {
        let found = await BottleModel.find({ zone: req.params.id });
        res.json(found);
    },
    findAllZoneByUserId: async (req, res) => {
        let zones = await ZoneModel.find({ userId: req.params.id });
        res.json({ zones });
    }
}

module.exports = ZoneController;
