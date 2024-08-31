import React from "react";

import Image from "next/image";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="w-screen bg-slate-900  p-4 space-y-10 xl:space-y-0  lg:p-[115px] sm:px-20  lg:px-32 flex-none xl:flex sm:gap-36">
      <div className="  w-full  lg:w-[500px] mt-16 ">
        <p className="text-yellow-500 text-lg md:3xl mb-8">Hello Welcome</p>

        <p className="text-white font-bold text-3xl sm:text-sm md:text-5xl">
          I&#39;m Collins Ennah
        </p>

        <div className="text-gray-400 mt-2 md:text-lg">
          It feels great to finally have you here, kindly feel free to browse
          through my page and check out my work.
          <p>I can&#39;t wait to connect with you.</p>{" "}
        </div>
        {/* <button className="bg-yellow-500 py-2 px-4"><a href="mailto:ennahcollins@gmail.com">Contact Me </a></button> */}
        <div className="flex  text-yellow-500  mt-4 space-x-4 ">
          <Link href="https://github.com/CollinXon" target="_blank">
            <GitHubLogoIcon className="w-8 h-8" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/collins-ennah-2901a2188/"
            target="_blank"
          >
            <LinkedInLogoIcon className="w-8 h-8" />
          </Link>
          <Link href="https://x.com/Collinslimz" target="_blank">
            <TwitterLogoIcon className="w-8 h-8" />
          </Link>
          <Link href="https://www.instagram.com/baba_econ/" target="_blank">
            <InstagramLogoIcon className="w-8 h-8" />
          </Link>
        </div>
      </div>

      <div className="">
        <Image
          src="/@capitalhaykayphotography-1.jpg"
          alt="Avatar"
          width={430}
          height={0}
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
