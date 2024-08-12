import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import { useState, useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarContext } from '../Context/NavbarContext';

const LandingPage = () => {
    //const images = [pic1,pic2,pic3,pic4,pic5];
    const images =[
        "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Club%20Infrastructure/pic1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQ2x1YiBJbmZyYXN0cnVjdHVyZS9waWMxLnBuZyIsImlhdCI6MTcyMzQ2OTEzMCwiZXhwIjoyMDM4ODI5MTMwfQ.zFa7PojpKS9o3MANSWRxXWuKe0017mB5f33IPzdDgAA&t=2024-08-12T13%3A25%3A31.195Z",
        "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Club%20Infrastructure/pic2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQ2x1YiBJbmZyYXN0cnVjdHVyZS9waWMyLmpwZyIsImlhdCI6MTcyMzQ2OTE0NywiZXhwIjoyMDM4ODI5MTQ3fQ.pvC2xassINaHvowYkv-UaJff532hozJn9l_ippD37Io&t=2024-08-12T13%3A25%3A47.940Z",
        "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Club%20Infrastructure/pic3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQ2x1YiBJbmZyYXN0cnVjdHVyZS9waWMzLmpwZyIsImlhdCI6MTcyMzQ2OTE2NywiZXhwIjoyMDM4ODI5MTY3fQ.N-33PT1eya_vqJW5BMRGvqf5t6f8OpHTBBCsrVDMGaA&t=2024-08-12T13%3A26%3A07.495Z",
        "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Club%20Infrastructure/pic4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQ2x1YiBJbmZyYXN0cnVjdHVyZS9waWM0LnBuZyIsImlhdCI6MTcyMzQ2OTE4OCwiZXhwIjoyMDM4ODI5MTg4fQ.nMNc2Ix6RMWhBmiVGdgq8N2rcdG1B8kM4_G565_xy08&t=2024-08-12T13%3A26%3A28.352Z",
        "https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Club%20Infrastructure/pic5.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQ2x1YiBJbmZyYXN0cnVjdHVyZS9waWM1LmpwZyIsImlhdCI6MTcyMzQ2OTIwNywiZXhwIjoyMDM4ODI5MjA3fQ.J_Eh6uBCmrFhVZTaXSTaAtTf-oD-3uQL0UF0omgL2L8&t=2024-08-12T13%3A26%3A48.131Z"
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const { handleLinkClick } = useContext(NavbarContext);

    const GotoAchievementsPage = () => {
        navigate('/achievements');
    };

    const handleLearnMoreClick = () => {
        navigate('/academy');
        handleLinkClick('Academy')
    };

    const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    
    useEffect(() => {
        const interval = setInterval(() => {
          nextImage();
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval); // Clean up the interval on component unmount
    });

    return (
        <div className="relative w-full min-h-screen bg-black">
            <div className="relative w-full h-screen">
                <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Main%20Page%20photo/96_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvTWFpbiBQYWdlIHBob3RvLzk2XzExem9uLmpwZyIsImlhdCI6MTcyMzQ2ODk1MCwiZXhwIjoyMDM4ODI4OTUwfQ.WNyCxKSnZbLZQ-bPB52cWai2x0uM4u9MVfLuXLhLVAo&t=2024-08-12T13%3A22%3A30.510Z)`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative z-10 h-full overflow-y-auto">
                    <Navbar />

                    <div className="flex flex-col mt-20 lg:flex-row justify-center lg:mt-40 p-4">
                        <div className="w-full lg:w-2/3 justify-center items-center">
                            <h1 className="text-2xl lg:text-4xl sm:text-4xl font-bold text-white text-center">Welcome to SA Gardens Football Club</h1>
                        
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center p-4">
                        <button
                            className="bg-red-600 text-white font-bold py-3 px-6 rounded text-lg hover:bg-transparent hover:border-white hover:border-2 hover:text-white transition-colors duration-300"
                            onClick={() => window.open("https://forms.gle/yAiXP1DDUbivTDcg7", "_blank")}
                        >
                            Join Us
                        </button>
                        <button className="text-white font-bold py-3 px-6 rounded text-lg ml-4" onClick={handleLearnMoreClick}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>   

            {/* FASTEST GROWING  */}
            <div className="p-4 bg-gray-800">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-center mt-4 mb-4 text-white font-bold text-xl md:text-2xl md:mb-4 lg:text-4xl">
                        Fastest growing club in the world
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:ml-32 lg:mr-32 lg:gap-6">
                    <div className="flex flex-col items-center bg-red-600 rounded-lg p-4 lg:p-6 h-64">
                    <div className="flex flex-col items-center h-full text-center">
                            <h1 className="text-4xl font-bold text-white">10</h1>
                            <h2 className="mt-4 text-lg font-bold text-white">Cities completed in</h2>
                            <p className="mt-2 text-sm lg:text-base text-white">
                                Lyari, Quetta, Chitral,<br/>
                                Islamabad, Peshawar,<br/>
                                Mansehra, Faisalabad,<br/>
                                Gujranwala, Sialkot,<br/>
                                Lahore
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center  bg-red-600 rounded-lg p-4 lg:p-6 h-64">
                    <div className="flex flex-col items-center h-full text-center">
                            <h1 className="text-4xl font-bold text-white">8</h1>
                            <h2 className="mt-4 text-lg font-bold text-white">Cities employed from</h2>
                            <p className="mt-2 text-sm lg:text-lg text-white">
                                Chitral, Gilgit, Hazara,<br/>
                                Islamabad, Faisalabad,<br/>
                                Gujranwala, Kashmir,<br/>
                                Lahore
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center  bg-red-600 rounded-lg p-4 lg:p-6 h-64">
                    <div className="flex flex-col items-center h-full text-center">
                            <h1 className="text-4xl font-bold text-white">67%</h1>
                            <h2 className="mt-4 text-lg font-bold text-white">Win percentage</h2>
                            <p className="mt-2 text-sm lg:text-lg text-white">
                                12/18 tournaments<br/>
                                won within a year
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center  bg-red-600 rounded-lg p-4 lg:p-6 h-64">
                        <div className="flex flex-col items-center  h-full text-center">
                            <h1 className="text-4xl font-bold text-white">4</h1>
                            <h2 className="mt-4 text-xl font-bold text-white">International Representation</h2>
                            <p className="mt-2 text-sm lg:text-lg text-white">
                                Our players have represented<br/>
                                Pakistan in Hungary, South<br/>
                                Africa, Brazil, Nepal
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Clubs and facilities */}
            <div className="flex flex-col lg:flex-row p-4 bg-gray-700">
                <div className="flex flex-col w-full items-start lg:ml-32 lg:mr-32 lg:mt-8 lg:mb-8 p-4">
                    <div className="flex w-full items-center justify-between lg:mr-8 sm:mr-8">
                        <div className="flex items-center">
                            <div className="w-1.5 h-10 lg:w-2.5 bg-red-600"></div>
                            <h2 className="text-white text-xl lg:text-2xl font-bold ml-4">Clubs and facilities </h2>
                        </div>
                        <div className="flex space-x-1">
                            <button className="bg-gray-500 text-white font-bold py-3 px-2 rounded hover:bg-red-600 transition-colors duration-300"
                                onClick={prevImage}>
                                <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                </svg>
                            </button>
                            <button className="bg-gray-500 text-white font-bold py-3 px-2 rounded hover:bg-red-600 transition-colors duration-300"
                                onClick={nextImage}
                            >
                                <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="w-full items-center justify-center flex flex-col lg:flex-row">

                        <div className="flex flex-col w-full lg:flex-row mt-8 lg:mt-8">
                            <div className="relative w-full h-80 overflow-hidden rounded-lg lg:h-screen" id="controls-carousel">
                                {images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        className={`absolute block w-full h-full object-cover transition-opacity duration-700 ease-in-out transform ${index === currentIndex ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                                        alt={`Slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ACADEMY STRUCTURE  */}
            <div className="flex sm:flex-col sm:grid-col-1 md:flex-row md:grid-cols-2 lg:flex-row p-4 bg-gray-800">
                <div className="sm:flex-col sm:grid-col-1 md:flex-row md:grid-cols-2 lg:flex-row h-auto p-4 w-full">
                    <div className="flex flex-col items-center justify-center lg:flex-row">
                        <h2 className="text-center text-white font-bold text-xl lg:text-4xl">ACADEMY STRUCTURE</h2>
                    </div>
                    <div className="flex flex-col md:flex-row md:grid-cols-2 items-center lg:ml-32 lg:mr-32 justify-center lg:flex-row lg:mt-8">
                        <div className="flex flex-col items-center justify-center bg-red-600 rounded-lg h-64 w-full p-4 lg:w-1/4 m-4">
                            <h1 className="text-7xl p-4 font-bold text-white">4</h1>
                            <h1 className="mt-4 text-lg text-center font-bold text-white mb-8">Age Categories</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-red-600 rounded-lg h-64 w-full p-4 lg:w-1/4 m-4">
                            <h1 className="text-7xl p-4 font-bold text-white">3</h1>
                            <h1 className="mt-4 text-lg font-bold text-center text-white mb-8">Academy Centers</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-red-600 rounded-lg h-64 w-full p-4 lg:w-1/4 m-4">
                            <h1 className="text-7xl p-4 font-bold text-white">300+</h1>
                            <h1 className="mt-4 text-lg text-center font-bold text-white mb-8">Student Athletes</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Achievements */}
            <div className="flex flex-col lg:flex-row p-4 bg-gray-700">
                <div className="flex flex-col items-start lg:ml-32 lg:mt-8 lg:mb-8 p-4">
                    <div className="flex w-full items-center justify-between lg:mr-8 sm:mr-8">
                    <div className="flex items-center">
                        <div className="w-1.5 h-10 lg:w-2.5 bg-red-600"></div>
                        <h2 className="text-white text-xl lg:text-2xl font-bold ml-4">Achievements</h2>
                    </div>
                    <button
                        className="bg-gray-500 text-white font-bold py-3 px-2 rounded hover:bg-red-600 transition-colors duration-300 flex items-center space-x-2 lg:mr-32"
                        onClick={GotoAchievementsPage}
                    >
                        <span>View All</span>
                        <svg
                        className="w-4 h-4 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                        >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                        </svg>
                    </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 mt-8 lg:mr-32">
                        <Link to="/awards-2020" className="relative group">
                            <div className="rounded-lg bg-black w-full h-64 overflow-hidden"> {/* Fixed height and width */}
                                <img
                                    src="https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Achievements/2020/Depalpur.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQWNoaWV2ZW1lbnRzLzIwMjAvRGVwYWxwdXIuanBlZyIsImlhdCI6MTcyMzQ1OTAzMSwiZXhwIjoyMDM4ODE5MDMxfQ.Zr_CJ7zBm1SvE3ax0PRzA9A8b2dDsE_z42Mfir4VZUY&t=2024-08-12T10%3A37%3A11.863Z"
                                    alt="2020 Achievement"
                                    className="w-full h-full object-cover rounded-lg cursor-pointer group-hover:opacity-70"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white font-bold text-lg">2020 2x Trophies</span>
                                </div>
                            </div>
                            <h1 className="text-center text-white mt-2 font-bold">Click to view</h1>
                            <h1 className="text-center text-white font-bold">2020 2x Trophies</h1>
                        </Link>

                        <Link to="/awards-2021-22" className="relative group">
                            <div className="rounded-lg bg-black w-full h-64 overflow-hidden">
                                <img
                                    src="https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Achievements/2021-2022/LahoreSports.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQWNoaWV2ZW1lbnRzLzIwMjEtMjAyMi9MYWhvcmVTcG9ydHMuanBnIiwiaWF0IjoxNzIzNDU5MTIwLCJleHAiOjIwMzg4MTkxMjB9.8BWghaBZdzgJs4z5O8x63zlxx7m8L_Hee0wNd8KZq1M&t=2024-08-12T10%3A38%3A41.091Z"
                                    alt="2021-22 Achievement"
                                    className="w-full h-full object-cover rounded-lg cursor-pointer group-hover:opacity-70"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white font-bold text-lg">2021-22 4x Trophies</span>
                                </div>
                            </div>
                            <h1 className="text-center text-white mt-2 font-bold">Click to view</h1>
                            <h1 className="text-center text-white font-bold">2021-22 4x Trophies</h1>
                        </Link>

                        <Link to="/awards-2022-23" className="relative group">
                            <div className="rounded-lg bg-black w-full h-64 overflow-hidden">
                                <img
                                    src="https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Achievements/2022-2023/FutsalNationalCup.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvQWNoaWV2ZW1lbnRzLzIwMjItMjAyMy9GdXRzYWxOYXRpb25hbEN1cC5qcGciLCJpYXQiOjE3MjM0NjQ4NTAsImV4cCI6MjAzODgyNDg1MH0.CipL8hCyJEWq5Le1PGSCK1iqgn1lRvPtMYNZjM3KnPI&t=2024-08-12T12%3A14%3A10.664Z"
                                    alt="2022-23 Achievement"
                                    className="w-full h-full object-cover rounded-lg cursor-pointer group-hover:opacity-70"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white font-bold text-lg">2022-23 4x Trophies</span>
                                </div>
                            </div>
                            <h1 className="text-center text-white mt-2 font-bold">Click to view</h1>
                            <h1 className="text-center text-white font-bold">2022-23 4x Trophies</h1>
                        </Link>
                    </div>

                </div>
                </div>

            {/* Teams */}
            <div className="flex flex-col lg:flex-row p-4 bg-gray-700">

                <div className="flex flex-col items-start lg:ml-32 lg:mt-8 lg:mb-8 p-4">
                    <div className="flex items-center lg:mr-8 sm:mr-8">
                        <div className="w-1.5 h-10 lg:w-2.5 bg-red-600"></div>
                        <h2 className="text-white text-2xl font-bold ml-4">Teams</h2>
                    </div>

                    <div className="flex flex-col md:flex-row md:justify-between md:space-x-4 lg:flex-row mt-8 lg:mt-8 lg:mr-32">
                        <div className="relative w-full mb-4 lg:mb-0 lg:mr-4 group">
                            <Link to="/football-players">
                                <div className="rounded-lg bg-black w-full h-96 overflow-hidden">
                                    <img src="https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/ft_main_33_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvZnRfbWFpbl8zM18xMXpvbi5qcGciLCJpYXQiOjE3MjM0NjkyNjEsImV4cCI6MjAzODgyOTI2MX0.WpTT9zmBQ7VLAIohWDIDiqWT9rMeTH9f3lyo70v-eF4&t=2024-08-12T13%3A27%3A42.116Z" 
                                    alt="Achievement" 
                                    className="w-full h-full object-cover rounded-lg cursor-pointer group-hover:opacity-70" />
                                    
                                    <div className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 ">
                                        <span className="text-white font-bold text-lg">See our Football Team </span>
                                    </div>
                                </div>
                                <h1 className="text-center text-white mt-5 font-bold">View our Football Team</h1>
                            </Link>
                        </div>
                        <div className="relative w-full mb-4 lg:mb-0 lg:mr-4 group">
                            <Link to="/futsal-players">
                                <div className="rounded-lg bg-black w-full h-96 overflow-hidden">
                                    <img src="https://ztwcunedakpirfkuvqkt.supabase.co/storage/v1/object/sign/Images/Fut_main_35_11zon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvRnV0X21haW5fMzVfMTF6b24uanBnIiwiaWF0IjoxNzIzNDY5Mjk1LCJleHAiOjIwMzg4MjkyOTV9.IN-BfjzLoQijNGeWsdC60CzEJ-5gvB1WP9fx0YbeOI8&t=2024-08-12T13%3A28%3A15.749Z"
                                    alt="Achievement" 
                                    className="w-full h-full object-cover rounded-lg cursor-pointer group-hover:opacity-70" />
                                    
                                    <div className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100">
                                        <span className="text-white font-bold text-lg">See our Futsal Team</span>
                                    </div>
                                </div>
                                <h1 className="text-center text-white mt-5 font-bold">View our Futsal Team</h1>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>

            {/* footer */}
            <Footer/>

        </div>

    );
};

export default LandingPage;
