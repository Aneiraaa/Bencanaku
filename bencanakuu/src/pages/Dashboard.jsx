import Sidebar from "@/components/navigation/Sidebar";
import Topbar from "@/components/navigation/Topbar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="bg-[#e6e6e6] h-screen flex">
      <div className="w-2/12 bg-white">
        <Sidebar />
      </div>
      <div className="w-10/12 flex flex-col">
        <Topbar />
        <div className="p-6 flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
