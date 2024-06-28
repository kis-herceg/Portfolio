import React, { useState, useEffect  } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import TechCard from '../Technology/TechCard.tsx';


import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

import * as FaIcons from 'react-icons/fa'; 
import * as SiIcons from 'react-icons/si'; 



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

interface TechCard {
  id: number;
  name: string;
  icon: string;
}

const TechSkillList: React.FC = () => {



// Tech Kártyák lekérés

const [techCards, setTechCards] = useState<TechCard[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('http://localhost:8080/tech')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then((data: TechCard[]) => {
          setTechCards(data);
          setLoading(false);
      })
      .catch(error => {
          setError(error);
          setLoading(false);
      });
}, []);

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

  return (
    <div className='section max-sm:px-0 dark:bg-zinc-900'>
      <div className="w-full mx-0 max-w-none container w-full mx-auto py-8 bg-neon bg-cover bg-no-repeat bg-center rounded-3xl shadow-xl">
        <Slider {...settings}>
          {
            techCards.map(item => {
              const IconComponentFa = (FaIcons as any)[item.icon];
              const IconComponentSi = (SiIcons as any)[item.icon];
              const IconComponent = IconComponentFa || IconComponentSi;

              return (
                <div key={item.id} className='px-12 flex items-center justify-center'>
                  <TechCard key={item.id}
                  platforms={[]}
                  icon={IconComponent ? <IconComponent size={75} color='#53C1DE' /> : <></>}
                  name={item.name}
                  />
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  );
}


export default TechSkillList;