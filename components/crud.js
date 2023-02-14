import React from 'react';
import Add from './add';
import Edit from './edit';
import Delete from './delete';
import Show from './show';

const Crud = () => {
  let obj ={
    "id": "6f103b8e-b408-4946-9650-d00a32d47258",
    "name": "kool",
    "dob": "24-11-2022",
    "gender": "other",
    "rate": 4
  }
  obj = JSON.parse(JSON.stringify(obj)); 
  return (
    <>
    <div>
      <h3>Want to add New user?</h3>
    <Add/>
    </div>
       <br />
      <Show />
    </>
  )
}

export default Crud