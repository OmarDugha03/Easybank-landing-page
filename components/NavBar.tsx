"use client";
import { FC, useState } from "react";
import { logo, hamb, close } from "@Images/index";
import Image from "next/image";
import Link from "next/link";
interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const [toggle, setToggle] = useState(false);
  const list = [
    { id: "Home" },
    { id: "About" },
    { id: "Contact" },
    { id: "Blog" },
    { id: "Careers" },
  ];
  function handleToggle() {
    setToggle((prev) => !prev);
  }
  return (
    <>
      <div className="sticky top-0 z-10 overflow-hidden">
        <nav className="flex items-center justify-between w-full h-20 p-4 bg-white ">
          <Image src={logo} alt="logo" className="w-36" />
          {!toggle ? (
            <Image
              onClick={handleToggle}
              src={hamb}
              alt="menu"
              className="lg:hidden"
            />
          ) : (
            <Image
              onClick={handleToggle}
              src={close}
              alt="menu"
              className="lg:hidden"
            />
          )}
          <div className="hidden text-center lg:relative lg:items-center lg:flex">
            {list.map((item) => (
              <div key={item.id}>
                <Link
                  className="py-2 px-4 before:transition-all before:duration-200 m-1 font-medium tracking-wide transition-all duration-200 hover:opacity-80 before:top-14   before:content-[''] relative before:h-[4px] before:w-14 before:absolute before:hover:bg-emerald-500 "
                  href="#">
                  {item.id}
                </Link>
              </div>
            ))}
          </div>
          <button className="hidden p-2 px-8 my-6 font-medium text-white transition-all duration-100 ease-linear delay-100 rounded-full shadow-md lg:flex bg-emerald-600 hover:bg-opacity-80 hover:text-white focus:outline-none focus:ring-1">
            Request Invite
          </button>
        </nav>
        <div className=" border-b-[0.4px]  bg-white" />
      </div>

      <div className="relative ">
        {toggle && (
          <div className="absolute z-10 flex flex-col lg:hidden  items-center w-[90%] py-4 mx-4 my-3 rounded-md bg-slate-100">
            {toggle &&
              list.map((item) => (
                <Link
                  className="p-2 m-1 font-medium tracking-wide "
                  key={item.id}
                  href="#">
                  {item.id}
                </Link>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
