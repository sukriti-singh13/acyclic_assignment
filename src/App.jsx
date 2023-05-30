import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="h-screen bg-gradient-to-b from-violet-500 to-fuchsia-500
      "
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
