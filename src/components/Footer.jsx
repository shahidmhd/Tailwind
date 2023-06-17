import {
    EmailOutlined,
    Facebook,
    Instagram,
    LocalPhoneOutlined,
    LocationOnOutlined,
    Pinterest,
    Twitter
  } from "@mui/icons-material";
  import React from "react";
  
  const Footer = () => {
    const socialStyle = 'm-3 rounded-full cursor-pointer p-2 text-white';
  
    return (
      <div className="flex items-center justify-around p-2 mobile:flex-col mobile:items-start bg-black">
        <div className="flex-1 flex flex-col flex-wrap p-2">
          <h1 className="text-[25px] text-white">E-commerse</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            soluta quis porro eveniet. Nulla modi, quas unde eaque vel, quaerat
            repellendus dignissimos iure itaque architecto pariatur quia a eveniet
            veniam?
          </p>
          <div className="flex items-center justify-center mt-3 self-start">
            <div className={socialStyle + ` bg-blue-700 hover:bg-blue-800`}>
              <Facebook />
            </div>
            <div className={socialStyle + ` bg-orange-500 hover:bg-orange-600`}>
              <Instagram />
            </div>
            <div className={socialStyle + ` bg-sky-400 hover:bg-sky-500`}>
              <Twitter />
            </div>
            <div className={socialStyle + ` bg-red-600 hover:bg-red-700`}>
              <Pinterest />
            </div>
          </div>
        </div>
  
        <div className="flex-1 flex flex-col p-2">
          <div className="flex m-3">
            <LocationOnOutlined className="text-[#8a4af3]" />
            <p className="pl-3 text-white">State of California</p>
          </div>
          <div className="flex m-3">
            <LocalPhoneOutlined className="text-[#521da8]" />
            <p className="pl-3 text-white">+92 12345678</p>
          </div>
          <div className="flex m-3">
            <EmailOutlined className="text-[#8a4af3]" />
            <p className="pl-3 text-white">Ahmadroa925@gmail.com</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  
  