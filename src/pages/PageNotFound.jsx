import React from "react";

const PageNotFound = () => {
  return (
    <div className="h-screen flex flex-col  gap-6 justify-center items-center">
      <div className="px-4 py-6 backdrop-blur rounded-md bg-white/[0.3] text-[1.2rem] text-white capitalize ">
        404 Oops!! Page Not Found
      </div>
      <a
        className="text-[#3A3333] w-2/4
          bg-gradient-to-b from-white to-white/[0.2]
          py-2 px-4 rounded-md font-medium max-w-fit"
          
          href="/"
      >
        Go To Home
      </a>
    </div>
  );
};

export default PageNotFound;
