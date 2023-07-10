import Aboutus from "./components/Aboutus";
import Landing from "./pages/Landing";
import DownBar from "./components/Downbar";
import bg from "./assets/Bg.png";
import {Routes, Route} from "react-router-dom";
import User from "./components/User";
import Org from "./components/Org"
import Services from "./components/Services";
import Navbar from "./components/Navbar";
 import Download from "./pages/Download";
import "./App.css";
import Uptrain from "./pages/Uptrain";
//import Btn from "./components/Btn";
import Aggregate from "./components/Aggregate";
function App() {
  return (
    <>
    <div className=" bg-cover bg-no-repeat bg-center h-screen overflow-y-scroll hide-scrollbar "
    style={{ backgroundImage: `url(${bg})` }}>
     
    <Routes>
    <Route
    path="/"
    element={
    <div>
    <Navbar/>  
   
    <div className="m-9 ">    
    <Landing />
    <DownBar />
    <Services/>
    <Aboutus />
    </div>
    </div>      
    }/>
   <Route path="/user" element={<User />}></Route>
    <Route path="/hospital" element={<Org />}></Route>
    <Route path="/get-app" element={<Download />}></Route>
    <Route path="/upload-trained-model" element={<Uptrain />}></Route>
    <Route path="/aggregate" element={<Aggregate />}></Route>

      </Routes>
    </div>
    </>
    
  );
}

export default App;
