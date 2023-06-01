import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'

function Slider() {
  const Arrowstyle=" rounded-fully bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer"
  return (
    <div>
      <div className="parentDiv h-[540px] bg-white flex justify-between items-center">
        {/* left arrow Div */}
        <div className={Arrowstyle}>
            <ArrowLeftOutlined style={{fontSize:"70px"}}/>
        </div>
        {/* slide div */}
        <div className="wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative bg-[#ffd028]">
          <div className="slide flex items-center justify-center h-[100%]">
            <div className="forImage flex flex-1 items-center justify-center h-[100%]">
              <img className='h-[100%] object-cover' src='https://st3.depositphotos.com/7713882/17906/i/600/depositphotos_179068502-stock-photo-happy-woman-showing-good-big.jpg' alt='slide_image'/>
            </div>
            <div className="des flex flex-col flex-1 place-items-start justify-center -ml-11 ">
              <h2 className='text-[55px]'>Hey  This is Awsome deal today</h2>
              <p className='text-[30px]'>Upto 40% off</p>
              <button className='btn'>Shope Now</button>
            </div>
          </div>
        </div>
        {/* right arrow div */}
        <div className={Arrowstyle}>
            <ArrowRightOutlined style={{fontSize:"70px"}}/>
        </div>
      </div>
    </div>
  )
}

export default Slider
