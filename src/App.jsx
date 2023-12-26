import Movies from "./components/Movies/Movies";
import Navbar from "./components/Navbar/Navbar";
import Genre from "./components/Genre/Genre";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieInformation from "./components/MovieInformation/MovieInformation";
function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
