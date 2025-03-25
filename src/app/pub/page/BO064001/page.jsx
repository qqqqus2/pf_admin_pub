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
import IcInfo from "@/assets/icons/ico_circle_info.svg";

export default function BO064001() {
    return (
        <DefaultLayout>
            <Topbar
                title="부정주차신고 관리"
                tip="부정주차신고를 확인하고 부정주차여부를 검토 관리합니다."
                path={[
                    { text: "홈", url: "/" },
                    { text: "문의관리", url: "/" },
                    { text: "부정주차신고 관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                {/* search box */}
                <div className="search-box relative">
                    <ul>
                        <li className="col-span-2">
                            <p className="inline-flex items-center gap-2">
                                신고자 유형
                            </p>
                            <div className="flex items-center gap-3">
                                <Radio name="f1" label="전체" defaultChecked />
                                <Radio name="f1" label="비회원" />
                                <Radio name="f1" label="회원" />
                                <Radio name="f1" label="파트너" />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p className="inline-flex items-center gap-2">
                                검토결과
                            </p>
                            <div className="flex items-center gap-3">
                                <Radio name="f2" label="전체" defaultChecked />
                                <Radio name="f2" label="견인요청" />
                                <Radio name="f2" label="부정주차요금부과" />
                                <Radio name="f2" label="미반영" />
                                <Radio name="f2" label="기타" />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p className="inline-flex items-center gap-2">
                                신고지역
                            </p>
                            <div className="flex items-center gap-2">
                                <SelectBasic placeholder="전체" size="m" />
                                <SelectBasic
                                    placeholder="전체"
                                    size="m"
                                    disabled
                                />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p>검색어</p>
                            <Input placeholder="검색어를 입력하세요" size="l" />
                        </li>
                        <li className="col-span-2">
                            <p>등록일자</p>
                            <div className="flex items-center gap-2">
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
                    <div className="flex items-center min-h-[2.5rem]">
                        <p className="h4">
                            총 <span className="text-green">231</span>건
                        </p>
                        <div className="ml-4">
                            <Button type="outline" size="m">
                                <IcExcel />
                                엑셀다운로드
                            </Button>
                        </div>
                        <SelectBasic
                            size="m"
                            placeholder="10개씩 보기"
                            className="ml-auto"
                        />
                    </div>
                    <div className="table-grid mt-2">
                        <table>
                            <colgroup>
                                <col width="60px" />
                                <col width="auto" />
                                <col width="auto" />
                                <col width="auto" />
                                <col width="18%" />
                                <col width="auto" />
                                <col width="auto" />
                                <col width="auto" />
                                <col width="180px" />
                                <col width="auto" />
                                <col width="180px" />
                                <col width="auto" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">신고접수번호</th>
                                    <th scope="col">신고자 유형</th>
                                    <th scope="col">주차장번호</th>
                                    <th scope="col">주차장명</th>
                                    <th scope="col">구획번호</th>
                                    <th scope="col">신고차량번호</th>
                                    <th scope="col">신고자</th>
                                    <th scope="col">신고일시</th>
                                    <th scope="col">검토자</th>
                                    <th scope="col">컴토일시</th>
                                    <th scope="col">검토결과</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>55</td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                NNNNN
                                            </span>
                                        </button>
                                    </td>
                                    <td>배정자</td>
                                    <td>1022222</td>
                                    <td>
                                        <p className="line-clamp-2">
                                            제보된 주차장명 표기 제보된 주차장명
                                            표기
                                        </p>
                                    </td>
                                    <td>B1-12</td>
                                    <td>49하4567</td>
                                    <td>을지매</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>김파프</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>미반영</td>
                                </tr>
                                <tr>
                                    <td>56</td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                NNNNN
                                            </span>
                                        </button>
                                    </td>
                                    <td>배정자</td>
                                    <td>1022222</td>
                                    <td>
                                        <p className="line-clamp-2">
                                            제보된 주차장명 표기 제보된 주차장명
                                            표기
                                        </p>
                                    </td>
                                    <td>B1-12</td>
                                    <td>49하4567</td>
                                    <td>을지매</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>김파프</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>미반영</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="table-bottom">
                        <Paging />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
