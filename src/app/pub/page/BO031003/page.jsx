import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import Text from "@pub/components/Form/Text";
import Radio from "@pub/components/Form/Radio";
import Checkbox from "../../components/Form/Check";
import FormDateRange from "@pub/components/Form/DateRange";
import FormTimeRange from "@pub/components/Form/TimeRange";
import FileDrop from "@pub/components/Form/FileDrop";
import IcInfo from "@/assets/icons/ico_circle_info.svg";

export default function BO031003() {
    return (
        <DefaultLayout>
            <Topbar
                title="계약 상세 (강남구청)"
                path={[
                    { text: "홈", url: "/" },
                    { text: "파트너 · 시설관리", url: "/" },
                    { text: "파트너관리", url: "/" },
                    { text: "계약상세", url: "/" },
                    { text: "주차등록관리", url: "/" },
                ]}
            />
            <div className="box-cont overflow-y-hidden">
                <TabGroup className="tab-basic" defaultIndex={0}>
                    <TabList>
                        <Tab>계약조회</Tab>
                        <Tab>파트너계정관리</Tab>
                        <Tab>주차장등록관리</Tab>
                        <Tab>배정자관리</Tab>
                    </TabList>
                    <TabPanels className={"overflow-y-auto overflow-x-hidden"}>
                        {/* 계약조회 */}
                        <TabPanel>
                            <div>
                                <div className="table-basic">
                                    <table>
                                        <colgroup>
                                            <col width="152px" />
                                            <col />
                                            <col width="152px" />
                                            <col />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <th scope="row">계약번호</th>
                                                <td className="bg-cell-blue">
                                                    NNNNNN
                                                </td>
                                                <th scope="row">담당자</th>
                                                <td className="bg-cell-blue">
                                                    <div className="flex items-center gap-3">
                                                        <Input
                                                            defaultValue="이동훈"
                                                            size="m"
                                                            disabled
                                                        />
                                                        <Button
                                                            type="outline"
                                                            size="m"
                                                        >
                                                            조회
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">진행상태</th>
                                                <td className="bg-cell-blue">
                                                    <SelectBasic
                                                        placeholder="전체"
                                                        size="m"
                                                    />
                                                </td>
                                                <th scope="row"></th>
                                                <td className="bg-cell-blue"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* 기본정보 */}
                                <div className="title-cell">
                                    <p className="tit">기본정보</p>
                                </div>
                                <div className="table-basic">
                                    <table>
                                        <colgroup>
                                            <col width="152px" />
                                            <col />
                                            <col width="152px" />
                                            <col />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <span className="text-req">
                                                        파트너구분
                                                    </span>
                                                </th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <Radio
                                                            name="t1"
                                                            label="거주자"
                                                            defaultChecked
                                                        />
                                                        <Radio
                                                            name="t1"
                                                            label="파트너"
                                                        />
                                                        <Radio
                                                            name="t1"
                                                            label="개인"
                                                        />
                                                    </div>
                                                </td>
                                                <th scope="row">
                                                    파트너 담당자명
                                                </th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <Input defaultValue="담당자명을 입력하세요." />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <span className="text-req">
                                                        파트너명
                                                    </span>
                                                </th>
                                                <td>
                                                    <Input defaultValue="(주)하이파킹" />
                                                </td>
                                                <th scope="row">
                                                    <span className="text-req">
                                                        담당자연락처
                                                    </span>
                                                </th>
                                                <td>
                                                    <Input defaultValue="11111111" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <span className="text-req">
                                                        계약기간
                                                    </span>
                                                </th>
                                                <td colSpan={3}>
                                                    <div className="flex items-center gap-3">
                                                        <FormDateRange />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <span className="text-req">
                                                        PG수수료
                                                    </span>
                                                </th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <Radio
                                                            name="t2"
                                                            label="부과"
                                                            defaultChecked
                                                        />
                                                        <Radio
                                                            name="t2"
                                                            label="미부과"
                                                        />
                                                    </div>
                                                </td>
                                                <th scope="row">소득세부과</th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <Radio
                                                            name="t3"
                                                            label="부과"
                                                            defaultChecked
                                                        />
                                                        <Radio
                                                            name="t3"
                                                            label="미부과"
                                                        />
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="col">
                                                    <span className="text-req">
                                                        배정자 연동방식
                                                    </span>
                                                </th>

                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <Radio
                                                            name="t4"
                                                            label="API 연동"
                                                            defaultChecked
                                                        />
                                                        <Radio
                                                            name="t4"
                                                            label="엑셀업로드"
                                                        />
                                                    </div>
                                                </td>

                                                <th scope="row">
                                                    <span className="text-req">
                                                        배정자 한도금액
                                                    </span>
                                                </th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        {" "}
                                                        <Input defaultValue="0000" />
                                                        원
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <span className="text-req">
                                                        운영시간
                                                    </span>
                                                </th>
                                                <td colSpan={3}>
                                                    <div class="grid grid-cols-2 gap-2">
                                                        <div class="flex items-center gap-2 border-b border-dashed">
                                                            <Checkbox
                                                                label="월요일"
                                                                className={
                                                                    "w-[8.75rem]"
                                                                }
                                                            />
                                                            <div class="flex flex-col gap-2">
                                                                <div class="flex items-center gap-2">
                                                                    <span class="text-req">
                                                                        전일
                                                                    </span>
                                                                    <FormTimeRange
                                                                        disabled
                                                                    />
                                                                </div>
                                                                <div class="flex items-center gap-2">
                                                                    <span>
                                                                        주간
                                                                    </span>
                                                                    <FormTimeRange
                                                                        disabled
                                                                    />
                                                                </div>
                                                                <div class="flex items-center gap-2 mb-2">
                                                                    <span>
                                                                        야간
                                                                    </span>
                                                                    <FormTimeRange
                                                                        disabled
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="flex items-center gap-2 border-b border-dashed">
                                                            <Checkbox
                                                                label="화요일"
                                                                className={
                                                                    "w-[8.75rem]"
                                                                }
                                                            />
                                                            <div class="flex flex-col gap-2">
                                                                <div class="flex items-center gap-2">
                                                                    <span class="text-req">
                                                                        전일
                                                                    </span>
                                                                    <FormTimeRange
                                                                        disabled
                                                                    />
                                                                </div>
                                                                <div class="flex items-center gap-2">
                                                                    <span>
                                                                        주간
                                                                    </span>
                                                                    <FormTimeRange
                                                                        disabled
                                                                    />
                                                                </div>
                                                                <div class="flex items-center gap-2 mb-2">
                                                                    <span>
                                                                        야간
                                                                    </span>
                                                                    <FormTimeRange
                                                                        disabled
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="flex items-center gap-2 border-b border-dashed">
                                                            <Checkbox
                                                                label="수요일"
                                                                className={
                                                                    "w-[8.75rem]"
                                                                }
                                                            />
                                                            <div class="flex flex-col gap-2">
                                                                <div class="flex items-center gap-2">
                                                                    <span class="text-req">
                                                                        전일
                                                                    </span>
                                                                    <FormTimeRange
                                                                        disabled
                                                                    />
                                                                </div>
                                                                <div class="flex items-center gap-2">
                                                                    <span>
                                                                        주간
                                                                    </span>
                                                                    <FormTimeRange
                                                                        disabled
                                                                    />
                                                                </div>
                                                                <div class="flex items-center gap-2 mb-2">
                                                                    <span>
                                                                        야간
                                                                    </span>
                                                                    <FormTimeRange
                                                                        disabled
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="flex items-center gap-2 border-b border-dashed">
                                                            <Checkbox
                                                                label="목요일"
                                                                className={
                                                                    "w-[8.75rem]"
                                                                }
                                                            />
                                                            <div class="flex flex-col gap-2">
                                                                <div class="flex items-center gap-2">
                                                                    <span class="text-req">
                                                                        전일
                                                                    </span>
                                                                    <FormTimeRange />
                                                                </div>
                                                                <div class="flex items-center gap-2">
                                                                    <span>
                                                                        주간
                                                                    </span>
                                                                    <FormTimeRange />
                                                                </div>
                                                                <div class="flex items-center gap-2 mb-2">
                                                                    <span>
                                                                        야간
                                                                    </span>
                                                                    <FormTimeRange />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="flex items-center gap-2 border-b border-dashed">
                                                            <Checkbox
                                                                label="금요일"
                                                                className={
                                                                    "w-[8.75rem]"
                                                                }
                                                            />
                                                            <div class="flex flex-col gap-2">
                                                                <div class="flex items-center gap-2">
                                                                    <span class="text-req">
                                                                        전일
                                                                    </span>
                                                                    <FormTimeRange />
                                                                </div>
                                                                <div class="flex items-center gap-2">
                                                                    <span>
                                                                        주간
                                                                    </span>
                                                                    <FormTimeRange />
                                                                </div>
                                                                <div class="flex items-center gap-2 mb-2">
                                                                    <span>
                                                                        야간
                                                                    </span>
                                                                    <FormTimeRange />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="flex items-center gap-2 border-b border-dashed">
                                                            <Checkbox
                                                                label="토요일"
                                                                className={
                                                                    "w-[8.75rem]"
                                                                }
                                                            />
                                                            <div class="flex flex-col gap-2">
                                                                <div class="flex items-center gap-2">
                                                                    <span class="text-req">
                                                                        전일
                                                                    </span>
                                                                    <FormTimeRange />
                                                                </div>
                                                                <div class="flex items-center gap-2">
                                                                    <span>
                                                                        주간
                                                                    </span>
                                                                    <FormTimeRange />
                                                                </div>
                                                                <div class="flex items-center gap-2 mb-2">
                                                                    <span>
                                                                        야간
                                                                    </span>
                                                                    <FormTimeRange />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="flex items-center gap-2 ">
                                                            <Checkbox
                                                                label="일요일"
                                                                className={
                                                                    "w-[8.75rem]"
                                                                }
                                                            />
                                                            <div class="flex flex-col gap-2">
                                                                <div class="flex items-center gap-2">
                                                                    <span class="text-req">
                                                                        전일
                                                                    </span>
                                                                    <FormTimeRange />
                                                                </div>
                                                                <div class="flex items-center gap-2">
                                                                    <span>
                                                                        주간
                                                                    </span>
                                                                    <FormTimeRange />
                                                                </div>
                                                                <div class="flex items-center gap-2 mb-2">
                                                                    <span>
                                                                        야간
                                                                    </span>
                                                                    <FormTimeRange />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="flex items-center gap-2 ">
                                                            <Checkbox
                                                                label="공휴일"
                                                                className={
                                                                    "w-[8.75rem]"
                                                                }
                                                            />
                                                            <div class="flex flex-col gap-2">
                                                                <div class="flex items-center gap-2">
                                                                    <span class="text-req">
                                                                        전일
                                                                    </span>
                                                                    <FormTimeRange />
                                                                </div>
                                                                <div class="flex items-center gap-2">
                                                                    <span>
                                                                        주간
                                                                    </span>
                                                                    <FormTimeRange />
                                                                </div>
                                                                <div class="flex items-center gap-2 mb-2">
                                                                    <span>
                                                                        야간
                                                                    </span>
                                                                    <FormTimeRange />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <span class="text-req">
                                                        요금정보
                                                    </span>
                                                </th>
                                                <td colSpan={3}>
                                                    <div className="grid grid-cols-[8.75rem_1fr] gap-2">
                                                        <Checkbox
                                                            label="초기무료기준"
                                                            className={
                                                                "w-[8.75rem]"
                                                            }
                                                        />
                                                        <div className="flex items-center gap-3">
                                                            <div className="flex items-center gap-2">
                                                                <Input
                                                                    size="s"
                                                                    className="w-20"
                                                                    disabled
                                                                />
                                                                <span>분</span>
                                                            </div>
                                                        </div>
                                                        <Checkbox
                                                            label="기본요금"
                                                            className={
                                                                "w-[8.75rem]"
                                                            }
                                                        />
                                                        <div className="flex items-center gap-3">
                                                            <div className="flex items-center gap-2">
                                                                <Input
                                                                    size="s"
                                                                    className="w-20"
                                                                    disabled
                                                                />
                                                                <span>분</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <Input
                                                                    size="m"
                                                                    placeholder="기본요금을 입력하세요"
                                                                    disabled
                                                                />
                                                                <span>원</span>
                                                            </div>
                                                        </div>
                                                        <Checkbox
                                                            label="추가요금"
                                                            className={
                                                                "w-[8.75rem]"
                                                            }
                                                        />
                                                        <div className="flex items-center gap-3">
                                                            <div className="flex items-center gap-2">
                                                                <Input
                                                                    size="s"
                                                                    className="w-20"
                                                                    disabled
                                                                />
                                                                <span>분</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <Input
                                                                    size="m"
                                                                    placeholder="추가요금을 입력하세요"
                                                                    disabled
                                                                />
                                                                <span>원</span>
                                                            </div>
                                                        </div>
                                                        <Checkbox
                                                            label="최대요금"
                                                            className={
                                                                "w-[8.75rem]"
                                                            }
                                                        />
                                                        <div className="flex items-center gap-3">
                                                            <div className="flex items-center gap-2">
                                                                <Input
                                                                    size="m"
                                                                    placeholder="최대요금을 입력하세요"
                                                                    disabled
                                                                />
                                                                <span>원</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <span class="text-req">
                                                        결제방식
                                                    </span>
                                                </th>
                                                <td colSpan={3}>
                                                    <div className="flex items-center gap-2">
                                                        <Radio
                                                            name="t6"
                                                            label="당일예약"
                                                            defaultChecked
                                                        />

                                                        <Radio
                                                            name="t6"
                                                            label="예약결제"
                                                        />
                                                        <SelectBasic
                                                            size="s"
                                                            defaultSelect
                                                            disabled
                                                        />
                                                        <Radio
                                                            name="t6"
                                                            label="바로주차"
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <span class="text-req">
                                                        정산비율
                                                    </span>
                                                </th>
                                                <td colSpan={3}>
                                                    <div className="flex items-center gap-2">
                                                        <div className="flex items-center">
                                                            <span>
                                                                파킹프렌즈
                                                            </span>
                                                            <Input
                                                                size="s"
                                                                className="w-20 mx-1"
                                                            />
                                                            <span>%</span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <span>파트너</span>
                                                            <Input
                                                                size="s"
                                                                className="w-20 mx-1"
                                                            />
                                                            <span>%</span>
                                                            <span>배정자</span>
                                                            <Input
                                                                size="s"
                                                                className="w-20 mx-1"
                                                            />
                                                            <span>%</span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <span>기타</span>
                                                            <Input
                                                                size="s"
                                                                className="w-20 mx-1"
                                                            />
                                                            <span>%</span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">정산방식</th>
                                                <td colSpan={3}>
                                                    <Checkbox
                                                        label="수익=매출액"
                                                        className="font-medium"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <span class="text-req">
                                                        연장시간설정
                                                    </span>
                                                </th>
                                                <td>
                                                    <div className="flex items-center gap-2">
                                                        <Radio
                                                            name="t7"
                                                            label="10분단위"
                                                            defaultChecked
                                                        />
                                                        <Radio
                                                            name="t7"
                                                            label="30분단위"
                                                        />
                                                        <Radio
                                                            name="t7"
                                                            label="1시간단위"
                                                        />
                                                    </div>
                                                </td>
                                                <th scope="row">
                                                    <span class="text-req">
                                                        최대 연장 가능시간
                                                    </span>
                                                </th>
                                                <td>
                                                    <div className="flex items-center gap-2">
                                                        <Input
                                                            size="m"
                                                            placeholder="최대연장가능시간을 입력하세요"
                                                        />
                                                        <span>시간</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="title-cell">
                                    <p className="tit">계약문서</p>
                                    <p className="desc">
                                        파일을 직접 Drag 하시거나 클릭하여
                                        파일을 등록할 수 있습니다
                                    </p>
                                </div>
                                <FileDrop className="border-b border-b-[#E2E8F0]" />
                                <ul className="px-4 py-[0.8125rem] text-muted text-sm">
                                    <li>
                                        ※계약문서는 스캔 이미지나 파일로 직접
                                        Drag 하시거나 클릭 시 파일을 등록할 수
                                        있습니다.
                                    </li>
                                    <li>
                                        ※등록된 이미지는 선택하시면 확대화면을
                                        볼 수 있으며 파일은 다운로드 받으실 수
                                        있습니다.
                                    </li>
                                    <li>
                                        ※계약문서 파일명은 문서명으로 업로드
                                        하시기를 권장합니다.
                                        예)사업자등록증사본.jpg,
                                        임대차계약서.pdf 등
                                    </li>
                                </ul>

                                <div className="mt-6">
                                    <p className="h4 mb-2">이력관리</p>
                                    <div className="table-grid row-5">
                                        <table>
                                            <colgroup>
                                                <col width="60px" />
                                                <col width="15%" />
                                                <col width="auto" />
                                                <col width="220px" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th scope="col">No</th>
                                                    <th scope="col">등록자</th>
                                                    <th scope="col">
                                                        내용 요약
                                                    </th>
                                                    <th scope="col">
                                                        등록일시
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>
                                                        김파프&#40;adminid&#41;
                                                    </td>
                                                    <td>계약진행중</td>
                                                    <td>yyyy-mm-dd 00:00</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>
                                                        김파프&#40;adminid&#41;
                                                    </td>
                                                    <td>계약완료</td>
                                                    <td>yyyy-mm-dd 00:00</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>
                                                        김관리&#40;adminid&#41;
                                                    </td>
                                                    <td>
                                                        계약만료&#40;계약연장&#41;
                                                    </td>
                                                    <td>yyyy-mm-dd 00:00</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>
                                                        김파킹&#40;adminid&#41;
                                                    </td>
                                                    <td>계약만료</td>
                                                    <td>yyyy-mm-dd 00:00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <p className="h4">관리자 메모</p>
                                            <span
                                                data-tooltip-id="tooltip"
                                                data-tooltip-content="수정 시 관리자 메모를 권장합니다."
                                            >
                                                <IcInfo />
                                            </span>
                                        </div>

                                        <div className="table-basic mt-2">
                                            <table>
                                                <colgroup>
                                                    <col width="152px" />
                                                    <col />
                                                </colgroup>
                                                <tbody>
                                                    <tr>
                                                        <th class="">
                                                            <span>메모</span>
                                                        </th>
                                                        <td colspan="3">
                                                            <div class="flex gap-3">
                                                                <div class="form-text  grow">
                                                                    <textarea
                                                                        rows="3"
                                                                        placeholder="관리자 메모를 작성합니다."
                                                                        maxlength="1000"
                                                                    ></textarea>
                                                                </div>
                                                                <button
                                                                    type="button"
                                                                    class="btn btn-outline btn-s "
                                                                    disabled=""
                                                                >
                                                                    확인
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        {/* 파트너계정관리 */}
                        <TabPanel>파트너계정관리</TabPanel>
                        {/* 주차장등록관리 */}
                        <TabPanel>주차장등록관리</TabPanel>

                        {/* 배정자관리 */}
                        <TabPanel>배정자관리</TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
            <div className="flex mt-6">
                <Button type="black" size="m">
                    목록
                </Button>
                <div className="flex items-center gap-2 ml-auto">
                    <Button type="black" size="m">
                        취소
                    </Button>
                    <Button type="green" size="m">
                        저장
                    </Button>
                </div>
            </div>
        </DefaultLayout>
    );
}
