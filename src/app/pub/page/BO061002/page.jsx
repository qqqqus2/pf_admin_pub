import Image from "next/image";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import SelectBasic from "@pub/components/Form/Select";
import Text from "@pub/components/Form/Text";
import Radio from "@pub/components/Form/Radio";
import Checkbox from "@pub/components/Form/Check";
import Paging from "@pub/components/Grid/Paging";
import IcInfo from "@/assets/icons/ico_circle_info.svg";
import IcMap from "@/assets/icons/ico_map.svg";

export default function BO061002() {
    return (
        <DefaultLayout>
            <Topbar
                title="공유신청관리 상세"
                tip="주차공유 중 개인소유주차공간에 대해 신청을 확인하고 관리합니다."
                path={[
                    { text: "홈", url: "/" },
                    { text: "문의관리", url: "/" },
                    { text: "공유신청관리", url: "/" },
                ]}
            />

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
                                    <th scope="row">공유신청 접수번호</th>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            <span>Q12345678</span>
                                            <Button type="outline" size="s">
                                                복사
                                            </Button>
                                        </div>
                                    </td>
                                    <th scope="row">연관문의 링크</th>
                                    <td>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <SelectBasic className="w-40" />
                                            <Button type="outline" size="m">
                                                링크
                                            </Button>
                                            <button type="button">
                                                <span className="underline">
                                                    RM00018
                                                </span>
                                            </button>
                                            <button type="button">
                                                <span className="underline">
                                                    RM00017
                                                </span>
                                            </button>
                                            <button type="button">
                                                <span className="underline">
                                                    RM00016
                                                </span>
                                            </button>
                                            <button type="button">
                                                <span className="underline">
                                                    RM00015
                                                </span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-h-blue">
                                        <div className="flex items-center gap-2">
                                            담당자 정보
                                            <span
                                                data-tooltip-id="tooltip"
                                                data-tooltip-content="담당자 변경(이관)은 목록에서 가능합니다."
                                            >
                                                <IcInfo />
                                            </span>
                                        </div>
                                    </th>
                                    <td>담당자명&#40;adminID&#41;</td>
                                    <th scope="row" className="bg-h-blue">
                                        <div className="flex items-center gap-2">
                                            <span className="text-req">
                                                내부검토결과
                                            </span>
                                            <span
                                                data-tooltip-id="tooltip"
                                                data-tooltip-place="left"
                                                data-tooltip-content="담당자 변경(이관)은 목록에서 가능합니다."
                                            >
                                                <IcInfo />
                                            </span>
                                        </div>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <Radio
                                                name="t1"
                                                label="검토중"
                                                defaultChecked
                                            />
                                            <Radio name="t1" label="상담중" />
                                            <Radio
                                                name="t1"
                                                label="계약진행중"
                                            />
                                            <Radio name="t1" label="계약완료" />
                                            <Radio name="t1" label="반려" />
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
                                        <div className="flex gap-3">
                                            <Text
                                                rows={3}
                                                placeholder="관리자 메모를 필수로 작성합니다."
                                                className="grow"
                                            />
                                            <Button type="gray" size="s">
                                                확인
                                            </Button>
                                        </div>
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                    {/* <div className="table-memo bg-cell-purple">
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
                <div>
                    <p className="h4">신청내용</p>
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
                                        신청한 회원
                                    </th>
                                    <td colSpan={3}>
                                        <button type="button">
                                            <span className="underline">
                                                홍길동&#40;010-1234-5678&#41;
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-h-green">
                                        신청유형
                                    </th>
                                    <td colSpan={3}>
                                        유료주차장사업자 / 개인소유주차공간
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-h-green">
                                        연락가능한 번호
                                    </th>
                                    <td>010-1234-5678</td>
                                    <th scope="row" className="bg-h-green">
                                        주차장소유관계
                                    </th>
                                    <td>
                                        임차인&#40;주차권한보육&#41; 또는 직원
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-h-green">
                                        주차장명
                                    </th>
                                    <td colSpan={3}>
                                        신청자가 작성한 주차장명
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-h-green">
                                        주차장위치
                                    </th>
                                    <td colSpan={3}>
                                        <div className="flex items-center gap-1">
                                            서울시 강남구 학동로82길 14-1
                                            <button type="button">
                                                <IcMap />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-h-green">
                                        요금방식 선택
                                    </th>
                                    <td colSpan={3}>
                                        <div className="flex items-center gap-3">
                                            <Checkbox
                                                size="s"
                                                label="시간권"
                                                defaultChecked
                                            />
                                            <Checkbox label="당일권" />
                                            <Checkbox label="월주차" />
                                            <Checkbox label="기타" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-h-green">
                                        주차면수
                                    </th>
                                    <td colSpan={3}>
                                        <div className="flex justify-between items-center">
                                            <span>112 / 123</span>
                                            <span className="text-red">
                                                ※ 운영가능면수 / 총주차면수
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-h-green">
                                        주차장 설명
                                    </th>
                                    <td colSpan={3}>
                                        신청자가 작성한 주차장 설명이 표기
                                        됩니다. 선택항목이라 없을 수 있습니다
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-h-green">
                                        주차장 사진
                                    </th>
                                    <td colSpan={3}>
                                        <Button type="outline" size="s">
                                            일괄 다운로드
                                        </Button>
                                        <div className="flex items-center gap-[0.8125rem] mt-2">
                                            <div className="file-thumb">
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
                                            <div className="file-thumb">
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
                                    <th scope="row">답변자</th>
                                    <td>김파프 &#40;admin&#41;</td>
                                    <th scope="row">답변일시</th>
                                    <td>2024-01-01 00:00</td>
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
        </DefaultLayout>
    );
}
