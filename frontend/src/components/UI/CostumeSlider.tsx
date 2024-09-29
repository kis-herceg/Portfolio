import React, { ReactNode } from 'react'
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import Slider from 'react-slick';



const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 right-2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <IoIosArrowForward className="text-gray-500 text-3xl" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 left-2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <IoIosArrowBack className="text-gray-500 text-3xl" />
    </div>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

interface CostumeSliderProps {
  children: ReactNode;
}

const CostumeSlider: React.FC<CostumeSliderProps> = ({ children }) => {
  return (
    <Slider {...settings}>
      {
        children
      }
    </Slider>
  )
}

export default CostumeSlider