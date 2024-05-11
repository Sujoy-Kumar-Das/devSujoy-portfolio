export const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

// home banner intro child
export const introChildren = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      type: "spring",
      bounce: 0.5,
    },
  },
};

// animate download button
export const animateDownloadButtonIcon = {
  hidden: {
    y: 0,
  },
  visible: {
    y: 30,
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};
