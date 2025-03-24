import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Toggle from "@pub/components/Form/Toggle";
import Paging from "@pub/components/Grid/Paging";
import Radio from "@pub/components/Form/Radio";
import Checkbox from "@pub/components/Form/Check";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";

export default function BO047001() {
    return (
        <DefaultLayout>
            <Topbar
                title="FAQ관리"
                path={[
                    { text: "홈", url: "/" },
                    { text: "전시컨텐츠관리", url: "/" },
                    { text: "FAQ관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                {/* search box */}
                <div className="search-box">
                    <ul>
                        <li className="col-span-2">
                            <p>유형</p>
                            <SelectBasic placeholder="전체" size="m" />
                        </li>
                        <li>
                            <p>베스트여부</p>
                            <div className="flex items-center gap-3">
                                <Radio name="t1" label="전체" defaultChecked />
                                <Radio name="t1" label="베스트" />
                                <Radio name="t1" label="일반" />
                            </div>
                        </li>
                        <li>
                            <p>사용여부</p>
                            <div className="flex items-center gap-3">
                                <Radio name="t2" label="전체" defaultChecked />
                                <Radio name="t2" label="Y" />
                                <Radio name="t2" label="N" />
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
                        <Button type="gray" size="m">
                            초기화
                        </Button>
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
                                    <th scope="col">번호</th>
                                    <th scope="col">유형</th>
                                    <th scope="col">베스트여부</th>
                                    <th scope="col">사용여부</th>
                                    <th scope="col">제목</th>
                                    <th scope="col">등록자</th>
                                    <th scope="col">등록일시</th>
                                    <th scope="col">최종수정자</th>
                                    <th scope="col">최종수정일시</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>파킹프렌즈 소개</td>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>
                                        <Toggle />
                                    </td>
                                    <td>
                                        <button type="button">
                                            <p className="underline">
                                                제목이 노출됩니다
                                            </p>
                                        </button>
                                    </td>
                                    <td>김파프&#40;admin&#41;</td>
                                    <td>2024-10-14 14:38</td>
                                    <td>-</td>
                                    <td>-</td>
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
