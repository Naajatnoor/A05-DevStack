import React, { use } from 'react';
import type { Technology } from '../../type';

interface TechnologyCardProps {
    technologyPromise: Promise<Technology[]>;
}

const TechnologyCard = ({ technologyPromise }: TechnologyCardProps) => {

    const technology = use(technologyPromise);

    // console.log(technology, "technology");

    return (
     <div> 
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mx-20 mb-20'>
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
                <div className='border-t-1 border-gray-100 flex justify-between items-center py-3'>
                    <p className=' px-3 p-2 rounded-[8px] bg-gray-100 text-sm'>{tech.category}</p>
                    <p>{tech.difficulty}</p>
                    <p className='text-sm' >⭐ {tech.rating}</p>
                    </div>
                     <button className='btn w-full mt-5 rounded-lg bg-black text-white'>
                        Add to Stack
                    </button>
                </div>
            ))}
        </div>
    </div>
    );
};

export default TechnologyCard;