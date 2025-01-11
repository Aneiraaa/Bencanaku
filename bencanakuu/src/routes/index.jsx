import { Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Dashboard from "@/pages/Dashboard";
import DashboardUser from "@/pages/DashboardUser";
import DashboardInformation from "@/pages/DashboardInformation";
import FormTambahInformation from "@/pages/FormTambahInformation";
import FormEditInformation from "@/pages/FormEditInformation";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="user" element={<DashboardUser />} />
        <Route path="information" element={<DashboardInformation/>} />
        <Route path="information/tambah" element={<FormTambahInformation/>}/>
        <Route path="information/edit/:id" element={<FormEditInformation/>}/>
      </Route>
    </Routes>
  );
}
