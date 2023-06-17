import React from 'react';

const Category = ({ item }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const titleStyle = {
    color: isHovered ? 'black' : 'white',
    fontSize: '30px',
    fontWeight: 'medium'
  };

  return (
    <div
      className='flex-1 m-2 shadow-lg rounded-md overflow-hidden relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={item.src} className="w-[100%]" alt='category_img' />
      <div className='flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col'>
        <h2 className='text-white font-medium' style={titleStyle}>
          {item.title}
        </h2>
        <button className='btn'>See more</button>
      </div>
    </div>
  );
};

export default Category;
