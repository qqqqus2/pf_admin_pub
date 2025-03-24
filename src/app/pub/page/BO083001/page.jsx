import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Checkbox from "@pub/components/Form/Check";
import Radio from "@pub/components/Form/Radio";
import Paging from "@pub/components/Grid/Paging";
import Input from "@pub/components/Form/Input";
import Toggle from "@pub/components/Form/Toggle";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";

export default function BO083001() {
    return (
        <DefaultLayout>
            <Topbar
                title="공통코드관리"
                tip="공통코드 목록을 확인하고 수정을 합니다. (단, 사용여부는 영향도를 반드시 고려해야 합니다)"
                path={[
                    { text: "홈", url: "/" },
                    { text: "관리자설정관리", url: "/" },
                    { text: "공통코드관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                {/* search box */}
                <div className="search-box">
                    <ul>
                        <li className="col-span-2">
                            <p>사용여부</p>
                            <div className="flex items-center gap-3">
                                <Radio name="f1" label="전체" defaultChecked />
                                <Radio name="f1" label="사용(Y)" />
                                <Radio name="f1" label="사용안함(N)" />
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
                    <div className="search-btn">
                        <Button type="green" size="m">
                            검색
                        </Button>
                    </div>
                </div>
                {/* //search box */}

                <div className="grow flex flex-col">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Button type="outline" size="m">
                                선택미사용
                            </Button>
                            <Button type="outline" size="m">
                                전체미사용
                            </Button>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button type="blue" size="m">
                                저장
                            </Button>
                            <Button type="black" size="m">
                                등록
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center min-h-[2.5rem] mt-4">
                        <p className="h4">
                            총 <span className="text-green">231</span>건
                        </p>
                        <div className="grid grid-cols-[9.375rem_9.375rem] gap-2 ml-auto">
                            <SelectBasic placeholder="최근 등록순" />
                            <SelectBasic placeholder="50개씩 보기" />
                        </div>
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
                                    <th scope="col">사용여부</th>
                                    <th scope="col">코드명&#40;한글&#41;</th>
                                    <th scope="col">코드명&#40;영문&#41;</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">코드내용</th>
                                    <th scope="col">정렬</th>
                                    <th scope="col">서브코드수</th>
                                    <th scope="col">등록일자</th>
                                    <th scope="col">저장/수정</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-cell-blue">
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>
                                        <Toggle />
                                    </td>
                                    <td>
                                        <Input />
                                    </td>
                                    <td>
                                        <Input />
                                    </td>
                                    <td>
                                        <Input />
                                    </td>
                                    <td>
                                        <Input />
                                    </td>
                                    <td>
                                        <Input />
                                    </td>
                                    <td></td>
                                    <td>2024-10-14</td>
                                    <td>
                                        <div className="inline-flex items-center gap-2">
                                            <Button type="outline" size="s">
                                                취소
                                            </Button>
                                            <Button type="black" size="s">
                                                저장
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>
                                        <Toggle checked={false} />
                                    </td>
                                    <td>주차장구분코드</td>
                                    <td>INFO_UDT_TP_CODE</td>
                                    <td>02</td>
                                    <td>전체정보</td>
                                    <td>2</td>
                                    <td>
                                        <button type="button">
                                            <span className="underline">0</span>
                                        </button>
                                    </td>
                                    <td>2024-10-14</td>
                                    <td>
                                        <Button type="black" size="s">
                                            수정
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>
                                        <Toggle />
                                    </td>
                                    <td>회원정보구분코드</td>
                                    <td>INFO_UDT_TP_CODE</td>
                                    <td>01</td>
                                    <td>회원정보</td>
                                    <td>1</td>
                                    <td>
                                        <button type="button">
                                            <span className="underline">0</span>
                                        </button>
                                    </td>
                                    <td>2024-10-14</td>
                                    <td>
                                        <Button type="black" size="s">
                                            수정
                                        </Button>
                                    </td>
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
