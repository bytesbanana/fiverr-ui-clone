import Image from "next/image";
import React from "react";

const TrustedBy = () => {
  return (
    <div className="flex h-[95px]  items-center justify-center bg-gray-50 shadow-sm">
      <div className="flex flex-row items-center gap-12">
        <span className="text-gray-400">Trusted by:</span>

        <Image src={"/meta.png"} alt="meta" width={85} height={60} />
        <Image src={"/google.png"} alt="google" width={74} height={60} />
        <Image src={"/netflix.png"} alt="netflix" width={71} height={60} />
        <Image src={"/pandg.png"} alt="pandg" width={47} height={60} />
        <Image src={"/paypal.png"} alt="paypal" width={84} height={60} />
      </div>
    </div>
  );
};

export default TrustedBy;
