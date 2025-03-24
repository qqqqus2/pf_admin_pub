import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import FileDrop from "@pub/components/Form/FileDrop";
import Text from "@pub/components/Form/Text";
import Accordion from "@pub/components/Accordion";
import Checkbox from "@pub/components/Form/Check";
import Radio from "@pub/components/Form/Radio";
import FormDate from "@pub/components/Form/Date";
import FormDateRange from "@pub/components/Form/DateRange";
import FormTimeRange from "@pub/components/Form/TimeRange";
import Paging from "@pub/components/Grid/Paging";
import IcExcel from "@/assets/icons/ico_excel.svg";
import IcMapPoint from "@/assets/icons/ico_map_point.svg";
import IcMapCamera from "@/assets/icons/ico_map_camera.svg";
import IcMapFlag from "@/assets/icons/ico_map_flag.svg";

export default function BO031023() {
    return (
        <DefaultLayout>
            <Topbar
                title="계약상세 (강남구청)"
                path={[
                    { text: "홈", url: "/" },
                    { text: "파트너 · 시설관리", url: "/" },
                    { text: "파트너관리", url: "/" },
                    { text: "계약상세", url: "/" },
                    { text: "주차등록관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                <TabGroup className="tab-basic" defaultIndex={2}>
                    <TabList>
                        <Tab>계약조회</Tab>
                        <Tab>파트너계정관리</Tab>
                        <Tab>주차장등록관리</Tab>
                        <Tab>배정자관리</Tab>
                    </TabList>
                    <TabPanels>
                        {/* 계약조회 */}
                        <TabPanel>계약조회</TabPanel>
                        {/* 파트너계정관리 */}
                        <TabPanel>파트너계정관리</TabPanel>
                        {/* 주차장등록관리 */}
                        <TabPanel>
                            <>
                                <div className="flex items-center min-h-[2.5rem] ">
                                    <p className="h4">주차장등록</p>
                                    <Button
                                        type="black"
                                        size="m"
                                        className="ml-auto"
                                    >
                                        주차장복사등록
                                    </Button>
                                </div>
                                <div className="table-basic mt-2">
                                    <table>
                                        <colgroup>
                                            <col width="152px" />
                                            <col />
                                            <col width="152px" />
                                            <col />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <th scope="row">주차장번호</th>
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
                                                        size="m"
                                                        defaultSelect
                                                    />
                                                </td>
                                                <th scope="row">파트너구분</th>
                                                <td className="bg-cell-blue">
                                                    B2G
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* 기본정보 */}
                                <Accordion title="기본정보" open>
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
                                                            주차장명
                                                        </span>
                                                    </th>
                                                    <td>
                                                        <Input placeholder="주차장명을 입력하세요." />
                                                    </td>
                                                    <th scope="row">
                                                        <span className="text-req">
                                                            주차장종류
                                                        </span>
                                                    </th>
                                                    <td>
                                                        <SelectBasic size="m" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <span className="text-req">
                                                            운영기간
                                                        </span>
                                                    </th>
                                                    <td colSpan={3}>
                                                        <div className="flex items-center gap-3">
                                                            <FormDateRange />
                                                            <span>
                                                                &#40;00년
                                                                00개월&#41;
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <span className="text-req">
                                                            서비스시작일
                                                        </span>
                                                    </th>
                                                    <td>
                                                        <FormDate
                                                            selected={
                                                                new Date()
                                                            }
                                                        />
                                                    </td>
                                                    <th scope="row">
                                                        서비스만료일
                                                    </th>
                                                    <td>
                                                        <FormDate placeholderText="yyyy-mm-dd" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        파트너 담당자명
                                                    </th>
                                                    <td>
                                                        <Input placeholder="담당자명을 입력하세요." />
                                                    </td>
                                                    <th scope="row">
                                                        담당자 연락처
                                                    </th>
                                                    <td>
                                                        <Input placeholder="담당자 연락처를 입력하세요." />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th
                                                        scope="row"
                                                        className="bg-h-red"
                                                    >
                                                        구간번호
                                                    </th>
                                                    <td>
                                                        <Input placeholder="구간번호를 입력하세요." />
                                                    </td>
                                                    <th scope="row">
                                                        배정자 수
                                                    </th>
                                                    <td>
                                                        <button type="button">
                                                            <span className="underline">
                                                                00
                                                            </span>{" "}
                                                            명
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <span className="text-req">
                                                            주차면수
                                                        </span>
                                                    </th>
                                                    <td colSpan={3}>
                                                        <div className="flex items-center gap-3">
                                                            <div className="grid grid-cols-[1fr_7.5rem] items-center gap-3">
                                                                <span>
                                                                    총 주차면수
                                                                </span>
                                                                <Input />
                                                            </div>
                                                            <div className="grid grid-cols-[1fr_7.5rem] items-center gap-3">
                                                                <span>
                                                                    계약
                                                                    주차면수
                                                                </span>
                                                                <Input />
                                                            </div>
                                                            <div className="grid grid-cols-[1fr_7.5rem] items-center gap-3">
                                                                <span>
                                                                    월주차
                                                                    가능면수
                                                                </span>
                                                                <Input />
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th
                                                        scope="row"
                                                        className="bg-h-green"
                                                    >
                                                        정산비율&#40;%&#41;
                                                    </th>
                                                    <td colSpan={3}>
                                                        <div className="flex items-center gap-3">
                                                            <div className="flex items-center">
                                                                <span>
                                                                    파킹프렌즈
                                                                </span>
                                                                <Input
                                                                    defaultValue="100"
                                                                    className="w-20 ml-3 mr-3"
                                                                />
                                                                <span>%</span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <span>
                                                                    파트너
                                                                </span>
                                                                <Input
                                                                    defaultValue="100"
                                                                    className="w-20 ml-3 mr-3"
                                                                />
                                                                <span>%</span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <span>
                                                                    기타
                                                                </span>
                                                                <Input
                                                                    defaultValue="100"
                                                                    className="w-20 ml-3 mr-3"
                                                                />
                                                                <span>%</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th
                                                        scope="row"
                                                        className="bg-h-red"
                                                    >
                                                        정산비율&#40;%&#41;
                                                    </th>
                                                    <td colSpan={3}>
                                                        <div className="flex items-center gap-3">
                                                            <div className="flex items-center">
                                                                <span>
                                                                    파킹프렌즈
                                                                </span>
                                                                <Input
                                                                    defaultValue="100"
                                                                    className="w-20 ml-3 mr-3"
                                                                />
                                                                <span>%</span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <span>
                                                                    파트너
                                                                </span>
                                                                <Input
                                                                    defaultValue="100"
                                                                    className="w-20 ml-3 mr-3"
                                                                />
                                                                <span>%</span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <span>
                                                                    &#40; 지자체
                                                                </span>
                                                                <Input
                                                                    defaultValue="100"
                                                                    className="w-20 ml-3 mr-3"
                                                                />
                                                                <span>%</span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <span>
                                                                    배정자
                                                                </span>
                                                                <Input
                                                                    defaultValue="100"
                                                                    className="w-20 ml-3 mr-3"
                                                                />
                                                                <span>
                                                                    % &#41;
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <span>
                                                                    기타
                                                                </span>
                                                                <Input
                                                                    defaultValue="100"
                                                                    className="w-20 ml-3 mr-3"
                                                                />
                                                                <span>%</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        웹할인 연동정보
                                                    </th>
                                                    <td colSpan={3}>
                                                        <div className="flex items-center gap-3">
                                                            <div className="grow flex items-center gap-3">
                                                                <span>
                                                                    할인URL
                                                                </span>
                                                                <Input className="grow" />
                                                            </div>
                                                            <div className="grid grid-cols-[1fr_7.5rem] items-center gap-3">
                                                                <span>
                                                                    아이디
                                                                </span>
                                                                <Input />
                                                            </div>
                                                            <div className="grid grid-cols-[1fr_7.5rem] items-center gap-3">
                                                                <span>
                                                                    비밀번호
                                                                </span>
                                                                <Input />
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        서울시 인프라 아이디
                                                    </th>
                                                    <td>
                                                        <Input size="m" />
                                                    </td>
                                                    <th scope="row">
                                                        주차권 판매여부
                                                    </th>
                                                    <td>
                                                        <div className="flex items-center gap-3">
                                                            <Radio
                                                                name="t9"
                                                                label="판매"
                                                                defaultChecked
                                                            />
                                                            <div className="flex items-center gap-3">
                                                                <Radio
                                                                    name="t9"
                                                                    label="판매중지"
                                                                />
                                                                <Input
                                                                    placeholder="판매중지사유를 입력하세요."
                                                                    disabled
                                                                />
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Accordion>

                                {/* 위치정보 */}
                                <Accordion title="위치정보" open>
                                    <div className="table-basic">
                                        <table>
                                            <colgroup>
                                                <col width="152px" />
                                                <col />
                                            </colgroup>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        주차장 주소
                                                    </th>
                                                    <td>
                                                        <div className="grid grid-cols-2 gap-[0.8125rem_2rem]">
                                                            <div className="col-span-2 grid grid-cols-[4rem_1fr] gap-3 items-center">
                                                                <p>우편번호</p>
                                                                <div className="flex items-center gap-3">
                                                                    <Input
                                                                        size="m"
                                                                        disabled
                                                                    />
                                                                    <Button
                                                                        type="outline"
                                                                        size="m"
                                                                    >
                                                                        우편번호
                                                                        찾기
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                            <div className="grid grid-cols-[4rem_1fr] gap-3 items-center">
                                                                <p>
                                                                    도로명 주소
                                                                </p>
                                                                <Input size="l" />
                                                            </div>
                                                            <div className="grid grid-cols-[4rem_1fr] gap-3 items-center">
                                                                <p>지번주소</p>
                                                                <Input size="l" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="col" colSpan={2}>
                                                        위치정보
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div>
                                                                <p className="h4">
                                                                    기본정보
                                                                </p>
                                                                <div className="table-basic mt-2">
                                                                    <table>
                                                                        <colgroup>
                                                                            <col width="152px" />
                                                                        </colgroup>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th scope="row">
                                                                                    <div className="flex items-center justify-between">
                                                                                        주차장입구
                                                                                        <Button
                                                                                            type="gray"
                                                                                            size="s"
                                                                                        >
                                                                                            선택
                                                                                        </Button>
                                                                                    </div>
                                                                                </th>
                                                                                <td>
                                                                                    <div className="grid grid-cols-2 gap-6">
                                                                                        <div className="grid grid-cols-[2.875rem_1fr] items-center">
                                                                                            <span className="text-sm font-bold">
                                                                                                위도
                                                                                            </span>
                                                                                            <Input placeholder="37.51613772511111" />
                                                                                        </div>
                                                                                        <div className="grid grid-cols-[2.875rem_1fr] items-center">
                                                                                            <span className="text-sm font-bold">
                                                                                                경도
                                                                                            </span>
                                                                                            <Input placeholder="37.51613772511111" />
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row">
                                                                                    <div className="flex items-center justify-between">
                                                                                        로드뷰
                                                                                        <Button
                                                                                            type="gray"
                                                                                            size="s"
                                                                                        >
                                                                                            선택
                                                                                        </Button>
                                                                                    </div>
                                                                                </th>
                                                                                <td>
                                                                                    <div className="grid grid-cols-2 gap-6">
                                                                                        <div className="grid grid-cols-[2.875rem_1fr] items-center">
                                                                                            <span className="text-sm font-bold">
                                                                                                위도
                                                                                            </span>
                                                                                            <Input placeholder="37.51613772511111" />
                                                                                        </div>
                                                                                        <div className="grid grid-cols-[2.875rem_1fr] items-center">
                                                                                            <span className="text-sm font-bold">
                                                                                                경도
                                                                                            </span>
                                                                                            <Input placeholder="37.51613772511111" />
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row">
                                                                                    <div className="flex items-center justify-between">
                                                                                        노출POI
                                                                                        <Button
                                                                                            type="gray"
                                                                                            size="s"
                                                                                        >
                                                                                            선택
                                                                                        </Button>
                                                                                    </div>
                                                                                </th>
                                                                                <td>
                                                                                    <div className="grid grid-cols-2 gap-6">
                                                                                        <div className="grid grid-cols-[2.875rem_1fr] items-center">
                                                                                            <span className="text-sm font-bold">
                                                                                                위도
                                                                                            </span>
                                                                                            <Input placeholder="37.51613772511111" />
                                                                                        </div>
                                                                                        <div className="grid grid-cols-[2.875rem_1fr] items-center">
                                                                                            <span className="text-sm font-bold">
                                                                                                경도
                                                                                            </span>
                                                                                            <Input placeholder="37.51613772511111" />
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <p className="h4 mt-6">
                                                                    구획/구간정보
                                                                </p>
                                                                <div className="flex justify-between items-center mt-6">
                                                                    <div className="flex items-center gap-2">
                                                                        <span className="text-base font-bold">
                                                                            1
                                                                            구간
                                                                        </span>
                                                                        <Button
                                                                            type="gray"
                                                                            size="s"
                                                                        >
                                                                            선택
                                                                        </Button>
                                                                    </div>
                                                                    <div className="flex items-center gap-2">
                                                                        <Button
                                                                            type="green"
                                                                            size="s"
                                                                        >
                                                                            추가
                                                                        </Button>
                                                                        <Button
                                                                            type="black"
                                                                            size="s"
                                                                        >
                                                                            초기화
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                                <div className="table-basic mt-2">
                                                                    <table>
                                                                        <colgroup>
                                                                            <col width="152px" />
                                                                        </colgroup>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th scope="row">
                                                                                    위도
                                                                                </th>
                                                                                <td>
                                                                                    <div className="grid grid-cols-2 gap-[0.8125rem_1.25rem]">
                                                                                        <div className="grid grid-cols-[2.875rem_1fr] items-center">
                                                                                            <span className="text-sm font-bold">
                                                                                                좌표1
                                                                                            </span>
                                                                                            <Input placeholder="37.51613772511111" />
                                                                                        </div>
                                                                                        <div className="grid grid-cols-[2.875rem_1fr] items-center">
                                                                                            <span className="text-sm font-bold">
                                                                                                좌표2
                                                                                            </span>
                                                                                            <Input placeholder="37.51613772511111" />
                                                                                        </div>
                                                                                        <div className="grid grid-cols-[2.875rem_1fr] items-center">
                                                                                            <span className="text-sm font-bold">
                                                                                                좌표3
                                                                                            </span>
                                                                                            <Input placeholder="37.51613772511111" />
                                                                                        </div>
                                                                                        <div className="grid grid-cols-[2.875rem_1fr] items-center">
                                                                                            <span className="text-sm font-bold">
                                                                                                좌표4
                                                                                            </span>
                                                                                            <Input placeholder="37.51613772511111" />
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row">
                                                                                    경도
                                                                                </th>
                                                                                <td>
                                                                                    <div className="grid grid-cols-2 gap-[0.8125rem_1.25rem]">
                                                                                        <div className="grid grid-cols-[2.875rem_1fr] items-center">
                                                                                            <span className="text-sm font-bold">
                                                                                                좌표1
                                                                                            </span>
                                                                                            <Input placeholder="37.51613772511111" />
                                                                                        </div>
                                                                                        <div className="grid grid-cols-[2.875rem_1fr] items-center">
                                                                                            <span className="text-sm font-bold">
                                                                                                좌표2
                                                                                            </span>
                                                                                            <Input placeholder="37.51613772511111" />
                                                                                        </div>
                                                                                        <div className="grid grid-cols-[2.875rem_1fr] items-center">
                                                                                            <span className="text-sm font-bold">
                                                                                                좌표3
                                                                                            </span>
                                                                                            <Input placeholder="37.51613772511111" />
                                                                                        </div>
                                                                                        <div className="grid grid-cols-[2.875rem_1fr] items-center">
                                                                                            <span className="text-sm font-bold">
                                                                                                좌표4
                                                                                            </span>
                                                                                            <Input placeholder="37.51613772511111" />
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div className="flex justify-between items-center mt-6">
                                                                    <div className="flex items-center gap-2">
                                                                        <span className="text-base font-bold">
                                                                            2
                                                                            구간
                                                                        </span>
                                                                        <Button
                                                                            type="gray"
                                                                            size="s"
                                                                        >
                                                                            선택
                                                                        </Button>
                                                                    </div>
                                                                    <div className="flex items-center gap-2">
                                                                        <Button
                                                                            type="black"
                                                                            size="s"
                                                                        >
                                                                            삭제
                                                                        </Button>
                                                                        <Button
                                                                            type="black"
                                                                            size="s"
                                                                        >
                                                                            초기화
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                                <div className="table-basic mt-2">
                                                                    <table>
                                                                        <colgroup>
                                                                            <col width="152px" />
                                                                        </colgroup>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th scope="row">
                                                                                    위도
                                                                                </th>
                                                                                <td>
                                                                                    <div className="grid grid-cols-2 gap-[0.8125rem_1.25rem]">
                                                                                        <div className="grid grid-cols-[2.875rem_1fr] items-center">
                                                                                            <span className="text-sm font-bold">
                                                                                                좌표1
                                                                                            </span>
                                                                                            <Input placeholder="37.51613772511111" />
                                                                                        </div>
                                                                                        <div className="grid grid-cols-[2.875rem_1fr] items-center">
                                                                                            <span className="text-sm font-bold">
                                                                                                좌표2
                                                                                            </span>
                                                                                            <Input placeholder="37.51613772511111" />
                                                                                        </div>
                                                                                        <div className="grid grid-cols-[2.875rem_1fr] items-center">
                                                                                            <span className="text-sm font-bold">
                                                                                                좌표3
                                                                                            </span>
                                                                                            <Input placeholder="37.51613772511111" />
                                                                                        </div>
                                                                                        <div className="grid grid-cols-[2.875rem_1fr] items-center">
                                                                                            <span className="text-sm font-bold">
                                                                                                좌표4
                                                                                            </span>
                                                                                            <Input placeholder="37.51613772511111" />
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row">
                                                                                    경도
                                                                                </th>
                                                                                <td>
                                                                                    <div className="grid grid-cols-2 gap-[0.8125rem_1.25rem]">
                                                                                        <div className="grid grid-cols-[2.875rem_1fr] items-center">
                                                                                            <span className="text-sm font-bold">
                                                                                                좌표1
                                                                                            </span>
                                                                                            <Input placeholder="37.51613772511111" />
                                                                                        </div>
                                                                                        <div className="grid grid-cols-[2.875rem_1fr] items-center">
                                                                                            <span className="text-sm font-bold">
                                                                                                좌표2
                                                                                            </span>
                                                                                            <Input placeholder="37.51613772511111" />
                                                                                        </div>
                                                                                        <div className="grid grid-cols-[2.875rem_1fr] items-center">
                                                                                            <span className="text-sm font-bold">
                                                                                                좌표3
                                                                                            </span>
                                                                                            <Input placeholder="37.51613772511111" />
                                                                                        </div>
                                                                                        <div className="grid grid-cols-[2.875rem_1fr] items-center">
                                                                                            <span className="text-sm font-bold">
                                                                                                좌표4
                                                                                            </span>
                                                                                            <Input placeholder="37.51613772511111" />
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col gap-4">
                                                                <ul className="flex justify-end items-center gap-3">
                                                                    <li className="flex items-center gap-1 text-[#212B36] text-base font-medium">
                                                                        <IcMapPoint />
                                                                        주차장입구
                                                                    </li>
                                                                    <li className="flex items-center gap-1 text-[#212B36] text-base font-medium">
                                                                        <IcMapCamera />
                                                                        로드뷰
                                                                    </li>
                                                                    <li className="flex items-center gap-1 text-[#212B36] text-base font-medium">
                                                                        <IcMapFlag />
                                                                        노출POI
                                                                    </li>
                                                                </ul>
                                                                <div className="overflow-hidden grow border border-[#E2E8F0] rounded-2xl">
                                                                    <p className="flex justify-center items-center h-full bg-[#7B808A]/30 text-[#7B808A] text-2xl">
                                                                        Naver
                                                                        Map
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Accordion>

                                {/* 주차장 이미지 */}
                                <Accordion title="주차장 이미지*" open>
                                    <>
                                        <FileDrop className="border-b border-b-[#E2E8F0]" />
                                        <ul className="px-4 py-[0.8125rem] mt-3 text-muted text-sm">
                                            <li>
                                                ※이미지는 최대 5개까지 등록할 수
                                                있습니다. 이미지를 직접 드래그
                                                하시거나 클릭시 파일을 등록할 수
                                                있습니다.
                                            </li>
                                            <li>
                                                ※이미지를 선택하시면 확대화면을
                                                볼 수 있습니다.
                                            </li>
                                            <li>
                                                ※권장 크기 : 1000 x 1000
                                                &#40;윈도대상 750 x 1000&#41;
                                            </li>
                                        </ul>
                                    </>
                                </Accordion>

                                {/* 요금/운영시간정보 */}
                                <Accordion title="요금/운영시간정보" open>
                                    <>
                                        <div className="table-basic">
                                            <table>
                                                <colgroup>
                                                    <col width="152px" />
                                                    <col />
                                                </colgroup>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            <span className="text-req">
                                                                요금정보
                                                            </span>
                                                        </th>
                                                        <td>
                                                            <div className="grid grid-cols-[8.75rem_1fr] gap-[0.8125rem]">
                                                                <Checkbox
                                                                    label="초기무료기준"
                                                                    defaultChecked
                                                                />
                                                                <Input
                                                                    placeholder="30분 무료"
                                                                    size="m"
                                                                />
                                                                <Checkbox
                                                                    label="기본요금"
                                                                    defaultChecked
                                                                />
                                                                <Input
                                                                    placeholder="10분 1000원"
                                                                    size="m"
                                                                />
                                                                <Checkbox
                                                                    label="추가요금"
                                                                    defaultChecked
                                                                />
                                                                <Input
                                                                    placeholder="10분 50원"
                                                                    size="m"
                                                                />
                                                                <Checkbox
                                                                    size="s"
                                                                    label="당일최대"
                                                                />
                                                                <Input
                                                                    size="m"
                                                                    disabled
                                                                />
                                                                <Checkbox
                                                                    size="s"
                                                                    label="할증기준시간"
                                                                />
                                                                <FormTimeRange />
                                                                <Checkbox
                                                                    size="s"
                                                                    label="할증요금"
                                                                />
                                                                <Input
                                                                    size="m"
                                                                    disabled
                                                                />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <span className="text-req">
                                                                운영시간
                                                            </span>
                                                        </th>
                                                        <td>
                                                            <div className="flex flex-col gap-[0.8125rem]">
                                                                <div className="flex items-center gap-3">
                                                                    <Checkbox
                                                                        label="평일"
                                                                        className="w-[8.75rem]"
                                                                        defaultChecked
                                                                    />
                                                                    <FormTimeRange
                                                                        disabled
                                                                    />
                                                                    <Checkbox
                                                                        label="24시간 운영"
                                                                        defaultChecked
                                                                        disabled
                                                                    />
                                                                    <Button
                                                                        type="gray"
                                                                        size="m"
                                                                    >
                                                                        요일별
                                                                        설정
                                                                    </Button>
                                                                </div>
                                                                <div className="flex flex-col gap-[0.8125rem] py-4 px-5 bg-[#F7F9FC] rounded-[0.1875rem]">
                                                                    <div className="flex items-center gap-3">
                                                                        <Checkbox
                                                                            label="월요일"
                                                                            className="w-[8.75rem]"
                                                                        />
                                                                        <FormTimeRange
                                                                            disabled
                                                                        />
                                                                        <Checkbox
                                                                            label="24시간 운영"
                                                                            defaultChecked
                                                                            disabled
                                                                        />
                                                                    </div>
                                                                    <div className="flex items-center gap-3">
                                                                        <Checkbox
                                                                            label="화요일"
                                                                            className="w-[8.75rem]"
                                                                        />
                                                                        <FormTimeRange
                                                                            disabled
                                                                        />
                                                                        <Checkbox
                                                                            label="24시간 운영"
                                                                            defaultChecked
                                                                            disabled
                                                                        />
                                                                    </div>
                                                                    <div className="flex items-center gap-3">
                                                                        <Checkbox
                                                                            label="수요일"
                                                                            className="w-[8.75rem]"
                                                                        />
                                                                        <FormTimeRange
                                                                            disabled
                                                                        />
                                                                        <Checkbox
                                                                            label="24시간 운영"
                                                                            defaultChecked
                                                                            disabled
                                                                        />
                                                                    </div>
                                                                    <div className="flex items-center gap-3">
                                                                        <Checkbox
                                                                            label="목요일"
                                                                            className="w-[8.75rem]"
                                                                        />
                                                                        <FormTimeRange
                                                                            disabled
                                                                        />
                                                                        <Checkbox
                                                                            label="24시간 운영"
                                                                            defaultChecked
                                                                        />
                                                                    </div>
                                                                    <div className="flex items-center gap-3">
                                                                        <Checkbox
                                                                            label="금요일"
                                                                            className="w-[8.75rem]"
                                                                        />
                                                                        <FormTimeRange />
                                                                        <Checkbox
                                                                            size="s"
                                                                            label="24시간 운영"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-center gap-3">
                                                                    <Checkbox
                                                                        label="토요일"
                                                                        className="w-[8.75rem]"
                                                                    />
                                                                    <FormTimeRange />
                                                                    <Checkbox
                                                                        size="s"
                                                                        label="24시간 운영"
                                                                    />
                                                                </div>
                                                                <div className="flex items-center gap-3">
                                                                    <Checkbox
                                                                        label="일요일"
                                                                        className="w-[8.75rem]"
                                                                    />
                                                                    <FormTimeRange />
                                                                    <Checkbox
                                                                        size="s"
                                                                        label="24시간 운영"
                                                                    />
                                                                </div>
                                                                <div className="flex items-center gap-3">
                                                                    <Checkbox
                                                                        label="공휴일"
                                                                        className="w-[8.75rem]"
                                                                    />
                                                                    <FormTimeRange />
                                                                    <Checkbox
                                                                        size="s"
                                                                        label="24시간 운영"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </>
                                </Accordion>

                                {/* 부가시설정보 */}
                                <Accordion
                                    title="부가시설정보"
                                    desc="※주차장 상세에 아이콘이 노출되는 정보입니다."
                                    open
                                >
                                    <div className="flex items-center -mx-2 divide-x divide-[#8A99AF] py-[0.8125rem] bg-cell-purple">
                                        <div className="flex items-center gap-3 px-6">
                                            <Checkbox label="기계식" />
                                            <Checkbox label="차단기" />
                                            <Checkbox label="CCTV" />
                                        </div>
                                        <div className="flex items-center gap-3 px-6">
                                            <Checkbox label="실외" />
                                            <Checkbox
                                                size="s"
                                                label="전기차 고속충전기"
                                            />
                                            <Checkbox label="화장실" />
                                            <Checkbox label="세차" />
                                            <Checkbox label="발렛" />
                                        </div>
                                        <div className="flex items-center gap-3 px-6">
                                            <Checkbox
                                                size="s"
                                                label="전기차 충전불가"
                                            />
                                        </div>
                                    </div>
                                </Accordion>

                                {/* 유의사항 */}
                                <Accordion title="유의사항" open>
                                    <div className="px-4 py-[0.8125rem] bg-cell-purple">
                                        <div className="flex gap-3">
                                            <Text rows={5} className="grow" />
                                            <Button type="outline" size="s">
                                                유의사항 불러오기
                                            </Button>
                                        </div>
                                        <ul className="mt-[0.8125rem] text-muted text-sm">
                                            <li>
                                                ※주차장상세에 노출되는
                                                유의사항을 등록합니다.
                                            </li>
                                            <li>
                                                ※&#91;유의사항 불러오기&#93;
                                                버튼을 선택 하시면 등록되어 있는
                                                템플릿으로 수정할 수 있습니다.
                                            </li>
                                        </ul>
                                    </div>
                                </Accordion>

                                {/* 주차권정보 */}
                                <Accordion title="주차권정보" open>
                                    <div className="pt-4 pb-8">
                                        <div className="flex items-center min-h-[2.5rem]">
                                            <p className="h4">
                                                총{" "}
                                                <span className="text-green">
                                                    0
                                                </span>
                                                건
                                            </p>
                                            <div className="flex items-center gap-3 ml-4">
                                                <Button type="gray" size="m">
                                                    선택삭제
                                                </Button>
                                                <Button type="green" size="m">
                                                    판매변경예약
                                                </Button>
                                            </div>
                                            <div className="flex items-center gap-2 ml-auto">
                                                <Button type="outline" size="m">
                                                    <IcExcel />
                                                    엑셀일괄등록
                                                </Button>
                                                <Button type="black" size="m">
                                                    등록
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="table-grid mt-4">
                                            <table>
                                                <colgroup>
                                                    <col width="60px" />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">
                                                            <Checkbox />
                                                        </th>
                                                        <th scope="col">
                                                            판매상태
                                                        </th>
                                                        <th scope="col">
                                                            주차권번호
                                                        </th>
                                                        <th scope="col">
                                                            주차권종류
                                                        </th>
                                                        <th scope="col">
                                                            판매기간
                                                        </th>
                                                        <th scope="col">
                                                            판매변경예약
                                                        </th>
                                                        <th scope="col">
                                                            결제방식
                                                        </th>
                                                        <th scope="col">
                                                            등록자
                                                        </th>
                                                        <th scope="col">
                                                            등록일시
                                                        </th>
                                                        <th scope="col">
                                                            최종수정자
                                                        </th>
                                                        <th scope="col">
                                                            최초수정일시
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={11}>
                                                            <p className="no-data py-14">
                                                                등록된 정보가
                                                                없습니다.
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="table-bottom">
                                            <Paging />
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
                                </Accordion>

                                {/* 시설정보 */}
                                <Accordion title="시설정보" open>
                                    <div className="pt-4 pb-8">
                                        <div className="flex items-center min-h-[2.5rem]">
                                            <p className="h4">
                                                총{" "}
                                                <span className="text-green">
                                                    0
                                                </span>
                                                건
                                            </p>
                                            <Button
                                                type="gray"
                                                size="m"
                                                className="ml-4 mr-auto"
                                            >
                                                선택삭제
                                            </Button>
                                            <Button type="black" size="m">
                                                등록
                                            </Button>
                                        </div>
                                        <div className="table-grid mt-4">
                                            <table>
                                                <colgroup>
                                                    <col width="60px" />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">
                                                            번호
                                                        </th>
                                                        <th scope="col">
                                                            구분
                                                        </th>
                                                        <th scope="col">
                                                            기기ID
                                                        </th>
                                                        <th scope="col">
                                                            상태
                                                        </th>
                                                        <th scope="col">
                                                            최초설치자
                                                        </th>
                                                        <th scope="col">
                                                            최초설치일시
                                                        </th>
                                                        <th scope="col">
                                                            최초수정자
                                                        </th>
                                                        <th scope="col">
                                                            최초수정일시
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td colSpan={8}>
                                                            <p className="no-data py-14">
                                                                등록된 정보가
                                                                없습니다.
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="table-bottom">
                                            <Paging />
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
                                </Accordion>

                                {/* 월 비용관리 */}
                                <Accordion title="월 비용관리" open>
                                    <div className="table-basic text-center bordered">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th scope="col">구분</th>
                                                    <th scope="col">
                                                        장비개수
                                                    </th>
                                                    <th scope="col">설치비</th>
                                                    <th scope="col">사용료</th>
                                                    <th scope="col">전기료</th>
                                                    <th scope="col">통신료</th>
                                                    <th scope="col">보험료</th>
                                                    <th scope="col">
                                                        A/S관리비
                                                    </th>
                                                    <th scope="col">
                                                        플랫폼운영관리비
                                                    </th>
                                                    <th scope="col">
                                                        기타운영비
                                                    </th>
                                                    <th scope="col">합계</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        AloT 센서
                                                    </th>
                                                    <td>00</td>
                                                    <td className="bg-h-green"></td>
                                                    <td>
                                                        <div className="flex items-center gap-2">
                                                            <Input defaultValue="100,000" />
                                                            <span>원</span>
                                                        </div>
                                                    </td>
                                                    <td>-</td>
                                                    <td className="bg-h-green"></td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>
                                                        <p className="text-right">
                                                            100,000원
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">CCTV</th>
                                                    <td>00</td>
                                                    <td className="bg-h-green"></td>
                                                    <td className="bg-h-green"></td>
                                                    <td className="bg-h-green"></td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>
                                                        <p className="text-right">
                                                            100,000원
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        파프차단기
                                                    </th>
                                                    <td>00</td>
                                                    <td className="bg-h-green"></td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>
                                                        <p className="text-right">
                                                            100,000원
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        키오스크
                                                    </th>
                                                    <td>00</td>
                                                    <td className="bg-h-green"></td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>
                                                        <p className="text-right">
                                                            100,000원
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">안내판</th>
                                                    <td>00</td>
                                                    <td className="bg-h-green"></td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>
                                                        <p className="text-right">
                                                            100,000원
                                                        </p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">
                                                        기타비용
                                                    </th>
                                                    <td></td>
                                                    <td className="bg-h-green"></td>
                                                    <td className="bg-h-green"></td>
                                                    <td className="bg-h-green"></td>
                                                    <td className="bg-h-green"></td>
                                                    <td className="bg-h-green"></td>
                                                    <td className="bg-h-green"></td>
                                                    <td className="bg-h-green"></td>
                                                    <td className="bg-h-green"></td>
                                                    <td>
                                                        <p className="text-right">
                                                            100,000원
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">총합계</th>
                                                    <td colSpan={10}>
                                                        <p className="font-bold text-right">
                                                            1,000,000원
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        관리자메모
                                                    </th>
                                                    <td colSpan={10}>
                                                        <div className="flex gap-3">
                                                            <Text
                                                                rows={3}
                                                                placeholder="관리자 메모를 작성합니다."
                                                                className="grow"
                                                            />
                                                            <Button
                                                                type="gray"
                                                                size="s"
                                                            >
                                                                확인
                                                            </Button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Accordion>
                                <div className="table-basic mt-[1.25rem]">
                                    <table>
                                        <colgroup>
                                            <col width="152px" />
                                            <col />
                                            <col width="152px" />
                                            <col />
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <th scope="row">등록자</th>
                                                <td>김파프 &#40;admin&#41;</td>
                                                <th scope="row">등록일시</th>
                                                <td>2024-01-01 00:00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        </TabPanel>

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
                    <Button type="gray" size="m">
                        미리보기
                    </Button>
                    <Button type="green" size="m">
                        저장
                    </Button>
                </div>
            </div>
        </DefaultLayout>
    );
}
