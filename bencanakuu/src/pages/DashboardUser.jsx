import { TablesUser } from "@/components/tables/TablesUser";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

export default function DashboardUser() {
  const data = [
    {
      id: 1,
      username: "admin",
      password: "admin",
      fullname: "Administrator",
    },
    {
      id: 2,
      username: "user",
      password: "user",
      fullname: "User",
    },
  ];

  return (
    <div className="wrapper ">
      <div className="wrapper flex items-center justify-between">
        <p className="capitalize text-2xl">Manajemen User</p>
        <Link className="text-sm flex items-center gap-3 p-2 border border-blue-600 bg-blue-600 text-white font-normal capitalize duration-300 rounded-[5px] hover:bg-white hover:border-blue-600 hover:text-blue-600 ">
          <FaPlus />
          <span>create</span>
        </Link>
      </div>
      <TablesUser className="mt-5" data={data} />
    </div>
  );
}
