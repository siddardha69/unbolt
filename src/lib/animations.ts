import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 15
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const transitionSpring = {
  type: "spring",
  stiffness: 150,
  damping: 15
};
