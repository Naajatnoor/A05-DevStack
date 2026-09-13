import React from 'react';
import TechnologyCard from './TechnologyCard';
import type { Technology as TechnologyType } from '../../type';
import Stack from "../Stack"


interface TechnologyProps {
    technologyPromise: Promise<TechnologyType[]>;
    stack: TechnologyType[];
    setStack: React.Dispatch<React.SetStateAction<TechnologyType[]>>;
}


    const Technology = ({ technologyPromise,stack,setStack }: TechnologyProps) => {
    return (
        <section>
        <div className='px-30 py-10'>
        <h1 className="text-[40px] font-bold">Explore the <span className='text-[#EC4899]'>Technologies</span></h1>
        <p className='text-[17px] p-0.5 text-[#64748B]'>Pick one technology per category to build your ideal stack.</p>
        </div>

        

           <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 px-20'>
        <div className='lg:col-span-3'> 
               <TechnologyCard
                technologyPromise={technologyPromise}
                stack={stack}
                setStack={setStack}
            />
              </div>
    

             <div className='lg:col-span-1'>
                    <Stack
                        stack={stack}
                        setStack={setStack}
                    />
            </div>
            </div>
        </section>
    );
};

export default Technology;