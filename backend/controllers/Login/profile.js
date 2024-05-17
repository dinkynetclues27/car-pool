const { QueryTypes } = require('sequelize');
const sequelize = require('../../database');

const profile = async (req, res) => {
    const { user_id, fname, license, aadhar, number } = req.body;
    console.log('Received request body:', req.body);

    try {

        const existingProfile = await sequelize.query(
            'SELECT * FROM profile WHERE user_id = ?',
            { replacements: [user_id], type: QueryTypes.SELECT }
        );

        if (existingProfile.length > 0) {
            return res.status(400).json({ error: 'Profile already exists for this user' });
        }

        const userTypeResult = await sequelize.query(
            'SELECT user_type FROM login WHERE user_id = ?',
            { replacements: [user_id], type: QueryTypes.SELECT }
        );

        if (userTypeResult.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const user_type = userTypeResult[0].user_type;

        let query;
        let replacements;

        if (user_type === 'carpooler') {
            query = 'INSERT INTO profile (user_id, fname, license, aadhar, number) VALUES (?, ?, ?, ?, ?)';
            replacements = [user_id, fname, license, aadhar, number];
        } else if (user_type === 'passenger') {
            query = 'INSERT INTO profile (user_id, fname, aadhar, number) VALUES (?, ?, ?, ?)';
            replacements = [user_id, fname, aadhar, number];
        } else {
            return res.status(400).json({ error: 'Invalid user type' });
        }

        const result = await sequelize.query(query, { replacements, type: QueryTypes.INSERT });
        console.log('Insert result:', result);
        res.status(200).json({ message: 'Profile Added successfully' });
    } catch (error) {
        console.error('Error inserting profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = profile;
