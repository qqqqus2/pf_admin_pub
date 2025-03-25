import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Paging from "@pub/components/Grid/Paging";
import Input from "@pub/components/Form/Input";
import Checkbox from "@pub/components/Form/Check";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";
import IcExcel from "@/assets/icons/ico_excel.svg";
import Radio from "@pub/components/Form/Radio";

export default function BO094001() {
    return (
        <DefaultLayout>
            <Topbar
                title="주차권 요금변경 이력 관리"
                path={[
                    { text: "홈", url: "/" },
                    { text: "이력관리", url: "/" },
                    { text: "주차권 요금변경 이력 관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                {/* search box */}
                <div className="search-box relative">
                    <ul>
                        <li>
                            <p>변경자 구분</p>
                            <div className="flex items-center gap-3">
                                <Radio name="t1" label="전체" defaultChecked />
                                <Radio name="t1" label="관리자" />
                                <Radio name="t1" label="파트너" />
                            </div>
                        </li>
                        <li>
                            <p>주차권 종류</p>
                            <div className="flex items-center gap-2">
                                <SelectBasic placeholder="전체" size="m" />
                            </div>
                        </li>

                        <li className="col-span-2">
                            <p>검색어</p>
                            <div className="flex items-center gap-2">
                                <SelectBasic placeholder="전체" size="m" />
                                <Input
                                    placeholder="검색어를 입력하세요."
                                    size="l"
                                />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p>최종수정일</p>
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
                            <Button
                                type="outline"
                                size="m"
                                className="justify-self-end"
                            >
                                <IcExcel />
                                엑셀다운로드
                            </Button>
                        </div>
                        <div className="grid gap-2 ml-auto">
                            <SelectBasic size="m" placeholder="50개씩 보기" />
                        </div>
                    </div>
                    <div className="table-grid mt-2">
                        <table>
                            <colgroup>
                                <col width="60px" />
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
                                    <th scope="col">No</th>
                                    <th scope="col">변경자 구분</th>
                                    <th scope="col">주차권 종류</th>
                                    <th scope="col">파트너명</th>
                                    <th scope="col">변경전</th>
                                    <th scope="col">변경후</th>
                                    <th scope="col">최종수정자</th>
                                    <th scope="col">최종수정일시</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>28</td>
                                    <td>관리자</td>
                                    <td>월주차권</td>
                                    <td>키위_파트너_주차권테스트용</td>
                                    <td>100,000</td>
                                    <td>100</td>
                                    <td>김파프&#40;adminid&#41;</td>
                                    <td>2024-10-14 14:38</td>
                                </tr>
                                <tr>
                                    <td>28</td>
                                    <td>관리자</td>
                                    <td>월주차권</td>
                                    <td>키위_파트너_주차권테스트용</td>
                                    <td>100,000</td>
                                    <td>100</td>
                                    <td>김파프&#40;adminid&#41;</td>
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
