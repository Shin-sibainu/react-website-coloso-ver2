import Lottie from "lottie-react";
import SectionLayout from "./layout/SectionLayout";
import ourMissionAnimation from "../assets/animations/ourmissionAnimation.json";
import { motion } from "framer-motion";
import { missions } from "../data/missions";

const OurMission = () => {
  return (
    <SectionLayout
      id="ourmission"
      title="Our Mission"
      description="At ReactWebsite Wizards, we take a holistic approach to web
  development, focusing on creating both stunning visuals and smooth
  functionality. Our magical React recipe is built on three key
  ingredients"
    >
      {({ isInView }) => (
        <div>
          <div className="lg:flex gap-5">
            {/* left side */}
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -150 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="lg:w-1/2"
            >
              <Lottie animationData={ourMissionAnimation} />
            </motion.div>

            {/* right side */}
            <div className="space-y-24 lg:w-1/2">
              {missions.map((mission, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 150 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    x: isInView ? 0 : 150,
                  }}
                  transition={{ duration: 0.7, delay: index * 0.3 }}
                  className="text-left border-b-2 border-slate-500 pb-2"
                >
                  <h4 className="font-medium md:text-2xl text-xl mb-2">
                    {mission.title}
                  </h4>
                  <p className="lg:text-xl text-base">{mission.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </SectionLayout>
  );
};

export default OurMission;
