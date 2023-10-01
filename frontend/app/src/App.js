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
      <Route path="/userDetails" element={<UserDetails username={"Laura"} pokemonList={[]}/>} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
