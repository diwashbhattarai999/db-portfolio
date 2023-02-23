export const navVarient = {
  initial: {
    y: "-100vw",
  },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const navLinkVarient = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
        delay: .2,
        staggerChildren: .5
    }
  },
};
export const navLinkChildVarient = {
  initial: {
    x: "-100vw",
  },
  final: {
    x: 0,
    transition: {
        delay: .6,
        repeatType: "mirror",
        repeat: Infinity
    }
  },
};
