import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/home/Home";
import { Characters } from "../components/characters/Characters";

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
        </Routes>
    </BrowserRouter>
  )
}
