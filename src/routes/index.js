import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Landing from "../pages/Landing";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
    </Routes>
  );
};

export default AppRoutes;
