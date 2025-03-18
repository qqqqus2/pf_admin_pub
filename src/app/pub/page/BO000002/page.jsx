"use client";

import { useState } from "react";
import LoginLayout from "@pub/layout/LoginLayout";
import LoginInput from "@pub/components/Login/Input";
import LoginButton from "@pub/components/Login/Button";
import Loading from "@pub/components/Loading";
import IcLoginTitle from "@/assets/icons/ico_login_title.svg";

export default function BO000002() {
  const [loading, setLoading] = useState(false);
  return (
    <LoginLayout>
      <div className="flex flex-col items-center space-y-8 w-[22.5rem] m-auto">
        <IcLoginTitle />
        <div className="flex flex-col space-y-2 w-full">
          <LoginInput
            btn="인증번호 발송"
            placeholder="(2차 인증) 이메일을 입력하세요"
          />
          <LoginButton type="green" onClick={() => setLoading(true)}>
            확인
          </LoginButton>
        </div>
      </div>
      {loading && <Loading />}
    </LoginLayout>
  );
}
