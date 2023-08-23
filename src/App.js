import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar';
import VideoPlayer from './components/VideoPlayer';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import NavBar from './components/NavBar';

function App() {

  return (
    <Router>
      {/* <Sidebar />
      <Routes>
        <Route path="/video" element={<VideoPlayer />} />
      </Routes> */}
      <NavBar />
      <Routes>
        <Route path="/courses/" element={<HomePage />} />
        <Route path="/courses/:courseName" element={<CoursePage />}>
          <Route path="video" element={<VideoPlayer />} />
        </Route>
      </Routes>

    </Router>
  )
}

export default App;
