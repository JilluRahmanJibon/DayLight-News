import React from 'react';
import { useState } from 'react';
import { NavLink, } from 'react-router-dom';
import HomePageStoryaPhotogallery from './HomePageStoryaPhotogallery';
import HomePageStoryLifeStyle from './HomePageStoryLifeStyle';
import HomePageStoryModel from './HomePageStoryModel';
import HomePageStoryNature from './HomePageStoryNature';
import HomePageStoryTravel from './HomePageStoryTravel';

const HomePageStorySection = () =>
{

    const [ active, setActive ] = useState("FirstCard")


    return (
        <main className=' mt-12 mb-16'>
            <section className='flex mb-7 sm:flex-row flex-col sm:justify-between items-center '>
                <div>
                    <h1 className='font-bold text-xl sm:text-2xl text-red-500'>STORIES</h1>
                </div>
                <div className='flex flex-wrap font-semibold gap-2 md:gap-7'>
                    <NavLink onClick={() => setActive("FirstCard")} to='/'>Model</NavLink>
                    <NavLink onClick={() => setActive("SecondCard")} to='/'>Lifestyle</NavLink>
                    <NavLink onClick={() => setActive("ThirdCard")} to='/'>Health</NavLink>
                    <NavLink onClick={() => setActive("FourthCard")} to='/'>Travel</NavLink>
                    <NavLink onClick={() => setActive("FiveCard")} to='/'>PhotoGallery</NavLink>
                </div>
            </section>



            {
                active === "FirstCard" && <HomePageStoryModel />
            }
            {
                active === "SecondCard" && <HomePageStoryLifeStyle />
            }
            {
                active === "ThirdCard" && <HomePageStoryNature />
            }
            {
                active === "FourthCard" && <HomePageStoryTravel />
            }
            {
                active === "FiveCard" && <HomePageStoryaPhotogallery />
            }





        </main>
    );
};

export default HomePageStorySection;