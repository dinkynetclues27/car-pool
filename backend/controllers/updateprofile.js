const { QueryTypes } = require("sequelize");
const sequelize = require("../../database");

const updateprofile = async(req,res) =>{
    const profile_id = req.params.profile_id;
    try{
        const{
            fname,
            license,
            aadhar,
            number
        } = req.body

        
        let query = `UPDATE profile SET    
            fname = :fname,
            license = :license,
            aadhar = :aadhar,
            number = :number`;

        const replacements = {
            fname,
            license,
            aadhar,
            number
        }

        await sequelize.query(query, {
            replacements,
            type: QueryTypes.UPDATE
        });

    }
    catch{

    }
}

module.exports = updateprofile;