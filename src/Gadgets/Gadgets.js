import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { RxCalendar } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';
import "./gadgets.css"
import { useQuery } from '@tanstack/react-query';
import GadgetsCard from './GadgetsCard';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { set } from 'date-fns';
import GadgetsModal from './GadgetsModal';
import HomePageSnipper from '../Home/HomePageStorySection/HomePageSnipper';

const Gadgets = () => {
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(500);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);
    const [select, setSelect] = useState(null)
    const [isUserLogin, setIsUserLogin] = useState(false);

    const { data: gadgets, isLoading, refetch } = useQuery({
        queryKey: ['gadgets'],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}gadgets`)
            .then((res) => res.json())
    })


    const handleGadgetsBuy = () => {
        if (!user?.email) {
            setIsUserLogin(true)
            toast.error("Please Sign in before then you can buy the product!");
            return

        }
        const gadgetsAllData = {
            picture: select?.picture,
            productName: select?.productName,
            title: select?.title,
            quantity,
            price,
            userEmail: user?.email,
            userName: user?.displayName,
        }



        fetch(`${process.env.REACT_APP_API_URL}orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(gadgetsAllData),
        })
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setQuantity(1)
                setPrice(500)
                setSelect(null)
                toast.success("your product is buying is Successful!");
            });

    }

    if (isLoading) {
        return <HomePageSnipper />
    }

    return (
        <div className="max-w-[1440px] mx-auto ">
            <div >
                {gadgets?.map((banner) => <GadgetsCard
                    key={banner._id}
                    banner={banner}
                    refetch={refetch}
                    setSelect={setSelect}
                />
                )}
            </div>
            {
                select &&
                <GadgetsModal
                    handleGadgetsBuy={handleGadgetsBuy}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    price={price}
                    setPrice={setPrice}
                    select={select}
                    setSelect={setSelect}
                    isUserLogin={isUserLogin}
                    setIsUserLogin={setIsUserLogin}

                />
            }
        </div>
    );
};

export default Gadgets;