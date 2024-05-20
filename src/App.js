import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Pages/Login';
import OwnerMenu from './Components/Pages/OwnerMenu';
import StaffMenu from './Components/Pages/StaffMenu';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/OwnerMenu/*' element={<OwnerMenu />}></Route>
          <Route path='/StaffMenu/*' element={<StaffMenu />}></Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
