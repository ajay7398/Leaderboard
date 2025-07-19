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
    <div className='absolute lg:right-30 lg:left-auto  bg-black lg:top-18 lg:p-3 px-8 py-4 top-16 right-0 left-0 gap-3 lg:w-3xs  flex lg:gap-3 flex-col'>
      <div className='flex gap-2 items-center px-2'>
        <label className="text-white">Name</label>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type='text'
          className='bg-white text-black p-1 w-full '
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
