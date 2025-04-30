import "./App.css";

import About from "./pages/about";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { FiAlignJustify } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function App() {
  return (
    <div className="w-full h-full bg-gray-800 flex">
      <div className="w-[100px] h-screen flex flex-col items-center justify-between py-10 gap-y-8">
        <FiAlignJustify color="white" size={24} />
        <div>
          <FaLinkedin color="white" size={24} className="mb-4"/>
          <FaFacebook color="white" size={24} />
        </div>
        <div className="text-white rotate-90 flex items-end w-[120px]">
          <span className="mr-1">Scroll Down</span>
          <FaAngleRight color="white" size={20} />
        </div>
      </div>
      <div className="flex-full">
        <Home></Home>
        <About></About>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
