import Block from "./Block";
import { SiReact, SiMongodb, SiExpress, SiNodedotjs } from "react-icons/si";

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-3 md:col-span-3 text-3xl justify-center">
    <div className=" flex gap-1">
      <SiMongodb />
      <SiExpress />
      <SiReact />
      <SiNodedotjs />
    </div>
    <p className="text-center text-lg text-zinc-400">M-E-R-N</p>
  </Block>
);

export default LocationBlock;
