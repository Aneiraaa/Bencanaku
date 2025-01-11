import { RiInformationLine } from "react-icons/ri";
import { HiOutlineLogout } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetLoginState } from "@/store/auth";
import { Link } from "react-router-dom";

export default function Sidebar({ className }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(resetLoginState());
    navigate("/", { replace: true });
  };

  const menuItem = [
    {
      id: 1,
      title: "Information",
      icon: <RiInformationLine className="text-3xl" />,
      path: "/dashboard/information",
    },
  ];

  return (
    <div
      className={`${className} w-full h-screen py-10 bg-white flex flex-col items-center justify-between border`}
    >
      <div className="flex flex-col items-center justify-evenly w-full gap-[100px]">
        <div className="sidebar-brand">
          <p className="text-2xl font-semibold text-left uppercase tracking-widest">
            bencanaku
          </p>
        </div>
        <ul className="sidebar-nav flex flex-col items-start justify-center w-full">
          {menuItem.map((item, id) => (
            <Link
              to={item.path}
              className="sidebar-item w-full px-8 border py-6 cursor-pointer duration-300 hover:bg-[#ddd] flex items-center gap-5"
              key={id}
            >
              {item.icon}
              <p className="capitalize text-xl">{item.title}</p>
            </Link>
          ))}
        </ul>
      </div>

      <div className="sidebar-button">
        <button
          onClick={handleLogout}
          className="border rounded-[5px] border-red-600 text-red-600 text-xl px-14 py-3 duration-300 hover:bg-red-600 hover:text-white flex items-center gap-3"
        >
          <HiOutlineLogout />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
