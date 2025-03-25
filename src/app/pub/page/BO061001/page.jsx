import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Checkbox from "@pub/components/Form/Check";
import Radio from "@pub/components/Form/Radio";
import Input from "@pub/components/Form/Input";
import Paging from "@pub/components/Grid/Paging";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";
import IcInfo from "@/assets/icons/ico_circle_info.svg";
import IcExcel from "@/assets/icons/ico_excel.svg";

export default function BO061001() {
    return (
        <DefaultLayout>
            <Topbar
                title="공유신청 관리"
                tip="주차공유 중 개인소유주차공간에 대해 신청을 확인하고 관리합니다."
                path={[
                    { text: "홈", url: "/" },
                    { text: "문의관리", url: "/" },
                    { text: "공유신청 관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                {/* search box */}
                <div className="search-box relative">
                    <ul>
                        <li>
                            <p className="inline-flex items-center gap-2">
                                신청유형
                                <span
                                    data-tooltip-id="tooltip"
                                    data-tooltip-html="신청유형"
                                >
                                    <IcInfo />
                                </span>
                            </p>
                            <div className="flex items-center gap-3">
                                <Radio name="t1" label="전체" defaultChecked />
                                <Radio name="t1" label="답변대기" />
                                <Radio name="t1" label="답변완료" />
                            </div>
                        </li>
                        <li>
                            <p className="inline-flex items-center gap-2">
                                검토결과
                                <span
                                    data-tooltip-id="tooltip"
                                    data-tooltip-html="검토결과"
                                >
                                    <IcInfo />
                                </span>
                            </p>
                            <div className="flex items-center gap-3">
                                <Checkbox
                                    size="s"
                                    label="전체"
                                    defaultChecked
                                />
                                <Checkbox label="검토중" />
                                <Checkbox label="상담중" />
                                <Checkbox label="계약진행중" />
                                <Checkbox label="계약완료" />
                                <Checkbox label="반려" />
                            </div>
                        </li>
                        <li>
                            <p className="inline-flex items-center gap-2">
                                신청지역
                                <span
                                    data-tooltip-id="tooltip"
                                    data-tooltip-html="신청지역"
                                >
                                    <IcInfo />
                                </span>
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
                        <li>
                            <p className="inline-flex items-center gap-2">
                                요금방식
                                <span
                                    data-tooltip-id="tooltip"
                                    data-tooltip-html="요금방식"
                                >
                                    <IcInfo />
                                </span>
                            </p>
                            <div className="flex items-center gap-3">
                                <Checkbox
                                    size="s"
                                    label="전체"
                                    defaultChecked
                                />
                                <Checkbox label="시간권" />
                                <Checkbox label="당일권" />
                                <Checkbox label="월주차" />
                                <Checkbox label="기타" />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p>검색어</p>
                            <Input placeholder="검색어를 입력하세요" size="l" />
                        </li>
                        <li className="col-span-2">
                            <p>등록일</p>
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
                    <div className="flex items-center">
                        <Button type="blue" size="m" className="ml-auto">
                            저장
                        </Button>
                    </div>
                    <div className="flex items-center min-h-[2.5rem] mt-4">
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
                    <div className="table-grid row-10 mt-4">
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
                                <col width="180px" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">
                                        <Checkbox />
                                    </th>
                                    <th scope="col">신청번호</th>
                                    <th scope="col">신청유형</th>
                                    <th scope="col">시/도</th>
                                    <th scope="col">구/시</th>
                                    <th scope="col">요금방식</th>
                                    <th scope="col">신청자</th>
                                    <th scope="col">검토결과</th>
                                    <th scope="col">담당자</th>
                                    <th scope="col">검토일시</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                Q12345672
                                            </span>
                                        </button>
                                    </td>
                                    <td>개인주차공간</td>
                                    <td>경기도</td>
                                    <td>성남시</td>
                                    <td>시간권</td>
                                    <td>010-1234-5678</td>
                                    <td>검토중</td>
                                    <td>
                                        <SelectBasic placeholder="담당자" />
                                    </td>
                                    <td>2024-10-14 14:38</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                Q12345672
                                            </span>
                                        </button>
                                    </td>
                                    <td>개인주차공간</td>
                                    <td>경기도</td>
                                    <td>성남시</td>
                                    <td>시간권</td>
                                    <td>010-1234-5678</td>
                                    <td>검토중</td>
                                    <td>
                                        <SelectBasic placeholder="담당자" />
                                    </td>
                                    <td>2024-10-14 14:38</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                Q12345672
                                            </span>
                                        </button>
                                    </td>
                                    <td>개인주차공간</td>
                                    <td>경기도</td>
                                    <td>성남시</td>
                                    <td>시간권</td>
                                    <td>010-1234-5678</td>
                                    <td>검토중</td>
                                    <td>
                                        <SelectBasic placeholder="담당자" />
                                    </td>
                                    <td>2024-10-14 14:38</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                Q12345672
                                            </span>
                                        </button>
                                    </td>
                                    <td>개인주차공간</td>
                                    <td>경기도</td>
                                    <td>성남시</td>
                                    <td>시간권</td>
                                    <td>010-1234-5678</td>
                                    <td>검토중</td>
                                    <td>
                                        <SelectBasic placeholder="담당자" />
                                    </td>
                                    <td>2024-10-14 14:38</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                Q12345672
                                            </span>
                                        </button>
                                    </td>
                                    <td>개인주차공간</td>
                                    <td>경기도</td>
                                    <td>성남시</td>
                                    <td>시간권</td>
                                    <td>010-1234-5678</td>
                                    <td>검토중</td>
                                    <td>
                                        <SelectBasic placeholder="담당자" />
                                    </td>
                                    <td>2024-10-14 14:38</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                Q12345672
                                            </span>
                                        </button>
                                    </td>
                                    <td>개인주차공간</td>
                                    <td>경기도</td>
                                    <td>성남시</td>
                                    <td>시간권</td>
                                    <td>010-1234-5678</td>
                                    <td>검토중</td>
                                    <td>
                                        <SelectBasic placeholder="담당자" />
                                    </td>
                                    <td>2024-10-14 14:38</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                Q12345672
                                            </span>
                                        </button>
                                    </td>
                                    <td>개인주차공간</td>
                                    <td>경기도</td>
                                    <td>성남시</td>
                                    <td>시간권</td>
                                    <td>010-1234-5678</td>
                                    <td>검토중</td>
                                    <td>
                                        <SelectBasic placeholder="담당자" />
                                    </td>
                                    <td>2024-10-14 14:38</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                Q12345672
                                            </span>
                                        </button>
                                    </td>
                                    <td>개인주차공간</td>
                                    <td>경기도</td>
                                    <td>성남시</td>
                                    <td>시간권</td>
                                    <td>010-1234-5678</td>
                                    <td>검토중</td>
                                    <td>
                                        <SelectBasic placeholder="담당자" />
                                    </td>
                                    <td>2024-10-14 14:38</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                Q12345672
                                            </span>
                                        </button>
                                    </td>
                                    <td>개인주차공간</td>
                                    <td>경기도</td>
                                    <td>성남시</td>
                                    <td>시간권</td>
                                    <td>010-1234-5678</td>
                                    <td>검토중</td>
                                    <td>
                                        <SelectBasic placeholder="담당자" />
                                    </td>
                                    <td>2024-10-14 14:38</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                Q12345672
                                            </span>
                                        </button>
                                    </td>
                                    <td>개인주차공간</td>
                                    <td>경기도</td>
                                    <td>성남시</td>
                                    <td>시간권</td>
                                    <td>010-1234-5678</td>
                                    <td>검토중</td>
                                    <td>
                                        <SelectBasic placeholder="담당자" />
                                    </td>
                                    <td>2024-10-14 14:38</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                Q12345672
                                            </span>
                                        </button>
                                    </td>
                                    <td>개인주차공간</td>
                                    <td>경기도</td>
                                    <td>성남시</td>
                                    <td>시간권</td>
                                    <td>010-1234-5678</td>
                                    <td>검토중</td>
                                    <td>
                                        <SelectBasic placeholder="담당자" />
                                    </td>
                                    <td>2024-10-14 14:38</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                Q12345672
                                            </span>
                                        </button>
                                    </td>
                                    <td>개인주차공간</td>
                                    <td>경기도</td>
                                    <td>성남시</td>
                                    <td>시간권</td>
                                    <td>010-1234-5678</td>
                                    <td>검토중</td>
                                    <td>
                                        <SelectBasic placeholder="담당자" />
                                    </td>
                                    <td>2024-10-14 14:38</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                Q12345672
                                            </span>
                                        </button>
                                    </td>
                                    <td>개인주차공간</td>
                                    <td>경기도</td>
                                    <td>성남시</td>
                                    <td>시간권</td>
                                    <td>010-1234-5678</td>
                                    <td>검토중</td>
                                    <td>
                                        <SelectBasic placeholder="담당자" />
                                    </td>
                                    <td>2024-10-14 14:38</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                Q12345672
                                            </span>
                                        </button>
                                    </td>
                                    <td>개인주차공간</td>
                                    <td>경기도</td>
                                    <td>성남시</td>
                                    <td>시간권</td>
                                    <td>010-1234-5678</td>
                                    <td>검토중</td>
                                    <td>
                                        <SelectBasic placeholder="담당자" />
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
        </DefaultLayout>
    );
}
