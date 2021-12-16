import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddMovie from "./components/AddMovie";
import UpdateMovie from "./components/UpdateMovie";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/movie/:id" element={<UpdateMovie />} />
      </Routes>
    </div>
  );
}

export default App;
