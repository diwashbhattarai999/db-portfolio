export const navAnimation = {
  hidden: { y: -20, opacity: 0 },
  show: { y: 1, opacity: 1 },
};

export const headerAnimation = {
  hidden: { x: -400, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export const aboutImgAnimation = {
  hidden: { x: -20, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export const aboutAnimation = {
  hidden: { x: 20, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export const skillAnimation = {
  hidden: { scale: 0.5, opacity: 0 },
  show: { scale: 1, opacity: 1 },
};

export const portfolioAnimation = {
  hidden: { x: -20, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export const contactLinkAnimation = {
  hidden: { x: -20, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export const contactAnimation = {
  hidden: { x: 20, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export const footerAnimation = {
  hidden: { scale: 0, opacity: 0 },
  show: { scale: 1, opacity: 1 },
};

export const footerTopAnimation = {
  hidden: { y: -100, scale: 3, opacity: 0 },
};

export const loadingAnimation = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

export const loadingCircle = {
  loadingFirst: {
    x: [0, -20, -30, -40, -50, -60, -50, -40, -30, -20, 0],
    transition: {
      x: {
        repeat: Infinity,
        duration: 1,
      },
      ease: "easeInOut",
      type: "tween",
    },
  },
  loadingSecond: {
    x: [0, 20, 30, 40, 50, 60, 50, 40, 30, 20, 0],
    transition: {
      x: {
        repeat: Infinity,
        duration: 1,
      },
      ease: "easeInOut",
      type: "tween",
    },
  },
};

export const loadingPara = {
  para: {
    opacity: 0,
    transition: {
      repeat: Infinity,
      repeatDelay: 0.5,
      duration: 1,
      ease: "easeInOut",
    },
  },
};
