import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import React, { useContext, useEffect } from 'react';
import { NavbarContext } from '../Context/NavbarContext';


const players = [
    {
        name: "Asad Cheema",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/futsal/ac_15_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZnV0c2FsL2FjXzE1XzExem9uLmpwZyIsImlhdCI6MTcyMzQ3MjMwMiwiZXhwIjoyMDM4ODMyMzAyfQ.zws2DuuNhfUyEwCxzTL7vyvpeIg4bfv_RqK6_prrYuk&t=2024-08-12T14%3A18%3A23.048Z"
    },
    {
        name: "Asif Ali",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/futsal/aa_14_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZnV0c2FsL2FhXzE0XzExem9uLmpwZyIsImlhdCI6MTcyMzQ3MjI3NywiZXhwIjoyMDM4ODMyMjc3fQ.ukNuE-cdrb8C_2QKtm35D6le9_pDRTDb-5GPJDQHd4E&t=2024-08-12T14%3A17%3A57.228Z"
    },
    {
        name: "Faraz",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/futsal/f_16_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZnV0c2FsL2ZfMTZfMTF6b24uanBnIiwiaWF0IjoxNzIzNDcyMzI1LCJleHAiOjIwMzg4MzIzMjV9.tXb02aAt8fug0Sco0vUBhrUqwr03bzTvAEUMD4YqKZ0&t=2024-08-12T14%3A18%3A46.207Z"
    },
    {
        name: "Haider Ali",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/futsal/ha_18_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZnV0c2FsL2hhXzE4XzExem9uLmpwZyIsImlhdCI6MTcyMzQ3MjM0NywiZXhwIjoyMDM4ODMyMzQ3fQ.VVEC32ZWct5Ll88GgdJF2ZQrOJCEGh7lfZMzww7cGss&t=2024-08-12T14%3A19%3A07.548Z"
    },
    {
        name: "Hamza Munir",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/futsal/hm_20_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZnV0c2FsL2htXzIwXzExem9uLmpwZyIsImlhdCI6MTcyMzQ3MjM3MiwiZXhwIjoyMDM4ODMyMzcyfQ.Bd-AO5XRR_FlPeTQHX1mp2fsO759oob50XwEvn1aOxc&t=2024-08-12T14%3A19%3A32.576Z"
    },
    {
        name: "Hannan",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/futsal/h_17_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZnV0c2FsL2hfMTdfMTF6b24uanBnIiwiaWF0IjoxNzIzNDcyMzkxLCJleHAiOjIwMzg4MzIzOTF9.ZOvn6IiCwpjmwOlMahj6gdQ8fXPqszwiIINSsnPyIIY&t=2024-08-12T14%3A19%3A51.532Z"
    },
    {
        name: "Hassan Goraya",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/futsal/hg_19_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZnV0c2FsL2hnXzE5XzExem9uLmpwZyIsImlhdCI6MTcyMzQ3MjQxNCwiZXhwIjoyMDM4ODMyNDE0fQ.j68l9zEcPdR8J2GoQntOSMQIxMTbyHU1n4yZM4kVSDI&t=2024-08-12T14%3A20%3A14.830Z"
    },
    {
        name: "Malik Ali",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/futsal/ma_21_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZnV0c2FsL21hXzIxXzExem9uLmpwZyIsImlhdCI6MTcyMzQ3MjQzNSwiZXhwIjoyMDM4ODMyNDM1fQ.J17Hom1pbrFQlQsilyJ8360JYeFuSRcz7B_iMljHy2c&t=2024-08-12T14%3A20%3A35.287Z"
    },
    {
        name: "Mohsin Ghani",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/futsal/mg_22_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZnV0c2FsL21nXzIyXzExem9uLmpwZyIsImlhdCI6MTcyMzQ3MjQ2NSwiZXhwIjoyMDM4ODMyNDY1fQ.702HZ3r2915RG16c2O5y5Cvrn8O3vyFM4p7F5eb764E&t=2024-08-12T14%3A21%3A05.674Z"
    },
    {
        name: "Muhammad Zaid",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/futsal/mz_23_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZnV0c2FsL216XzIzXzExem9uLmpwZyIsImlhdCI6MTcyMzQ3MjQ4OCwiZXhwIjoyMDM4ODMyNDg4fQ.HzNgWx8JOc5rzvbXBzXfT19VB1CptdSzkogZLFujApU&t=2024-08-12T14%3A21%3A28.786Z"
    },
    {
        name: "Salar Khan",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/futsal/sk_26_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZnV0c2FsL3NrXzI2XzExem9uLmpwZyIsImlhdCI6MTcyMzQ3MjUxNCwiZXhwIjoyMDM4ODMyNTE0fQ.Dclb4ZqNe01WHbZehzogZCoeQ3hUy9ZcSOig-V3f3wI&t=2024-08-12T14%3A21%3A54.726Z"
    },
    {
        name: "Sheikh Abdulrehman",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/futsal/sa_25_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZnV0c2FsL3NhXzI1XzExem9uLmpwZyIsImlhdCI6MTcyMzQ3MjUzNSwiZXhwIjoyMDM4ODMyNTM1fQ.qNF-angfZjXNgS5gIKR9qZWG14oIm4713OFZvbZpj4E&t=2024-08-12T14%3A22%3A15.577Z"
    },
    {
        name: "Sohaib Malik",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/futsal/sm_27_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZnV0c2FsL3NtXzI3XzExem9uLmpwZyIsImlhdCI6MTcyMzQ3MjU1NywiZXhwIjoyMDM4ODMyNTU3fQ.tc_U5dsuTbkDovNSsINLtjA7k-6F5TOWqOc81f5_JTU&t=2024-08-12T14%3A22%3A38.056Z"
    },
    {
        name: "Sufyan",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/futsal/s_24_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZnV0c2FsL3NfMjRfMTF6b24uanBnIiwiaWF0IjoxNzIzNDcyNTc4LCJleHAiOjIwMzg4MzI1Nzh9.PmMAOTg7ALYNmlAy50tIoj4Xmok4BGu1lL4QG0oqOsk&t=2024-08-12T14%3A22%3A59.389Z"
    },
    {
        name: "Talha Anwar",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/futsal/ta_31_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZnV0c2FsL3RhXzMxXzExem9uLmpwZyIsImlhdCI6MTcyMzQ3MjU5OCwiZXhwIjoyMDM4ODMyNTk4fQ.vd8-Jg-feOCmZJxwMPN8oE7TwMSdZZ8h3KeaLv8B_7A&t=2024-08-12T14%3A23%3A18.375Z"
    },
    {
        name: "Wahab Anwar",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/futsal/wa_28_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZnV0c2FsL3dhXzI4XzExem9uLmpwZyIsImlhdCI6MTcyMzQ3MjYxNSwiZXhwIjoyMDM4ODMyNjE1fQ.YevXDJYwOeIuvtrt2LIEYM3bMlvr9ht8ewx_iJg5xfg&t=2024-08-12T14%3A23%3A35.752Z"
    },
    {
        name: "Zain Zaidi",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/futsal/zz_30_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZnV0c2FsL3p6XzMwXzExem9uLmpwZyIsImlhdCI6MTcyMzQ3MjYzNywiZXhwIjoyMDM4ODMyNjM3fQ.CJ28vDY23-eLkGX9SwLo6oHRnQfTsFFeT1wSF9eW5BA&t=2024-08-12T14%3A23%3A57.846Z"
    },
    {
        name: "Zohaib Gondal",
        image: "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Teams/futsal/zg_29_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvVGVhbXMvZnV0c2FsL3pnXzI5XzExem9uLmpwZyIsImlhdCI6MTcyMzQ3MjY1OCwiZXhwIjoyMDM4ODMyNjU4fQ.iQwifNoUv54E_j3iFmmpAbyDqh2afz7vqBZkas5DblI&t=2024-08-12T14%3A24%3A18.252Z"
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
            <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Fut_34_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvRnV0XzM0XzExem9uLmpwZyIsImlhdCI6MTcyMzQ3Mjc2NCwiZXhwIjoyMDM4ODMyNzY0fQ.77iVBVBBq2PCafCVyHiue6O-K4hXFcQFBXHtGL-lHQw&t=2024-08-12T14%3A26%3A04.199Z)`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
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
