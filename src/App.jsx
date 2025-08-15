import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Result from "./pages/result";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}
