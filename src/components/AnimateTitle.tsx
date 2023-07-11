import { useEffect } from "react";
import { useAnimation } from "react-animatable";
import React from "react";

export const AnimateTitle = () => {
  // 1. Define animation in WAAPI 
  const animate = useAnimation(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(720deg)" }],
    {
      duration: 1000,
      easing: "ease-in-out",
    }
    
  );

  return (
    <button
      // 2. You have to pass animate to element you want to control
      ref={animate}
      onLoad={() => {
        // 3. And play it!
        animate.play();
      }}
    >
    </button>
  );
};