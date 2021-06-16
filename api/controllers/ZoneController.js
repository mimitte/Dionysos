let ZoneModel = require('../models/ZoneModel');
let CellarModel = require('../models/CellarModel');

let ZoneController = {
    findAll: async (req, res) => {
        ZoneModel
          .find()
          .populate({ path: 'bottles' })
          .exec((err, zones) => {
              if (err) res.status(500).json({ err })
              res.status(200).json(zones);
          });
    },
    find: async (req, res) => {
        ZoneModel
          .findOne({ _id: req.params.id })
          .populate('bottles')
          .exec((err, zone) => {
              if (err) res.status(500).json({ err })
              res.status(200).json(zone)
          });
    },
    create: async (req, res) => {
      delete req.body._id;
      let newZone = new ZoneModel(req.body.zone);
      let cellarId = req.body.cellar;

      let savedZone = await newZone.save()
      let newZoneId = savedZone._id;

      CellarModel
        .findOne({ _id: cellarId })
        .exec((err, cellar) => {
          if (err) res.status(500).json({ err });
          let zones = cellar.zones ? cellar.zones : []
          zones.push(newZoneId);
          CellarModel
            .updateOne({ _id: cellarId }, { zones: zones })
            .exec( (err, cellar) => {
              if (err) res.status(500).json({ err })
              res.status(200).json(newZone)
            });
        });
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
      let zoneId = req.params.id;
      let { userId, token } = req.body;
      ZoneModel
        .findOne({ _id: zoneId})
        .exec((err, zone) => {
          if (err) res.status(500).json({ err });
          else if (!zone) res.status(404).json({ message: "Zone not found"});
          else if (userId !== zone.get("user").toString()) res.status(401).json({message: "Unauthorized"});
          else {
            ZoneModel
              .deleteOne({ _id: zoneId })
              .exec((err, response) => {
                if (err) res.status(500).json({ message: "Internal server error" });
                res.json({ "message": "Zone supprimée" });
              });
          }
        });
    }
}

module.exports = ZoneController;
