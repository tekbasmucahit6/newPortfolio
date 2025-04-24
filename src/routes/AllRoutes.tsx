import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../screen/Home/Home';

export default function AllRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}
