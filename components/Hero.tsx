import { FC } from "react";
import { introDesk, introMob, hero } from "@Images/index";
import Image from "next/image";
interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-between lg:items-start lg:flex-row-reverse">
      <div className="relative ls:py-4">
        <Image
          src={introDesk}
          alt="vector"
          className="absolute hidden ls:block -z-10 "
        />
        <Image
          src={introMob}
          alt="vector"
          className="absolute -z-10 ls:hidden"
        />
        <Image src={hero} alt="hero" className="z-10 py-7" />
      </div>
      <div className="flex flex-col items-center max-w-md py-4 mx-1 text-center lg:text-left lg:px-12 lg:items-start lg:py-52">
        <h1 className="py-2 text-3xl font-medium">
          Next generation digital banking
        </h1>
        <p className="py-4 pb-6 text-xs leading-relaxed text-gray-500">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="p-4 my-6 font-medium text-white transition-all duration-100 ease-linear delay-100 rounded-full shadow-xl bg-emerald-600 hover:bg-opacity-80 hover:text-white focus:outline-none focus:ring-1">
          Request Invite
        </button>
      </div>
    </div>
  );
};

export default Hero;
