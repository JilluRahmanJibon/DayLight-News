import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import MultiCardDetalsData from './MultiCardDetalsData';
import SingleCardDetailsData from './SingleCardDetailsData';
import TotalCardDetalsData from './TotalCardDetalsData';


const LiveNewsApiDetailsPage = () => {

    const params = useParams();
    const [singleData, setSingleData] = useState([])
    const [datas, setDatas] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=364e71159b584d7699ae753d6f7f9c0c`)
            .then(res => res.json())
            .then(data => {
                const singleData = data?.articles?.filter(liveData => liveData?.title?.slice(0, 30) === params?.title)
                setSingleData(singleData)
                console.log(singleData)

                const singleDataAuth = singleData[0]?.author;
                console.log(singleDataAuth)

                const newsAuthor = data?.articles?.filter(box => box?.author === singleDataAuth)
                setDatas(newsAuthor)
            })
        setIsLoading(false)
    }, [])

    // console.log(singleData)
    // console.log(datas)


    return (
        <div className='max-w-[1440px] mx-auto '>
            <div className='flex gap-5'>
                <div>
                    <div>
                        {
                            singleData.length ? singleData?.map(data => <SingleCardDetailsData data={data} isLoading={isLoading} key={data?._id} />) : <h1>something wrong</h1>
                        }
                    </div>
                    <div>
                        <>
                            <p className='text-4xl font-bold pb-2'>Same Author More Post</p>
                            <hr />
                            {
                                datas.length ? datas?.map(allAuth => <MultiCardDetalsData allAuth={allAuth} isLoading={isLoading} key={allAuth?._id} />) : <h1>something wrong</h1>
                            }
                        </>
                    </div>
                </div>
                <div className='w-[600px] hidden lg:block'>
                    {
                        datas.length ? datas.map(multyData => <TotalCardDetalsData multyData={multyData} key={multyData?._id} />) : <h1>someting wrong</h1>
                    }
                </div>
            </div>

        </div>
    );
};

export default LiveNewsApiDetailsPage;