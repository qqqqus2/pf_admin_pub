import Image from "next/image";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import Flag from "@pub/components/Flag";
import SelectBasic from "@pub/components/Form/Select";
import Input from "@pub/components/Form/Input";
import Text from "@pub/components/Form/Text";
import FileDropThumb from "@pub/components/Form/FileDropThumb";
import Checkbox from "@pub/components/Form/Check";
import Paging from "@pub/components/Grid/Paging";
import IcInfo from "@/assets/icons/ico_circle_info.svg";
import IcArrowRight from "@/assets/icons/ico_arrow_right.svg";

export default function BO062002() {
    return (
        <DefaultLayout>
            <Topbar
                title="1:1 문의관리"
                path={[
                    { text: "홈", url: "/" },
                    { text: "문의관리", url: "/" },
                    { text: "1:1 문의관리", url: "/" },
                ]}
            />

            <div className="box-cont">
                <div>
                    <p className="h4">문의정보</p>
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
                                    <th scope="row">문의번호</th>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            <span>Q12345678</span>
                                            <Button type="outline" size="s">
                                                복사
                                            </Button>
                                        </div>
                                    </td>
                                    <th scope="row">회원유형</th>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            파트너/B2G&#40;지자체&#41;/송파구청
                                            <Button type="outline" size="s">
                                                상세보기
                                                <IcArrowRight />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">문의자</th>
                                    <td>
                                        <button type="button">
                                            <span className="underline">
                                                010-1234-5678
                                            </span>
                                            &nbsp;&#40;김파프&#41;
                                        </button>
                                    </td>
                                    <th scope="row">계정상태</th>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            활성
                                            <Flag
                                                type="black"
                                                size="s"
                                                label="Black"
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">문의유형</th>
                                    <td>주차권</td>
                                    <th scope="row">문의일시</th>
                                    <td>2024-01-01 00:00</td>
                                </tr>
                                <tr>
                                    <th scope="row">제목</th>
                                    <td colSpan={3}>문의 제목이 노출됩니다.</td>
                                </tr>
                                <tr>
                                    <th scope="row">내용</th>
                                    <td colSpan={3}>
                                        문의한 내용이 노출되는 영역입니다
                                        <br />
                                        문의한 내용이 노출되는 영역입니다
                                        <br />
                                        문의한 내용이 노출되는 영역입니다
                                        <br />
                                        문의한 내용이 노출되는 영역입니다
                                        <br />
                                        문의한 내용이 노출되는 영역입니다 문의한
                                        내용이 노출되는 영역입니다
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">첨부파일</th>
                                    <td colSpan={3}>
                                        <div className="flex items-center gap-[0.8125rem]">
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
                                            <FileDropThumb />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <p className="h4">답변영역</p>
                    <div className="table-basic mt-2">
                        <table>
                            <colgroup>
                                <col width="152px" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th scope="row" className="bg-h-blue">
                                        <span className="text-req">
                                            답변내용
                                        </span>
                                    </th>
                                    <td>
                                        <Text
                                            rows={5}
                                            defaultValue="괸리자가 작성한 답변 내용이 표기됩니다. 괸리자가 작성한 답변 내용이 표기됩니다. 괸리자가 작성한 답변 내용이 표기됩니다."
                                            className="grow"
                                            disabled
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-h-blue">
                                        알림 발송여부
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-7">
                                            <Checkbox
                                                label="앱푸시"
                                                defaultChecked
                                            />
                                            <Checkbox
                                                size="s"
                                                label="카카오톡"
                                            />
                                            <Checkbox label="문자" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-3">
                        <p className="h4">관리자 영역</p>
                        <span
                            data-tooltip-id="tooltip"
                            data-tooltip-content="해당 회원 관련 관리가 필요한 경우에 진행하며, 진행시 관리자 메모는 필수입니다."
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
                                    <th className="bg-h-green">
                                        연관문의 링크
                                    </th>
                                    <td>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <SelectBasic
                                                size="m"
                                                placeholder="사용자관리"
                                            />
                                            <Button type="outline" size="m">
                                                링크
                                            </Button>
                                            <button type="button">
                                                <span className="underline">
                                                    Q12345677
                                                </span>
                                            </button>
                                            <button type="button">
                                                <span className="underline">
                                                    Q87654321
                                                </span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="bg-h-green">
                                        블랙리스트 적용
                                    </th>
                                    <td>
                                        <div className="flex justify-between items-center">
                                            <Checkbox />
                                            <span className="text-red">
                                                ※블랙리스트는 내부관리용으로
                                                회원에게 표기되지 않으며,
                                                회원에게 활동제약이 있진
                                                않습니다.
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="bg-h-green">포인트 지급</th>
                                    <td>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <Checkbox />
                                                <div className="flex items-center gap-2">
                                                    <SelectBasic
                                                        placeholder="포인트 지급 구분 선택"
                                                        disabled
                                                    />
                                                    <Input
                                                        placeholder="포인트(숫자)"
                                                        disabled
                                                        className="w-[5.9375rem]"
                                                    />
                                                </div>
                                            </div>
                                            <span className="text-red">
                                                ※한번 지급된 포인트는 이력이
                                                남으며 회수할 수 없습니다.
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="bg-h-green">관리자 메모</th>
                                    <td>
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
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="table-memo bg-cell-purple">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <p className="no-data py-5">
                                            관리자 메모 이력이 없습니다.
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="table-memo bg-cell-purple">
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
                    <Button type="black" size="m">
                        취소
                    </Button>
                    <Button type="green" size="m">
                        저장
                    </Button>
                    <Button type="blue" size="m">
                        답변
                    </Button>
                </div>
            </div>
        </DefaultLayout>
    );
}
