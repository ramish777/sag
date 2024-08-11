import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import bg_3 from "../images/bg_3.jpg";
import cl from "../Website Data/Acheivements/2021-2022/ChitralLeague.jpg"
import ff from "../Website Data/Acheivements/2021-2022/FutsalFiesta.jpeg"
import ls from "../Website Data/Acheivements/2021-2022/LahoreSports.jpg"
import lsl from "../Website Data/Acheivements/2021-2022/LigaSmurfiaLahore.jpg"
import lsp from "../Website Data/Acheivements/2021-2022/LigaSmurfiaPakistan.jpg"
import { useContext, useEffect } from 'react';
import { NavbarContext } from '../Context/NavbarContext';

const Awards2021 = () => {
    const { setActiveLink } = useContext(NavbarContext);

    useEffect(() => {
        setActiveLink();
    }, [setActiveLink]);

    const achievements = [
        {
            title: "Futsal Fiesta",
            image: ff,
            description: "Celebrated our first futsal tournament win at the Futsal Fiesta, marking a milestone in our futsal journey."
        },
        {
            title: "Lahore Sports Tournament 8",
            image: ls,
            description: "Dominated the Lahore Sports Tournament 8 with a commanding 2-0 victory over Raiders Nation, solidifying our reputation in the local futsal scene."
        },
        {
            title: "Liga Smurfia Lahore",
            image: lsl,
            description: "Achieved a remarkable 8-0 triumph against Golazo FC in Liga Smurfia Lahore, underscoring our offensive prowess and teamwork."
        },
        {
            title: "Liga Smurfia Islamabad",
            image: lsp,
            description: "Clinched a decisive 2-0 win against Goals FC in Liga Smurfia Islamabad, continuing our success across different cities."
        },
        {
            title: "Chitral League - Finalists",
            image: cl,
            description: "Finished as finalists in the Chitral League, putting up a valiant fight against Pakistan Army in a close 2-1 match."
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
                            <h1 className="text-2xl lg:text-4xl font-bold text-white">Achievements (2021-22)</h1>
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

export default Awards2021;
