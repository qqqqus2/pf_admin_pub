import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Toggle from "@pub/components/Form/Toggle";
import Paging from "@pub/components/Grid/Paging";
import Radio from "@pub/components/Form/Radio";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";
import Checkbox from "../../components/Form/Check";

export default function BO041001() {
    return (
        <DefaultLayout>
            <Topbar
                title="공지 관리"
                tip="공지게시판을 관리합니다. 채널별, 대상별 공지를 게시할 수 있습니다."
                path={[
                    { text: "홈", url: "/" },
                    { text: "관리자설정관리", url: "/" },
                    { text: "공지 관리", url: "/" },
                ]}
            />
            <div className="box-cont overflow-y-auto">
                {/* search box */}
                <div className="search-box relative">
                    <ul>
                        <li>
                            <p>대상</p>
                            <div className="flex items-center gap-2">
                                <Checkbox label="전체" defaultChecked />
                                <Checkbox label="회원" />
                                <Checkbox label="배정자" />
                                <Checkbox label="파트너" />
                                <div className="flex items-center gap-2">
                                    <SelectBasic
                                        placeholder="대분류를 선택하세요"
                                        size="m"
                                        disabled
                                    />
                                    <SelectBasic
                                        placeholder="소분류를 선택하세요"
                                        size="m"
                                        disabled
                                    />
                                </div>
                            </div>
                        </li>
                        <li>
                            <p>사용여부</p>
                            <div className="flex items-center gap-3">
                                <Radio name="t1" label="전체" defaultChecked />
                                <Radio name="t1" label="Y" />
                                <Radio name="t1" label="N" />
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
                    <div className="flex justify-end items-center gap-2">
                        <Button type="blue" size="m">
                            저장
                        </Button>
                        <Button type="black" size="m">
                            등록
                        </Button>
                    </div>
                    <div className="flex items-center min-h-[2.5rem] mt-2">
                        <p className="h4">
                            총 <span className="text-green">231</span>건
                        </p>
                        <SelectBasic
                            size="m"
                            placeholder="50개씩 보기"
                            className="ml-auto"
                        />
                    </div>
                    <div className="table-grid mt-2">
                        <table>
                            <colgroup>
                                <col width="60px" />
                                <col width="160px" />
                                <col width="auto" />
                                <col width="25%" />
                                <col width="180px" />
                                <col width="auto" />
                                <col width="180px" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">NO</th>
                                    <th scope="col">사용여부</th>
                                    <th scope="col">대상</th>
                                    <th scope="col">제목</th>
                                    <th scope="col">전시시작일</th>
                                    <th scope="col">등록자</th>
                                    <th scope="col">등록일시</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <Toggle />
                                    </td>
                                    <td>개인 &gt; 전체</td>
                                    <td>
                                        <button type="button">
                                            <p className="underline text-green">
                                                제목이 보입니다.. 길어도 최대
                                                2줄 표기하면서 최대한 많이 표기
                                                되기.
                                            </p>
                                        </button>
                                    </td>
                                    <td>2024-10-14 14:38</td>
                                    <td>김파프&#40;admin&#41;</td>
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
