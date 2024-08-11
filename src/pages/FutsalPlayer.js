import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import bg_3 from "../Website Data/Fut.jpg";
import aa from "../Website Data/Teams/Futsal Team/aa.JPG";
import ac from "../Website Data/Teams/Futsal Team/ac.JPG";
import f from "../Website Data/Teams/Futsal Team/f.JPG";
import h from "../Website Data/Teams/Futsal Team/h.JPG";
import ha from "../Website Data/Teams/Futsal Team/ha.JPG";
import hg from "../Website Data/Teams/Futsal Team/hg.JPG";
import hm from "../Website Data/Teams/Futsal Team/hm.JPG";
import ma from "../Website Data/Teams/Futsal Team/ma.JPG";
import mg from "../Website Data/Teams/Futsal Team/mg.JPG";
import mz from "../Website Data/Teams/Futsal Team/mz.JPG";
import s from "../Website Data/Teams/Futsal Team/s.jpg";
import sa from "../Website Data/Teams/Futsal Team/sa.JPG";
import sk from "../Website Data/Teams/Futsal Team/sk.jpg";
import sm from "../Website Data/Teams/Futsal Team/sm.JPG";
import ta from "../Website Data/Teams/Futsal Team/ta.jpg";
import wa from "../Website Data/Teams/Futsal Team/wa.jpg";
import zg from "../Website Data/Teams/Futsal Team/zg.JPG";
import zz from "../Website Data/Teams/Futsal Team/zz.JPG";


import React, { useContext, useEffect } from 'react';
import { NavbarContext } from '../Context/NavbarContext';


const players = [
    {
        name: "Asad Cheema",
        image: ac
    },
    {
        name: "Asif Ali",
        image: aa
    },
    {
        name: "Faraz",
        image: f
    },
    {
        name: "Haider Ali",
        image: ha
    },
    {
        name: "Hamza Munir",
        image: hm
    },
    {
        name: "Hannan",
        image: h
    },
    {
        name: "Hassan Goraya",
        image: hg
    },
    {
        name: "Malik Ali",
        image: ma
    },
    {
        name: "Mohsin Ghani",
        image: mg
    },
    {
        name: "Muhammad Zaid",
        image: mz
    },
    {
        name: "Salar Khan",
        image: sk
    },
    {
        name: "Sheikh Abdulrehman",
        image: sa
    },
    {
        name: "Sohaib Malik",
        image: sm
    },
    {
        name: "Sufyan",
        image: s
    },
    {
        name: "Talha Anwar",
        image: ta
    },
    {
        name: "Wahab Anwar",
        image: wa
    },
    {
        name: "Zain Zaidi",
        image: zz
    },
    {
        name: "Zohaib Gondal",
        image: zg
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
                <img class="rounded-lg mb-3 h-96 shadow-lg" src={player.image} alt={player.name}/>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{player.name}</h5>
            </div>
        </div>
    );
};

const FutsalPlayer = () => {
    return (
        <div className="relative flex-col w-full min-h-screen bg-black">
        <div className="relative w-full h-screen">
            <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${bg_3})`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-700"></div> */}
            </div>
            <div className="relative z-10 h-full overflow-y-auto">
                <Navbar />
                <div className="flex flex-col mt-20 lg:flex-row items-center justify-center lg:mt-40 lg:mb-40 p-4">
                    <div className="w-full lg:w-2/3 justify-center items-center">
                        <h1 className="text-2xl lg:text-4xl sm:text-4xl font-bold text-white text-center">Our Futsal Players</h1>
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

export default FutsalPlayer;
