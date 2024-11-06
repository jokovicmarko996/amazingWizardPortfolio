"use client";
import React, { useEffect, useState } from "react";

/* fcn that randomly creates fire flies */
const createFireFly = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  // fire fly will animate from 5 to 10s
  animationDuration: `${Math.random() * 5 + 5}s`,
});

const FireFliesbackground = () => {
  const [fireFlies, setFireFlies] = useState([]);

  useEffect(() => {
    const addFireFlyPeriodically = () => {
      const newFirefly = createFireFly();
      setFireFlies((currentFiteFlies) => [
        // array stays from 10 - 15 elements removing the old elements
        ...currentFiteFlies.slice(-14),
        newFirefly,
      ]);
    };

    const interval = setInterval(addFireFlyPeriodically, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {fireFlies.map((fireFly) => {
        return (
          <div
            key={fireFly.id}
            className="absolute rounded-full  w-[10px] h-[10px] bg-firefly-radial"
            style={{
              top: fireFly.top,
              left: fireFly.left,
              animation: `move ${fireFly.animationDuration} infinite alternate`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default FireFliesbackground;
