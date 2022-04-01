import { Fragment } from 'react';
import Header from './Components/Header';
import './App.css';
import TopPods from './Components/TopPods';
import ContListen from './Components/ContListen';
import LiveSession from './Components/LiveSession';
import TopDanceTourism from './Components/TopDanceTourism';
import SeeAll from "./Components/SeeAll"
import SeeAllSubs from "./Components/SeeAllSubs"
import VirtualStudio from "./Components/VirtualStudio"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          <Header title={"INSIGHTS"} image={require("./Images/podcast-header.jpg")} />
          <TopPods></TopPods>
          <ContListen></ContListen>
          <LiveSession></LiveSession>
        </>}/>
        <Route exact path="/SeeAll" element={<SeeAll />} />
        <Route exact path="/SeeAllSubs" element={<SeeAllSubs/>} />
        <Route exact path="/DanceTourism" element={<>
          <Header title={"DANCE TOURISM"} image={require("./Images/danceTourism_header3.jpg")} />
          <TopDanceTourism></TopDanceTourism>
        </>} />
        <Route exact path="/virtualStudio" element={<>
          <Header title={"VIRTUAL STUDIO"} image={require("./Images/studio.jpg")} />
          <VirtualStudio></VirtualStudio>
        </>} />

      </Routes>
    </Router>
  );
}



export default App;
