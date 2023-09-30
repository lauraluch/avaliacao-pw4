import logo from './logo.svg';
import './App.css';
import Login from './screens/Login/Login';
import UserDetails from './screens/UserDetails/UserDetails';
import {Routes, Route, useNavigate} from 'react-router-dom';

function App() {
  function NavigateToLoginPage() {
    const navigate = useNavigate();
    navigate('/loginPage');
    return null;
  }

  return (
   <Routes>
      {/* <Route path="/loginPage" element={<Login />} /> */}
      <Route path="/userDetails" element={<UserDetails />} />    
      {/* <Route path="*" element={<NavigateToLoginPage />} /> */}
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
