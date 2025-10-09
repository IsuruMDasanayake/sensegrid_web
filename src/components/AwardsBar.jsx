import React from "react";

const awardsLight = [
  "/assets/images/awards/award1_light.png",
  "/assets/images/awards/award2_light.png",
  "/assets/images/awards/award3_light.png",
  "/assets/images/awards/award4_light.png",
  "/assets/images/awards/award5_light.png",
];

const awardsDark = [
  "/assets/images/awards/award1_dark.png",
  "/assets/images/awards/award2_dark.png",
  "/assets/images/awards/award3_dark.png",
  "/assets/images/awards/award4_dark.png",
  "/assets/images/awards/award5_dark.png",
];

const AwardsBar = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto mt-4 rounded-3xl dark:bg-gray-800 p-6 shadow-lg">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-14">
        Awards & Recognitions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 place-items-center -mt-10">
        {/* Light mode images */}
        {awardsLight.map((award, i) => (
          <img
            key={`light-${i}`}
            src={award}
            alt={`award-${i}`}
            className=" lg:h-72 object-contain dark:hidden"
          />
        ))}

        {/* Dark mode images */}
        {awardsDark.map((award, i) => (
          <img
            key={`dark-${i}`}
            src={award}
            alt={`award-${i}`}
            className=" lg:h-72 object-contain hidden dark:block"
          />
        ))}
      </div>
    </div>
  );
};

export default AwardsBar;
