import React, { useState, useEffect  } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import TechCard from '../UI/TechCard.tsx';

import * as FaIcons from 'react-icons/fa'; 
import * as SiIcons from 'react-icons/si'; 
import CostumeSlider from '../UI/CostumeSlider.tsx';


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
    axios.get<TechCard[]>('http://localhost:8080/tech')
      .then(response => {
        setTechCards(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='section max-sm:px-0 dark:bg-zinc-900'>
      <CostumeSlider>
        {
          techCards.map(item => {
            const IconComponentFa = (FaIcons as any)[item.icon];
            const IconComponentSi = (SiIcons as any)[item.icon];
            const IconComponent = IconComponentFa || IconComponentSi;

            return (
              <div key={item.id} className='px-12 flex items-center justify-center'>
                <TechCard key={item.id}
                platforms={[]}
                icon={IconComponent ? <IconComponent size={75} color='#00DBDE' /> : <></>}
                name={item.name}
                />
              </div>
            )
          })
        }
      </CostumeSlider>
    </div>
  );
}


export default TechSkillList;