import React, { ReactElement, useEffect, useState } from 'react'
import BlurBox from '../UI/BlurBox.tsx'
import CostumeImage from '../UI/CostumeImage.tsx'
import axios from 'axios';

import { FaGithub } from "react-icons/fa";

interface ProjectItem {
  projectId: number,
  title: string,
  img: string,
  description: string,
  github: string,
}


const ProjectItem: React.FC<ProjectItem> = ({ projectId, title, img, description, github}) => {

  const [techs, setTechs] = useState<String[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    axios.get<String[]>(`http://localhost:8080/api/tags/${projectId}`)
      .then(response => {
        setTechs(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  
  return (
    <div className='w-full h-full'>
      <BlurBox css="bg-svg-1-svg  bg-neon-4 bg-center border-[#0bbaba] dark:bg-fuchsia-900">
        <div className='pb-5'>
          <div className='flex justify-between items-center pb-2 '>
            <h2 className='text-3xl flex justify-center font-kanit'>{title}</h2>
            <a href={github} target='_blank' ><FaGithub size={25} /></a>
          </div>
          <CostumeImage src={img} alt={'kép'} className={'rounded-3xl pb-2'}/>
          <p>{description}</p>
        </div>
        <div className='flex flex-wrap gap-2'>
          {
            techs.map((item, index) => (
              <div key={index} className='rounded-3xl border-white border-2 py-1 px-4 inline-block cursor-pointer select-none'>
                <p>{item}</p>
              </div>
            ))
          }
        </div>
      </BlurBox>
    </div>
  )
}

export default ProjectItem