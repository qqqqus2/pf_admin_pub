import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Checkbox from "@pub/components/Form/Check";
import Radio from "@pub/components/Form/Radio";
import Input from "@pub/components/Form/Input";
import Paging from "@pub/components/Grid/Paging";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";
import IcInfo from "@/assets/icons/ico_circle_info.svg";
import IcExcel from "@/assets/icons/ico_excel.svg";

export default function BO062001() {
    return (
        <DefaultLayout>
            <Topbar
                title="1:1 문의관리"
                tip="APP을 통한 1:1문의에 대해 확인하고 답변하며 관리합니다."
                path={[
                    { text: "홈", url: "/" },
                    { text: "문의관리", url: "/" },
                    { text: "1:1 문의관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                {/* search box */}
                <div className="search-box">
                    <ul>
                        <li>
                            <p>문의 유형</p>
                            <SelectBasic placeholder="전체" size="m" />
                        </li>
                        <li>
                            <p>답변상태</p>
                            <div className="flex items-center gap-3">
                                <Radio name="f2" label="전체" defaultChecked />
                                <Radio name="f2" label="답변대기" />
                                <Radio name="f2" label="답변완료" />
                            </div>
                        </li>
                        <li>
                            <p className="inline-flex items-center gap-2">
                                계정상태
                                <span
                                    data-tooltip-id="tooltip"
                                    data-tooltip-html="활성: 아이디(휴대폰번호)가 중복되지 않은 계정<br />
                  비활성: 로그인 후 본인인증(휴대폰본인인증or간편인증)을 통해 본인 번호를 확인한 계정<br />
                  검토:규칙에 의해 비정상 활동이 감지 되어 검토가 필요한 계정<br />
                  정지:관리자가 검토 후 비정상활동 등에 의해 계정을 정지한 계정<br />"
                                >
                                    <IcInfo />
                                </span>
                            </p>
                            <div className="flex items-center gap-3">
                                <Checkbox
                                    size="s"
                                    label="전체"
                                    defaultChecked
                                />
                                <Checkbox label="활성" />
                                <Checkbox label="비활성" />
                                <Checkbox label="검토" />
                                <Checkbox label="정지" />
                            </div>
                        </li>
                        <li>
                            <p className="inline-flex items-center gap-2">
                                블랙리스트 여부
                                <span
                                    data-tooltip-id="tooltip"
                                    data-tooltip-html="tooltip"
                                >
                                    <IcInfo />
                                </span>
                            </p>
                            <div className="flex items-center gap-3">
                                <Radio name="t1" label="전체" defaultChecked />
                                <Radio name="t1" label="Y" />
                                <Radio name="t1" label="N" />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p className="inline-flex items-center gap-2">
                                회원유형
                                <span
                                    data-tooltip-id="tooltip"
                                    data-tooltip-html="tooltip"
                                >
                                    <IcInfo />
                                </span>
                            </p>
                            <div className="flex items-center gap-3">
                                <Radio name="t2" label="전체" defaultChecked />
                                <Radio name="t2" label="파트너" />
                                <Radio name="t2" label="관리자" />
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
                    <div className="flex items-center min-h-[2.5rem]">
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
                                <col width="5%" />
                                <col width="7%" />
                                <col width="7%" />
                                <col width="10%" />
                                <col />
                                <col width="10%" />
                                <col width="13%" />
                                <col width="10%" />
                                <col width="13%" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">번호</th>
                                    <th scope="col">문의번호</th>
                                    <th scope="col">문의유형</th>
                                    <th scope="col">회원유형</th>
                                    <th scope="col">계정상태</th>
                                    <th scope="col">제목</th>
                                    <th scope="col">휴대폰번호</th>
                                    <th scope="col">이름&#40;닉네임&#41;</th>
                                    <th scope="col">문의일시</th>
                                    <th scope="col">답변자</th>
                                    <th scope="col">답변일시</th>
                                    <th scope="col">최종수정자</th>
                                    <th scope="col">최종수정일시</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <button type="button">
                                            <span className="underline">
                                                Q12345672
                                            </span>
                                        </button>
                                    </td>
                                    <td>주차권</td>
                                    <td>APP회원</td>
                                    <td>활성</td>
                                    <td>
                                        <p className="line-clamp-2">
                                            문의 제목이 노출됩니다. 길어지면
                                            최대2줄까지 후
                                        </p>
                                    </td>
                                    <td>010-1234-5678</td>
                                    <td>홍길동</td>
                                    <td>2024-10-14 14:38</td>
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
