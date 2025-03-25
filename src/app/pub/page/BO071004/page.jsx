import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import Radio from "@pub/components/Form/Radio";
import Checkbox from "@pub/components/Form/Check";
import Input from "@pub/components/Form/Input";
import Paging from "@pub/components/Grid/Paging";
import SelectBasic from "@pub/components/Form/Select";
import FormDate from "@pub/components/Form/Date";
import IcExcel from "@/assets/icons/ico_excel.svg";

export default function BO071004() {
    return (
        <DefaultLayout>
            <Topbar
                title="주차장 결제 관리"
                path={[
                    { text: "홈", url: "/" },
                    { text: "정산관리", url: "/" },
                    { text: "주차장 결제 관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                {/* search box */}
                <div className="search-box relative">
                    <ul>
                        <li>
                            <p>결제일</p>
                            <FormDate size="m" selected={new Date()} />
                        </li>
                        <li>
                            <p>결제건수유무</p>
                            <div className="flex items-center gap-3">
                                <Radio name="t1" label="전체" defaultChecked />
                                <Radio name="t1" label="Y" />
                                <Radio name="t1" label="N" />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p>주차장상태</p>
                            <div className="flex items-center gap-3">
                                <Checkbox label="전체" defaultChecked />
                                <Checkbox label="정보등록중" />
                                <Checkbox label="등록완료" />
                                <Checkbox label="서비스중" />
                                <Checkbox label="서비스만료예정" />
                                <Checkbox label="정보제공" />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p>주차장종류</p>
                            <div className="flex items-center gap-3">
                                <Checkbox label="전체" defaultChecked />
                                <Checkbox label="공유&#40;구간제&#41;" />
                                <Checkbox label="공유&#40;구획제&#41;" />
                                <Checkbox label="공유&#40;노외주차장&#41;" />
                                <Checkbox label="노상공영" />
                                <Checkbox label="노외공영" />
                                <Checkbox label="일반제휴" />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p>검색어</p>
                            <div className="flex items-center gap-2 mr-[4.7rem]">
                                <SelectBasic placeholder="전체" size="m" />
                                <Input
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

                <div className="grow flex flex-col">
                    <p className="h4">결제현황</p>
                    <div className="table-basic mt-2">
                        <table>
                            <colgroup>
                                <col />
                                <col />
                                <col width="10%" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">결제건수</th>
                                    <th scope="col">수입금액</th>
                                    <th scope="col">
                                        매출액&#40;공급가액&#41;
                                    </th>
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
                                    <td>
                                        <p className="text-right">3,000</p>
                                    </td>
                                    <td>
                                        <p className="text-green text-right">
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
                        </table>
                    </div>
                </div>
                <div className="grow flex flex-col">
                    <div className="flex items-center">
                        <button
                            type="button"
                            className="btn btn-black btn-m ml-auto"
                        >
                            확인 요청
                        </button>
                    </div>
                    <div className="flex items-center min-h-[2.5rem] my-2">
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
                    <div className="table-hscroll mt-4">
                        <div className="table-grid row-10">
                            <table>
                                <colgroup>
                                    <col width="60px" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>
                                            <Checkbox />
                                        </th>
                                        <th className="">파트너구분</th>
                                        <th className="">파트너명</th>
                                        <th className="">주차권종류</th>
                                        <th className="">주차권명</th>
                                        <th className="">배정자명</th>
                                        <th className="">배정자 차량번호</th>
                                        <th className="">배정자 휴대폰번호</th>
                                        <th className="">배정시작일</th>
                                        <th className="">배정종료일</th>
                                        <th className="">서비스 게시일</th>
                                        <th className="">주차장명</th>
                                        <th className="">주차장상태</th>
                                        <th className="">주차장종류</th>
                                        <th className="">계약면수</th>
                                        <th className="">운영면수</th>
                                        <th className="">운영율</th>
                                        <th className="">파트너 정산비율</th>
                                        <th className="">배정자 정산 비율</th>
                                        <th className="">소득세 여부</th>
                                        <th className="">수입금액</th>
                                        <th className="">매출액</th>
                                        <th className="">부가세</th>
                                        <th className="">PG수수료</th>
                                        <th className="">유지관리비</th>
                                        <th className="">수익</th>
                                        <th className="">파트너 수익</th>
                                        <th className="">소득세액</th>
                                        <th className="">파트너 지급액</th>
                                        <th className="">배정자 수익</th>
                                        <th className="">배정자 초과금</th>
                                        <th className="">배정자 실 입금금액</th>
                                        <th className="">PG수수료 면제 여부</th>
                                        <th className="">배정자 한도금액</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="">
                                        <td>
                                            <Checkbox />
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
                                                <span className="underline text-green">
                                                    삼성동 마에스트로 주차장
                                                </span>
                                            </button>
                                        </td>
                                        <td className="">서비스중</td>
                                        <td className="">일반제휴</td>
                                        <td className="">15</td>
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
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">Y</td>
                                        <td className=""></td>
                                    </tr>
                                    <tr className="">
                                        <td>
                                            <Checkbox />
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
                                                <span className="underline text-green">
                                                    삼성동 마에스트로 주차장
                                                </span>
                                            </button>
                                        </td>
                                        <td className="">서비스중</td>
                                        <td className="">일반제휴</td>
                                        <td className="">15</td>
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
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">0</td>
                                        <td className="">Y</td>
                                        <td className=""></td>
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
