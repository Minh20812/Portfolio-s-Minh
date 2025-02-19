import Block from "./Block";
import { SiGithub } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://i.imgur.com/ZgBah7z.jpg"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hi, I'm Minh.{" "}
      <span className="text-zinc-400">
        I design and develop websites, including this one.
      </span>
    </h1>
    <h2 className=" flex flex-col items-start gap-1">
      <a
        href="mailto:ngquangminh2128@gmail.com"
        className="text-inherit text-red-300 hover:underline"
      >
        <span className="flex items-center justify-center gap-2">
          <BiLogoGmail />
          ngquangminh2128@gmail.com
        </span>
      </a>
      <a
        href="https://github.com/Minh20812"
        className="text-inherit text-red-300 hover:underline"
      >
        <span className="flex items-center justify-center gap-2">
          <SiGithub />
          https://github.com/Minh20812
        </span>
      </a>
    </h2>
  </Block>
);

export default HeaderBlock;
