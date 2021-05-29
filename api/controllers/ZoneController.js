let ZoneModel = require('../models/ZoneModel');

let ZoneController = {
    find: async (req, res) => {
        let found = await ZoneModel.find({ _id: req.params.id })
            .populate('bottles');
        res.json(found);
    },
    all: async (req, res) => {
        let allZones = await ZoneModel.find()
            .populate('bottles');
        res.json(allZones);
    },
    create: async (req, res) => {
        delete req.body._id;
        let newZone = new ZoneModel(req.body);
        let savedZone = await newZone.save();
        res.json(savedZone);
    },
    findAllBottles: async (req, res) => {
        let foundZone = await ZoneModel.find({ _id: req.params.id }).populate("bottles");
        res.json(foundZone);
    },
    delete: async (req, res) => {
        await ZoneModel.remove({ _id: req.params.id });
        res.json({ "message": "Zone supprimée" });
    },
    deleteAll: async (req, res) => {
        await ZoneModel.deleteMany();
        res.json({ "message": "Deleted all" });
    },
    edit: async (req, res) => {
        await ZoneModel.updateOne({ _id: req.params.id }, { $set: { ...req.body } });
        res.status(200).json({ "message": "Zone modified"})
    }
}

module.exports = ZoneController;
