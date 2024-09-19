import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type SectionLayoutProps = {
  id: string;
  title: string;
  description: string;
  children: (props: { isInView: boolean }) => React.ReactNode;
};

const SectionLayout = ({
  id,
  title,
  description,
  children,
}: SectionLayoutProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });

  return (
    <section id={id} className="lg:py-14 py-2 overflow-hidden">
      <div ref={ref} className="text-center lg:max-w-[60rem] mx-auto space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:text-5xl md:text-4xl text-3xl leading-[3.5rem] font-bold"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:leading-8 lg:text-xl text-base"
        >
          {description}
        </motion.p>
        {children({ isInView })}
      </div>
    </section>
  );
};

export default SectionLayout;
