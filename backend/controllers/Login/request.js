const { QueryTypes } = require('sequelize');
const sequelize = require('../../database');

const fetchRequest = async (req, res) => {
    const userId = req.params.user_id; 
    try {
        const requestedPerson = await sequelize.query(
            `SELECT p.fname, p.number,p.user_id,r.car_id,r.request_id FROM request r
             INNER JOIN profile p ON r.user_id = p.user_id
             INNER JOIN car c ON r.car_id = c.car_id
             WHERE c.user_id = :userId;`,
            {
                replacements: { userId },
                type: QueryTypes.SELECT
            }
        );

        res.status(200).json({ requestedPerson: requestedPerson[0] });
    } catch (error) {
        console.error('Error fetching requested person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = fetchRequest;