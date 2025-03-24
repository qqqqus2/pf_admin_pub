import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import LoginLayout from "@pub/layout/LoginLayout";
import LoginInput from "@pub/components/Login/Input";
import LoginButton from "@pub/components/Login/Button";
import IcLoginTitle from "@/assets/icons/ico_login_title.svg";
import Checkbox from "../../components/Form/Check";
import FormDateRange from "@pub/components/Form/DateRange";

export default function BO000006() {
    return (
        <LoginLayout>
            <div className="flex flex-col items-center space-y-2  w-[22.5rem] m-auto">
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
                                        <LoginInput placeholder="소속 회사를 입력하세요" />
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <div className="item-center">
                                            <Checkbox
                                                label="추가 관리자 여부"
                                                className="font-medium"
                                            />
                                        </div>

                                        <div className="item-center">
                                            <FormDateRange className="login-date-range size-m" />
                                        </div>
                                    </div>
                                    <div className="p-4 bg-[#F4F5F8] rounded-lg">
                                        <p className="text-exclam">
                                            확인하세요
                                        </p>
                                        <ul className="list-dot gap-1 mt-1 text-sm text-muted">
                                            <li>
                                                모든 항목은 필수값으로
                                                입력하셔야 신청이 가능합니다.
                                            </li>
                                            <li>
                                                계정등록신청 후 관리자의 승인에
                                                의해 로그인이 가능합니다.
                                            </li>
                                            <li>
                                                계정등록신청 후 관리자의 승인에
                                                의해 로그인이 가능합니다.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="item-center">
                                        <Checkbox
                                            label="서비스 이용을 위해 개인정보 활용에 동의합니다."
                                            className="font-medium"
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <LoginButton type="green">
                                            신청
                                        </LoginButton>
                                        <LoginButton type="outline-green">
                                            취소
                                        </LoginButton>
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
                                    <div className="flex flex-col space-y-2">
                                        <p className=" text-base font-medium text-black">
                                            계정정보
                                        </p>
                                        <LoginInput
                                            defaultValue="parking_mk"
                                            disabled
                                        />
                                        <LoginInput
                                            type="password"
                                            defaultValue="12345678"
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <LoginButton type="green">확인</LoginButton>
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
