import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import React, { useContext, useEffect } from 'react';
import { NavbarContext } from '../Context/NavbarContext';


const players = [
    {
        name: "Bakht Ali",
        position: "Center Back",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/football/bakht_9_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZm9vdGJhbGwvYmFraHRfOV8xMXpvbi5qcGciLCJpYXQiOjE3MjM0NzE5OTQsImV4cCI6MjAzODgzMTk5NH0.s0BD70lOZmpGrCY3eRciG2jXv0bvxnUcGAd-3LOHSgE&t=2024-08-12T14%3A13%3A15.329Z"
    },
    {
        name: "Hamza Munir",
        position: "Right Back",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/football/ham_10_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZm9vdGJhbGwvaGFtXzEwXzExem9uLmpwZyIsImlhdCI6MTcyMzQ3MjAxOSwiZXhwIjoyMDM4ODMyMDE5fQ.Gua4H31FN7BXwig8TYOzr9LNU7BBPxDwDzTzQ9Xmk3M&t=2024-08-12T14%3A13%3A39.155Z"
    },
    {
        name: "Muhammad Azhar",
        position: "Goal Keeper",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/football/azhar_8_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZm9vdGJhbGwvYXpoYXJfOF8xMXpvbi5qcGciLCJpYXQiOjE3MjM0NzIwNDUsImV4cCI6MjAzODgzMjA0NX0.jYBtV73_8VZG1RzSEB9IwF3IwkGauUAzlT3YX5Dld00&t=2024-08-12T14%3A14%3A06.043Z"
    },
    {
        name: "Rehman Bari",
        position: "Striker",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/football/rehman_11_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZm9vdGJhbGwvcmVobWFuXzExXzExem9uLmpwZyIsImlhdCI6MTcyMzQ3MjA2OSwiZXhwIjoyMDM4ODMyMDY5fQ.dhrjzzxP0kKfd35dgZH3rVtk7XqriN6MVUNO4lQgvdU&t=2024-08-12T14%3A14%3A29.263Z"
    },
    {
        name: "Shakeel",
        position: "Midfielder",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/football/shakeel_12_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZm9vdGJhbGwvc2hha2VlbF8xMl8xMXpvbi5qcGciLCJpYXQiOjE3MjM0NzIwOTEsImV4cCI6MjAzODgzMjA5MX0.3izSDS6V_h7D8IU225iAf93jp3XV7u6CLZlTc6g-h7Q&t=2024-08-12T14%3A14%3A51.762Z"
    },
    {
        name: "Umer Sadozai",
        position: "Center Back",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/football/umer_13_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZm9vdGJhbGwvdW1lcl8xM18xMXpvbi5qcGciLCJpYXQiOjE3MjM0NzIxMTYsImV4cCI6MjAzODgzMjExNn0.HrsY0cU2quClYw0iSSo2M5JjQM-tGSPZZrOYWEhkukI&t=2024-08-12T14%3A15%3A16.232Z"
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
            <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/ft_32_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvZnRfMzJfMTF6b24uanBnIiwiaWF0IjoxNzIzNDcxOTMzLCJleHAiOjIwMzg4MzE5MzN9.yfUj7Jbf735EYco5mgv_vFHUlDNQ7m9Ci8uq2Venf2Q&t=2024-08-12T14%3A12%3A13.906Z)`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
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
