import { FiArrowRight } from "react-icons/fi";
import Block from "./Block";

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
    <h2 className="flex items-center gap-1 text-red-300 hover:underline">
      <a href="mailto:ngquangminh2128@gmail.com" className="text-inherit">
        ngquangminh2128@gmail.com
      </a>
    </h2>
  </Block>
);

export default HeaderBlock;
