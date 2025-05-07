import Image from "next/image";
import React from "react";
const AuthLogoComp = () => {
  return (
    <div className="globalContainer py-8 md:py-14 flex items-center justify-center">
      <div className="w-[100px] md:w-[150px] h-full">
        <Image
          src={"/img/Logo-wide 1.png"}
          alt="logo"
          width={1000}
          height={1000}
          className="object-center w-full h-auto"
        />
      </div>
    </div>
  );
};

export default AuthLogoComp;
