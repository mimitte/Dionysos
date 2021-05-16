let CellarModel = require('../models/CellarModel');

let CellarController = {
    find: async (req, res) => {
        let found = await CellarModel.find({ _id: req.params.id });
        res.json(found);
    },
    all: async (req, res) => {
        let allCellars = await CellarModel.find();
        res.json(allCellars);
    },
    create: async (req, res) => {
        delete req.body._id;
        let newCellar = new CellarModel(req.body);
        let savedCellar = await newCellar.save();
        res.json(savedCellar);
    },
    findAllZones: async (req, res) => {
        let foundCellar = await CellarModel.find({ _id: req.params.id }).populate('zones');
        res.json(foundCellar);
    },
    delete: async (req, res) => {
        await CellarModel.remove({ _id: req.params.id });
        res.json({ "message": "Cellar supprimée" });
    },
    deleteAll: async (req, res) => {
        await CellarModel.deleteMany();
        res.json({ "message": "Deleted all" });
<<<<<<< HEAD
=======
    },
    edit: async (req, res) => {
        await CellarModel.updateOne({ _id: req.params.id }, { $set: { ...req.body } });
        res.status(200).json({ "message": "Cellar modified" });
>>>>>>> cf4849242f01d31a688b72d32a0f6d29a4cd8053
    }
}

module.exports = CellarController;