const { QueryTypes } = require("sequelize");
const sequelize = require("../../database");

const fetchprofile = async(req,res) => {
    try {

        const profile = await sequelize.query(
          `SELECT * FROM profile `,
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
        `SELECT * FROM profile WHERE profile_id = :profile_id `,
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

const getProfile = async(req,res)=>{
  const {user_id} = req.body;
  console.log(user_id);
  try{
    const existingProfile = await sequelize.query(
      'Select * from profile where user_id = ?',
      {replacements: [user_id],type:QueryTypes.SELECT}
    );

    if(existingProfile.length>0){
      return res.status(200).json({profile:existingProfile[0],message:'Profile already exists for this user'});
    }
    else{
      return res.status(200).json({message:'No profile found for this user . You can add a new profile'});
    }
  }
  catch(error){
    console.error("error occurs",error);
    return res.status(500).json({message:"Internal server error"})
  }
}
module.exports = {fetchprofile,fetchprofilebyid,getProfile};



// const getProfile = async (req, res) => {
//   const { user_id } = req.body;
//   console.log('Received request body:', req.body);

//   try {
//       const existingProfile = await sequelize.query(
//           'SELECT * FROM profile WHERE user_id = ?',
//           { replacements: [user_id], type: QueryTypes.SELECT }
//       );

//       if (existingProfile.length > 0) {
//           // If profile exists, return the profile data
//           return res.status(200).json({ profile: existingProfile[0], message: 'Profile already exists for this user' });
//       } else {
//           // If profile doesn't exist, return an option to add a new profile
//           return res.status(200).json({ message: 'No profile found for this user. You can add a new profile.' });
//       }
//   } catch (error) {
//       console.error('Error fetching profile:', error);
//       res.status(500).json({ error: 'Internal server error' });
//   }
// }

// module.exports = {
//   profile,
//   getProfile
// };
