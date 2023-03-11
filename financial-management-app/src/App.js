import { Routes, Route, } from "react-router-dom";
import Login from './pages/Login';
//import Landingpage from './pages/LandingPage';
//import Sidebar from './components/Sidebar';
import Signup from './pages/Signup';
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="layout" element = {<Layout />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="transactions" element = {<Transactions/>} />
        </Routes>
    </div>
  );
}
export default App;
