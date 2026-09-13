import React, { use } from 'react';
import type { Technology } from '../../type';
import {toast} from "react-toastify"

interface TechnologyCardProps {
    technologyPromise: Promise<Technology[]>;
     stack: Technology[];
    setStack: React.Dispatch<React.SetStateAction<Technology[]>>;
}

const TechnologyCard = ({ technologyPromise,stack,setStack }: TechnologyCardProps) => {

    const technology = use(technologyPromise);

    return (
     <div> 
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-20 '>
            {technology.map((tech) => (
                <div
                    key={tech.id}
                    className='border border-gray-200  rounded-xl p-5 shadow-sm'
                >

                     <div className='flex justify-between items-center'>
                        <img
                            className='w-12 h-12'
                            src={tech.icon}
                            alt={tech.name}
                        />

                        <span className='px-3 py-1 rounded-full text-sm bg-gray-100'>
                            {tech.badge}
                        </span>
                    </div>

                    <h2  className='text-xl font-bold mt-4'>{tech.name}</h2>

                    <p className='text-gray-500 my-2'>{tech.description}</p>
                <div className='border-t-1 border-gray-100 flex justify-between items-center py-3 gap-1'>
                    <p className='  p-2 rounded-[8px] bg-gray-100 text-sm'>{tech.category}</p>
                    <p>{tech.difficulty}</p>
                    <p className='text-sm' >⭐ {tech.rating}</p>
                    </div>
                    

        <button className='btn w-full mt-5 rounded-lg bg-black text-white'
         onClick={() => { const alreadyAdded = stack.some(item => item.id === tech.id);
          if (!alreadyAdded)
           { setStack([...stack, tech]); 
           toast.success(`${tech.name} added to stack`); 
           } 
           else { 
            toast.error(`${tech.name} is already added`);
             } 
             }} > Add to Stack </button>
                </div>
            ))}
        </div>
    </div>
    );
};

export default TechnologyCard;