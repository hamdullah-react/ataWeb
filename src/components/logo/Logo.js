import React from "react";
import logo from "../../../public/img/logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className=" text-decoration-none">
      <Image width={45} height={30} src={logo} alt="logo" />
      {/* <h1 className="m-0 display-5 font-weight-semi-bold">
<span className="text-primary font-weight-bold border px-3 mr-1">

</span>
MGSS
</h1> */}
    </Link>
  );
};

export default Logo;
