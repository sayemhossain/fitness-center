import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Shared/Header/Header";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Blogs from "./components/Pages/Blogs/Blogs";
import About from "./components/Pages/About/About";
import Home from "./components/Pages/Home/Home/Home";
import Login from "./components/Pages/Login/Login";
import Footer from "./components/Shared/Footer/Footer";
import Signup from "./components/Pages/Signup/Signup";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
