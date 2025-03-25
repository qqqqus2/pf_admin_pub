import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Checkbox from "@pub/components/Form/Check";
import Radio from "@pub/components/Form/Radio";
import Paging from "@pub/components/Grid/Paging";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";
import IcExcel from "@/assets/icons/ico_excel.svg";

export default function BO052001() {
    return (
        <DefaultLayout>
            <Topbar
                title="포인트관리"
                path={[
                    { text: "홈", url: "/" },
                    { text: "쿠폰 · 포인트관리", url: "/" },
                    { text: "포인트관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                {/* search box */}
                <div className="search-box relative">
                    <ul>
                        <li>
                            <p>구분</p>
                            <div className="flex items-center gap-3">
                                <Checkbox
                                    size="s"
                                    label="전체"
                                    defaultChecked
                                />
                                <Checkbox label="적립" />
                                <Checkbox label="사용" />
                                <Checkbox label="소멸" />
                                <Checkbox label="취소" />
                            </div>
                        </li>
                        <li>
                            <p>유/무상 구분</p>
                            <div className="flex items-center gap-3">
                                <Radio name="f0" label="전체" defaultChecked />
                                <Radio name="f0" label="유상" />
                                <Radio name="f0" label="무상" />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p>종류</p>
                            <div className="flex flex-wrap gap-[1rem_1.25rem]">
                                <Checkbox
                                    size="s"
                                    label="전체"
                                    defaultChecked
                                />
                                <Checkbox label="구매포인트" />
                                <Checkbox label="이벤트포인트" />
                                <Checkbox label="상품권등록" />
                                <Checkbox label="고객보상포인트" />
                                <Checkbox label="배정자정산포인트" />
                                <Checkbox label="제휴포인트" />
                                <Checkbox label="제보포인트" />
                                <Checkbox label="감면포인트전환" />
                                <Checkbox label="상품권전환" />
                                <Checkbox label="파프포인트" />
                            </div>
                        </li>
                        <li>
                            <p>포인트전환여부</p>
                            <div className="flex items-center gap-3">
                                <Radio name="f1" label="전체" defaultChecked />
                                <Radio name="f1" label="전환" />
                                <Radio name="f1" label="미전환" />
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

                <div>
                    <div className="flex items-center min-h-[2.5rem]">
                        <p className="h4">포인트현황</p>
                    </div>
                    <div className="table-basic text-center">
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">적립</th>
                                    <th scope="col">사용</th>
                                    <th scope="col">소멸</th>
                                    <th scope="col">취소</th>
                                    <th scope="col">결제</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <span className="text-green font-medium">
                                            100,000P
                                        </span>
                                    </td>
                                    <td>
                                        <span className="text-red font-medium">
                                            -20,000P
                                        </span>
                                    </td>
                                    <td>
                                        <span className="text-red font-medium">
                                            -10,000P
                                        </span>
                                    </td>
                                    <td>
                                        <span className="text-red font-medium">
                                            -10,000P
                                        </span>
                                    </td>
                                    <td>
                                        <span className="font-bold">
                                            60,000P
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <div className="flex items-center min-h-[2.5rem]">
                        <p className="h4">포인트종류별 적립현황</p>
                    </div>
                    <div className="table-basic text-center">
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">구매포인트</th>
                                    <th scope="col">이벤트포인트</th>
                                    <th scope="col">상품권등록</th>
                                    <th scope="col">고객보상포인트</th>
                                    <th scope="col">배정자정산포인트</th>
                                    <th scope="col">제휴포인트</th>
                                    <th scope="col">제보포인트</th>
                                    <th scope="col">합계</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <span className="font-medium">
                                            8,000P
                                        </span>
                                    </td>
                                    <td>
                                        <span className="font-medium">
                                            8,000P
                                        </span>
                                    </td>
                                    <td>
                                        <span className="font-medium">
                                            2,000P
                                        </span>
                                    </td>
                                    <td>
                                        <span className="font-medium">
                                            50,000P
                                        </span>
                                    </td>
                                    <td>
                                        <span className="font-medium">
                                            30,000P
                                        </span>
                                    </td>
                                    <td>
                                        <span className="font-medium">0P</span>
                                    </td>
                                    <td>
                                        <span className="font-medium">
                                            100,000P
                                        </span>
                                    </td>
                                    <td>
                                        <span className="text-green font-bold">
                                            100,000P
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <div className="flex items-center min-h-[2.5rem]">
                            <p className="h4">배정자포인트 현황</p>
                        </div>
                        <div className="table-basic text-center">
                            <table>
                                <thead>
                                    <tr>
                                        <th scope="col">배정자포인트 합계</th>
                                        <th scope="col">전환포인트</th>
                                        <th scope="col">미전환포인트</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span className="text-green font-medium">
                                                200,000P
                                            </span>
                                        </td>
                                        <td>
                                            <span className="font-medium">
                                                100,000P
                                            </span>
                                        </td>
                                        <td>
                                            <span className="font-medium">
                                                100,000P
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center min-h-[2.5rem]">
                            <p className="h4">전환포인트 현황</p>
                            <p className="text-sm font-medium">
                                상품권전환 지급완료 00건 / 지급대기 00건
                            </p>
                        </div>
                        <div className="table-basic  text-center">
                            <table>
                                <thead>
                                    <tr>
                                        <th scope="col">감면포인트</th>
                                        <th scope="col">상품권</th>
                                        <th scope="col">파프포인트</th>
                                        <th scope="col">합계</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span className="font-medium">
                                                8,000P
                                            </span>
                                        </td>
                                        <td>
                                            <span className="font-medium">
                                                8,000P
                                            </span>
                                        </td>
                                        <td>
                                            <span className="font-medium">
                                                2,000P
                                            </span>
                                        </td>
                                        <td>
                                            <span className="text-green font-medium">
                                                100,000P
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="grow flex flex-col">
                    <div className="flex items-center justify-end gap-2">
                        <Button type="black" size="m">
                            선택지급완료
                        </Button>
                    </div>
                    <div className="flex items-center min-h-[2.5rem] mt-2">
                        <p className="h4">
                            총 <span className="text-green">231</span>건
                        </p>
                        <div className="ml-4">
                            <Button type="outline" size="m">
                                <IcExcel />
                                엑셀다운로드
                            </Button>
                            <Button type="outline" size="m" className="ml-2">
                                <IcExcel />
                                상품권신청정보 다운로드
                            </Button>
                        </div>

                        <SelectBasic
                            size="m"
                            placeholder="50개씩 보기"
                            className="ml-auto"
                        />
                    </div>
                    <div className="table-hscroll">
                        <div className="table-grid mt-2">
                            <table>
                                <colgroup>
                                    <col width="40px" />
                                    <col width="auto" />
                                    <col width="auto" />
                                    <col width="auto" />
                                    <col width="auto" />
                                    <col width="auto" />
                                    <col width="auto" />
                                    <col width="100px" />
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
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th scope="col">
                                            <Checkbox />
                                        </th>
                                        <th scope="col">번호</th>
                                        <th scope="col">구분</th>
                                        <th scope="col">휴대전화번호</th>
                                        <th scope="col">회원구분</th>
                                        <th scope="col">이름</th>
                                        <th scope="col">차량번호</th>
                                        <th scope="col">
                                            적립/사용/소멸/취소일시
                                        </th>
                                        <th scope="col">유/무상</th>
                                        <th scope="col">적립</th>
                                        <th scope="col">사용</th>
                                        <th scope="col">소멸</th>
                                        <th scope="col">취소</th>
                                        <th scope="col">종류</th>
                                        <th scope="col">내용</th>
                                        <th scope="col">관리자 코멘트</th>
                                        <th scope="col">유효기간</th>
                                        <th scope="col">작성자</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Checkbox />
                                        </td>
                                        <td>1</td>
                                        <td>적립</td>
                                        <td>010-1234-5678</td>
                                        <td>배정자</td>
                                        <td>홍*동</td>
                                        <td>25노9939</td>
                                        <td>yyyy.mm.dd hh:mm</td>
                                        <td>무상</td>
                                        <td>50</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>구매포인트</td>
                                        <td>포인트 적립(주차권 구매)</td>
                                        <td>-</td>
                                        <td>
                                            yyyy.mm.dd hh:mm ~ yyyy.mm.dd hh:mm
                                        </td>
                                        <td>-</td>
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
