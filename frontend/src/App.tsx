import "./App.css";
import {Route,Routes, BrowserRouter } from "react-router-dom";
import {LandingPage} from "./components/LandingPage";

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      
    </Routes>
  </BrowserRouter>
};

export default App;
