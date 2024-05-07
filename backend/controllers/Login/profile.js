const {QueryTypes} =require('sequelize');
const sequelize = require('../../database');

const profile = async(req,res) =>{
    const{
        name,
        license,
        aadhar,
        number
    }=req.body

    try{
        await sequelize.query('Insert into profile(name,license,aadhar,number) values (?,?,?,?)',
        { replacements: [name,license,aadhar,number], type: QueryTypes.INSERT });
        res.status(200).json({ message: 'Profile Added successfully' });

    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
module.exports = profile;