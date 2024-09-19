import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        delay: 0.5,
        duration: 1,
        stiffness: 150,
        damping: 15,
      }}
      className="flex justify-between items-center py-2 h-14"
    >
      <h1 className="lg:text-3xl font-bold text-xl md:text-2xl">
        <a href="/">React Website</a>
      </h1>

      <nav className="hidden md:block">
        <ul className="flex gap-4 font-medium">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#ourmission">Our Mission</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
