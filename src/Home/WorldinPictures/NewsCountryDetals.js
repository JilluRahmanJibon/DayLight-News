import { useQuery } from '@tanstack/react-query';
import React  from 'react';
import { useParams } from 'react-router-dom';
import SkeletonLoading from "../../Components/SkeletonLoading/SkeletonLoading";

const NewsCountryDetals = () => {

    const params = useParams();


    const { data: worldCountryNews, isLoading } = useQuery({
        queryKey: ['countriesNews',params?.news],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}countriesNews/${params?.news}`).then(res => res.json())
    })
 
    return (
        <div className='mt-5 mb-8'>
            <h1 className='text-2xl font-bold px-3'>{params?.news}</h1>
            <div className='flex flex-col gap-8'>
                {isLoading&&<SkeletonLoading cards={1}/>}
                {
                    worldCountryNews?.gallery?.map((country,i) => <div key={i} className='shadow-lg p-3' >
                        <img className='w-full rounded-md object-cover mb-2' src={country?.galleryImg} alt="" />
                        <h1>{country?.galleryDesc}</h1>
                    </div>)
                }
            </div>
        </div>
    );
};

export default NewsCountryDetals;