const { QueryTypes } = require('sequelize');
const sequelize = require('../../database');

const fetchRequest = async (req, res) => {
    try {
        const requestedPerson = await sequelize.query(
            'SELECT p.fname, p.number FROM car c INNER JOIN profile p ON c.user_id = p.user_id WHERE c.request = ?',
            { replacements: ['true'], type: QueryTypes.SELECT }
        );

        res.status(200).json({ requestedPerson: requestedPerson[0] });
    } catch (error) {
        console.error('Error fetching requested person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = fetchRequest;
