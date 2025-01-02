import Block from "./Block";
import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-3 p-0"
    >
      <a
        href="https://github.com/Minh20812/Manage-Storage"
        className="grid h-full place-content-center"
      >
        <img
          src="https://i.imgur.com/XAhYNuo.png"
          alt="pic1"
          className="w-full h-full object-cover"
        />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-3 p-0"
    >
      <a
        href="https://github.com/Minh20812/Todolist-App"
        className="grid h-full place-content-center"
      >
        <img
          src="https://i.imgur.com/vwYUadm.png"
          alt="pic2"
          className="w-full h-full object-cover"
        />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-3 p-0"
    >
      <a
        href="https://github.com/Minh20812/CHATAPP-MERN"
        className="grid h-full place-content-center"
      >
        <img
          src="https://i.imgur.com/1SxA4ax.png"
          alt="pic3"
          className="w-full h-full object-cover"
        />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-3 p-0"
    >
      <a
        href="https://landing-page-ruddy-five-59.vercel.app/"
        className="grid h-full place-content-center"
      >
        <img
          src="https://i.imgur.com/yhJxLDd.png"
          alt="pic3"
          className="w-full h-full object-cover"
        />
      </a>
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
