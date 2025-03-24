import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Checkbox from "@pub/components/Form/Check";
import Radio from "@pub/components/Form/Radio";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";
import Paging from "@pub/components/Grid/Paging";
import IcExcel from "@/assets/icons/ico_excel.svg";

export default function BO031017() {
    return (
        <DefaultLayout>
            <Topbar
                title="계약상세 (강남구청)"
                path={[
                    { text: "홈", url: "/" },
                    { text: "파트너/시설관리", url: "/" },
                    { text: "파트너관리", url: "/" },
                ]}
            />
            <div className="box-cont overflow-hidden">
                <TabGroup className="tab-basic h-full" defaultIndex={3}>
                    <TabList>
                        <Tab>계약조회</Tab>
                        <Tab>파트너계정관리</Tab>
                        <Tab>주차장등록관리</Tab>
                        <Tab>배정자관리</Tab>
                    </TabList>
                    <TabPanels className={"overflow-y-auto overflow-x-hidden"}>
                        <TabPanel>계약조회</TabPanel>
                        <TabPanel>파트너계정관리</TabPanel>
                        <TabPanel>주차장등록관리</TabPanel>
                        <TabPanel>
                            {/* search box */}
                            <div className="search-box relative">
                                <ul>
                                    <li className="">
                                        <p>계정상태</p>
                                        <div className="flex items-center gap-3">
                                            <Checkbox
                                                label="전체"
                                                defaultChecked
                                            />
                                            <Checkbox label="활성" />
                                            <Checkbox label="비활성" />
                                            <Checkbox label="정지" />
                                        </div>
                                    </li>
                                    <li className="">
                                        <p>검토여부</p>
                                        <div className="flex items-center gap-3">
                                            <Radio
                                                name="f1"
                                                label="전체"
                                                defaultChecked
                                            />
                                            <Radio name="f1" label="Y" />
                                            <Radio name="f1" label="N" />
                                        </div>
                                    </li>
                                    <li className="col-span-2">
                                        <p>검색어</p>
                                        <div className="flex items-center gap-2">
                                            <SelectBasic
                                                placeholder="전체"
                                                size="m"
                                            />
                                            <Input
                                                placeholder="검색어를 입력하세요."
                                                size="l"
                                            />
                                        </div>
                                    </li>
                                    <li className="col-span-2">
                                        <p>기간</p>
                                        <div className="flex items-center gap-2">
                                            <SelectBasic
                                                placeholder="전체"
                                                size="m"
                                            />
                                            <FormDateRange />
                                            <ButtonGroup />
                                        </div>
                                    </li>
                                </ul>
                                <div className="search-btn absolute right-0 bottom-6 mt-0">
                                    <Button type="green" size="m">
                                        검색
                                    </Button>
                                </div>
                            </div>
                            {/* //search box */}

                            <div className="grow flex flex-col mt-6">
                                <div className="flex items-center min-h-[2.5rem]">
                                    <div className="flex items-center min-h-[2.5rem]">
                                        <p className="h4">
                                            총{" "}
                                            <span className="text-green">
                                                231
                                            </span>
                                            건
                                        </p>
                                        <div className="ml-4">
                                            <Button
                                                type="outline"
                                                size="m"
                                                className="justify-self-end"
                                            >
                                                <IcExcel />
                                                엑셀다운로드
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="flex items-center ml-auto">
                                        <Button type="outline" size="m">
                                            <IcExcel />
                                            공유포인트 지급
                                        </Button>
                                        <SelectBasic
                                            placeholder="50개씩 보기"
                                            className="w-[9.375rem] ml-3"
                                        />
                                    </div>
                                </div>
                                <div className="table-grid mt-4">
                                    <table>
                                        <colgroup>
                                            <col width="60px" />
                                            <col width="auto" />
                                            <col width="auto" />
                                            <col width="auto" />
                                            <col width="12%" />
                                            <col width="8%" />
                                            <col width="8%" />
                                            <col width="8%" />
                                            <col width="140px" />
                                            <col width="140px" />
                                            <col width="180px" />
                                            <col width="180px" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th scope="col">No</th>
                                                <th scope="col">회원번호</th>
                                                <th scope="col">계정상태</th>
                                                <th scope="col">검토여부</th>
                                                <th scope="col">주차장명</th>
                                                <th scope="col">배정자명</th>
                                                <th scope="col">자량번호</th>
                                                <th scope="col">휴대폰번호</th>
                                                <th scope="col">배정시작일</th>
                                                <th scope="col">배정종료일</th>
                                                <th scope="col">
                                                    배정자 전환일시
                                                </th>
                                                <th scope="col">공유시간</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colspan="12">
                                                    <p className="no-data py-8 h-full">
                                                        등록된 정보가 없습니다.
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="table-bottom">
                                    <Paging />
                                </div>
                            </div>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </DefaultLayout>
    );
}
