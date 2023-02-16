import React from 'react';

const TotalCardDetalsData = ({ multyData }) => {
    return (
        <div className=''>
            <div className='mb-5 bg-gray-100 p-3'>
                <h1>{multyData?.title}</h1>
                <img src={multyData?.urlToImage
                } alt="" />
            </div>
        </div>
    );
};

export default TotalCardDetalsData;