//  text animation
export const text = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};

// text child animation
export const textChildren = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, type: "spring", bounce: 0.5 },
  },
};
