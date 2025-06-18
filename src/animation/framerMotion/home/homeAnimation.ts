export const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut" as const, // Explicit type
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

export const introChildren = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring" as const,
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
    y: 40,
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};
