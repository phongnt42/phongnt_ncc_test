import { useState } from "react";
import "./App.css";
import Footer from "./HomePage/Footer";
import Content from "./HomePage/Content";
import Sidebar from "./HomePage/Sidebar";
function App() {
  const [activeItem, setActiveItem] = useState("Home");
  const menuItem = [
    { name: "Home" },
    { name: "Services" },
    { name: "News" },
    { name: "Blog" },
    { name: "Contact" },
  ];
  return (
    <>
      <div className="main-container">
        <Sidebar menuItem={menuItem} activeItem={activeItem} setActiveItem={setActiveItem} />
        <div className="right-container">
          <Content />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
