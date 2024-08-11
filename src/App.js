import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";
import FutsalPlayers from "./pages/FutsalPlayer";
import FootballPlayers from "./pages/FootballPlayer";
import Partners from "./pages/Partners";
import Awards2020 from './pages/2020Awards';
import Awards2021 from './pages/2021Awards';
import Awards2022 from './pages/2022Awards';
import Awards2023 from './pages/2023Awards';
import Academy from './pages/Academy';
import Acheivements from './pages/Acheivements';
import Management from './pages/management';
import ScrollTop from './components/ScrollTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <div className="w-full h-screen flex-col">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/futsal-players" element={<FutsalPlayers />} />
          <Route path="/football-players" element={<FootballPlayers />} />
          <Route path="/awards-2020" element={<Awards2020 />} />
          <Route path="/awards-2021-22" element={<Awards2021 />} />
          <Route path="/awards-2022-23" element={<Awards2022 />} />
          <Route path="/awards-2023-24" element={<Awards2023 />} />
          <Route path="/our-partners" element={<Partners />} />
          <Route path="/management" element={<Management />} />
          <Route path="/academy" element={<Academy />} />
          <Route path='/achievements' element={<Acheivements />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
