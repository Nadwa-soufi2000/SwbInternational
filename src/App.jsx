import SWB from "./Pages/SWB"
import BostaniChocolate from "./Pages/BostaniChocolate"
import GlobalFootprint from "./Pages/GlobalFootprint"
import CocoaFarming from "./Pages/BostaniCocoaFarming"
import { Route, Routes } from "react-router-dom"
import DairaTech from "./Pages/DairaTech"
import Robotic from "./Pages/Robotic"
import SawtruGroub from "./Pages/SawtruGroub"
import WhoWeAre from "./Pages/WhoWeAre"
import Home from "./Pages/Home"
import Test from './Pages/Test'
import BostaniFoundation from "./Pages/BostaniFoundation"
import BostaniRealEstate from "./Pages/BostaniRealEstate"
import JoinUs from './Pages/JoinUs'


function App() {

  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/bostaniChocolate' element={<BostaniChocolate/>}/>
        <Route path='/bostaniCocoaFarming' element={<CocoaFarming/>}/>
        <Route path='/bostaniFoundation' element={<BostaniFoundation/>}/>
        <Route path='/bostaniRealEstate' element={<BostaniRealEstate/>}/>
        <Route path='/DairaTechnology' element={<DairaTech/>}/>
        <Route path='/globalFootprint' element={<GlobalFootprint/>}/>
        <Route path='/whoWeAre' element={<WhoWeAre/>}/>
        <Route path='/Robotic' element={<Robotic/>}/>
        <Route path='/sawtruGroub' element={<SawtruGroub/>}/>
        <Route path='/ourStory' element={<SWB/>}/>
        <Route path='joinUs' element={<JoinUs/>} />
      </Routes>
    </div>
  )
}

export default App
