const { QueryTypes } = require('sequelize');
const sequelize = require('../../database');

const caradd = async (req, res) => {
    const { user_id, car_name, chasis_number, seats_available, car_plate_number, from_destination, to_destination,date,time } = req.body;
    console.log('Received request body:', req.body);

    try {
  
        const activeRide = await sequelize.query(
            'SELECT * FROM car WHERE user_id = ? AND ride_status = ?',
            { replacements: [user_id, 'on'], type: QueryTypes.SELECT }
        );

        if (activeRide.length > 0) {
            res.status(403).json({ error: 'User already has an active ride. Cannot add another ride.' });
            return;
        }


        const profile = await sequelize.query(
            'SELECT profile_status FROM profile WHERE user_id = ?',
            { replacements: [user_id], type: QueryTypes.SELECT }
        );

        if (profile.length === 0) {
            res.status(404).json({ error: 'User profile not found' });
            return;
        }

        if (profile[0].profile_status !== 'approved') {
            res.status(403).json({ error: 'Profile is not approved. Cannot add car details.' });
            return;
        }

        const result = await sequelize.query(
            'INSERT INTO car (user_id, car_name, chasis_number, seats_available, car_plate_number, from_destination, to_destination,date,time) VALUES (?, ?, ?, ?, ?, ?, ?,?,?)',
            { replacements: [user_id, car_name, chasis_number, seats_available, car_plate_number, from_destination, to_destination,date,time], type: QueryTypes.INSERT }
        );
        console.log('Insert result:', result);
        res.status(200).json({ message: 'Car added successfully' });
    } catch (error) {
        console.error('Error inserting Car:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = caradd;
