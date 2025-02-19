import Block from "./Block";
import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";
import { LaptopMinimal, Worm, Hexagon } from "lucide-react";

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-3 p-0 grid grid-cols-1 relative group"
    >
      <a
        href="https://webchatfirebase.vercel.app/"
        target="_blank"
        className="absolute top-0 left-0 w-1/2 h-full z-10 flex items-center justify-center transition-all duration-300"
      >
        <div className="bg-black/80 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          <LaptopMinimal />
        </div>
      </a>
      <a
        href="https://github.com/Minh20812/WebChatFireBase"
        target="_blank"
        className="absolute top-0 right-0 w-1/2 h-full z-10 flex items-center justify-center transition-all duration-300"
      >
        <div className="bg-black/80 text-white p-3 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          <SiGithub />
        </div>
      </a>
      <img
        src="https://res.cloudinary.com/djojfg2rr/image/upload/v1739978889/chatBanner_fau67l.png"
        alt="pic3"
        className="w-full h-full object-cover"
      />
    </Block>

    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-3 p-0 grid grid-cols-1 relative group"
    >
      <a
        href="https://mytu.vercel.app/"
        target="_blank"
        className="absolute top-0 left-0 w-1/2 h-full z-10 flex items-center justify-center transition-all duration-300"
      >
        <div className="bg-black/80 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          <LaptopMinimal />
        </div>
      </a>
      <a
        href="https://github.com/Minh20812/Mytu"
        target="_blank"
        className="absolute top-0 right-0 w-1/2 h-full z-10 flex items-center justify-center transition-all duration-300"
      >
        <div className="bg-black/80 text-white p-3 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          <SiGithub />
        </div>
      </a>
      <img
        src="https://res.cloudinary.com/djojfg2rr/image/upload/v1739978674/Mytubanner_si0fz5.png"
        alt="pic3"
        className="w-full h-full object-cover"
      />
    </Block>

    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-3 p-0 grid grid-cols-1 relative group"
    >
      <a
        href="https://snake-game-gamma-blue.vercel.app/"
        target="_blank"
        className="absolute top-0 left-0 w-1/2 h-full z-10 flex items-center justify-center transition-all duration-300"
      >
        <div className="bg-black/80 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          <Worm />
        </div>
      </a>
      <a
        href="https://sudoku-ten-rho.vercel.app/"
        target="_blank"
        className="absolute top-0 right-0 w-1/2 h-full z-10 flex items-center justify-center transition-all duration-300"
      >
        <div className="bg-black/80 text-white p-3 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          <Hexagon />
        </div>
      </a>
      <img
        src="https://res.cloudinary.com/djojfg2rr/image/upload/v1739981645/gameBanner_pt6cfx.png"
        alt="pic3"
        className="w-full h-full object-cover"
      />
    </Block>

    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-3 p-0 grid grid-cols-1 relative group"
    >
      <a
        href="https://landing-page-ruddy-five-59.vercel.app/"
        target="_blank"
        className="absolute top-0 left-0 w-1/2 h-full z-10 flex items-center justify-center transition-all duration-300"
      >
        <div className="bg-black/80 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          <LaptopMinimal />
        </div>
      </a>
      <a
        href="https://github.com/Minh20812/LandingPage"
        target="_blank"
        className="absolute top-0 right-0 w-1/2 h-full z-10 flex items-center justify-center transition-all duration-300"
      >
        <div className="bg-black/80 text-white p-3 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          <SiGithub />
        </div>
      </a>
      <img
        src="https://res.cloudinary.com/djojfg2rr/image/upload/v1739979398/travelBanner_saa017.png"
        alt="pic3"
        className="w-full h-full object-cover"
      />
    </Block>
    {/* <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6  md:col-span-3 p-0"
    >
      <a
        href="https://github.com/Minh20812"
        className="grid h-full place-content-center"
      >
        <SiGithub className=" size-10" />
      </a>
    </Block> */}
  </>
);

export default SocialsBlock;
