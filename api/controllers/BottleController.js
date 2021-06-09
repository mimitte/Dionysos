let BottleModel = require('../models/BottleModel');

let BottleController = {
    findAll: async (req, res) => {
        let offset = parseInt(req.query.offset, 10);
        let limit = parseInt(req.query.limit, 10);
        let zones;
        if (offset !== undefined && limit !== undefined) {
            console.log(`offset : ${offset} - limit : ${limit}`);
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
        let newBottle = new BottleModel(req.body);
        let savedBottle = await newBottle.save();
        res.status(201).json(savedBottle);
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
        let bottles = await BottleModel.find({ userId: req.params.id });
        res.json({ bottles });
    }
}

module.exports = BottleController;
