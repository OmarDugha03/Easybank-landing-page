import { FC } from "react";
import { firstArt, secArt, thirdArt, fourOne } from "@Images/index";
import Image from "next/image";
interface LatestArtProps {}

const LatestArt: FC<LatestArtProps> = ({}) => {
  const list = [
    {
      by: "   By Claire Robinson",
      head: "  Receive money in any currency with no fees",
      desc: "  The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
      src: firstArt,
    },
    {
      by: "    By Wilson Hutton",
      head: "  Treat yourself without worrying about money",
      desc: "  Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
      src: secArt,
    },
    {
      by: "      By Wilson Hutton",
      head: "  Take your Easybank card wherever you go",
      desc: "   We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
      src: thirdArt,
    },
    {
      by: "      By Claire Robinson",
      head: " Our invite-only Beta accounts are now live!",
      desc: " After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
      src: fourOne,
    },
  ];
  return (
    <div className="py-12">
      <h2 className="pt-12 pb-6 text-3xl font-medium text-center opacity-90">
        Latest Article
      </h2>
      <div className="grid grid-cols-1 gap-8 mx-4 text-center md:grid-cols-2 lg:grid-cols-4">
        {list.map((item) => (
          <div key={item.by} className="text-left shadow-md  pb-9 bg-slate-50">
            <Image
              src={item.src}
              alt={item.head}
              className="rounded-md rounded-b-none aspect-video"
            />
            <p className=" px-4 py-6 text-[10px] leading-relaxed text-gray-500">
              {item.by}
            </p>
            <p className="px-4 py-1 font-medium opacity-90">{item.head}</p>
            <p className="px-4 text-xs leading-relaxed text-gray-500">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestArt;
