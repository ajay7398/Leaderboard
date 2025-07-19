import React, { useState } from 'react';
import { createUser } from '../userAPI';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../userAPI';
function AddUserForm({ setShow }) {
  const [value, setValue] = useState("");
const dispatch = useDispatch();
  const handleForm = async () => {
    
  if (value.trim() !== "") {
    try {
      await createUser(value);
       await fetchUsers(dispatch);
      setShow(false);
    } catch (err) {
      console.error("Failed to create user", err);
    }
  }
};


  return (
    <div className='absolute right-30 bg-black top-18 p-3 flex gap-3 flex-col'>
      <div className='flex gap-2 items-center'>
        <label className="text-white">Name</label>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type='text'
          className='bg-white text-black p-1'
        />
      </div>

      <button
        onClick={handleForm}
        className='bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800'
      >
        Add
      </button>
    </div>
  );
}

export default AddUserForm;
