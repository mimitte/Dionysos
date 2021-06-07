const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log(`Token : ${token}`);
        const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
        console.log(`decodedToken.userId : ${decodedToken.userId | "Nothing"}`);
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Bad user id !'
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ error: "Unauthentified request !" })
    }
};
