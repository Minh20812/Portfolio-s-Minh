import Block from "./Block";

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      My passion is building cool stuff.{" "}
      <span className="text-zinc-400">
        I build primarily with MERN, and I love this stack so I've even built
        some websites with it. I also love to learn new technologies.
      </span>
    </p>
  </Block>
);
export default AboutBlock;
