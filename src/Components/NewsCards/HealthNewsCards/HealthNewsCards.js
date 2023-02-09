import React from 'react';
import { HiUser, IconName } from "react-icons/hi2";
import { IoTimeSharp } from 'react-icons/io5';

const HealthNewsCards = ({health}) => {
    const { title, picture, descrption, category, author }=health;
    return (
        <div className='my-4'>
            <div className="">
                <div className=' px-3 shadow-xl flex  gap-4'>
                    <figure><img className='w-32 rounded-md ' src={picture} alt="Album" /></figure>
                    <div>
                        <h2 className=" font-semibold text-black text-center py-2">{title}</h2>
                        <div className="flex justify-around pb-4  ">
                            <div>
                                <p className='flex items-center gap-2 '><HiUser className='text-red-700 bg-gray-400 rounded-md text-lg '></HiUser> {author.name}</p>
                            </div>
                            <p className='text-gray-400'>|</p>
                            <div>
                                <p className="flex items-center gap-2">
                                    <span className=" rounded-full"><IoTimeSharp className="shadow-lg  text-lg bg-red-600 rounded-md"></IoTimeSharp></span>
                                    <p className="">{author.published_date}</p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthNewsCards;