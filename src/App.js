import { Routes, Route } from "react-router-dom";
import Course from "./pages/Course/Course";
import Courses from "./pages/Courses/Courses";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import "./App.scss";
import SignIn from "./pages/SignIn/SignIn";
import { useContext, useLayoutEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext);
  useLayoutEffect(() => {
    const isAccTok= localStorage.getItem("access_token") !== null;
    setIsLoggedIn(isAccTok);
  },[])


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/course/:id" element={<Course />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/profile" element={
      <ProtectedRoute isLoggedIn={isLoggedIn}>
        <Profile />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;
