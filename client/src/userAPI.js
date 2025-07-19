import axios from 'axios';
import { setUsers, updateUserPoints } from './features/userSlice';
import { addClaimHistory } from './features/historySlice';
const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/api';


export const fetchUsers = async (dispatch,page) => {
  try {
    const response = await axios.get(`${BASE_URL}/users?page=${page}`);
    dispatch(setUsers(response.data.allUsers));
    return response.data
  } catch (error) {
    console.error('Error fetching users:', error.message);
  }
};

export const claimPoints = async (userId) => {
  try {
    const response = await axios.post(`${BASE_URL}/claim/${userId}`);
    console.log(response.data)
  } catch (error) {
    console.error('Error claiming points:', error.message);
  }
};

export const createUser = async (user) => {
 
  try {
    await axios.post(`${BASE_URL}/users`, { name: user });
  } catch (error) {
    console.error('Error claiming points:', error.message);
  }
}

export const getClaimHistory=async(dispatch,id)=>{
try {
    const historyData=await axios.get(`${BASE_URL}/history/${id}`);
dispatch(addClaimHistory(historyData.data));
  } catch (error) {
    console.error('Error claiming points:', error.message);
  }
}