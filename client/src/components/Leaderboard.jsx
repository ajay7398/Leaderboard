import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { MdStars } from "react-icons/md";
import { setUser } from '../features/selectedUserSlice';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { addClaimHistory } from '../features/historySlice';
import { fetchUsers } from '../userAPI';
const Leaderboard = () => {
    const [page, setPage] = useState(1);
    const [totalPage, setTotalpage] = useState();
    const [start, setStart] = useState(0);
    const users = useSelector((state) => state.user.users);
    const dispatch = useDispatch();
    // Ensure users are sorted by totalPoints descending



    const selectUser = (_id, name, totalPoints) => {
        dispatch(setUser({ _id, name, totalPoints }))

    }

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchUsers(dispatch, page);
            if (!data) {
                console.error("No data returned");
                return;
            }
            const { pages, start } = data;
            setTotalpage(pages)
            setStart(start);
        }
        loadData();

    }, [page]);



    return (

        <div className="bg-white rounded-xl shadow-md p-4 w-full md:w-2/3 mx-auto mt-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center text-slate-500">🏆 Leaderboard</h2>

            <ul className="space-y-3">
                {users.map((user, index) => (
                    <li
                        key={user._id}
                        onClick={() => selectUser(user._id, user.name, user.totalPoints)}
                        className="flex justify-between items-center bg-gray-50 p-3 rounded-md border hover:bg-gray-100 transition"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-lg font-semibold text-blue-600">#{start + index + 1}</span>
                            <span className="text-slate-500 font-medium">{user.name}</span>
                        </div>
                        <span className="text-slate-500 font-semibold">{user.totalPoints} <MdStars className='inline text-yellow-400 text-2xl' /></span>
                    </li>
                ))}
            </ul>
            <div className='w-[40%] mx-auto flex justify-center gap-10 my-5'>
                <button onClick={() => page > 1 && setPage(page - 1)}
                    disabled={page === 1}
                    className='flex justify-center items-center px-5 py-2 bg-slate-400'><FaArrowAltCircleLeft /></button>
                <button onClick={() => page < totalPage && setPage(page + 1)} disabled={page === totalPage} className='flex justify-center items-center px-5 py-2 bg-slate-400'><FaArrowAltCircleRight /></button>
            </div>
        </div>

    );
};

export default Leaderboard;
