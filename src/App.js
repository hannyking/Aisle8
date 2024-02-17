import { Route, Routes } from 'react-router-dom';
import './App.css';
import { MuiNavbar } from './Components/NavBar/MuiNavbar';
import { Home } from './Page/Home/Home';
import { AiSolutions } from './Page/AiSolutions/AiSolutions';
import { AboutUs } from './Page/AboutUs/AboutUs';
import { Team } from './Page/Team/Team';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <>
      <MuiNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Home' element={<Home />} />
        <Route path='AI Solutions' element={<AiSolutions />} />
        <Route path='About Us' element={<AboutUs />} />
        <Route path='Team' element={<Team />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
