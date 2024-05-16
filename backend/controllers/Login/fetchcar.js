const { QueryTypes } = require("sequelize");
const sequelize = require("../../database");

const fetchcar = async(req,res) => {
    try {
     
    
       
        const car = await sequelize.query(
          `
          SELECT *
          FROM car 
         
          `,
          {
       
            type: QueryTypes.SELECT,
          }
        );
    
        res.json(car);
      } catch (error) {
        console.error("Error fetching car:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
}


const fetchcarbyid = async (req, res) => {
    try {
      const car_id = req.params.car_id;
      const carById = await sequelize.query(
        `
        SELECT *
        FROM car 
        WHERE car_id = :car_id
        `,
        {
          replacements: { car_id },
          type: QueryTypes.SELECT
        }
      );
  
      res.json(carById);
    } catch (error) {
      console.error("Error fetching car:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  
module.exports = {fetchcar,fetchcarbyid};