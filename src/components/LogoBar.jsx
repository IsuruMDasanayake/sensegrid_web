import React from "react";
import { motion } from "framer-motion";

const logos = [
  { light: "/assets/images/logos/raspberrypi_white.png", dark: "/assets/images/logos/raspberrypi_dark.png" },
  { light: "/assets/images/logos/arduino.png", dark: "/assets/images/logos/arduino.png" },
  { light: "/assets/images/logos/nvidia_white.png", dark: "/assets/images/logos/nvidia_dark.png" },
  { light: "/assets/images/logos/simcom.png", dark: "/assets/images/logos/simcom.png" },
  { light: "/assets/images/logos/espressif_white.png", dark: "/assets/images/logos/espressif_dark.png" },
  
  { light: "/assets/images/logos/raspberrypi_white.png", dark: "/assets/images/logos/raspberrypi_dark.png" },
  { light: "/assets/images/logos/arduino.png", dark: "/assets/images/logos/arduino.png" },
  { light: "/assets/images/logos/nvidia_white.png", dark: "/assets/images/logos/nvidia_dark.png" },
  { light: "/assets/images/logos/simcom.png", dark: "/assets/images/logos/simcom.png" },
  { light: "/assets/images/logos/espressif_white.png", dark: "/assets/images/logos/espressif_dark.png" },
];

const LogoBar = () => {
  return (
    <div className="relative w-5/5 mx-auto py-8 sm:py-6 -mt-10"> {/* 80% width */}
      {/* Heading on top */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-left">
        Powered By:
      </h2>

      {/* Logo Scrolling Bar Container */}
      <div
        className="relative overflow-hidden  bg-gray-100 dark:bg-gray-900 p-5"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
        }}
      >
        <motion.div
          className="flex space-x-12 lg:space-x-20 sm:space-x-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          {/* Original logos */}
          {logos.map((logo, i) => (
            <div key={`original-${i}`} className="flex-shrink-0">
              <img
                src={logo.light}
                alt={`logo-${i}`}
                className="h-8 sm:h-10 w-auto object-contain dark:hidden"
              />
              <img
                src={logo.dark}
                alt={`logo-${i}`}
                className="h-8 sm:h-10 w-auto object-contain hidden dark:block"
              />
            </div>
          ))}

          {/* Duplicate logos for seamless scroll */}
          {logos.map((logo, i) => (
            <div key={`duplicate-${i}`} className="flex-shrink-0">
              <img
                src={logo.light}
                alt={`logo-${i}`}
                className="h-8 sm:h-10 w-auto object-contain dark:hidden"
              />
              <img
                src={logo.dark}
                alt={`logo-${i}`}
                className="h-8 sm:h-10 w-auto object-contain hidden dark:block"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoBar;
