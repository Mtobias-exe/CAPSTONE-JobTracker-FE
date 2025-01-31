import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LandingPg from '../components/LandingPage/LandingPg'
import Dashboardpg from '../components/Dashboard/Dashboardpg'
import Navbar from '../components/Navbar/Navbar';
import AddPg from '../components/AddPage/AddPg';


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPg />} />
        <Route path="/dashboard" element={<Dashboardpg />} />
        <Route path="/addjob" element={<AddPg />} />
      
      
      </Routes>

     
    </Router>
  )
}

export default App
