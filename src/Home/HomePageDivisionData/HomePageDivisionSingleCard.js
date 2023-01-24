import React from 'react';

const HomePageDivisionSingleCard = ({ data }) => {

    const { description
        , author
        , category
        , picture
        , title } = data
    return (
        <div className='py-4 '>
            <div className='w-full h-full lg:h-[300px] lg:w-[500px] relative '>
                <img className='relative w-full h-full' src={picture} alt="" />
                <h1 className='absolute bottom-0 w-full bg-slate-800 text-white p-3 rounded-b-lg'>{title}</h1>
            </div>

        </div>
    );
};

export default HomePageDivisionSingleCard;