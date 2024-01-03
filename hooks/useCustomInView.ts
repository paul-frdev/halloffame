import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useCustomInView = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const animationLR = useAnimation();
  const animationBT = useAnimation();
  const animationRL = useAnimation();
  const animationTB = useAnimation();
  const pathAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      animationLR.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "fade",
          duration: 1,
        },
      });
      animationRL.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "fade",
          duration: 1,
        },
      });
      animationBT.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "fade",
          duration: 2,
          delay: 0.7,
        },
      });
      animationTB.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.1,
        },
      });
      pathAnimation.start({
        opacity: 1,
        pathLength: 1,
        transition: {
          duration: 2,
          ease: "easeInOut",
        },
      });
    }
    if (!inView) {
      animationLR.start({ opacity: 0, x: "-300px" });
      animationBT.start({ opacity: 0, y: "0px" });
      animationTB.start({ opacity: 0, y: "100px" });
      animationRL.start({ opacity: 0, x: "150px" });
      pathAnimation.start({ opacity: 0, pathLength: 0 });
    }
  }, [inView]);

  return {
    animationBT,
    animationLR,
    animationRL,
    animationTB,
    pathAnimation,
    inView,
    ref,
  };
};
