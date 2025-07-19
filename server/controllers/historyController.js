import ClaimHistory from '../models/ClaimHistory.js';

const getHistory = async (req, res) => {

    try {
        const { id } = req.params;
        const userId = id;
        const history = await ClaimHistory.find({ userId }).populate("userId", "name").sort({ claimedAt: -1 }); // recent first
        console.log(history)
        res.json(history);
    } catch (err) {
        console.error('Error fetching claim history:', err);
        res.status(500).json({ error: 'Failed to fetch claim history' });
    }
};



export default getHistory;