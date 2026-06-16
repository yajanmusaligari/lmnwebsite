import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

// Scroll-reveal wrapper. Fades + slides content up as it enters the viewport.
export const Reveal = ({ children, delay = 0, y = 28, className = '', as = 'div' }) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
};

// Staggered container + item helpers for grids.
export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default Reveal;
