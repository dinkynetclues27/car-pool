// const { QueryTypes } = require('sequelize');
// const sequelize = require('../../database');

// const acceptRequest = async (req, res) => {
//     const carId = req.params.carId;
//     try {
//         await sequelize.query(
//             'UPDATE car SET request_accept = ? WHERE car_id = ?',
//             { replacements: ['true', carId], type: QueryTypes.UPDATE }
//         );
//         res.status(200).json({ message: 'Request accepted successfully' });
//     } catch (error) {
//         console.error('Error accepting request:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }

// const rejectRequest = async (req, res) => {
//     const carId = req.params.carId;
//     try {
//         await sequelize.query(
//             'UPDATE car SET request_accept = ? WHERE car_id = ?',
//             { replacements: ['false', carId], type: QueryTypes.UPDATE }
//         );
//         res.status(200).json({ message: 'Request rejected successfully' });
//     } catch (error) {
//         console.error('Error rejecting request:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }

// module.exports = { acceptRequest, rejectRequest };

const {QueryTypes} = require('sequelize');
const sequelize = require('../../database')

const acceptrequest = async(req,res)=>{
    try{
            await sequelize.query('Update request set request_accept = ?',
            { replacements: ['true'], type: QueryTypes.UPDATE }
            )
            res.status(200).json({ message: 'Request accepted successfully' });
    }
    catch(error){
        console.error('Error accepting request:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const rejectrequest = async(req,res)=>{
    try{
        await sequelize.query('Update request set request_accept = ?',
        { replacements: ['false'], type: QueryTypes.UPDATE }
        )
        res.status(200).json({ message: 'Request rejected successfully' });
    }
    catch(error){
        console.error('Error rejecting request:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {acceptrequest,rejectrequest}