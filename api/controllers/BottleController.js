let BottleModel = require('../models/BottleModel');

let BottleController = {
    find: async (req, res) => {
        let found = await BottleModel.find({ _id: req.params.id });
        res.json(found);
    },
    all: async (req, res) => {
        let allZones = await BottleModel.find();
        res.json(allZones);
    },
    create: async (req, res) => {
        delete req.body._id;
        let newBottle = new BottleModel(req.body);
        let savedBottle = await newBottle.save();
        res.json(savedBottle);
    },
    findAllBottles: async (req, res) => {
        let foundBottle = await BottleModel.find({ _id: req.params.id }).populate('bottles');
        res.json(foundBottle);
    },
    delete: async (req, res) => {
        await BottleModel.deleteOne({ _id: req.params.id });
        res.json({ "message": "Deleted bottle" });
    },
    deleteAll: async (req, res) => {
        await BottleModel.deleteMany();
        res.json({ "message": "Deleted all" });
    }
}

module.exports = BottleController;