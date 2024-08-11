import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import bg_3 from "../images/bg_3.jpg";
import depalpur from "../Website Data/Acheivements/2020/Depalpur.jpeg"
import mt from "../Website Data/Acheivements/2020/ModelTown.jpeg"
import ncc from "../Website Data/Acheivements/2020/NationalChallengeCup.jpeg"

import { useContext, useEffect } from 'react';
import { NavbarContext } from '../Context/NavbarContext';

const Awards2020 = () => {
    const { setActiveLink } = useContext(NavbarContext);

    useEffect(() => {
        setActiveLink();
    }, [setActiveLink]);

    const achievements = [
        {
            title: "All Pakistan Cup - Depalpur",
            image: depalpur,
            description: "Secured victory in the All Pakistan Cup at Depalpur with a thrilling 2-1 win against the district team, demonstrating our competitive edge."
        },
        {
            title: "Fame Cup - Model Town",
            image: mt,
            description: "Triumphed in the Fame Cup at Model Town by edging out Fame FC in a nail-biting penalty shootout, showcasing our resilience and skill."
        },
        {
            title: "National Challenge Cup 2020 – Quarter Finalists",
            image: ncc,
            description: "Reached the quarter-finals of the prestigious National Challenge Cup 2020, narrowly losing to Pakistan WAPDA in our inaugural national cup appearance."
        }
    ];

    return (
        <div className="relative w-full min-h-screen bg-black">
            <div className="relative w-full h-screen">
                <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${bg_3})`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative z-10 h-full overflow-y-auto">
                    <Navbar />
                    <div className="flex flex-col mt-20 lg:mt-40 p-4">
                        <div className="w-full lg:w-2/3 mx-auto text-center">
                            <h1 className="text-2xl lg:text-4xl font-bold text-white">Achievements (2020)</h1>
                            <p className="text-sm lg:text-lg text-gray-300 mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante tellus. Nullam id dui justo. Proin sollicitudin varius dolor, ac mollis nisi imperdiet ac. Duis in odio ligula. Mauris auctor ligula eu libero convallis, non faucibus odio laoreet.
                            </p>
                            <p className="text-sm lg:text-lg text-gray-300 mt-4">
                                Morbi ac libero vel turpis dictum pretium. Sed sodales urna et lacus fringilla, a congue leo dictum. Donec et feugiat nisi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-gray-700">

            <div className=" lg:ml-32 lg:mr-32 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 p-4 ">
               {achievements.map((achievement, index) => (
                   <div key={index} className="flex flex-col p-4 bg-gray-800 rounded-lg">
                       <div className="flex items-center">
                           <div className="w-1.5 h-10 bg-red-600"></div>
                           <h2 className="text-white text-2xl font-bold ml-4">{achievement.title}</h2>
                       </div>
                       <div className="lg:mt-4">
                           <div className="w-full h-96 flex items-center justify-center">
                               <img src={achievement.image} alt="Achievement" className="max-h-full max-w-full object-contain rounded-lg" />
                           </div>
                           <p className="text-sm lg:text-lg mt-4 text-gray-300">
                               {achievement.description}
                           </p>
                       </div>
                   </div>
               ))}

           
           
            </div>

            </div>
           

            <Footer />
        </div>
    );
};

export default Awards2020;
