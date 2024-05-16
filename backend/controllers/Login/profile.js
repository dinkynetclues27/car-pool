const { QueryTypes } = require('sequelize');
const sequelize = require('../../database');

const profile = async (req, res) => {
    const { user_id, fname, license, aadhar, number } = req.body;
    console.log('Received request body:', req.body); 

    try {
        const result = await sequelize.query(
            'INSERT INTO profile (user_id, fname, license, aadhar, number) VALUES (?, ?, ?, ?, ?)',
            { replacements: [user_id, fname, license, aadhar, number], type: QueryTypes.INSERT }
        );
        console.log('Insert result:', result); 
        res.status(200).json({ message: 'Profile Added successfully' });
    } catch (error) {
        console.error('Error inserting profile:', error); 
        res.status(500).json({ error: 'Internal server error' });
    }
}   

module.exports = profile;
