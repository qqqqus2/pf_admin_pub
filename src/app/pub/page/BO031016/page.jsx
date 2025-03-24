import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Checkbox from "@pub/components/Form/Check";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";
import IcExcel from "@/assets/icons/ico_excel.svg";
import Paging from "@pub/components/Grid/Paging";

export default function BO031016() {
    return (
        <DefaultLayout>
            <Topbar
                title="계약상세 (강남구청)"
                path={[
                    { text: "홈", url: "/" },
                    { text: "파트너/시설관리", url: "/" },
                    { text: "파트너 관리", url: "/" },
                ]}
            />
            <div className="box-cont overflow-hidden">
                <TabGroup className="tab-basic" defaultIndex={2}>
                    <TabList>
                        <Tab>계약조회</Tab>
                        <Tab>파트너계정관리</Tab>
                        <Tab>주차장등록관리</Tab>
                        <Tab>배정자관리</Tab>
                    </TabList>
                    <TabPanels className={"overflow-y-auto overflow-x-hidden"}>
                        <TabPanel>계약조회</TabPanel>
                        <TabPanel>파트너계정관리</TabPanel>
                        <TabPanel>
                            <div className="flex flex-col space-y-8">
                                {/* search box */}
                                <div className="search-box relative">
                                    <ul>
                                        <li>
                                            <p>상태</p>
                                            <SelectBasic
                                                placeholder="전체"
                                                size="m"
                                            />
                                        </li>
                                        <li>
                                            <p>종류</p>
                                            <SelectBasic
                                                placeholder="전체"
                                                size="m"
                                            />
                                        </li>
                                        <li className="col-span-2">
                                            <p>검색어</p>
                                            <Input
                                                placeholder="검색어를 입력하세요."
                                                size="l"
                                            />
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

                                <div>
                                    <div className="flex justify-between items-center">
                                        <Button type="outline" size="m">
                                            선택삭제
                                        </Button>
                                        <Button type="black" size="m">
                                            주차장등록
                                        </Button>
                                    </div>
                                    <div className="flex items-center justify-between min-h-[2.5rem] mt-6">
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
                                        <div className="flex items-center gap-2">
                                            <Button
                                                type="outline"
                                                size="m"
                                                className="justify-self-end"
                                            >
                                                <IcExcel />
                                                엑셀일괄등록
                                            </Button>
                                            <SelectBasic size="m" />
                                        </div>
                                    </div>
                                    <div className="table-grid mt-4">
                                        <table>
                                            <colgroup>
                                                <col width="40px" />
                                                <col width="auto" />
                                                <col width="auto" />
                                                <col width="auto" />
                                                <col width="auto" />
                                                <col width="auto" />
                                                <col width="auto" />
                                                <col width="auto" />
                                                <col width="auto" />
                                                <col width="auto" />
                                                <col width="auto" />
                                                <col width="auto" />
                                                <col width="140px" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th scope="col">
                                                        <Checkbox />
                                                    </th>
                                                    <th scope="col">상태</th>
                                                    <th scope="col">
                                                        주차장번호
                                                    </th>
                                                    <th scope="col">
                                                        주차장명
                                                    </th>
                                                    <th scope="col">종류</th>
                                                    <th scope="col">담당자</th>
                                                    <th scope="col">
                                                        운영주차면수
                                                    </th>
                                                    <th scope="col">
                                                        주차권 등록수
                                                    </th>
                                                    <th scope="col">
                                                        시설 등록수
                                                    </th>
                                                    <th scope="col">
                                                        별점/후기
                                                    </th>
                                                    <th scope="col">QR코드</th>
                                                    <th scope="col">NFC코드</th>
                                                    <th scope="col">
                                                        등록일자
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <Checkbox />
                                                    </td>
                                                    <td>서비스중</td>
                                                    <td>
                                                        <button type="button">
                                                            <span className="underline text-green">
                                                                NNNNN
                                                            </span>
                                                        </button>
                                                    </td>

                                                    <td>TWC15</td>
                                                    <td>공유(구획제)</td>
                                                    <td>김성용</td>
                                                    <td>0</td>
                                                    <td>
                                                        <div className="flex flex-wrap items-center justify-center gap-2">
                                                            1
                                                            <Button
                                                                type="outline"
                                                                size="s"
                                                            >
                                                                등록
                                                            </Button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap items-center justify-center gap-2">
                                                            0
                                                            <Button
                                                                type="outline"
                                                                size="s"
                                                            >
                                                                등록
                                                            </Button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button type="button">
                                                            <span className="underline">
                                                                0
                                                            </span>
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap items-center justify-center gap-2">
                                                            <Button
                                                                type="outline"
                                                                size="s"
                                                            >
                                                                생성
                                                            </Button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-wrap items-center justify-center gap-2">
                                                            <Button
                                                                type="outline"
                                                                size="s"
                                                            >
                                                                생성
                                                            </Button>
                                                        </div>
                                                    </td>
                                                    <td>2024-10-14</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="table-bottom">
                                        <Paging />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>배정자관리</TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
            <div className="flex mt-6">
                <Button type="black" size="m">
                    목록
                </Button>
            </div>
        </DefaultLayout>
    );
}
