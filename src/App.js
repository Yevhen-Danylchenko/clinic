import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./style.css"
import Home from "./components/Home";
import AddDoctor from "./components/AddDoctor";
import MakeAnAppointment from "./components/MakeAnAppointment";

function App() {
  return (
    <Router>
      <div className="navContent">
        <h1 className="title">Стоматологічна клініка Еліт</h1>
        <nav>
          <ul className="flex ul-content">
            <li>
              <Link className="link" to="/">
                Головна
              </Link>
            </li>
            <li>
              <Link className="link" to="/AddDoctor">
                Додати лікаря
              </Link>
            </li>
            <li>
              <Link className="link" to="/MakeAnAppointment">
                Запис на прийом
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddDoctor" element={<AddDoctor />} />
          <Route path="/MakeAnAppointment" element={<MakeAnAppointment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
