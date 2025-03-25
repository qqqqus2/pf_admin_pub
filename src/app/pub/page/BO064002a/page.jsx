import Image from "next/image";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import SelectBasic from "@pub/components/Form/Select";
import Input from "@pub/components/Form/Input";
import Paging from "@pub/components/Grid/Paging";
import Radio from "@pub/components/Form/Radio";
import IcInfo from "@/assets/icons/ico_circle_info.svg";
import IcMap from "@/assets/icons/ico_map.svg";

export default function BO064002a() {
    return (
        <DefaultLayout>
            <Topbar
                title="제보 관리 상세"
                tip="주차장정보에 대해 일부 수정 요청하는 수정제보와 APP에 없는 신규 주차장에 대한 제보를 확인하고 관리합니다."
                path={[
                    { text: "홈", url: "/" },
                    { text: "문의관리", url: "/" },
                    { text: "제보 관리", url: "/" },
                ]}
            />
            <div className="overflow-y-auto">
                <div className="box-cont">
                    <div>
                        <div className="table-basic">
                            <table>
                                <colgroup>
                                    <col width="152px" />
                                    <col />
                                    <col width="152px" />
                                    <col />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th scope="row">제보접수번호</th>
                                        <td>
                                            <div className="flex items-center gap-2">
                                                <span>RM000001</span>
                                                <Button type="outline" size="s">
                                                    복사
                                                </Button>
                                            </div>
                                        </td>
                                        <th scope="row">연관문의 링크</th>
                                        <td>
                                            <div className="flex flex-wrap items-center gap-2">
                                                <SelectBasic size="m" />
                                                <Button type="outline" size="m">
                                                    링크
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="bg-h-blue">
                                            <div className="flex items-center gap-2">
                                                <span className="text-req">
                                                    내부검토결과
                                                </span>
                                                <span
                                                    data-tooltip-id="tooltip"
                                                    data-tooltip-content="내부검토결과는 수정 및 업데이트 가능하며, 관리자메모는 필수입니다. 반영은 별도로 수정/등록 하셔야 합니다."
                                                >
                                                    <IcInfo />
                                                </span>
                                            </div>
                                        </th>
                                        <td colSpan={3}>
                                            <div className="flex items-center">
                                                <div className="flex items-center gap-3">
                                                    <Radio
                                                        name="t1"
                                                        label="반영필요"
                                                        defaultChecked
                                                    />
                                                    <Radio
                                                        name="t1"
                                                        label="미반영"
                                                    />
                                                    <Radio
                                                        name="t1"
                                                        label="기타"
                                                    />
                                                </div>
                                                <span className="ml-auto text-red">
                                                    ※내부관리용으로 제보자에게
                                                    통보되지 않습니다.
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="bg-h-blue">
                                            제보포인트
                                        </th>
                                        <td colSpan={3}>
                                            <div className="flex items-center gap-2">
                                                <Input size="m" />
                                                <Button type="blue" size="m">
                                                    지급
                                                </Button>

                                                <span className="text-red ml-auto">
                                                    ※한번 지급된 포인트는 이력이
                                                    남으며 회수할 수 없습니다.
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* <tr>
                                    <th className="bg-h-blue">
                                        <span className="text-req">
                                            관리자 메모
                                        </span>
                                    </th>
                                    <td colSpan={3}>
                                        <Input placeholder="관리자 메모를 필수로 작성합니다." />
                                    </td>
                                </tr> */}
                                </tbody>
                            </table>
                        </div>
                        {/* <div className="table-memo">
                        <table>
                            <colgroup>
                                <col width="212px" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        관리자명&#40;아이디&#41; / 소속
                                    </th>
                                    <td>
                                        회원문의 3회 이상 욕설과 강성요청
                                        고객으로 블랙리스트 적용합니다.
                                        2024-01-01 00:00
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        관리자명&#40;아이디&#41; / 소속
                                    </th>
                                    <td>
                                        시스템 오류에 의한 불편함의 이유로
                                        포인트를 지급했습니다. YYYY-MM-DD hh:mm
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        관리자명&#40;아이디&#41; / 소속
                                    </th>
                                    <td>
                                        관리자가 작성한 메모가 표기됩니다.
                                        관리자가 작성한 메모가 표기됩니다.
                                        관리자가 작성한 메모가
                                        표기됩니다.관리자가 작성한 메모가
                                        표기됩니다. 관리자가 작성한 메모가
                                        표기됩니다. 관리자가 작성한 메모가
                                        표기됩니다. YYYY-MM-DD hh:mm
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <Paging className="mt-2" />
                    </div> */}
                    </div>

                    {/* 제보내용 */}
                    <div>
                        <p className="h4">제보내용</p>
                        <div className="table-basic mt-2">
                            <table>
                                <colgroup>
                                    <col width="152px" />
                                    <col />
                                    <col width="152px" />
                                    <col />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th scope="row" className="bg-h-green">
                                            제보유형
                                        </th>
                                        <td colSpan={3}>수정</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="bg-h-green">
                                            제보자
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-2">
                                                <button type="button">
                                                    <span className="underline">
                                                        홍길동&nbsp;&#40;010-1234-5678&#41;
                                                    </span>
                                                </button>
                                                <span>/</span>
                                                <button type="button">
                                                    <span className="underline">
                                                        신고이력 N회
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                        <th scope="row" className="bg-h-green">
                                            제보일시
                                        </th>
                                        <td>yyyy-mm-dd 00:00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="bg-h-green">
                                            제보 주차장
                                        </th>
                                        <td colSpan={3}>
                                            <div className="flex items-center gap-1">
                                                <button type="button">
                                                    <span className="underline">
                                                        주차장명
                                                    </span>
                                                </button>
                                                &#40;서울시 강남구 학동로82길
                                                14-1
                                                <button type="button">
                                                    <IcMap />
                                                </button>
                                                &#41;
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="bg-h-green">
                                            운영시간
                                        </th>
                                        <td colSpan={3}>
                                            24시간 운영으로 바뀜
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="bg-h-green">
                                            연관사진
                                        </th>
                                        <td colSpan={3}>
                                            <div className="flex items-center gap-[0.8125rem]">
                                                <div
                                                    className="file-thumb"
                                                    data-tooltip-id="tooltip"
                                                    data-tooltip-html="2024년 8월 9일<br />금요일 오전 11:39"
                                                >
                                                    <Image
                                                        src="/images/test/img_thumb.png"
                                                        alt=""
                                                        width={292}
                                                        height={172}
                                                    />
                                                    <button
                                                        type="button"
                                                        className="file-thumb-btn"
                                                    ></button>
                                                </div>
                                                <div
                                                    className="file-thumb"
                                                    data-tooltip-id="tooltip"
                                                    data-tooltip-html="2024년 8월 9일<br />금요일 오전 11:39"
                                                >
                                                    <Image
                                                        src="/images/test/img_thumb.png"
                                                        alt=""
                                                        width={292}
                                                        height={172}
                                                    />
                                                    <button
                                                        type="button"
                                                        className="file-thumb-btn"
                                                    ></button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="table-basic mt-[1.25rem]">
                            <table>
                                <colgroup>
                                    <col width="152px" />
                                    <col />
                                    <col width="152px" />
                                    <col />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th scope="row">검토자</th>
                                        <td>김파프&#40;adminid&#41;</td>
                                        <th scope="row">검토일시</th>
                                        <td>yyyy-mm-dd 00:00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">최종수정자</th>
                                        <td>
                                            <span className="text-muted">
                                                검토 시 노출
                                            </span>
                                        </td>
                                        <th scope="row">최종수정일시</th>
                                        <td>
                                            <span className="text-muted">
                                                검토 시 노출
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="flex mt-6">
                    <Button type="black" size="m">
                        목록
                    </Button>
                    <div className="flex items-center gap-2 ml-auto">
                        <Button type="gray" size="m">
                            취소
                        </Button>
                        <Button type="green" size="m">
                            저장
                        </Button>
                    </div>
                </div>
                <div className="box-cont gap-0 mt-6">
                    <div className="flex items-center gap-2">
                        <p className="h4">관리자 메모</p>
                        <span
                            data-tooltip-id="tooltip"
                            data-tooltip-content="수정 시 관리자 메모 입력을 권장합니다."
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
        </DefaultLayout>
    );
}
