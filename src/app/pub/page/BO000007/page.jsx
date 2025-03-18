import LoginLayout from "@pub/layout/LoginLayout";
import LoginButton from "@pub/components/Login/Button";
import IcCheckGreen from "@/assets/icons/ico_check_green.svg";

export default function BO000007() {
  return (
    <LoginLayout>
      <div className="flex flex-col items-center space-y-8 w-[22.5rem] m-auto">
        <div className="flex justify-center items-center bg-[#099D4D]/10 w-[3.75rem] h-[3.75rem] rounded-full">
          <IcCheckGreen />
        </div>
        <p className="mt-4 text-black text-[1.5rem] font-semibold leading-[1.875rem] text-center">
          계정 신청이
          <br />
          완료되었습니다.
        </p>
        <div className="p-4 bg-[#F4F5F8] rounded-lg">
          <p className="text-exclam">확인하세요</p>
          <ul className="list-dot gap-1 mt-1 text-sm text-muted">
            <li>신청하신 계정은 관리자의 승인완료 후 사용 가능합니다.</li>
            <li>관리자의 승인은 2-5일 정도 소요될 수 있습니다.</li>
            <li>
              반려의 경우 반려사유를 확인하시어 계정을 재등록 하실 수 있습니다.
            </li>
          </ul>
        </div>
        <LoginButton type="green" className="w-full">
          확인
        </LoginButton>
      </div>
    </LoginLayout>
  );
}
