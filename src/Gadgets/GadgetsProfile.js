import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState, } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import GadgetPaymentForm from './GadgetPaymentForm';
import GadgetProfileCard from './GadgetProfileCard';
import GadgetsDashboardDeleteModal from './GadgetsDashboardDeleteModal';

const GadgetsProfile = () => {
    const { user } = useContext(AuthContext);
    const [storeDelete, setStoreDelete] = useState()
    const [processPayment, setProcessPayment] = useState()

    const { data: orders, refetch } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}orders?email=${user?.email}`)
            .then((res) => res.json())
    })



    return (
        <div>
            {
                orders?.length > 0 ? <div className='grid lg:grid-cols-2 grid-cols-1 md:w-11/12 w-full mx-auto gap-4 md:mt-0 mt-8'>
                    {
                        orders?.map(gadget => <GadgetProfileCard
                            key={gadget._id}
                            gadget={gadget}
                            refetch={refetch}
                            setStoreDelete={setStoreDelete}
                            setProcessPayment={setProcessPayment}
                        />)
                    }
                    {
                        storeDelete &&
                        <GadgetsDashboardDeleteModal
                            refetch={refetch}
                            storeDelete={storeDelete}
                            setStoreDelete={setStoreDelete}

                        />
                    }
                    {
                        processPayment &&
                        <GadgetPaymentForm
                            gadget={processPayment}

                        />

                    }
                </div>
                    :
                    <div className='flex items-center flex-col justify-center'>
                        <h1 className='text-2xl font-bold '>No Orders were are found! </h1>
                        <Link to='/gadgets' className=' font-bold mt-3 text-red-500 hover:text-red-600 Link'>
                            Shop here...
                        </Link>
                    </div>
            }
        </div>
    );
};

export default GadgetsProfile;