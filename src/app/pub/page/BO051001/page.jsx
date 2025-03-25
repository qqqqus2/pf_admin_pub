import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Radio from "@pub/components/Form/Radio";
import Checkbox from "@pub/components/Form/Check";
import Input from "@pub/components/Form/Input";
import Paging from "@pub/components/Grid/Paging";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";
import IcExcel from "@/assets/icons/ico_excel.svg";

export default function BO051001() {
    return (
        <DefaultLayout>
            <Topbar
                title="쿠폰 관리"
                path={[
                    { text: "홈", url: "/" },
                    { text: "포인트관리", url: "/" },
                    { text: "쿠폰 관리", url: "/" },
                ]}
            />
            <div className="box-cont overflow-y-auto">
                {/* search box */}
                <div className="search-box relative">
                    <ul>
                        <li className="col-span-2">
                            <p>쿠폰유형</p>
                            <div className="flex items-center gap-3">
                                <Checkbox label="전체" defaultChecked />
                                <Checkbox label="온라인쿠폰" />
                                <Checkbox label="오프라인쿠폰" />
                                <Checkbox label="웰컴쿠폰" />
                                <Checkbox label="첫구매쿠폰" />
                            </div>
                        </li>
                        <li>
                            <p>게시상태</p>
                            <div className="flex items-center gap-3">
                                <Checkbox label="전체" defaultChecked />
                                <Checkbox label="진행중" />
                                <Checkbox label="대기" />
                                <Checkbox label="종료" />
                                <Checkbox label="중지" />
                            </div>
                        </li>
                        <li>
                            <p>사용여부</p>
                            <div className="flex items-center gap-3">
                                <Radio name="t1" label="전체" defaultChecked />
                                <Radio name="t1" label="사용" />
                                <Radio name="t1" label="사용안함" />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p>검색어</p>
                            <Input placeholder="검색어를 입력하세요" size="l" />
                        </li>
                        <li className="col-span-2">
                            <p>기간</p>
                            <div className="flex items-center gap-2">
                                <SelectBasic placeholder="작성일시" size="m" />
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

                <div className="grow flex flex-col">
                    <div className="flex items-center">
                        <Button type="black" size="m" className="ml-auto">
                            등록
                        </Button>
                    </div>
                    <div className="flex items-center min-h-[2.5rem] mt-2">
                        <p className="h4">
                            총 <span className="text-green">231</span>건
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

                        <SelectBasic
                            size="m"
                            placeholder="50개씩 보기"
                            className="ml-auto"
                        />
                    </div>
                    <div className="table-hscroll mt-2">
                        <div className="table-grid grow">
                            <table>
                                <colgroup>
                                    <col width="60px" />
                                    <col width="auto" />
                                    <col width="auto" />
                                    <col width="auto" />
                                    <col width="20%" />
                                    <col width="auto" />
                                    <col width="auto" />
                                    <col width="320px" />
                                    <col width="180px" />
                                    <col width="180px" />
                                    <col width="20%" />
                                    <col width="auto" />
                                    <col width="180px" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">쿠폰번호</th>
                                        <th scope="col">사용여부</th>
                                        <th scope="col">진행상태</th>
                                        <th scope="col">쿠폰명</th>
                                        <th scope="col">쿠폰유형</th>
                                        <th scope="col">할인율/금액</th>
                                        <th scope="col">유효기간</th>
                                        <th scope="col">발급시작일</th>
                                        <th scope="col">발급종료일</th>
                                        <th scope="col">발급현황(발급/사용)</th>
                                        <th scope="col">작성자</th>
                                        <th scope="col">작성일시</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>10</td>
                                        <td>PF9162246354</td>
                                        <td>사용</td>
                                        <td>진행중</td>
                                        <td>
                                            <button type="button">
                                                <span className="underline text-green">
                                                    쿠폰명이 노출됩니다
                                                </span>
                                            </button>
                                        </td>
                                        <td>등급별쿠폰</td>
                                        <td>200원</td>
                                        <td>
                                            yyyy-mm-dd 00:00 ~ yyyy-mm-dd 00:00
                                        </td>
                                        <td>yyyy-mm-dd 00:00</td>
                                        <td>yyyy-mm-dd 00:00</td>
                                        <td>
                                            <div className="flex flex-wrap justify-center items-center gap-2">
                                                <p>
                                                    200매/
                                                    <span className="text-red">
                                                        30
                                                    </span>
                                                    매
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        type="outline"
                                                        size="s"
                                                    >
                                                        현황조회
                                                    </Button>
                                                    <Button
                                                        type="black"
                                                        size="s"
                                                    >
                                                        QR코드
                                                    </Button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>김파프&#40;adminid&#41;</td>
                                        <td>yyyy-mm-dd 00:00</td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>PF9162246354</td>
                                        <td>사용</td>
                                        <td>진행중</td>
                                        <td>
                                            <button type="button">
                                                <span className="underline text-green">
                                                    쿠폰명이 노출됩니다
                                                </span>
                                            </button>
                                        </td>
                                        <td>등급별쿠폰</td>
                                        <td>200원</td>
                                        <td>
                                            yyyy-mm-dd 00:00 ~ yyyy-mm-dd 00:00
                                        </td>
                                        <td>yyyy-mm-dd 00:00</td>
                                        <td>yyyy-mm-dd 00:00</td>
                                        <td>
                                            <div className="flex flex-wrap justify-center items-center gap-2">
                                                <p>
                                                    200매/
                                                    <span className="text-red">
                                                        30
                                                    </span>
                                                    매
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        type="outline"
                                                        size="s"
                                                    >
                                                        현황조회
                                                    </Button>
                                                    <Button
                                                        type="black"
                                                        size="s"
                                                    >
                                                        QR코드
                                                    </Button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>김파프&#40;adminid&#41;</td>
                                        <td>yyyy-mm-dd 00:00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="table-bottom">
                        <Paging />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
