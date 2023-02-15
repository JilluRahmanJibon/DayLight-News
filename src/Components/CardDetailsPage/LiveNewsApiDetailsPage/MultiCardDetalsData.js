import React from 'react';
import { BsStopwatch } from 'react-icons/bs';
import { FaShareAlt } from 'react-icons/fa';

const MultiCardDetalsData = ({ allAuth }) => {
    return (
        <div>

            <div className='pt-10'>
                <hr />
                <h1 className='text-xl lg:text-4xl font-bold pt-2'>{allAuth?.title}</h1>
                <div className='flex items-center py-2 '>
                    <BsStopwatch className='text-gray-400 m-2 text-2xl  ' />
                    <h1 className='text-lg text-gray-400'>10 hour ago</h1>
                </div>
                <div className='flex items-center gap-4 '>
                    <FaShareAlt className='bg-black m-2 text-6xl p-2 text-white' />
                    <h1 className='text-xl lg:text-4xl font-semibold'>{allAuth?.source?.name}</h1>
                </div>
                <div>
                    <img src={allAuth?.urlToImage
                    } alt="" />
                    <p className='text-gray-400'>Author Name : {allAuth?.author}</p>
                </div>
                <div className='py-10'>
                    <h1 className='text-2xl font-semibold'>{allAuth?.source?.name}</h1>
                    <p className='py-2 text-gray-400  '>{allAuth?.publishedAt}</p>
                </div>
                <div>
                    <p className='text-xl font-bold'>{allAuth?.content
                    }</p>

                    <p className='pt-10'>{allAuth?.description
                    }</p>
                </div>
                <div>
                    <h1 className='text-xl lg:text-4xl font-semibold'>{allAuth?.allAuth?.name}</h1>
                </div>
            </div>
        </div>
    );
};

export default MultiCardDetalsData;