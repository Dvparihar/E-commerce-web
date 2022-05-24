import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./sections/Headers/Header";
import Footer from "./sections/Footers/Footer";
import MainPage from "./sections/MainPage/MainPage";
import NavMenu from "./components/NavMenu";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<NavMenu />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
