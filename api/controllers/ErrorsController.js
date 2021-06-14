let ErrorsController = {
  methodNotAllowed: (req, res ) => {
    res.status(405).json({ message: "Method not allowed"});
  }
}

module.exports = ErrorsController;