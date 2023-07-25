const variantsOne = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};


const animateOne = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const variantsTwo = { hidden: { opacity: 0 } };
const animateTwo = { hidden: { x: -10, opacity: 0 } };


export { variantsOne, variantsTwo, animateOne, animateTwo };
