import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { MdStars } from "react-icons/md";
import { claimPoints, fetchUsers } from "../userAPI";
import { getClaimHistory } from "../userAPI";
const ClaimBox = () => {
    const users = useSelector((state) => state.user.users);
    const selectedUser = useSelector((state) => state.currentUser.value);
    const [activeUser, setActiveUser] = useState({});
    const dispatch = useDispatch();

   useEffect(() => {
    if (!selectedUser?._id) return;

    const updateUserAndHistory = async () => {
        const updatedUser = users.find(user => user._id === selectedUser._id);
        if (updatedUser) {
            setActiveUser(updatedUser);
            await getClaimHistory(dispatch, updatedUser._id);
        }
    };

    updateUserAndHistory();
}, [users, selectedUser]);

const handleClaim = async (userId) => {
    await claimPoints(userId);
    await fetchUsers(dispatch);
    await getClaimHistory(dispatch, userId);
};



    return (
        <div className="border my-3 lg:mt-6 p-4 rounded-xl shadow bg-white flex items-center justify-between">
            <div className="text-lg">
                {activeUser?.name ? (
                    <div className="flex flex-col justify-center gap-2 w-40">
                        <span className="flex justify-between">
                            <strong>{activeUser.name}</strong>
                            <h1 className="flex items-center gap-2">
                                {activeUser.totalPoints}
                                <MdStars className='inline text-yellow-400 text-2xl' />
                            </h1>
                        </span>
                        <button
                            onClick={() => handleClaim(activeUser._id)}
                            disabled={!selectedUser}
                            className="px-4 py-2 bg-orange-300 text-white font-medium rounded hover:bg-orange-350 disabled:bg-gray-400"
                        >
                            Claim
                        </button>
                    </div>
                ) : (
                    <span className="text-gray-400">No user selected</span>
                )}
            </div>
        </div>
    );
};

export default ClaimBox;
