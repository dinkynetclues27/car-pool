const { QueryTypes } = require('sequelize');
const sequelize = require('../../database');

const updateProfile = async (req, res) => {
    const profile_id = req.params.profile_id;
    const {
        fname,
        license,
        aadhar,
        number
    } = req.body;

    try {
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

        await sequelize.query(
            `UPDATE profile SET    
            fname = :fname,
            license = :license,
            aadhar = :aadhar,
            number = :number
            WHERE profile_id = :profile_id`,
            {
                replacements: {
                    fname,
                    license,
                    aadhar,
                    number,
                    profile_id
                },
                type: QueryTypes.UPDATE
            }
        );

        res.status(200).json({ message: "Profile updated" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updatedprofilestatus = async(req,res) => {

    const profile_id = req.params.profile_id;

    try {
        const {
            profile_status
        } = req.body;

        let query = `UPDATE profile SET    
            profile_status = :profile_status WHERE profile_id = :profile_id`;


        const replacements = {
            profile_id,
            profile_status
        };

        await sequelize.query(query, {
            replacements,
            type: QueryTypes.UPDATE
        });

        res.status(200).json({ message: "Profile updated successfully" });
    } catch (error) {
        console.error("Error updating order:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {updateProfile,updatedprofilestatus};
