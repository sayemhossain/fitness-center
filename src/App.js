import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Shared/Header/Header";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Blogs from "./components/Pages/Blogs/Blogs";
import About from "./components/Pages/About/About";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
