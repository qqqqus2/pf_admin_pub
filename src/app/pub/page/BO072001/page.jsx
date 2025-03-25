import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import Checkbox from "@pub/components/Form/Check";
import Input from "@pub/components/Form/Input";
import Paging from "@pub/components/Grid/Paging";
import SelectBasic from "@pub/components/Form/Select";
import Flag from "@pub/components/Flag";
import FormDate from "@pub/components/Form/Date";
import IcExcel from "@/assets/icons/ico_excel.svg";
import IcFile from "@/assets/icons/ico_file.svg";

export default function BO072001() {
    return (
        <DefaultLayout>
            <Topbar
                title="정산 관리"
                path={[
                    { text: "홈", url: "/" },
                    { text: "정산관리", url: "/" },
                    { text: "정산 관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                {/* search box */}
                <div className="search-box relative">
                    <ul>
                        <li>
                            <p>결제월</p>
                            <FormDate
                                size="m"
                                selected={new Date()}
                                dateFormat="yyyy-MM"
                            />
                        </li>
                        <li>
                            <p>상태</p>
                            <div className="flex items-center gap-3">
                                <Checkbox
                                    size="s"
                                    label="전체"
                                    defaultChecked
                                />
                                <Checkbox label="확인요청" />
                                <Checkbox label="반려" />
                                <Checkbox label="승인" />
                                <Checkbox label="정산확정" />
                            </div>
                        </li>
                        <li>
                            <p>주차장상태</p>
                            <div className="flex items-center gap-3">
                                <Checkbox
                                    size="s"
                                    label="전체"
                                    defaultChecked
                                />
                                <Checkbox label="정보등록중" />
                                <Checkbox label="등록완료" />
                                <Checkbox label="서비스중" />
                                <Checkbox label="서비스만료예정" />
                                <Checkbox label="정보제공" />
                            </div>
                        </li>
                        <li>
                            <p>주차장종류</p>
                            <div className="flex items-center gap-3">
                                <Checkbox
                                    size="s"
                                    label="전체"
                                    defaultChecked
                                />
                                <Checkbox
                                    size="s"
                                    label="공유&#40;구간제&#41;"
                                />
                                <Checkbox
                                    size="s"
                                    label="공유&#40;구획제&#41;"
                                />
                                <Checkbox size="s" label="공유&#40;노외&#41;" />
                                <Checkbox label="노상공영" />
                                <Checkbox label="노외공영" />
                                <Checkbox label="그린파킹" />
                                <Checkbox label="일반제휴" />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p>검색어</p>
                            <div className="flex items-center gap-2">
                                <SelectBasic placeholder="전체" size="m" />
                                <Input
                                    className="mr-[4.5rem]"
                                    placeholder="검색어를 입력하세요"
                                    size="l"
                                />
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
                    <p className="h4">정산요약</p>
                    <div className="table-grid row-5">
                        <table>
                            <colgroup>
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
                                <col width="auto" />
                                <col width="auto" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">상태</th>
                                    <th scope="col">수입금액</th>
                                    <th scope="col">매출액(공급가액)</th>
                                    <th scope="col">부가세</th>
                                    <th scope="col">유지관리비</th>
                                    <th scope="col">PG수수료</th>
                                    <th scope="col">수익금</th>
                                    <th scope="col">파트너수익</th>
                                    <th scope="col">파트너지급액</th>
                                    <th scope="col">배정자수익</th>
                                    <th scope="col">배정자초과금</th>
                                    <th scope="col">배정자지급액</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>확인요청</td>
                                    <td>
                                        <p className="font-bold text-right">
                                            1,000,000
                                        </p>
                                    </td>
                                    <td>
                                        <p className="text-right">961,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">20,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">10,000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>확인요청</td>
                                    <td>
                                        <p className="font-bold text-right">
                                            1,000,000
                                        </p>
                                    </td>
                                    <td>
                                        <p className="text-right">961,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">20,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">10,000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>확인요청</td>
                                    <td>
                                        <p className="font-bold text-right">
                                            1,000,000
                                        </p>
                                    </td>
                                    <td>
                                        <p className="text-right">961,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">20,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">10,000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>확인요청</td>
                                    <td>
                                        <p className="font-bold text-right">
                                            1,000,000
                                        </p>
                                    </td>
                                    <td>
                                        <p className="text-right">961,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">20,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">10,000</p>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot className="bg-cell-green">
                                <tr>
                                    <td>합계</td>
                                    <td>
                                        <p className="font-bold text-right">
                                            1,000,000
                                        </p>
                                    </td>
                                    <td>
                                        <p className="text-right">961,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">20,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">1,000</p>
                                    </td>
                                    <td>
                                        <p className="text-right">10,000</p>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div className="grow flex flex-col">
                    <div className="flex items-center">
                        <Button type="outline" size="m">
                            대사 전 되돌리기
                        </Button>
                        <Button type="black" size="m" className="ml-auto">
                            정산확정
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
                            <Button type="outline" size="m" className="ml-2">
                                <IcFile />
                                정산보고서
                            </Button>
                            <Button type="outline" size="m" className="ml-2">
                                <IcFile />
                                주차장별 정산요약
                            </Button>
                        </div>
                        <div className="flex items-center gap-2 ml-auto">
                            <SelectBasic
                                size="m"
                                placeholder="50개씩 보기"
                                className=""
                            />
                        </div>
                    </div>
                    <div className="table-hscroll mt-4">
                        <div className="table-grid row-10">
                            <table>
                                <colgroup>
                                    <col width="60px" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th scope="col">
                                            <Checkbox />
                                        </th>
                                        <th scope="col">상태</th>
                                        <th scope="col">파트너 구분</th>
                                        <th scope="col">파트너명</th>
                                        <th scope="col">주차권종류</th>
                                        <th scope="col">주차권명</th>
                                        <th scope="col">배정자명</th>
                                        <th scope="col">배정자 차량번호</th>
                                        <th scope="col">배정자 휴대폰번호</th>
                                        <th scope="col">배정시작일</th>
                                        <th scope="col">배정종료일</th>
                                        <th scope="col">서비스 게시일</th>
                                        <th scope="col">주차장명</th>
                                        <th scope="col">주차장상태</th>
                                        <th scope="col">주차장종류</th>
                                        <th scope="col">계약면수</th>
                                        <th scope="col">운영면수</th>
                                        <th scope="col">운영율</th>
                                        <th scope="col">파트너 정산비율</th>
                                        <th scope="col">배정자 정산 비율</th>
                                        <th scope="col">소득세 여부</th>
                                        <th scope="col">수입금액</th>
                                        <th scope="col">매출액</th>
                                        <th scope="col">부가세</th>
                                        <th scope="col">PG수수료</th>
                                        <th scope="col">유지관리비</th>
                                        <th scope="col">수익</th>
                                        <th scope="col">파트너 수익</th>
                                        <th scope="col">소득세액</th>
                                        <th scope="col">파트너 지급액</th>
                                        <th scope="col">배정자 수익</th>
                                        <th scope="col">배정자 초과금</th>
                                        <th scope="col">배정자 실 입금금액</th>
                                        <th scope="col">PG수수료 면제 여부</th>
                                        <th scope="col">배정자 한도금액</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="">
                                        <td className="">
                                            <Checkbox />
                                        </td>
                                        <td className="">
                                            <Flag
                                                type="gray"
                                                size="s"
                                                label="확인요청"
                                            />
                                        </td>
                                        <td className="">파트너</td>
                                        <td className="">(주)어반포트</td>
                                        <td className="">-</td>
                                        <td className="">-</td>
                                        <td className="">-</td>
                                        <td className="">-</td>
                                        <td className="">-</td>
                                        <td className="">-</td>
                                        <td className="">-</td>
                                        <td className="">2023-03-06</td>
                                        <td className="">
                                            <button>
                                                <span class="underline text-green">
                                                    광화문 S타워 주차장
                                                </span>
                                            </button>
                                        </td>
                                        <td className="">서비스중</td>
                                        <td className="">일반제휴</td>
                                        <td className="">10</td>
                                        <td className="">0</td>
                                        <td className="">0%</td>
                                        <td className="">0%</td>
                                        <td className="">0%</td>
                                        <td className="">N</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className=""></td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">N</td>
                                        <td className="">0</td>
                                    </tr>
                                    <tr className="">
                                        <td className="">
                                            <Checkbox />
                                        </td>
                                        <td className="">
                                            <Flag
                                                type="gray"
                                                size="s"
                                                label="확인요청"
                                            />
                                        </td>
                                        <td className="">파트너</td>
                                        <td className="">(주)어반포트</td>
                                        <td className="">-</td>
                                        <td className="">-</td>
                                        <td className="">-</td>
                                        <td className="">-</td>
                                        <td className="">-</td>
                                        <td className="">-</td>
                                        <td className="">-</td>
                                        <td className="">2023-03-06</td>
                                        <td className="">
                                            <button>
                                                <span class="underline text-green">
                                                    광화문 S타워 주차장
                                                </span>
                                            </button>
                                        </td>
                                        <td className="">서비스중</td>
                                        <td className="">일반제휴</td>
                                        <td className="">10</td>
                                        <td className="">0</td>
                                        <td className="">0%</td>
                                        <td className="">0%</td>
                                        <td className="">0%</td>
                                        <td className="">N</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className=""></td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">N</td>
                                        <td className="">0</td>
                                    </tr>
                                    <tr className="">
                                        <td className="">
                                            <Checkbox />
                                        </td>
                                        <td className="">
                                            <Flag
                                                type="gray"
                                                size="s"
                                                label="확인요청"
                                            />
                                        </td>
                                        <td className="">파트너</td>
                                        <td className="">(주)어반포트</td>
                                        <td className="">-</td>
                                        <td className="">-</td>
                                        <td className="">-</td>
                                        <td className="">-</td>
                                        <td className="">-</td>
                                        <td className="">-</td>
                                        <td className="">-</td>
                                        <td className="">2023-03-06</td>
                                        <td className="">
                                            <button>
                                                <span class="underline text-green">
                                                    광화문 S타워 주차장
                                                </span>
                                            </button>
                                        </td>
                                        <td className="">서비스중</td>
                                        <td className="">일반제휴</td>
                                        <td className="">10</td>
                                        <td className="">0</td>
                                        <td className="">0%</td>
                                        <td className="">0%</td>
                                        <td className="">0%</td>
                                        <td className="">N</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className=""></td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">N</td>
                                        <td className="">0</td>
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
