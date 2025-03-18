import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import LoginLayout from "@pub/layout/LoginLayout";
import LoginInput from "@pub/components/Login/Input";
import LoginButton from "@pub/components/Login/Button";
import IcLoginTitle from "@/assets/icons/ico_login_title.svg";

export default function BO000011() {
  return (
    <LoginLayout>
      <div className="flex flex-col items-center space-y-8 w-[22.5rem] m-auto">
        <IcLoginTitle />

        <TabGroup className="tab-login" defaultIndex={0}>
          <TabList>
            <Tab>아이디 찾기</Tab>
            <Tab>비밀번호 찾기</Tab>
          </TabList>
          <TabPanels>
            {/* Tab - 아이디 찾기 */}
            <TabPanel>
              <>
                <div className="flex justify-center items-center h-14 bg-[#F4F5F8] border border-[#E2E8F0] rounded-lg text-sm font-medium">
                  ieghieo
                </div>
                <div className="flex flex-col space-y-2 mt-6">
                  <LoginButton type="green">신청</LoginButton>
                  <LoginButton type="outline-green">취소</LoginButton>
                </div>
              </>
            </TabPanel>
            {/* Tab - 비밀번호 찾기 */}
            <TabPanel>
              <div>
                <div className="flex flex-col space-y-2">
                  <p className="text-base font-medium text-black">
                    비밀번호 설정
                  </p>
                  <LoginInput placeholder="새 비밀번호" />
                  <LoginInput placeholder="새 비밀번호 확인" />
                </div>

                <LoginButton type="green" className="w-full mt-6">
                  확인
                </LoginButton>

                <div className="p-4 bg-[#F4F5F8] rounded-lg mt-6">
                  <p className="text-exclam">확인하세요</p>
                  <ul className="list-dot gap-1 mt-1 text-sm text-muted">
                    <li>
                      영문, 숫자, 특수문자를 함께 사용하시면 보다 안전합니다.
                      &#40;8자 이상 16자 이하&#41;
                    </li>
                    <li>다른 사람이 알 수 없는 비밀번호로 설정해 주세요.</li>
                    <li>
                      아이디와 동일하거나 전화번호, 연속된 숫자 · 문자 등 타인이
                      쉽게 알아낼 수 있는 비밀번호 사용은 위험합니다.
                    </li>
                    <li>
                      타 사이트와 동일한 비밀번호의 사용, 이전에 사용했던
                      비밀번호는 안전하지 않을 수 있습니다.
                    </li>
                  </ul>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </LoginLayout>
  );
}
