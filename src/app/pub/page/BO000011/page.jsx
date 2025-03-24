import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import LoginLayout from "@pub/layout/LoginLayout";
import LoginInput from "@pub/components/Login/Input";
import LoginButton from "@pub/components/Login/Button";
import IcLoginTitle from "@/assets/icons/ico_login_title.svg";

export default function BO000011() {
    return (
        <LoginLayout>
            <div className="flex flex-col items-center space-y-2 w-[22.5rem] m-auto">
                <IcLoginTitle />

                <TabGroup className="tab-login" defaultIndex={0}>
                    <TabList>
                        <Tab>아이디 찾기</Tab>
                        <Tab>비밀번호 찾기</Tab>
                    </TabList>
                    <TabPanels>
                        {/* Tab - 아이디 찾기 */}
                        <TabPanel>
                            <div className="flex flex-col space-y-2">
                                <p className="text-base font-medium text-black">
                                    계정정보
                                </p>
                                <LoginInput placeholder="이름을 입력하세요" />
                                <LoginInput
                                    btn="인증번호 발송"
                                    placeholder="이메일을 입력하세요"
                                />
                                <div className="flex flex-col space-y-2 mt-6">
                                    <LoginButton type="green">확인</LoginButton>
                                </div>
                            </div>
                        </TabPanel>
                        {/* Tab - 비밀번호 찾기 */}
                        <TabPanel>
                            <div>
                                <div className="flex flex-col space-y-2">
                                    <p className="text-base font-medium text-black">
                                        계정정보
                                    </p>
                                    <LoginInput placeholder="아이디를 입력하세요" />
                                    <LoginInput placeholder="이름을 입력하세요" />
                                    <LoginInput
                                        btn="인증번호 발송"
                                        placeholder="이메일을 입력하세요"
                                    />
                                </div>

                                <LoginButton
                                    type="green"
                                    className="w-full mt-6"
                                >
                                    확인
                                </LoginButton>
                            </div>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </LoginLayout>
    );
}
