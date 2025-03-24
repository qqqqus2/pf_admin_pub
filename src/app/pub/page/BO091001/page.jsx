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

export default function BO091001() {
    return (
        <DefaultLayout>
            <Topbar
                title="접속이력관리"
                path={[
                    { text: "홈", url: "/" },
                    { text: "이력관리", url: "/" },
                    { text: "접속이력관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                {/* search box */}
                <div className="search-box">
                    <ul>
                        <li className="col-span-2">
                            <p>구분</p>
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
                            <div className="flex items-center gap-2">
                                <SelectBasic placeholder="전체" size="m" />
                                <Input
                                    placeholder="검색어를 입력하세요."
                                    size="l"
                                />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p>최종접속일</p>
                            <div className="flex items-center gap-2">
                                <FormDateRange />
                                <ButtonGroup />
                            </div>
                        </li>
                    </ul>
                    <div className="search-btn">
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
                        <SelectBasic
                            placeholder="50개씩 보기"
                            className="w-[9.375rem] ml-auto"
                        />
                    </div>
                    <div className="table-grid mt-4">
                        <table>
                            <colgroup>
                                <col width="60px" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">
                                        <Checkbox />
                                    </th>
                                    <th scope="col">구분</th>
                                    <th scope="col">아이디</th>
                                    <th scope="col">이름</th>
                                    <th scope="col">소속회사/소속부서</th>
                                    <th scope="col">접속횟수</th>
                                    <th scope="col">최근접속IP</th>
                                    <th scope="col">최초접속일시</th>
                                    <th scope="col">최종접속일시</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>관리자</td>
                                    <td>
                                        <button type="button">
                                            <span className="underline">
                                                Parking00
                                            </span>
                                        </button>
                                    </td>
                                    <td>김길동</td>
                                    <td>사업실</td>
                                    <td>00</td>
                                    <td>111.11.111.111</td>
                                    <td>2024-10-14 14:38</td>
                                    <td>2024-10-14 14:38</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="table-bottom">
                        <Paging />
                        <Button
                            type="outline"
                            size="m"
                            className="justify-self-end"
                        >
                            <IcExcel />
                            엑셀다운로드
                        </Button>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
