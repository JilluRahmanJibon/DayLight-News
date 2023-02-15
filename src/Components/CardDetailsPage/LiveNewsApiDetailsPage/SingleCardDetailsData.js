import React from 'react';
import { FaShareAlt } from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs";
import DetailsCardReaction from '../DetailsCardReaction/DetailsCardReaction';

const SingleCardDetailsData = ({ data, isLoading }) => {

    return (
        <div className=''>
            <div className='py-10'>
                <div>
                    <h1 className='text-xl lg:text-4xl font-bold'>{data?.title}</h1>
                    <div className='flex items-center py-2 '>
                        <BsStopwatch className='text-gray-400 m-2 text-2xl  ' />
                        <h1 className='text-lg text-gray-400'>10 hour ago</h1>
                    </div>
                    <div className='flex items-center gap-4 '>
                        <FaShareAlt className='bg-black m-2 text-6xl p-2 text-white' />
                        <h1 className='text-xl lg:text-4xl font-semibold'>{data?.source?.name}</h1>
                    </div>
                    <div>
                        <img src={data?.urlToImage
                        } alt="" />
                    </div>
                    <div className='py-10'>
                        <h1 className='text-xl lg:text-2xl font-semibold'>{data?.source?.name}</h1>
                        <p className='py-2 text-gray-400  '>{data?.publishedAt}</p>
                    </div>
                    <div>
                        <p className='text-xl font-bold'>{data?.content
                        }</p>
                        <img
                            className="h-full lg:h-[300px] w-full  py-5"
                            src="https://i.ytimg.com/vi/7RDwcUMJ2lU/maxresdefault.jpg"
                            alt=""
                        />
                        <p className='pt-10'>{data?.description
                        }</p>
                    </div>
                    <div>
                        <h1 className='text-xl lg:text-4xl font-semibold'>{data?.allAuth?.name}</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleCardDetailsData;