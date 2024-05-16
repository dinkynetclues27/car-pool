const { QueryTypes } = require("sequelize");
const sequelize = require("../../database");

const fetchprofile = async(req,res) => {
    try {
     
    
       
        const profile = await sequelize.query(
          `
          SELECT *
          FROM profile 
         
          `,
          {
       
            type: QueryTypes.SELECT,
          }
        );
    
        res.json(profile);
      } catch (error) {
        console.error("Error fetching profile:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
}


const fetchprofilebyid = async (req, res) => {
    try {
      const profile_id = req.params.profile_id;
      const profileById = await sequelize.query(
        `
        SELECT *
        FROM profile 
        WHERE profile_id = :profile_id
        `,
        {
          replacements: { profile_id },
          type: QueryTypes.SELECT
        }
      );
  
      res.json(profileById);
    } catch (error) {
      console.error("Error fetching profile:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  
module.exports = {fetchprofile,fetchprofilebyid};