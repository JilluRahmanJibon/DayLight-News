import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NewsCountryDetals = () => {

    const params = useParams();
    console.log(params)

    const [worldInPicture, setWorldInPicture] = useState([])

    useEffect(() => {
        fetch("sylet.json").then(res => res.json()).then(result => {
            setWorldInPicture(result)
        })
    }, [])
    console.log(worldInPicture)


    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default NewsCountryDetals;