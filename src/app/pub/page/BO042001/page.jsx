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

export default function BO042001() {
    return (
        <DefaultLayout>
            <Topbar
                title="이벤트 관리"
                tip="이벤트를 관리합니다. 유형별, 대상별 이벤트 정보를 게시할 수 있습니다."
                path={[
                    { text: "홈", url: "/" },
                    { text: "전시컨텐츠관리", url: "/" },
                    { text: "이벤트 관리", url: "/" },
                ]}
            />
            <div className="box-cont overflow-y-auto">
                {/* search box */}
                <div className="search-box relative">
                    <ul>
                        <li>
                            <p>사용여부</p>
                            <div className="flex items-center gap-3">
                                <Radio name="t1" label="전체" defaultChecked />
                                <Radio name="t1" label="사용" />
                                <Radio name="t1" label="사용안함" />
                            </div>
                        </li>
                        <li>
                            <p>유형</p>
                            <div className="flex items-center gap-3">
                                <Radio name="t2" label="전체" defaultChecked />
                                <Radio name="t2" label="일반" />
                                <Radio name="t2" label="출석체크" />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p>대상</p>
                            <div className="flex items-center gap-3">
                                <Radio name="f3" label="전체" defaultChecked />
                                <Radio name="f3" label="회원" />
                                <Radio name="f3" label="배정자" />
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
                            placeholder="50개씩 보기"
                            size="m"
                            className="ml-auto"
                        />
                    </div>
                    <div className="table-grid mt-2">
                        <table>
                            <colgroup>
                                <col width="60px" />
                                <col width="auto" />
                                <col width="auto" />
                                <col width="auto" />
                                <col width="25%" />
                                <col width="320px" />
                                <col width="auto" />
                                <col width="10%" />
                                <col width="180px" />
                                <col width="auto" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">NO</th>
                                    <th scope="col">사용여부</th>
                                    <th scope="col">유형</th>
                                    <th scope="col">대상</th>
                                    <th scope="col">제목</th>
                                    <th scope="col">전시기간</th>
                                    <th scope="col">상태</th>
                                    <th scope="col">등록자</th>
                                    <th scope="col">등록일시</th>
                                    <th scope="col">조회수</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <Toggle />
                                    </td>
                                    <td>일반</td>
                                    <td>전체</td>
                                    <td>
                                        <button type="button">
                                            <p className="underline line-clamp-2 text-green">
                                                제목이 보입니다.. 길어도 최대
                                                2줄 표기하면서 최대한 많이 표기
                                                되기.
                                            </p>
                                        </button>
                                    </td>
                                    <td>2024-10-14 14:38 ~ 2024-10-14 14:38</td>
                                    <td>예약중</td>
                                    <td>김파프&#40;admin&#41;</td>
                                    <td>2024-10-14 14:38</td>
                                    <td>100</td>
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
