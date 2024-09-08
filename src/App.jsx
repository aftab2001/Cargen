import './App.css';
import Homepage from './pages/Homepage';
import Signup from './pages/Signup.jsx';
// import Demo from './pages/Demo.jsx';
import StaticDemo from './pages/StaticDemo';
import DynamicDashboard from './pages/DynamicDashboard';
import Login from './components/Login/Login.jsx';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './hooks/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="bg-gray-50 selection:bg-violet-500 selection:text-white">
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/demo" element={<Demo />} /> */}
            <Route path="/static-demo" element={<StaticDemo role="agent" />} />
            <Route path="/dynamic-dashboard" element={<DynamicDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
