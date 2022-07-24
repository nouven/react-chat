const jwt = require('jsonwebtoken')
const handler = {
  verifyToken: async (req, res, next) => {
    try {
      const token = req.headers.token.split(" ")[1];
      const user = jwt.verify(token, process.env.ACCESS_KEY);
      if (!user) {
        return res.status(400).json("token err!")
      }
      req.user = user
      next();
    } catch (err) {
      return res.status(500).json(err)
    }
  }
}
module.exports = handler
