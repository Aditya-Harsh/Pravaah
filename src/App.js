
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Fragment } from 'react';
import { BrowserRouter } from "react-router-dom";
import About from './Components/About/About';
import Organize from './Components/Organizing Team/OrganizingTeam'
import MainArea from './Components/MainArea/MainArea';
import Events from './Components/Events/Events'
import Sponsors from './Components/Sponsor/Sponsors'
import Contact from './Components/Contact Us/Contact';
import Registration from './Components/Registration/Registration';
import BodyContent from './Components/BodyContent/BodyContent';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import GamingOdyssey from './Components/Events/Club Events/GamingOdyssey';
import AICTE from './Components/Events/Club Events/AICTE';
import AandD from './Components/Events/Club Events/AandD';
import ARGaming from './Components/Events/Club Events/ARGaming';
import ARVR from './Components/Events/Club Events/ARVR';
import Barbie from './Components/Events/Club Events/Barbie';
import Circuitron from './Components/Events/Club Events/Circuitron';
import DPDE from './Components/Events/Club Events/DPDE';
import DPDM from './Components/Events/Club Events/DPDM';
import ESummit from './Components/Events/Club Events/ESummit';
import Junkyard from './Components/Events/Club Events/Junkyard';
import Pitch from './Components/Events/Club Events/Pitch';
import Robo from './Components/Events/Club Events/Robo';
import StarNight from './Components/Events/Club Events/StarNight';
import TechTalk from './Components/Events/Club Events/TechTalk';
import TheMelodyBooms from './Components/Events/Club Events/TheMelodyBooms';
import SuperHacks from './Components/Events/Club Events/Hackathon';
import ComingSoon from './Components/Events/Club Events/ComingSoon';
import HeaderNav from './Components/Navigation/HeaderNav';
function App() {
  return (
    
    <BrowserRouter>
      
      <HeaderNav/>
      <div className="App">
        <Routes>
          <Route path='/' element={<Fragment><MainArea /><BodyContent /></Fragment>} />
          <Route path='/pravaah' element={<Fragment><MainArea/><BodyContent/></Fragment>}/>
          <Route path='/About' element={<About />} />
          <Route path='/Events' element={<Events />} />
          <Route path='/Sponsor' element={<Sponsors/>} />
          <Route path='/OrganizingTeam' element={<Organize />} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/GamingOdyssey' element={<ComingSoon />} />
          <Route path='/Hackathon' element={<ComingSoon />}  />
          <Route path='/AICTE' element={<ComingSoon />} />
          <Route path='/Robo' element={<ComingSoon />} />
          <Route path='/StarNight' element={<ComingSoon />} />
          <Route path='/AandD' element={<ComingSoon />} />
          <Route path='/ARGaming' element={<ComingSoon />} />
          <Route path='/ARVR' element={<ComingSoon />} />
          <Route path='/Barbie' element={<ComingSoon />} />
          <Route path='/Circuitron' element={<ComingSoon />} />
          <Route path='/DPDE' element={<ComingSoon />} />
          <Route path='/DPDM' element={<ComingSoon />} />
          <Route path='/ESummit' element={<ComingSoon />} />
          <Route path='/Junkyard' element={<ComingSoon />} />
          <Route path='/Pitch' element={<ComingSoon />} />
          <Route path='/TechTalk' element={<ComingSoon />} />
          <Route path='/TheMelodyBooms' element={<ComingSoon/>} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
