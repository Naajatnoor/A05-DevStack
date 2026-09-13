import React, { use } from 'react';
import type { Technology } from '../../type';
import {toast} from "react-toastify"

interface TechnologyCardProps {
    technologyPromise: Promise<Technology[]>;
     stack: Technology[];
    setStack: React.Dispatch<React.SetStateAction<Technology[]>>;
}

const badgeColors: Record<string, string> = {
    Popular: "bg-blue-100 text-blue-700",
    Fast: "bg-orange-100 text-orange-700",
    Essential: "bg-green-100 text-green-700",
    "Top SQL": "bg-indigo-100 text-indigo-700",
    Containers: "bg-cyan-100 text-cyan-700",
    Cloud: "bg-purple-100 text-purple-700",
};
const TechnologyCard = ({ technologyPromise,stack,setStack }: TechnologyCardProps) => {

    const technology = use(technologyPromise);

    return (
     <div> 
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-20 '>
            {technology.map((tech) => (
                <div
                    key={tech.id}
                    className='border border-gray-200 rounded-xl p-5 shadow-sm
    transition-all duration-300 ease-in-out
    hover:-translate-y-1 hover:shadow-xl hover:border-pink-200'
                >

                     <div className='flex justify-between items-center'>
                        <img
                            className='w-12 h-12'
                            src={tech.icon}
                            alt={tech.name}
                        />

                        <span className={`px-3 py-1 rounded-full text-sm  ${badgeColors[tech.badge]}`}>
                            {tech.badge}
                        </span>
                    </div>

                    <h2  className='text-xl font-bold mt-4'>{tech.name}</h2>

                    <p className='text-gray-500 my-2'>{tech.description}</p>
                <div className='border-t-1 border-gray-100 flex justify-between items-center py-3 gap-1'>
                    <p className='  p-2 rounded-[4px] bg-gray-100 text-[12px]'>{tech.category}</p>
                    <p className='text-[14px]'>{tech.difficulty}</p>
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