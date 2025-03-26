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
                title="공통 코드 관리"
                tip="공통코드 목록을 확인하고 수정을 합니다. (단, 사용여부는 영향도를 반드시 고려해야 합니다)"
                path={[
                    { text: "홈", url: "/" },
                    { text: "관리자 설정 관리", url: "/" },
                    { text: "공통 코드 관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                {/* search box */}
                <div className="search-box relative">
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
                    <div className="search-btn absolute right-0 bottom-6 mt-0">
                        <Button type="green" size="m">
                            검색
                        </Button>
                    </div>
                </div>
                {/* //search box */}

                <div className="grow flex flex-col">
                    <div className="flex justify-end items-center">
                        <Button type="black" size="m">
                            등록
                        </Button>
                    </div>
                    <div className="flex items-center justify-between min-h-[2.5rem] mt-2">
                        <p className="h4">
                            총 <span className="text-green">231</span>건
                        </p>
                        <div className="flex items-center gap-2">
                            <SelectBasic size="m" placeholder="최근 등록순" />
                            <SelectBasic size="m" placeholder="50개씩 보기" />
                        </div>
                    </div>
                    <div className="table-grid mt-2">
                        <table>
                            <colgroup>
                                <col width="60px" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">사용여부</th>
                                    <th scope="col">코드명&#40;한글&#41;</th>
                                    <th scope="col">코드명&#40;영문&#41;</th>
                                    <th scope="col">코드내용</th>
                                    <th scope="col">서브코드수</th>
                                    <th scope="col">등록일자</th>
                                    <th scope="col">저장/수정</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>11</td>
                                    <td>
                                        <Toggle />
                                    </td>
                                    <td>한글 그룹 코드명</td>
                                    <td>testtest</td>
                                    <td>!!!</td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                0
                                            </span>
                                        </button>
                                    </td>
                                    <td>2024-10-14</td>
                                    <td>
                                        <Button type="outline" size="s">
                                            수정
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>
                                        <Toggle />
                                    </td>
                                    <td>한글 그룹 코드명</td>
                                    <td>testtest</td>
                                    <td>!!!</td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                0
                                            </span>
                                        </button>
                                    </td>
                                    <td>2024-10-14</td>
                                    <td>
                                        <Button type="outline" size="s">
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
