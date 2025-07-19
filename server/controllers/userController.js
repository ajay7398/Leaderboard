import User from "../models/User.js";
import ClaimHistory from '../models/ClaimHistory.js';


const getUsers = async (req, res) => {
      const page = parseInt(req.query.page) || 1; // default to 1 if not provided
    const limit = 10;
    const start = (page - 1) * limit;
    const end = page * limit;
   
    try {
        const allUsers = await User.find();
         const paginated = allUsers.sort((a, b) => b.totalPoints - a.totalPoints).slice(start, end);
 const pages=Math.ceil(allUsers.length/limit);
 
        res.status(200).json({ allUsers:paginated,pages, success: true,start })
    } catch (error) {
        res.status(500).json({ error })
    }

}


const addNewUser = async (req, res) => {
    try {
        const { name, totalPoints } = req.body;
        if(!name){
            return res.status(400).json({message:"required name"})
        }
        const user = new User({ name, totalPoints });
        await user.save();
        res.status(200).json({ message: "user saved succesfull", success: true })

    } catch (error) {
        res.status(500).json({ error })
    }

}


const assignPoint = async (req, res) => {

    const points = Math.floor(Math.random() * 10) + 1; // Random 1–10
    const { userId } = req.params;

    try {
        // Step 1: Find the user first
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Step 2: Update totalPoints
        user.totalPoints += points;

        // Step 3: Save the user back to the DB
        await user.save();

        const history = new ClaimHistory({
            userId: user._id,
            points: points
        });
        await history.save();

        res.json({
            updatedUser: user,
            history: {
                _id: history._id,
                userId: user._id,
                points: history.points,
                claimedAt: history.claimedAt
            }
        });
    } catch (error) {
        console.error("Error assigning points:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};



export { getUsers, addNewUser, assignPoint };