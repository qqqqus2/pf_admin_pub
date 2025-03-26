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

export default function BO084001() {
    return (
        <DefaultLayout>
            <Topbar
                title="APP버전 관리"
                path={[
                    { text: "홈", url: "/" },
                    { text: "관리자 설정 관리", url: "/" },
                    { text: "APP버전 관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                {/* search box */}
                <div className="search-box relative">
                    <ul>
                        <li>
                            <p>OS 구분</p>
                            <div className="flex items-center gap-3">
                                <Radio name="t1" label="전체" defaultChecked />
                                <Radio name="t1" label="Android" />
                                <Radio name="t1" label="IOS" />
                                <Input
                                    placeholder="버전정보를 입력하세요"
                                    size="l"
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
                    <div className="flex justify-end items-center gap-2">
                        <Button type="blue" size="m">
                            저장
                        </Button>
                        <Button type="black" size="m">
                            등록
                        </Button>
                    </div>
                    <div className="flex items-center justify-between min-h-[2.5rem] mt-2">
                        <p className="h4">
                            총 <span className="text-green">231</span>건
                        </p>
                        <div className="flex items-center gap-2 min-h-[2.5rem]">
                            <SelectBasic size="m" placeholder="최근 등록순" />
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
                                <col width="180px" />
                                <col width="auto" />
                                <col width="220px" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">사용여부</th>
                                    <th scope="col">OS</th>
                                    <th scope="col">버전정보</th>
                                    <th scope="col">배포일시</th>
                                    <th scope="col">등록</th>
                                    <th scope="col">등록일시</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <Toggle />
                                    </td>
                                    <td>Android</td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                1.0.3
                                            </span>
                                        </button>
                                    </td>
                                    <td>2024-10-14 14:38</td>
                                    <td>김파프&#40;admin&#41;</td>
                                    <td>2024-10-14 14:38</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <Toggle />
                                    </td>
                                    <td>Android</td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                1.0.3
                                            </span>
                                        </button>
                                    </td>
                                    <td>2024-10-14 14:38</td>
                                    <td>김파프&#40;admin&#41;</td>
                                    <td>2024-10-14 14:38</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <Toggle />
                                    </td>
                                    <td>Android</td>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                1.0.3
                                            </span>
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
