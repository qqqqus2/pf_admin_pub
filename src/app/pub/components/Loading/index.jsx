import React from "react";
// import Lottie from "lottie-react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationData from "@/assets/lottie/loading.json";

export default function Loading() {
  return (
    <div className="absolute z-50 top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-white/80">
      <Lottie
        animationData={animationData}
        loop
        className="w-[8rem] h-[8rem]"
      />
    </div>
  );
}
