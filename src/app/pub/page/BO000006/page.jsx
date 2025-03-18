import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import LoginLayout from "@pub/layout/LoginLayout";
import LoginInput from "@pub/components/Login/Input";
import LoginButton from "@pub/components/Login/Button";
import SelectBasic from "@pub/components/Form/Select";
import IcLoginTitle from "@/assets/icons/ico_login_title.svg";

export default function BO000006() {
  return (
    <LoginLayout>
      <div className="flex flex-col items-center space-y-8 w-[22.5rem] m-auto">
        <IcLoginTitle />

        <TabGroup className="tab-login" defaultIndex={1}>
          <TabList>
            <Tab>계정신규신청</Tab>
            <Tab>계정조회</Tab>
          </TabList>
          <TabPanels>
            {/* Tab - 계정신규신청 */}
            <TabPanel>
              <div className="flex flex-col space-y-8">
                <div className="flex flex-col space-y-6">
                  <div className="flex flex-col space-y-2">
                    <p className="text-req text-base font-medium text-black">
                      계정정보
                    </p>
                    <LoginInput
                      btn="중복확인"
                      placeholder="아이디를 입력하세요"
                    />
                    <LoginInput placeholder="비밀번호를 입력하세요" />
                    <LoginInput placeholder="비밀번호를 한번 더 입력하세요" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-req text-base font-medium text-black">
                      사용자 정보
                    </p>
                    <LoginInput placeholder="이름을 입력하세요" />
                    <LoginInput placeholder="휴대폰번호를 입력하세요 (‘-’제외)" />
                    <LoginInput
                      type="email"
                      placeholder="이메일 주소를 입력하세요"
                    />
                    <SelectBasic
                      placeholder="소속 부서를 선택하세요"
                      className="login-select"
                    />
                    <LoginInput placeholder="접속할 고정 IP를 입력하세요" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <LoginButton type="green">신청</LoginButton>
                    <LoginButton type="outline-green">취소</LoginButton>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button type="button">
                    <span className="text-muted text-base font-medium underline">
                      로그인
                    </span>
                  </button>
                </div>
                <div className="p-4 bg-[#F4F5F8] rounded-lg">
                  <p className="text-exclam">확인하세요</p>
                  <ul className="list-dot gap-1 mt-1 text-sm text-muted">
                    <li>
                      모든 항목은 필수값으로 입력하셔야 신청이 가능합니다.
                    </li>
                    <li>
                      계정등록신청 후 관리자의 승인에 의해 로그인이 가능합니다.
                    </li>
                  </ul>
                </div>
              </div>
            </TabPanel>
            {/* Tab - 계정조회 */}
            <TabPanel>
              <div className="flex flex-col space-y-8">
                <div className="p-4 bg-[#F4F5F8] rounded-lg">
                  <ul className="list-dot text-sm text-muted">
                    <li>신청하신 계정 승인현황을 확인하실 수 있습니다.</li>
                    <li>
                      계신청하신 아이디/비밀번호를 입력하시면 입력한 정보를
                      조회하실 수 있습니다.
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col space-y-6">
                  <div className="flex flex-col space-y-2">
                    <p className="text-req text-base font-medium text-black">
                      계정정보
                    </p>
                    <LoginInput defaultValue="parking_mk" disabled />
                    <LoginInput
                      type="password"
                      defaultValue="12345678"
                      disabled
                    />
                    <LoginInput placeholder="비밀번호를 한번 더 입력하세요" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-req text-base font-medium text-black">
                      사용자 정보
                    </p>
                    <LoginInput defaultValue="김파프" />
                    <LoginInput defaultValue="01038292222" />
                    <LoginInput type="email" defaultValue="leghieo@nate.com" />
                    <SelectBasic defaultSelect className="login-select" />
                    <LoginInput defaultValue="382.312.39.291" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-base font-medium text-black">승인여부</p>
                    <LoginInput error defaultValue="승인반려" />
                    <div className="p-4 bg-[#F4F5F8] rounded-lg">
                      <div className="flex items-center gap-1 text-red text-sm font-semibold">
                        반려사유
                      </div>
                      <ul className="list-dot gap-1 mt-1 text-sm text-muted">
                        <li>승인되지 않은 IP주소입니다.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <LoginButton type="green">신청</LoginButton>
                    <LoginButton type="outline-green">취소</LoginButton>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button type="button">
                    <span className="text-muted text-base font-medium underline">
                      로그인
                    </span>
                  </button>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </LoginLayout>
  );
}
