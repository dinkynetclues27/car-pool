const { QueryTypes } = require('sequelize');
const sequelize = require('../../database');

const fetchRequest = async (req, res) => {
    try {
        const requestedPerson = await sequelize.query(
            'SELECT p.fname,p.number FROM request r inner join profile p on r.user_id = p.user_id inner join car c on r.car_id = c.car_id;',
            {type: QueryTypes.SELECT }
        );

        res.status(200).json({ requestedPerson: requestedPerson[0] });
    } catch (error) {
        console.error('Error fetching requested person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = fetchRequest;


