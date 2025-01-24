import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/home/Home";
import { Characters } from "../components/characters/Characters";
import { Locations } from "../components/locations/Locations";
import { Episodes } from "../components/episodes/Episodes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/episodes" element={<Episodes />} />
        </Routes>
    </BrowserRouter>
  )
}
