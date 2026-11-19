import bg from "../assets/Hero_bg.jpg";
import mask from "../assets/GTA-mask.svg";
import {
  useScroll,
  useTransform,
  motion,
  useSpring,
  useMotionTemplate,
} from "motion/react";

export default function hero() {
  const SpringVar = { stiffness: 120, damping: 14 };
  const { scrollYProgress } = useScroll();

  const maskSize = useSpring(
    useTransform(scrollYProgress, [0, 1], [14000, 400]),
    SpringVar,
  );
  const maskPosition = useTransform(scrollYProgress, [0, 1], [-1200, 100]);
  return (
    <div className="h-[300vh]bg-amber-950">
      {/* Outer image */}
      <motion.div
        className="fixed inset-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/*mask*/}
      <motion.div
        className="fixed flex m-auto inset-0 h-full w-full bg-amber-50"
        style={{
          maskImage: `url(${mask})`,
          maskRepeat: "no-repeat",
          maskSize: useMotionTemplate`${maskSize}px`,
          maskPosition: useMotionTemplate`${maskPosition}px`,
        }}
      ></motion.div>
    </div>
  );
}
