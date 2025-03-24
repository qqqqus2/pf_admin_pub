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

export default function BO031001() {
    return (
        <DefaultLayout>
            <Topbar
                title="파트너관리"
                path={[
                    { text: "홈", url: "/" },
                    { text: "파트너/시설관리", url: "/" },
                    { text: "파트너관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                {/* search box */}
                <div className="search-box relative">
                    <ul>
                        <li>
                            <p>파트너구분</p>
                            <div className="flex items-center gap-3">
                                <Checkbox label="전체" defaultChecked />
                                <Checkbox label="거주자" />
                                <Checkbox label="파트너" />
                                <Checkbox label="개인" />
                            </div>
                        </li>
                        <li>
                            <p>사업자형태</p>
                            <div className="flex items-center gap-3">
                                <Checkbox label="전체" defaultChecked />
                                <Checkbox label="개인" />
                                <Checkbox label="개인사업자" />
                                <Checkbox label="법인" />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p>진행상태</p>
                            <div className="flex items-center gap-3">
                                <Checkbox label="전체" defaultChecked />
                                <Checkbox label="계약진행중" />
                                <Checkbox label="계약완료" />
                                <Checkbox label="계약만료" />
                                <Checkbox label="계약종료" />
                            </div>
                        </li>

                        <li className="col-span-2">
                            <p>검색어</p>
                            <div className="flex items-center gap-2">
                                <SelectBasic placeholder="전체" size="m" />
                                <Input
                                    placeholder="검색어를 입력하세요"
                                    size="l"
                                />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p>기간</p>
                            <div className="flex items-center gap-2">
                                <SelectBasic placeholder="전체" size="m" />
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
                    <div className="flex justify-end items-center mb-2">
                        <Button type="black" size="m">
                            계약등록
                        </Button>
                    </div>
                    <div className="flex items-center min-h-[2.5rem] mb-2">
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
                        <div className="flex items-center gap-2 ml-auto">
                            <Button type="outline" size="m">
                                <IcExcel />
                                엑셀일괄등록
                            </Button>

                            <SelectBasic placeholder="10개씩 보기" size="m" />
                        </div>
                    </div>
                    <div className="table-grid">
                        <table>
                            <colgroup>
                                <col width="60px" />
                                <col width="auto" />
                                <col width="auto" />
                                <col width="auto" />
                                <col width="auto" />
                                <col width="15%" />
                                <col width="auto" />
                                <col width="220px" />
                                <col width="auto" />
                                <col width="auto" />
                                <col width="auto" />
                                <col width="auto" />
                                <col width="140px" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">NO</th>
                                    <th scope="col">계약번호</th>
                                    <th scope="col">파트너구분</th>
                                    <th scope="col">사업자형태</th>
                                    <th scope="col">진행상태</th>
                                    <th scope="col">파트너명</th>
                                    <th scope="col">계약담당자</th>
                                    <th scope="col">계약기간</th>
                                    <th scope="col">파트너계정수</th>
                                    <th scope="col">주차장등록수</th>
                                    <th scope="col">운영주차연수</th>
                                    <th scope="col">주차권수</th>
                                    <th scope="col">등록일시</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                NNNNN
                                            </span>
                                        </button>
                                    </td>
                                    <td>개인</td>
                                    <td>개인</td>
                                    <td>계약진행중</td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                이동훈
                                            </span>
                                        </button>
                                    </td>
                                    <td>이동훈</td>
                                    <td>2025-03-01 ~ 2025-03-31</td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                0
                                            </span>
                                        </button>
                                    </td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                10
                                            </span>
                                        </button>
                                    </td>

                                    <td>10</td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                10
                                            </span>
                                        </button>
                                    </td>
                                    <td>yyyy-mm-dd 00:00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
