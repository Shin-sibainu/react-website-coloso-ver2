import { motion } from "framer-motion";
import { services } from "../data/services";
import SectionLayout from "./layout/SectionLayout";

const Service = () => {
  return (
    <SectionLayout
      id="service"
      title="Service"
      description="At ReactWebsite Wizards, we take a holistic approach to web
  development, focusing on creating both stunning visuals and smooth
  functionality. Our magical React recipe is built on three key
  ingredients"
    >
      {/* service card */}
      {({ isInView }) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-slate-50 shadow px-6 py-4 rounded-md space-y-3"
              >
                <img
                  src={service.url}
                  alt="rocket gif"
                  width={120}
                  height={100}
                  className="mx-auto"
                />
                <span className="font-semibold text-2xl">{service.title}</span>
                <p>{service.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </SectionLayout>
  );
};

export default Service;
