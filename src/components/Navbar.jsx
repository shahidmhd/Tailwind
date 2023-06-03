import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
function Navbar() {
    const style='text-[14px] cursor-pointer ml-[25px] font-bold'
  return (
    <div className='navbar h-[60px] shadow-md relative z-10'>
      <div className='wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center'>
       <div className='left flex flex-1 items-center'>
        <div className='language cursor-pointer text-[16px]'>En</div>
        <div className='searchInput flex border-[2px] border-solid border-lightgray rounded-md items-center ml-[10px] p-[5px]
        focus-within:border-[#8a4af3] transition-all'>
            <input className='input outline-none' type='text'/>
            <SearchIcon className='' style={{fontSize:'16px'}}/>
            <h1>hiii</h1>
        </div>
       </div>
       {/* logo */}
       <div className='center flex-1 text-center'>
        <div className='logo font-bold text-lg text-blue-600/100'>E-commerse</div>
       </div>
       {/* Right Div */}
       <div className='right flex flex-1 items-center justify-end'>
       <div className={style}>user</div>
        <div className={style}>Register</div>
        <div className={style}>Sign-in</div>
        <div className={style}>
        <Badge badgeContent={2} color='primary'>
            <ShoppingCartOutlined/>
        </Badge>
        </div>
       </div>
       


      </div>
    </div>
  )
}

export default Navbar
