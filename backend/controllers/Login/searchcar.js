const { QueryTypes } = require('sequelize');
const sequelize = require('../../database');

const searchcar = async (req, res) => {
    const { from_destination, to_destination } = req.body;

    try {
        const cars = await sequelize.query(
            'SELECT p.fname,c.* FROM car c JOIN profile p ON c.user_id = p.user_id WHERE c.from_destination = ? AND c.to_destination = ? AND c.ride_status = ?',
            { replacements: [from_destination, to_destination, 'on'], type: QueryTypes.SELECT }
        );

        res.status(200).json(cars);
    } catch (error) {
        console.error('Error searching for cars:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = searchcar;
