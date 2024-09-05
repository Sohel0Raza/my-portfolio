import ScrollTrigger from "react-scroll-trigger";
import { IoIosArrowRoundDown } from "react-icons/io";
import { useState } from "react";

export const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onEnterViewport = () => {
    setIsVisible(true);
  };
  const onExitViewport = () => {
    setIsVisible(false);
  };

  return (
    <>
      <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
        <div
          className={` absolute text-center bottom-4 right-10 hidden md:block ${
            isVisible ? "visible" : "invisible"
          }`}
        >
          <IoIosArrowRoundDown className="text-5xl ml-3 rounded-[50%] animate-bounce text-primary"></IoIosArrowRoundDown>
          <span className="text-primary uppercase text-xs tracking-[5px]">
            Scroll
          </span>
        </div>
      </ScrollTrigger>
    </>
  );
};
