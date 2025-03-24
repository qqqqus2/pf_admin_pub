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

export default function BO033001() {
    return (
        <DefaultLayout>
            <Topbar
                title="배정자 공유현황 관리"
                path={[
                    { text: "홈", url: "/" },
                    { text: "파트너/시설관리", url: "/" },
                    { text: "배정자 공유현황 관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                {/* search box */}
                <div className="search-box relative">
                    <ul>
                        <li className="col-span-2">
                            <p>파트너</p>
                            <SelectBasic placeholder="전체" size="m" />
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
                                <FormDateRange />
                            </div>
                        </li>
                    </ul>
                    <Button
                        type="green"
                        size="m"
                        className="absolute right-0 bottom-6 mt-0"
                    >
                        검색
                    </Button>
                </div>
                {/* //search box */}

                <div className="grow flex flex-col">
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
                                엑셀 다운로드
                            </Button>
                        </div>

                        <div className="flex items-center gap-2 ml-auto">
                            <SelectBasic placeholder="최근등록순" size="m" />
                            <SelectBasic
                                placeholder="50개씩 보기"
                                size="m"
                                className="w-[9.375rem] "
                            />
                        </div>
                    </div>
                    <div className="table-grid">
                        <table>
                            <colgroup>
                                <col width="60px" />
                                <col width="auto" />
                                <col width="8%" />
                                <col width="auto" />
                                <col width="auto" />
                                <col width="auto" />
                                <col width="auto" />
                                <col width="140px" />
                                <col width="140px" />
                                <col width="140px" />
                                <col width="140px" />
                                <col width="auto" />
                                <col width="auto" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">NO</th>
                                    <th scope="col">파트너명</th>
                                    <th scope="col">배정자번호</th>
                                    <th scope="col">배정자명</th>
                                    <th scope="col">주차장명</th>
                                    <th scope="col">차량번호</th>
                                    <th scope="col">전화번호</th>
                                    <th scope="col">배정시작일</th>
                                    <th scope="col">배정종료일</th>
                                    <th scope="col">누적공유시간</th>
                                    <th scope="col">누적예약시간</th>
                                    <th scope="col">결제금액</th>
                                    <th scope="col">한도금액</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>306</td>
                                    <td>서초구청</td>
                                    <td>8346</td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                김길동
                                            </span>
                                        </button>
                                    </td>
                                    <td>구획4번</td>
                                    <td>22도9382</td>
                                    <td>0102362514</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>00시간00분</td>
                                    <td>00시간00분</td>
                                    <td>0</td>
                                    <td>90,000</td>
                                </tr>
                                <tr class="bg-cell-red">
                                    <td className=""></td>
                                    <td className=""></td>
                                    <td className=""></td>
                                    <td className=""></td>
                                    <td className=""></td>
                                    <td className=""></td>
                                    <td className=""></td>
                                    <td className=""></td>
                                    <td className=""></td>
                                    <td className="">288시간45분</td>
                                    <td className="">00시간19분</td>
                                    <td className="">13,500</td>
                                    <td className="">420,000</td>
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
