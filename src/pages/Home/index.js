import React, { useEffect } from "react";
import logoWithArrow from "./../../images/kleck_logo_arrow.svg";
import logoNoArrow from "./../../images/kleck_no_arrow.svg";
import { motion, useAnimation } from "framer-motion";
import "./styles.scss";

const Home = () => {
  /* No Arrow */

  const noArrowAnimation = useAnimation();

  const noArrowSequence = async () => {
    await noArrowAnimation.start({
      opacity: 1,
      scale: 1.4,
      transition: { ease:"backIn", duration: 2 },
    });
    await noArrowAnimation.start({
      rotate: 90,
      transition: { ease:"backInOut", delay: 0.8, duration: 0.3 },
    });
    await noArrowAnimation.start({
      scale: 1,
      transition: { ease:"backInOut", delay: 0.3, duration: 0.3 },
    });
    await noArrowAnimation.start({
      opacity: 0,
      transition: { delay: .1, duration: .1 },
    });
  };

  useEffect(() => {
    noArrowSequence();
  });

  /* With Arrow */

  const arrowAnimation = useAnimation();

  const arrowSequence = async () => {
    await arrowAnimation.start({
      opacity: 1,
      transition: { ease:"backInOut", delay: 3.75, duration: .15  },
    });
    await arrowAnimation.start({
      scale: 1.05,
      transition: { ease:"backInOut", delay: 0, duration: .1  },
    });
    await arrowAnimation.start({
      scale: 1,
      transition: { ease:"backInOut", duration: .1 },
    });
    return;
  };

  useEffect(() => {
    arrowSequence();
  });

  return (
    <>
      <div className="fullscreen">
        <div className="rotator">
          <motion.img
            className="kleck_no_arrow"
            src={logoNoArrow}
            alt="Kleck"
            initial={{ opacity: 0 }}
            animate={noArrowAnimation}
          ></motion.img>
          <motion.img
            className="kleck_logo_arrow"
            src={logoWithArrow}
            alt="Kleck"
            initial={{ opacity: 0, rotate: 90 }}
            animate={arrowAnimation}
          ></motion.img>
        </div>
      </div>
    </>
  );
};

export default Home;
