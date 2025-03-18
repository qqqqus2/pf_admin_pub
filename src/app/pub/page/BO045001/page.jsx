import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Paging from "@pub/components/Grid/Paging";
import Checkbox from "@pub/components/Form/Check";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";

export default function BO045001() {
    return (
        <DefaultLayout>
            <Topbar
                title="약관관리"
                tip="앱에 표기되는 이용약관/개인정보처리방침을 버전별로 관리합니다."
                path={[
                    { text: "홈", url: "/" },
                    { text: "전시컨텐츠관리", url: "/" },
                    { text: "약관관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                {/* search box */}
                <div className="search-box">
                    <ul>
                        <li className="col-span-2">
                            <p>구분</p>
                            <SelectBasic placeholder="전체" size="m" />
                        </li>
                        <li>
                            <p>대상</p>
                            <div className="flex items-center gap-3">
                                <Checkbox
                                    label="전체"
                                    size="s"
                                    defaultChecked
                                />
                                <Checkbox label="회원" size="s" />
                                <Checkbox label="파트너" size="s" />
                                <Checkbox label="관리자" size="s" />
                            </div>
                        </li>
                        <li>
                            <p>게시상태</p>
                            <div className="flex items-center gap-3">
                                <Checkbox
                                    label="전체"
                                    size="s"
                                    defaultChecked
                                />
                                <Checkbox label="게시중" size="s" />
                                <Checkbox label="종료" size="s" />
                                <Checkbox label="예정" size="s" />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p>검색어</p>
                            <Input placeholder="검색어를 입력하세요" size="l" />
                        </li>
                        <li className="col-span-2">
                            <p>게시일</p>
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
                    <div className="flex justify-end items-center gap-2">
                        <Button type="black" size="m">
                            등록
                        </Button>
                    </div>
                    <div className="flex items-center min-h-[2.5rem] mt-4">
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
                                    <th scope="col">NO</th>
                                    <th scope="col">버전</th>
                                    <th scope="col">구분</th>
                                    <th scope="col">대상</th>
                                    <th scope="col">제목</th>
                                    <th scope="col">게시상태</th>
                                    <th scope="col">등록자</th>
                                    <th scope="col">등록일시</th>
                                    <th scope="col">최종수정자</th>
                                    <th scope="col">최종수정일시</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>V0.2</td>
                                    <td>개인정보처리방침</td>
                                    <td>회원</td>
                                    <td>
                                        <button type="button">
                                            <p className="underline line-clamp-1 text-green">
                                                제목이 보입니다.. 길어도 최대
                                                2줄 표기하면서 최대한 많이 표기
                                                되기.
                                            </p>
                                        </button>
                                    </td>
                                    <td>게시중</td>
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
