import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import NewStuff from './components/NewStuff';
import AboutUs from './components/AboutUs';
import MyCart from './components/MyCart';
import Login from "./components/login";
import './App.css';
import SignUp from "./components/signup";



function App() {
  return (
    //routing the pages
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="Newstuff" element={<NewStuff />} />
          <Route path="Mycart" element={<MyCart />} />
          <Route path="Aboutus" element={<AboutUs />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App
