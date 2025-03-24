import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import LoginLayout from "@pub/layout/LoginLayout";
import LoginInput from "@pub/components/Login/Input";
import LoginButton from "@pub/components/Login/Button";
import IcLoginTitle from "@/assets/icons/ico_login_title.svg";
import IcPartner from "@/assets/icons/ico_login_partner.svg";
import IcAdmin from "@/assets/icons/ico_login_admin.svg";

export default function BO000004() {
    return (
        <LoginLayout>
            <div className="flex flex-col items-center space-y-2 w-[22.5rem] m-auto">
                <IcLoginTitle />

                <TabGroup className="tab-login" defaultIndex={0}>
                    <TabList>
                        <Tab>계정신규신청</Tab>
                        <Tab>계정조회</Tab>
                    </TabList>
                    <TabPanels>
                        {/* Tab - 계정신규신청 */}
                        <TabPanel>
                            <div className="flex flex-col space-y-6">
                                <div className="flex flex-col space-y-2">
                                    <p className="text-sm font-medium text-black">
                                        신청하시려는 계정을 선택해주세요.
                                    </p>
                                    <button className="login-role selected">
                                        <IcPartner />
                                        <p className="tit">파트너</p>
                                        <p className="desc">
                                            파킹프렌즈와 협업하고 싶어요
                                        </p>
                                    </button>
                                    <button className="login-role">
                                        <IcAdmin />
                                        <p className="tit">관리자</p>
                                        <p className="desc">
                                            파킹프렌즈 임직원입니다.
                                        </p>
                                    </button>
                                </div>
                                <LoginButton type="green">신청</LoginButton>
                            </div>
                        </TabPanel>
                        {/* Tab - 계정조회 */}
                        <TabPanel>
                            <div className="flex flex-col space-y-2">
                                <div className="p-4 bg-[#F4F5F8] rounded-lg">
                                    <ul className="list-dot text-sm text-muted">
                                        <li>
                                            신청하신 계정 승인현황을 확인하실 수
                                            있습니다.
                                        </li>
                                        <li>
                                            계신청하신 아이디/비밀번호를
                                            입력하시면 입력한 정보를 조회하실 수
                                            있습니다.
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <p className="text-base font-medium text-black">
                                        계정정보
                                    </p>
                                    <LoginInput placeholder="아이디를 입력하세요" />
                                    <LoginInput placeholder="비밀번호를 입력하세요" />
                                    <LoginButton type="green">신청</LoginButton>
                                    <LoginButton type="outline-green">
                                        취소
                                    </LoginButton>
                                </div>
                            </div>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </LoginLayout>
    );
}
