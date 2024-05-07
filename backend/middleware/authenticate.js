const jwt = require('jsonwebtoken');
const { QueryTypes } = require('sequelize');
const sequelize = require('../database');
require('dotenv').config();

const JWT_SECRET = process.env.SECRETKEY
const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token);

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: Missing or invalid token' });
    }

    jwt.verify(token, JWT_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
      }

      const user = await sequelize.query(
        `SELECT * FROM login WHERE email = :email`,
        { 
          replacements: { email: decoded.email },
          type: QueryTypes.SELECT 
        }
      );

      if (user.length === 0) {
        return res.status(401).json({ error: 'Unauthorized: User not found' });
      }

      req.user = decoded;
      next();
    });
  } catch (error) {
    console.error('Error verifying user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = authenticateUser;