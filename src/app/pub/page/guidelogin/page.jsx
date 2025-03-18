import DefaultLayout from "@pub/layout/DefaultLayout";
import LoginInput from "@pub/components/Login/Input";
import LoginButton from "@pub/components/Login/Button";
import SelectBasic from "@pub/components/Form/Select";

export default function GuideLogin() {
  return (
    <DefaultLayout>
      <div className="relative grow py-[2.5rem]">
        <h1 className="h1">Guide_Login</h1>

        <dl className="flex flex-col gap-8 max-w-[70rem] mt-9">
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Input - Default</dt>
            <dd className="grid grid-cols-3 gap-4">
              <LoginInput defaultValue="(2차 인증) 이메일을 입력하세요" />
              <LoginInput placeholder="(2차 인증) 이메일을 입력하세요" />
              <LoginInput
                defaultValue="(2차 인증) 이메일을 입력하세요"
                disabled
              />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Input - Id</dt>
            <dd className="grid grid-cols-3 gap-4">
              <LoginInput icon="id" defaultValue="아이디를 입력하세요" />
              <LoginInput icon="id" placeholder="아이디를 입력하세요" />
              <LoginInput
                icon="id"
                defaultValue="아이디를 입력하세요"
                disabled
              />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Input - Pw</dt>
            <dd className="grid grid-cols-3 gap-4">
              <LoginInput icon="pw" defaultValue="비밀번호를 입력하세요" />
              <LoginInput icon="pw" placeholder="비밀번호를 입력하세요" />
              <LoginInput
                icon="pw"
                defaultValue="비밀번호를 입력하세요"
                disabled
              />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Input - with Button</dt>
            <dd className="grid grid-cols-3 gap-4">
              <LoginInput
                btn="인증번호 발송"
                defaultValue="(2차 인증) 이메일을 입력하세요"
              />
              <LoginInput
                btn="인증번호 발송"
                placeholder="(2차 인증) 이메일을 입력하세요"
              />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Input - with Count</dt>
            <dd className="grid grid-cols-3 gap-4">
              <LoginInput count defaultValue="014468" />
              <LoginInput count placeholder="인증번호 입력" />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Button</dt>
            <dd className="grid grid-cols-3 gap-4">
              <LoginButton type="green">로그인</LoginButton>
              <LoginButton type="outline-green">비밀번호 찾기</LoginButton>
              <LoginButton type="outline-gray">계정신청</LoginButton>
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Select</dt>
            <dd className="grid grid-cols-3 gap-4">
              <SelectBasic defaultSelect className="login-select" />
              <SelectBasic
                placeholder="소속 부서를 선택하세요"
                className="login-select"
              />
              <SelectBasic defaultSelect className="login-select" disabled />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Box List</dt>
            <dd className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-[#F4F5F8] rounded-lg">
                <ul className="list-dot text-sm text-muted">
                  <li>신청하신 계정 승인현황을 확인하실 수 있습니다.</li>
                  <li>
                    계신청하신 아이디/비밀번호를 입력하시면 입력한 정보를
                    조회하실 수 있습니다.
                  </li>
                </ul>
              </div>
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Box List - with Title</dt>
            <dd className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-[#F4F5F8] rounded-lg">
                <p className="text-exclam">확인하세요</p>
                <ul className="list-dot gap-1 mt-1 text-sm text-muted">
                  <li>모든 항목은 필수값으로 입력하셔야 신청이 가능합니다.</li>
                  <li>
                    계정등록신청 후 관리자의 승인에 의해 로그인이 가능합니다.
                  </li>
                </ul>
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </DefaultLayout>
  );
}
