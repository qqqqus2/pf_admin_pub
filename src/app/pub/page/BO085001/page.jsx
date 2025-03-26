import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import Checkbox from "@pub/components/Form/Check";
import Paging from "@pub/components/Grid/Paging";
import Input from "@pub/components/Form/Input";
import FormDate from "@pub/components/Form/Date";
import IcInfo from "@/assets/icons/ico_circle_info.svg";

export default function BO085001() {
    return (
        <DefaultLayout>
            <Topbar
                title="운영콘텐츠 관리"
                path={[
                    { text: "홈", url: "/" },
                    { text: "관리자 설정 관리", url: "/" },
                    { text: "운영콘텐츠 관리", url: "/" },
                ]}
            />
            <div className="overflow-y-auto">
                <div className="box-cont">
                    <ul className="text-[#6A798F] text-base font-medium -my-[0.625rem]">
                        <li>
                            ※ 운영컨텐츠는 전체 사이트에 영향을 줄 수 있으므로
                            신중히 반영해주시기 바랍니다.
                        </li>
                        <li>
                            ※ 수정하실 항목을 선택 하시면 항목을 수정하실 수
                            있습니다.
                        </li>
                    </ul>
                </div>
                <div className="box-cont mt-6">
                    <div className="table-grid">
                        <table>
                            <colgroup>
                                <col width="5%" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">
                                        <Checkbox />
                                    </th>
                                    <th scope="col">수정항목</th>
                                    <th scope="col">수정내용</th>
                                    <th scope="col">적용일시</th>
                                    <th scope="col">최종수정자</th>
                                    <th scope="col">최종수정일시</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>포인트 적립율</td>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            결제금액의
                                            <Input
                                                defaultValue="3"
                                                className="w-20"
                                                disabled
                                            />
                                            %
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items=center gap-2">
                                            <FormDate
                                                selected={new Date()}
                                                time
                                            />
                                        </div>
                                    </td>
                                    <td>고동기(footy21)</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>취소수수료</td>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            <Input
                                                defaultValue="3"
                                                className="w-20"
                                                disabled
                                            />
                                            %
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items=center gap-2">
                                            <FormDate
                                                selected={new Date()}
                                                time
                                            />
                                        </div>
                                    </td>
                                    <td>system</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Checkbox />
                                    </td>
                                    <td>출석이벤트</td>
                                    <td>
                                        <ul className="flex flex-col gap-[0.8125rem]">
                                            <li className="flex items-center gap-2">
                                                출석체크마다
                                                <Input
                                                    defaultValue="1"
                                                    className="w-20"
                                                    disabled
                                                />
                                                포인트
                                            </li>
                                            <li className="flex items-center gap-2">
                                                출석체크 7회
                                                <Input
                                                    defaultValue="5"
                                                    className="w-20"
                                                    disabled
                                                />
                                                포인트
                                            </li>
                                            <li className="flex items-center gap-2">
                                                출석체크 30회
                                                <Input
                                                    defaultValue="10"
                                                    className="w-20"
                                                    disabled
                                                />
                                                포인트
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <div className="flex items=center gap-2">
                                            <FormDate
                                                selected={new Date()}
                                                time
                                            />
                                        </div>
                                    </td>
                                    <td>system</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex mt-6">
                    <div className="flex items-center gap-2 ml-auto">
                        <Button type="gray" size="m">
                            취소
                        </Button>
                        <Button type="green" size="m">
                            저장
                        </Button>
                    </div>
                </div>
                <div className="box-cont mt-6">
                    <div>
                        <div className="flex items-center gap-3">
                            <p className="h4">관리자 메모</p>
                            <span
                                data-tooltip-id="tooltip"
                                data-tooltip-content="수정 시 관리자 메모를 권장합니다."
                            >
                                <IcInfo />
                            </span>
                        </div>

                        <div className="table-basic mt-2">
                            <table>
                                <colgroup>
                                    <col width="152px" />
                                    <col />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th class="">
                                            <span>메모</span>
                                        </th>
                                        <td colspan="3">
                                            <div class="flex gap-3">
                                                <div class="form-text  grow">
                                                    <textarea
                                                        rows="3"
                                                        placeholder="관리자 메모를 작성합니다."
                                                        maxlength="1000"
                                                    ></textarea>
                                                </div>
                                                <button
                                                    type="button"
                                                    class="btn btn-outline btn-s "
                                                    disabled=""
                                                >
                                                    확인
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="table-memo bg-cell-purple ">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p class="no-data">
                                                관리자 메모 이력이 없습니다.
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* 탭 계약조회 */}
                <div className="box-cont mt-6">
                    <p className="h4">이력관리</p>
                    <div className="table-grid">
                        <table>
                            <colgroup>
                                <col width="60px" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">번호</th>
                                    <th scope="col">등록자</th>
                                    <th scope="col">등록일시</th>
                                    <th scope="col">내용 요약</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>김파프&#40;adminid&#41;</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>계약진행중</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>김파프&#40;adminid&#41;</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>계약완료</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>김관리&#40;adminid&#41;</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>계약만료&#40;계약연장&#41;</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>김파킹&#40;adminid&#41;</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>계약만료</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="box-cont mt-6">
                    <p className="h4">이력관리</p>
                    <div className="table-grid">
                        <table>
                            <colgroup>
                                <col width="60px" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">번호</th>
                                    <th scope="col">등록자</th>
                                    <th scope="col">등록일시</th>
                                    <th scope="col">내용 요약</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={4}>
                                        <p className="no-data py-5">
                                            이력이 없습니다.
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
