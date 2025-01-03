import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from "./pages/Home/Home";
import InfoPage from "./pages/InfoPage/InfoPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:postId" element={<InfoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
