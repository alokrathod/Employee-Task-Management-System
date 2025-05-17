import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'


const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext)
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("loggedInUser");
  //   if(storedUser) {
  //     const parsed = JSON.parse(storedUser);
  //     setUser(parsed.role);
  //     setLoggedInUserData(parsed.data);
  //   }
  //   setLoading(false);
  // }, []);

  // if(loading) return <div className='loading'>Loading..</div>


  // Restore session from localStorage on app load
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(parsed.role);
      setLoggedInUserData(parsed.data);
      if(parsed.role === 'admin') navigate('/admin');
      if(parsed.role === 'employee') navigate('/employee')
    }
  }, []);

  const handleLogin = (email, password) => {
    if(userData) {
      const employee = userData.employees.find((e)=>email == e.email && e.password == password);
      const admin = userData.admin.find((e)=>email == e.email && e.password == password)
      if(admin) {
        setUser('admin')
        setLoggedInUserData(admin)
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin', data: admin}))
        navigate('/admin')
      }
      else if(employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: employee}))
        navigate('/employee')
      }
      else {
        alert('Invalid Credentials')
      }
    }
    else {
      alert('Invalid Credentials')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setLoggedInUserData(null);
    navigate('/');
  }


  return (
    <Routes>
      <Route
        path="/"
        element={
          !user
            ? <Login handleLogin={handleLogin} />
            : user === 'admin'
              ? <Navigate to="/admin" />
              : <Navigate to="/employee" />
        }
      />
      {/* Uncomment for future registration */}
      {/* <Route path="/register" element={<Register />} /> */}
      <Route
        path="/admin"
        element={
          user === 'admin'
            ? <AdminDashboard changeUser={handleLogout} data={loggedInUserData} />
            : <Navigate to="/" />
        }
      />
      <Route
        path="/employee"
        element={
          user === 'employee'
            ? <EmployeeDashboard changeUser={handleLogout} data={loggedInUserData} />
            : <Navigate to="/" />
        }
      />
      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};


export default App
