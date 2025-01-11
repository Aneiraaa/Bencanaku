import { useState } from "react";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState(1);

  const handleClick = (id) => {
    setActive(id);
  };

  const menuItems = [
    {
      id: 1,
      name: "home",
      link: "home",
    },
    {
      id: 2,
      name: "information",
      link: "information",
    },
    {
      id: 3,
      name: "about",
      link: "about",
    },
    {
      id: 4,
      name: "gallery",
      link: "gallery",
    },
  ];

  return (
    <>
      <nav
        className={`px-24 py-10 flex justify-between items-center shadow-md top-0 bg-white sticky w-full z-20`}
      >
        <a href="#" className="navbar-brand">
          <p className="uppercase tracking-widest font-semibold text-2xl">
            bencanaku
          </p>
        </a>

        <ul className="navbar-nav w-4/12 flex justify-evenly items-center">
          {menuItems.map((item) => (
            <li key={item.id} className="navbar-item ">
              <Link
                smooth={true}
                to={item.link}
                className={`nav-link px-6 py-4 cursor-pointer capitalize duration-300 hover:mx-5 hover:scale-110 ${
                  active === item.id ? "text-red-500 font-bold" : "font-normal"
                }`}
                onClick={() => handleClick(item.id)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="wrapper-button">
          <LinkRouter
            to={"/login"}
            className="px-6 py-3 border border-blue-600 bg-blue-600 text-white font-semibold capitalize duration-300 rounded-[5px] hover:bg-white hover:border-blue-600 hover:text-blue-600 hover:font-normal"
          >
            Login
          </LinkRouter>
        </div>
      </nav>
    </>
  );
}
