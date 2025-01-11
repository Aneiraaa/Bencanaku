import { GiHamburgerMenu } from "react-icons/gi";

export default function Topbar() {
  return (
    <>
      <div className="px-10 py-5 bg-white w-full">
        <button type="button" className="p-3 duration-300 hover:bg-[#eee] rounded-[5px] ">

        <GiHamburgerMenu className="text-2xl " />
        </button>
      </div>
    </>
  );
}
