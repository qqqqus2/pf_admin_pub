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

export default function BO034001() {
    return (
        <DefaultLayout>
            <Topbar
                title="시설관리"
                path={[
                    { text: "홈", url: "/" },
                    { text: "파트너 · 시설관리", url: "/" },
                    { text: "시설관리", url: "/" },
                    { text: "AloT 센서", url: "/" },
                ]}
            />
            <div className="box-cont overflow-hidden">
                <TabGroup className="tab-basic">
                    <TabList>
                        <Tab>AloT 센서</Tab>
                        <Tab>CCTV</Tab>
                        <Tab>파프차단기</Tab>
                        <Tab>키오스크</Tab>
                        <Tab>안내판</Tab>
                        <Tab>기타장비</Tab>
                    </TabList>
                    <TabPanels className={"overflow-y-auto overflow-x-hidden"}>
                        <TabPanel>
                            <div className="grow flex flex-col ">
                                {/* search box */}
                                <div className="search-box relative">
                                    <ul>
                                        <li>
                                            <p>상태</p>
                                            <div className="flex items-center gap-3">
                                                <Checkbox
                                                    label="전체"
                                                    defaultChecked
                                                />
                                                <Checkbox label="운영중" />
                                                <Checkbox label="공사중" />
                                                <Checkbox label="철거" />
                                                <Checkbox label="폐기" />
                                            </div>
                                        </li>
                                        <li>
                                            <p>주차장종류</p>
                                            <SelectBasic
                                                placeholder="전체"
                                                size="m"
                                            />
                                        </li>
                                        <li>
                                            <p>통신 개통여부</p>
                                            <div className="flex items-center gap-3">
                                                <Radio
                                                    name="t1"
                                                    label="전체"
                                                    defaultChecked
                                                />
                                                <Radio
                                                    name="t1"
                                                    label="개통(Y)"
                                                />
                                                <Radio
                                                    name="t1"
                                                    label="미개통(N)"
                                                />
                                            </div>
                                        </li>
                                        <li>
                                            <p>통신상태</p>
                                            <div className="flex items-center gap-3">
                                                <Radio
                                                    name="t2"
                                                    label="전체"
                                                    defaultChecked
                                                />
                                                <Radio name="t2" label="ON" />
                                                <Radio name="t2" label="OFF" />
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
                                                    placeholder="검색어를 입력하세요"
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
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="flex items-center gap-3">
                                            <Button type="outline" size="m">
                                                폐기상태 전환
                                            </Button>
                                        </div>
                                        <Button type="black" size="m">
                                            등록
                                        </Button>
                                    </div>
                                    <div className="flex items-center min-h-[2.5rem] ">
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
                                        <div className="flex items-center gap-2 ml-auto">
                                            <SelectBasic
                                                placeholder="최근 등록순"
                                                className="w-[9.375rem]"
                                            />
                                            <SelectBasic
                                                placeholder="50개씩 보기"
                                                className="w-[9.375rem]"
                                            />
                                        </div>
                                    </div>
                                    <div className="table-grid mt-4">
                                        <table>
                                            <colgroup>
                                                <col width="5%" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th scope="col">
                                                        <Checkbox />
                                                    </th>
                                                    <th scope="col">번호</th>
                                                    <th scope="col">기기ID</th>
                                                    <th scope="col">상태</th>
                                                    <th scope="col">
                                                        주차장종류
                                                    </th>
                                                    <th scope="col">
                                                        주차장번호
                                                    </th>
                                                    <th scope="col">
                                                        주차장명
                                                    </th>
                                                    <th scope="col">
                                                        파트너명
                                                    </th>
                                                    <th scope="col">
                                                        통신개통여부
                                                    </th>
                                                    <th scope="col">
                                                        통신상태
                                                    </th>
                                                    <th scope="col">
                                                        시리얼 번호
                                                    </th>
                                                    <th scope="col">
                                                        최초설치자
                                                    </th>
                                                    <th scope="col">
                                                        최초설치일시
                                                    </th>
                                                    <th scope="col">
                                                        최종수정자
                                                    </th>
                                                    <th scope="col">
                                                        최종수정일시
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <Checkbox />
                                                    </td>
                                                    <td>10</td>
                                                    <td>
                                                        <button type="button">
                                                            <span className="underline">
                                                                NNNNN
                                                            </span>
                                                        </button>
                                                    </td>
                                                    <td>운영중</td>
                                                    <td>그린파킹</td>
                                                    <td>999999</td>
                                                    <td>
                                                        <button type="button">
                                                            <span className="underline">
                                                                강남 스마트공유
                                                                주차장 1-01
                                                            </span>
                                                        </button>
                                                    </td>
                                                    <td>강남구청</td>
                                                    <td>Y</td>
                                                    <td>ON</td>
                                                    <td>382930HIGE92</td>
                                                    <td>
                                                        김파프&#40;admin&#41;
                                                    </td>
                                                    <td>2024-10-14 14:38</td>
                                                    <td>
                                                        김파프&#40;admin&#41;
                                                    </td>
                                                    <td>2024-10-14 14:38</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Checkbox />
                                                    </td>
                                                    <td>10</td>
                                                    <td>
                                                        <button type="button">
                                                            <span className="underline">
                                                                NNNNN
                                                            </span>
                                                        </button>
                                                    </td>
                                                    <td>운영중</td>
                                                    <td>
                                                        공유&#40;구간제&#41;
                                                    </td>
                                                    <td>999999</td>
                                                    <td>
                                                        구간 &#40;#11111&#41;
                                                    </td>
                                                    <td>강남구청</td>
                                                    <td>Y</td>
                                                    <td>
                                                        <span className="text-red">
                                                            OFF
                                                        </span>
                                                    </td>
                                                    <td>382930HIGE92</td>
                                                    <td>
                                                        김파프&#40;admin&#41;
                                                    </td>
                                                    <td>2024-10-14 14:38</td>
                                                    <td>
                                                        김파프&#40;admin&#41;
                                                    </td>
                                                    <td>2024-10-14 14:38</td>
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
                        <TabPanel>CCTV</TabPanel>
                        <TabPanel>파프차단기</TabPanel>
                        <TabPanel>키오스크</TabPanel>
                        <TabPanel>안내판</TabPanel>
                        <TabPanel>기타장비</TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </DefaultLayout>
    );
}
