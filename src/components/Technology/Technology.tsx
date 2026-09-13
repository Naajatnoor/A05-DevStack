import React from 'react';
import TechnologyCard from './TechnologyCard';
import type { Technology as TechnologyType } from '../../type';


interface TechnologyProps {
    technologyPromise: Promise<TechnologyType[]>;
}

    const Technology = ({ technologyPromise }: TechnologyProps) => {
    return (
        <section>
        <div className='px-30 py-10'>
        <h1 className="text-[40px]">Explore the <span className='bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent'>Technologies</span></h1>
        <p className='text-[17px] p-0.5 text-[#64748B]'>Pick one technology per category to build your ideal stack.</p>
        </div>
        
        <TechnologyCard technologyPromise={technologyPromise} />
        </section>
    );
};

export default Technology;