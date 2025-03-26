import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Checkbox from "@pub/components/Form/Check";
import Flag from "@pub/components/Flag";
import Paging from "@pub/components/Grid/Paging";
import Radio from "@pub/components/Form/Radio";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";

export default function BO081001() {
    return (
        <DefaultLayout>
            <Topbar
                title="계정 신청 관리"
                tip={`신청된 계정을 관리할수 있습니다. 승인반려 아이콘 마우스오버시 반려사유가 노출 됩니다.`}
                path={[
                    { text: "홈", url: "/" },
                    { text: "관리자설정관리", url: "/" },
                    { text: "계정 신청 관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                {/* search box */}
                <div className="search-box relative">
                    <ul>
                        <li>
                            <p>구분</p>
                            <div className="flex items-center gap-3">
                                <Radio name="f1" label="전체" defaultChecked />
                                <Radio name="f1" label="관리자" />
                                <Radio name="f1" label="파트너" />
                            </div>
                        </li>
                        <li>
                            <p>상태</p>
                            <div className="flex items-center gap-3">
                                <Checkbox label="전체" defaultChecked />
                                <Checkbox label="승인대기" />
                                <Checkbox label="승인완료" />
                                <Checkbox label="승인반려" />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p>검색어</p>
                            <div className="flex items-center gap-2">
                                <SelectBasic placeholder="전체" size="m" />
                                <Input
                                    placeholder="검색어를 입력하세요."
                                    className="grow"
                                />
                            </div>
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
                    <div className="flex items-center min-h-[2.5rem]">
                        <p className="h4">
                            총 <span className="text-green">231</span>건
                        </p>
                        <SelectBasic
                            placeholder="30개씩 보기"
                            size="m"
                            className="ml-auto"
                        />
                    </div>
                    <div className="table-grid mt-2">
                        <table>
                            <colgroup>
                                <col width="8%" />
                                <col width="8%" />
                                <col width="auto" />
                                <col width="auto" />
                                <col width="auto" />
                                <col width="15%" />
                                <col width="180px" />
                                <col width="auto" />
                                <col width="180px" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">구분</th>
                                    <th scope="col">상태</th>
                                    <th scope="col">아이디</th>
                                    <th scope="col">이름</th>
                                    <th scope="col">휴대폰번호</th>
                                    <th scope="col">소속부서 / 소속회사</th>
                                    <th scope="col">등록일자</th>
                                    <th scope="col">승인자</th>
                                    <th scope="col">승인일시</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>관리자</td>
                                    <td>
                                        <Flag
                                            type="blue"
                                            size="s"
                                            label="승인완료"
                                        />
                                    </td>
                                    <td>
                                        <button>
                                            <span class="underline text-green">
                                                sun
                                            </span>
                                        </button>
                                    </td>
                                    <td>박희선정지계정</td>
                                    <td>01059145820</td>
                                    <td>사업실</td>
                                    <td>2025-03-21 20:48</td>
                                    <td>박희선(sunpark)</td>
                                    <td>2025-03-21 20:49</td>
                                </tr>
                                <tr>
                                    <td>관리자</td>
                                    <td>
                                        <Flag
                                            type="blue"
                                            size="s"
                                            label="승인완료"
                                        />
                                    </td>
                                    <td>
                                        <button>
                                            <span class="underline text-green">
                                                sun
                                            </span>
                                        </button>
                                    </td>
                                    <td>박희선정지계정</td>
                                    <td>01059145820</td>
                                    <td>사업실</td>
                                    <td>2025-03-21 20:48</td>
                                    <td>박희선(sunpark)</td>
                                    <td>2025-03-21 20:49</td>
                                </tr>
                                <tr>
                                    <td>관리자</td>
                                    <td>
                                        <Flag
                                            type="blue"
                                            size="s"
                                            label="승인완료"
                                        />
                                    </td>
                                    <td>
                                        <button>
                                            <span class="underline text-green">
                                                sun
                                            </span>
                                        </button>
                                    </td>
                                    <td>박희선정지계정</td>
                                    <td>01059145820</td>
                                    <td>사업실</td>
                                    <td>2025-03-21 20:48</td>
                                    <td>박희선(sunpark)</td>
                                    <td>2025-03-21 20:49</td>
                                </tr>
                                <tr>
                                    <td>관리자</td>
                                    <td>
                                        <Flag
                                            type="red"
                                            size="s"
                                            label="승인반려"
                                        />
                                    </td>
                                    <td>
                                        <button>
                                            <span class="underline text-green">
                                                sun
                                            </span>
                                        </button>
                                    </td>
                                    <td>박희선정지계정</td>
                                    <td>01059145820</td>
                                    <td>사업실</td>
                                    <td>2025-03-21 20:48</td>
                                    <td>박희선(sunpark)</td>
                                    <td>2025-03-21 20:49</td>
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
