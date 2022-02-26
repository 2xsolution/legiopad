import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Staking from "./pages/Staking";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<Staking />} path="/staking" />
      </Routes>
    </Router>
  );
}

export default App;
