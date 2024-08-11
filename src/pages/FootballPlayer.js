import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import football_pic from "../Website Data/ft.jpg"
import bakht from "../Website Data/Teams/Football Team/bakht.jpg";
import azhar from "../Website Data/Teams/Football Team/azhar.JPG";
import ham from "../Website Data/Teams/Football Team/ham.JPG";
import rehman from "../Website Data/Teams/Football Team/rehman.JPG";
import shakeel from "../Website Data/Teams/Football Team/shakeel.JPG";
import umer from "../Website Data/Teams/Football Team/umer.JPG";

import React, { useContext, useEffect } from 'react';
import { NavbarContext } from '../Context/NavbarContext';


const players = [
    {
        name: "Bakht Ali",
        position: "Center Back",
        image: bakht
    },
    {
        name: "Hamza Munir",
        position: "Right Back",
        image: ham
    },
    {
        name: "Muhammad Azhar",
        position: "Goal Keeper",
        image: azhar
    },
    {
        name: "Rehman Bari",
        position: "Striker",
        image: rehman
    },
    {
        name: "Shakeel",
        position: "Midfielder",
        image: shakeel
    },
    {
        name: "Umer Sadozai",
        position: "Center Back",
        image: umer
    }
];
   

const PlayerCard = ({ player }) => {
    const {setActiveLink } = useContext(NavbarContext);

    useEffect(() => {
        setActiveLink();
      });

    return (
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center p-10">
                <img class="rounded-lg mb-3 w-full shadow-lg" src={player.image} alt={player.name}/>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{player.name}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400"><strong>Position:</strong> {player.position}</span>
            </div>
        </div>
    );
};

const FootballPlayer = () => {
    return (
        <div className="relative flex-col w-full min-h-screen bg-black">
        <div className="relative w-full h-screen">
            <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${football_pic})`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-700"></div> */}
            </div>
            <div className="relative z-10 h-full overflow-y-auto">
                <Navbar />
                <div className="flex flex-col mt-20 lg:flex-row items-center justify-center lg:mt-32 lg:mb-40 p-4">
                    <div className="w-full lg:w-2/3 justify-center items-center">
                        <h1 className="text-2xl lg:text-4xl sm:text-4xl font-bold text-white text-center">Our Football Players</h1>
                        
                    </div>
                </div>
            </div>
        </div>

        {/* Players */}
        <div className="flex flex-col p-4 bg-gray-700">
            <div className="flex flex-col items-center lg:ml-32 lg:mr-32 lg:mt-8 p-4">
                <div className="flex items-center text-4xl lg:mr-8 sm:mr-8">
                    <h2 className="text-white text-4xl font-bold ml-4">Our Players</h2>
                </div>
                <div className="flex flex-col lg:mt-8 bg-gray-700">
                    <div className="flex flex-wrap">
                        {players.map((player, index) => (
                            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                                <PlayerCard player={player} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* footer */}
        <Footer />
    </div>

    );
};

export default FootballPlayer;
