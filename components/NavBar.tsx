"use client";
import { FC, useState } from "react";
import { logo, hamb, close } from "@Images/index";
import Image from "next/image";
import Link from "next/link";
import { motion as m, AnimatePresence } from "framer-motion";
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

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  return (
    <>
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

      <div className="relative ">
        <AnimatePresence>
          {toggle && (
            <m.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute bg-white h-full top-2 z-10 flex flex-col items-center mx-4 w-[90%] py-4 rounded-md lg:hidden ">
              {toggle &&
                list.map((item) => (
                  <m.div
                    key={item.id}
                    variants={containerVars}
                    initial="initial"
                    animate="open"
                    className="my-4">
                    <Link
                      className="p-2 py-4 m-1 my-5 font-medium tracking-wide "
                      href="#">
                      {item.id}
                    </Link>
                  </m.div>
                ))}
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default NavBar;
