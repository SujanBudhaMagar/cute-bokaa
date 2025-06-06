import Image from "next/image";
import Link from "next/link";
import React from "react";
const LogoComp = () => {
  return (
    <div className="globalContainer py-9 flex items-center justify-center">
      <Link href={"/"}>
     
      <div className="w-[150px] md:w-[250px] h-full">
        <Image
          src={"/img/Logo-wide 1.png"}
          alt="logo"
          width={1000}
          height={1000}
          className="object-center w-full h-auto"
        />
      </div>
       </Link>
    </div>
  );
};

export default LogoComp;
