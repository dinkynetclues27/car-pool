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

        res.status(200).json({ requestedPerson: requestedPerson});
    } catch (error) {
        console.error('Error fetching requested person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


const fetchallrequest = async(req,res)=>{
    try{
        const fetchallrequest = await sequelize.query(`Select * from request`,{type:QueryTypes.SELECT});
        res.status(200).json({fetchallrequest:fetchallrequest})
    }
    catch(error)
    {
        console.error("error fetching request");
        res.status(500).json({ error: 'Internal server error'});
    }
}

const getrequest = async(req,res) =>{
    const userId = req.body.user_id;
    try{
        const requestedcars = await sequelize.query(`SELECT car_id, request_accept FROM request WHERE user_id = ?`,{replacements: [userId],type:QueryTypes.SELECT})
        res.json(requestedcars);
        console.log(requestedcars)
    }
    catch(error){
        console.error('Error fetching requested cars:', error);
    res.status(500).json({ error: 'Internal server error' });
    }
}


module.exports = {fetchRequest,fetchallrequest,getrequest};