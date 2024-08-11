import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import bg_3 from "../images/bg_3.jpg";
import isl from "../images/isl.JPG";
import bc from "../images/bc.JPG";
import volka from "../Website Data/Our Partners/Volka.png";
import gymARM from "../Website Data/Our Partners/GymArmour.png";
import maidan from "../Website Data/Our Partners/maidan.png";

const Partners = () => {
    return (
        <div className="relative flex-col w-full min-h-screen bg-black">
        <div className="relative w-full h-screen">
            <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${bg_3})`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 h-full overflow-y-auto">
                <Navbar />
    
                <div className="flex flex-col mt-20 lg:flex-row items-center justify-center lg:mt-40 lg:mb-40 p-4">
                    <div className="w-full lg:w-2/3 justify-center items-center">
                        <h1 className="text-2xl lg:text-4xl sm:text-4xl font-bold text-white text-center">Our Partners</h1>
                        <p className="text-sm lg:text-lg text-gray-300 mt-4">
                        We are proud to collaborate with a network of esteemed partners who share our passion for excellence and community. Together, we strive to create unforgettable experiences both on and off the pitch. Our partners play a crucial role in supporting our team and enhancing the overall fan experience. Explore the brands that stand with us in our journey towards greatness.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    
        {/* Achievements */}
        <div className="flex flex-col p-4 bg-gray-700">
            <div className="flex flex-col items-center lg:ml-32 lg:mr-32 lg:mt-8 p-4">
                <div className="flex items-center text-4xl lg:mr-8 sm:mr-8">
                    <h2 className="text-white text-4xl font-bold ml-4">Our Partners</h2>
                </div>
                <div className="flex flex-col lg:mt-8 bg-gray-700">
                    <div className="flex flex-wrap">
    
                        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                            <img src={volka} alt="Achievement" className="w-full h-64 object-cover rounded-lg " />
                            <h1 className="text-center text-white mt-5 font-bold">Volka Foods</h1>
                            <h1 className="text-center text-white text-it mt-2 font-bold">Academy Partner</h1>
                        </div>
    
                        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                            <img src={gymARM} alt="Achievement" className="w-full h-64 object-cover rounded-lg " />
                            <h1 className="text-center text-white mt-5 font-bold">Gym Armour</h1>
                            <h1 className="text-center text-white text-it mt-2 font-bold">Apparel Partner</h1>
                        </div>
    
                        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                            <img src={maidan} alt="Achievement" className="w-full h-64 object-cover rounded-lg " />
                            <h1 className="text-center text-white mt-5 font-bold">Maidan</h1>
                            <h1 className="text-center text-white text-it mt-2 font-bold">Equipment Partner</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    
        {/* ISL */}
        <div className="flex flex-col p-4 bg-gray-700">
            <div className="flex flex-col items-start lg:ml-32 lg:mt-8 p-4">
                <div className="flex items-center lg:mr-8 sm:mr-8">
                <div className="w-1.5 h-10 lg:w-2.5 bg-red-600"></div>
                <h2 className="text-white text-2xl font-bold ml-4">SA Gardens FC X ISL</h2>
                </div>
                <div className="relative flex flex-col lg:flex-col mt-8 lg:mt-8 lg:mr-32">
                    <img
                    src={isl}
                    alt="Achievement"
                    className="w-full rounded-lg"
                    />
                    <p className="text-sm lg:text-lg text-gray-300 mt-4">
                    SA Gardens Football Club is thrilled to announce our official partnership with International School Lahore. As part of this exciting collaboration, we are proud to be building a state-of-the-art futsal field at their flagship campus. This cutting-edge facility will provide students with a premier environment to hone their skills, foster teamwork, and enjoy the beautiful game. Together, we are committed to nurturing the next generation of football talent and promoting a healthy, active lifestyle.
                    </p>
                </div>
            </div>
        </div>
    
        {/* SA Gardens FC X Beaconhouse */}
        <div className="flex flex-col p-4 bg-gray-700">
            <div className="flex flex-col items-start lg:ml-32 lg:mt-8 p-4">
                <div className="flex items-center lg:mr-8 sm:mr-8">
                <div className="w-1.5 h-10 lg:w-2.5 bg-red-600"></div>
                <h2 className="text-white text-2xl font-bold ml-4">SA Gardens FC X Beaconhouse</h2>
                </div>
                <div className="relative flex flex-col lg:flex-col mt-8 lg:mt-8 lg:mr-32">
                    <img
                    src={bc}
                    alt="Achievement"
                    className="w-full rounded-lg"
                    />
                    <p className="text-sm lg:text-lg text-gray-300 mt-4">
                    SA Gardens Football Club is delighted to partner with Beaconhouse School System to launch exclusive summer camps at Beaconhouse Gulberg and Beaconhouse SA Gardens. These camps offer a fantastic opportunity for young athletes to develop their football skills, build confidence, and make new friends in a fun and supportive environment.                     </p>
                    
                </div>
            </div>
        </div>             
    
        {/* footer */}
        <Footer/>
    </div>
    
    );
};

export default Partners;
