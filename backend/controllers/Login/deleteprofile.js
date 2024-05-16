const { QueryTypes } = require('sequelize');
const sequelize = require('../../database');

const deleteProfile = async (req, res) => {
    try {
        
        const profile_id = req.params.profile_id; 
        
        const profile = await sequelize.query(
            `SELECT * FROM profile WHERE profile_id = :profile_id`,
            {
                replacements: { profile_id },
                type: QueryTypes.SELECT
            }
        );

        if (!profile.length) {
            return res.status(404).json({ error: 'Profile not found' });
        }

        
        // if (userRole !== 0 && product[0].created_by !== createdBy) {
        //     return res.status(403).json({ error: 'Unauthorized to delete this category' });
        // }

      
        await sequelize.query(
            `DELETE FROM profile WHERE profile_id = :profile_id`,
            {
                replacements: { profile_id },
                type: QueryTypes.DELETE
            }
        );

        res.status(200).json({ message: 'Profile deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = deleteProfile;
