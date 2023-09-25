import { FC } from "react";
import {
  apiIcon,
  onlineIcon,
  onboardingIcon,
  budgetingIcon,
} from "@Images/index";
import Image from "next/image";
interface WhyUsProps {}

const WhyUs: FC<WhyUsProps> = ({}) => {
  const list = [
    {
      title: " Online Banking",
      desc: "  Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      src: onlineIcon,
    },
    {
      title: "  Simple Budgeting",
      desc: "  See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
      src: budgetingIcon,
    },
    {
      title: "    Fast Onboarding",
      desc: "  We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
      src: onboardingIcon,
    },
    {
      title: "      Open API",
      desc: " Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
      src: apiIcon,
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center py-8 text-center bg-gray-100">
        <h2 className="py-5 text-3xl font-medium opacity-90">
          Why choose Easybank?
        </h2>
        <p className="py-4 pb-6 text-xs leading-relaxed text-gray-500 opacity-90">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        {list.map((item) => (
          <div
            className="flex flex-col items-center max-w-md py-4 mx-3"
            key={item.title}>
            <Image src={item.src} alt="icon" className="py-2" />
            <h3 className="py-2">{item.title}</h3>
            <p className="py-3 pb-6 text-xs leading-relaxed text-gray-500 opacity-90">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhyUs;
