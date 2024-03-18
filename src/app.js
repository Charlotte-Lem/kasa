import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./layout/banner";
import Footer from "./layout/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Error from "./pages/error";
import Rental from "./pages/rental";

import "./style/main.scss";

function App() {
  return (
    <Router>
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rental" element={<Rental />} />
        {/* pensez a l'id */}
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
