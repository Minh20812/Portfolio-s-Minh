import React from "react";
import { motion } from "framer-motion";
import Logo from "./components/Logo";
import HeaderBlock from "./components/HeaderBlock";
import SocialsBlock from "./components/SocialsBlock";
import AboutBlock from "./components/AboutBlock";
import LocationBlock from "./components/LocationBlock";
import EmailListBlock from "./components/EmailListBlock";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
      <Footer />
    </div>
  );
};

export default App;
