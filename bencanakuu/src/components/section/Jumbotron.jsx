import bencana from "@/assets/becana.jpeg";
import { Link } from "react-router-dom";

export default function Jumbotron() {
  return (
    <>
      <div className="h-screen bg-transparent p-32 relative z-10">
      <div className="bg-[#000] top-0 left-0 opacity-50 h-screen w-full absolute z-10"></div>
        <img
          src={bencana}
          className="object-cover h-screen absolute z-0 top-0 left-0 w-full"
        />
        <div id="home" className="wrapper relative z-10">
          <div className=" text-white flex flex-col justify-center items-start min-h-screen mt-10">
            <h1 className="text-5xl font-bold">Welcome to Bencanaku</h1>
            <p className="text-xl mt-4 font-thin">
              Sumber terpercaya informasi bencana alam di sekitar anda
            </p>
            <Link to={"/login"} className="mt-10 px-6 py-3 border border-blue-600 bg-blue-600 text-white font-semibold capitalize duration-300 rounded-[5px] hover:bg-white hover:border-blue-600 hover:text-blue-600 hover:font-normal">
              Get Started
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
