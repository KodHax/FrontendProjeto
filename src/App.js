import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import Listagem from "./pages/listagem/Listagem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hoteis" element={<Listagem />} />
        <Route path="/hoteis/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
