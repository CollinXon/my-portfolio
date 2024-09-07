import Image from "next/image";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="target:text-white w-screen bg-slate-950  p-6 space-y-10 lg:space-y-0 sm:p-12 lg:p-[115px] lg:px-32 flex-none xl:flex lg:gap-36"
    >
      <div className="w-full xl:w-[500px] ">
        <div className=" font-bold text-3xl  md:text-3xl  ">
          <span className="text-white">About</span>
          <span className="text-yellow-500"> Me.</span>{" "}
        </div>

        <div className="text-gray-300  md:text-lg mt-10 xl:mt-20 ">
          I am a passionate front-end developer who is enthusiatic about
          building web apps and also have an affinity for bringing ideas to life
          on the web. I have solid background in HTML, CSS, JavaScript, and
          modern frameworks like React and Next.js.
          <div className="mt-2">
            With my expertise in tools like Tailwind CSS, Radix UI, Figma, and
            Git, I have been able to build various responsive web apps,
            user-friendly interfaces and also allowing me to collaborate
            effectively with designers and developers to build high-quality
            products.
          </div>
          <div className="mt-2 mb-4 ">
            I&#39;m always open to exploring new technologies, collaborating &
            sharing knowledge with the developer community.
          </div>
          Let&#39;s connect and build something great!
        </div>
        <button className="bg-yellow-500 py-2 px-4 cursor-pointer">
          <a href="mailto:ennahcollins@gmail.com">Contact Me </a>
        </button>
      </div>

      <div className="">
        <Image
          src="/@capitalhaykayphotography-2.jpg"
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

export default AboutMe;
