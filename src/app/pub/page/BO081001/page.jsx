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
                title="계정신청관리"
                tip={`<ul>
          <li>신청된 계정을 관리할 수 있습니다.</li>
          <li>승인반려 아이콘 마우스오버시 반려사유가 노출됩니다.</li>
          </ul>`}
                path={[
                    { text: "홈", url: "/" },
                    { text: "관리자설정관리", url: "/" },
                    { text: "계정신청관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                {/* search box */}
                <div className="search-box">
                    <ul>
                        <li>
                            <p>구분</p>
                            <div className="flex items-center gap-3">
                                <Radio name="f1" label="전체" defaultChecked />
                                <Radio name="f1" label="파트너" />
                                <Radio name="f1" label="관리자" />
                            </div>
                        </li>
                        <li>
                            <p>상태</p>
                            <div className="flex items-center gap-3">
                                <Radio name="f2" label="전체" defaultChecked />
                                <Radio name="f2" label="승인대기" />
                                <Radio name="f2" label="승인완료" />
                                <Radio name="f2" label="승인반려" />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p>검색어</p>
                            <div className="flex items-center gap-2">
                                <SelectBasic placeholder="전체" size="m" />
                                <Input
                                    placeholder="입력정보"
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
                    <div className="search-btn">
                        <Button type="green" size="m">
                            검색
                        </Button>
                    </div>
                </div>
                {/* //search box */}

                <div className="grow flex flex-col">
                    <div className="flex justify-between items-center">
                        <Button type="outline" size="m">
                            선택승인
                        </Button>
                        <Button type="black" size="m">
                            일괄승인
                        </Button>
                    </div>
                    <div className="flex items-center min-h-[2.5rem] mt-4">
                        <p className="h4">
                            총 <span className="text-green">231</span>건
                        </p>
                        <SelectBasic
                            placeholder="30개씩 보기"
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
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>파트너</td>
                                    <td>
                                        <Flag type="gray" label="승인대기" />
                                    </td>
                                    <td>
                                        <button type="button">
                                            <span className="underline">
                                                Parking00
                                            </span>
                                        </button>
                                    </td>
                                    <td>김길동</td>
                                    <td>010-1234-5678</td>
                                    <td>사업실</td>
                                    <td>2024-10-14</td>
                                    <td>김파프&#40;admin&#41;</td>
                                    <td>2024-10-14 14:38</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>파트너</td>
                                    <td>
                                        <Flag type="blue" label="승인완료" />
                                    </td>
                                    <td>
                                        <button type="button">
                                            <span className="underline">
                                                Parking00
                                            </span>
                                        </button>
                                    </td>
                                    <td>김길동</td>
                                    <td>010-1234-5678</td>
                                    <td>사업실</td>
                                    <td>2024-10-14</td>
                                    <td>김파프&#40;admin&#41;</td>
                                    <td>2024-10-14 14:38</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>파트너</td>
                                    <td>
                                        <Flag
                                            type="red"
                                            label="승인반려"
                                            tip="마우스 오버시 반려사유가 노출됩니다."
                                        />
                                    </td>
                                    <td>
                                        <button type="button">
                                            <span className="underline">
                                                Parking00
                                            </span>
                                        </button>
                                    </td>
                                    <td>김길동</td>
                                    <td>010-1234-5678</td>
                                    <td>사업실</td>
                                    <td>2024-10-14</td>
                                    <td>김파프&#40;admin&#41;</td>
                                    <td>2024-10-14 14:38</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>파트너</td>
                                    <td>
                                        <Flag type="gray" label="승인대기" />
                                    </td>
                                    <td>
                                        <button type="button">
                                            <span className="underline">
                                                Parking00
                                            </span>
                                        </button>
                                    </td>
                                    <td>김길동</td>
                                    <td>010-1234-5678</td>
                                    <td>사업실</td>
                                    <td>2024-10-14</td>
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
