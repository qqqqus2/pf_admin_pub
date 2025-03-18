"use client";

import { useState } from "react";
// import Lottie from "lottie-react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import DefaultLayout from "@pub/layout/DefaultLayout";
import Alert from "@pub/components/Modal/Alert";
import Button from "@pub/components/Button";
import Loading from "@pub/components/Loading";
import animationData from "@/assets/lottie/loading.json";

export default function GuideLoading() {
  const [alert1, setAlert1] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <DefaultLayout>
        <div className="relative grow py-[2.5rem]">
          <h1 className="h1">Guide_Loading</h1>
          <dl className="flex flex-col gap-8 max-w-[70rem] mt-9">
            <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
              <dt className="h4">Default</dt>
              <dd className="w-[50%]">
                <Lottie
                  animationData={animationData}
                  loop
                  className="w-[5rem] h-[5rem]"
                />
              </dd>
            </div>
            <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
              <dt className="h4">Alert</dt>
              <dd>
                <Button type="green" size="l" onClick={() => setAlert1(true)}>
                  alert 1
                </Button>
              </dd>
            </div>
            <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
              <dt className="h4">Full Screen</dt>
              <dd>
                <Button type="green" size="l" onClick={() => setLoading(true)}>
                  page loading
                </Button>
              </dd>
            </div>
          </dl>
        </div>
        {loading && <Loading />}
      </DefaultLayout>

      <Alert open={alert1} handleClose={() => setAlert1(false)}>
        <div>
          <Lottie
            animationData={animationData}
            loop
            className="w-[5rem] h-[5rem] mx-auto"
          />
          <p className="h4 text-center">파일을 처리중입니다</p>
        </div>
      </Alert>
    </>
  );
}
