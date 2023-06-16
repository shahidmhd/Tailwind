import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { ApiSlides } from '../Apifolder/sliderfile';
import './slider.css'
function Slider() {
  const [slides] = useState(ApiSlides);
  const [Activeslides, setActiveslides] = useState(0);

  const Arrowstyle = "rounded-fully bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer";


  const previousimage=()=>{
    if(Activeslides===0){
      setActiveslides(slides.length-1)
    }
    else{
      setActiveslides(Activeslides - 1)
    }
  }

  function nextimage(){
    if (Activeslides === slides.length - 1) {
      setActiveslides(0);
    } else {
      setActiveslides(Activeslides + 1);
    }
  };

  return (
    <div>
      <div className="parentDiv h-[540px] bg-white flex justify-between items-center">
        {/* left arrow Div */}
        <div className={Arrowstyle}>
          <ArrowLeftOutlined style={{ fontSize: "70px" }} onClick={previousimage} />
        </div>
        {/* slide div */}
        {slides.map((slide, index) => {
          if (index === Activeslides) {
            return (
              <div className={`wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative` + slide.background}>
                <div className="slide flex items-center justify-center h-[100%]">
                  <div className="forImage flex flex-1 items-center justify-center h-[100%]">
                    <img className='h-[100%] object-cover' src={slide.src} alt='slide_image' />
                  </div>
                  <div className="des flex flex-col flex-1 place-items-start justify-center -ml-11">
                    <h2 className='text-[55px]'>{slide.content.h2}</h2>
                    <p className='text-[30px]'>{slide.content.p}</p>
                    <button className='btn'>Shope Now</button>
                  </div>
                </div>
              </div>
            );
          }
        })
        }
        {/* right arrow div */}
        <div className={Arrowstyle}>
          <ArrowRightOutlined style={{ fontSize: "70px" }} onClick={nextimage} />
        </div>
      </div>
    </div>
  );
}

export default Slider;
