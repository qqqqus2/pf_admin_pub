import LoginLayout from "@pub/layout/LoginLayout";
import LoginInput from "@pub/components/Login/Input";
import LoginButton from "@pub/components/Login/Button";
import IcLoginTitle from "@/assets/icons/ico_login_title.svg";

export default function BO000001() {
  return (
    <LoginLayout>
      <div className="flex flex-col items-center space-y-8 w-[22.5rem] m-auto">
        <IcLoginTitle />
        <div className="flex flex-col space-y-2 w-full">
          <LoginInput icon="id" placeholder="아이디를 입력하세요" />
          <LoginInput icon="pw" placeholder="비밀번호를 입력하세요" />
          <LoginButton type="green">로그인</LoginButton>
          <LoginButton type="outline-gray">계정신청</LoginButton>
        </div>
        <button type="button">
          <span className="text-muted text-base font-medium underline">
            아이디/비밀번호 찾기
          </span>
        </button>
      </div>
    </LoginLayout>
  );
}
