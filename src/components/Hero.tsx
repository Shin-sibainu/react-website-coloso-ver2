import Lottie from "lottie-react";
import heroAnimation2 from "../assets/animations/heroAnimation2.json";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <main>
        <div className="py-14 text-center max-w-[50rem] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              delay: 0.7,
              duration: 1,
              stiffness: 150,
              damping: 15,
            }}
            className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl lg:leading-[3.5rem]"
          >
            With React. we're coding the future of interactive web solutions.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.7,
              duration: 1,
              stiffness: 150,
              damping: 15,
            }}
            className="lg:w-[840px] mx-auto"
          >
            <Lottie animationData={heroAnimation2} />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
