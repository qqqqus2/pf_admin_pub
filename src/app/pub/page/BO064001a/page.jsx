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

export default function BO064001a() {
    return (
        <DefaultLayout>
            <Topbar
                title="제보 관리"
                tip="주차장정보에 대해 일부 수정 요청하는 수정제보와 APP에 없는 신규 주차장에 대한 제보를 확인하고 관리합니다."
                path={[
                    { text: "홈", url: "/" },
                    { text: "문의관리", url: "/" },
                    { text: "제보 관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                {/* search box */}
                <div className="search-box relative">
                    <ul>
                        <li>
                            <p>제보유형</p>
                            <div className="flex items-center gap-3">
                                <Radio name="t1" label="전체" defaultChecked />
                                <Radio name="t1" label="수정" />
                                <Radio name="t1" label="신규" />
                            </div>
                        </li>
                        <li>
                            <p>검토 결과</p>
                            <div className="flex items-center gap-3">
                                <Radio name="t3" label="전체" defaultChecked />
                                <Radio name="t3" label="반영필요" />
                                <Radio name="t3" label="미반영" />
                                <Radio name="t3" label="기타" />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p>제보지역</p>
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
                            placeholder="50개씩 보기"
                            className="ml-auto"
                        />
                    </div>
                    <div className="table-grid mt-4">
                        <table>
                            <colgroup>
                                <col width="60px" />
                                <col width="auto" />
                                <col width="auto" />
                                <col width="15%" />
                                <col width="8%" />
                                <col width="8%" />
                                <col width="5%" />
                                <col width="auto" />
                                <col width="180px" />
                                <col width="auto" />
                                <col width="180px" />
                                <col width="auto" />
                                <col width="auto" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">제보접수번호</th>
                                    <th scope="col">제보유형</th>
                                    <th scope="col">주차장명</th>
                                    <th scope="col">시/도</th>
                                    <th scope="col">구/시</th>
                                    <th scope="col">사진첨부</th>
                                    <th scope="col">제보자</th>
                                    <th scope="col">제보일시</th>
                                    <th scope="col">검토자</th>
                                    <th scope="col">검토일시</th>
                                    <th scope="col">검토결과</th>
                                    <th scope="col">포인트</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>42</td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                1075
                                            </span>
                                        </button>
                                    </td>
                                    <td>수정</td>
                                    <td>블루베리공유(노외)</td>
                                    <td>서울시</td>
                                    <td>송파구</td>
                                    <td>1장</td>
                                    <td>홍길동</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>박희선(sunpark)</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>반영필요</td>
                                    <td>지급</td>
                                </tr>
                                <tr>
                                    <td>43</td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                1075
                                            </span>
                                        </button>
                                    </td>
                                    <td>수정</td>
                                    <td>블루베리공유(노외)</td>
                                    <td>서울시</td>
                                    <td>송파구</td>
                                    <td>1장</td>
                                    <td>홍길동</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>박희선(sunpark)</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>반영필요</td>
                                    <td>지급</td>
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
