import React, { useEffect, useState } from 'react'
import ProjectItem from './ProjectItem.tsx'
import axios from 'axios';

interface Project {
  id: number,
  name: string,
  img: string,
  description: string,
  gitHubLink: string,
}


const ProjectComponent = () => {

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios.get<Project[]>('http://localhost:8080/api/projects/')
      .then(response => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);



  return (
    <div className='section max-sm:px-0 dark:bg-zinc-900 text-slate-50 pt-20'>
      <div className='mb-8 font-kanit max-sm:p-5'>
        <h1 className='inline-block  lg:text-7xl md:text-7xl sm:text-5xl text-5xl font-black text-gradient-1'>Projektek</h1>
        <h2 className='text-3xl dark:text-slate-50 text-black'>Szívesen fogadok bármilyen projekt vagy állás megkeresést.</h2>
      </div>
      <div className='grid grid-cols-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 max-xl:gap-8 gap-16 p-4'>
        {
          projects.map((project, index) => (
            <div key={project.id} className=''>
              <ProjectItem projectId={project.id} title={project.name} img={project.img} description={project.description} github={project.gitHubLink} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProjectComponent