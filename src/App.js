
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
import ComingSoon from './Components/Events/Club Events/ComingSoon';
import SuperHacks from './Components/Events/Club Events/SuperHacks';
function App() {
  return (
    
    <BrowserRouter>
      
      <Navigation/>
      <div className="App">
        <Routes>
          <Route path='/' element={<Fragment><MainArea/><BodyContent/></Fragment>}/>
          <Route path='/About' element={<About />} />
          <Route path='/Events' element={<Events />} />
          <Route path='/Sponsor' element={<Sponsors/>} />
          <Route path='/OrganizingTeam' element={<Organize />} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/GamingOdyssey' element={<GamingOdyssey />} />
          <Route path='/SuperHacks' element={<SuperHacks />}  />
          <Route path='/AICTE' element={<AICTE />} />
          <Route path='/Robo' element={<Robo />} />
          <Route path='/StarNight' element={<StarNight />} />
          <Route path='/AandD' element={<AandD />} />
          <Route path='/ARGaming' element={<ARGaming />} />
          <Route path='/ARVR' element={<ARVR />} />
          <Route path='/Barbie' element={<Barbie />} />
          <Route path='/Circuitron' element={<Circuitron />} />
          <Route path='/DPDE' element={<DPDE />} />
          <Route path='/DPDM' element={<DPDM />} />
          <Route path='/ESummit' element={<ESummit />} />
          <Route path='/Junkyard' element={<Junkyard />} />
          <Route path='/Pitch' element={<Pitch />} />
          <Route path='/TechTalk' element={<TechTalk />} />
          <Route path='/TheMelodyBooms' element={<TheMelodyBooms/>} />
        </Routes>

      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
