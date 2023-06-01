import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
function Announce() {
    const [announcestyle,setannouncestyle]=useState('bg-[#8a4af3] font-bold flex text-white items-center justify-center')
     

    const handleclick = () => {
        setannouncestyle(announcestyle + " hidden");
      };
  return (
    <div className ={announcestyle}>
      <h2>Hurry up it's 40% off Now</h2>
      <CloseIcon className='cursor-pointer' onClick={handleclick} />
    </div>
  )
}

export default Announce
