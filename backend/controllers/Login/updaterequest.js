const { QueryTypes } = require('sequelize');
const sequelize = require('../../database');

const  updaterequest = async(req,res) => {
    const carId = req.params.carId;
    try {

      await sequelize.query(
        'UPDATE car SET request = ? WHERE car_id = ?',
        { replacements: ['true', carId], type: QueryTypes.UPDATE }
      );
      res.status(200).json({ message: 'Request status updated successfully' });
    } catch (error) {
      console.error('Error updating request status:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = updaterequest;