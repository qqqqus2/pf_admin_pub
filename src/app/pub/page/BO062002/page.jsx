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
import Radio from "@pub/components/Form/Radio";
import Paging from "@pub/components/Grid/Paging";
import IcInfo from "@/assets/icons/ico_circle_info.svg";
import IcArrowRight from "@/assets/icons/ico_arrow_right.svg";

export default function BO062002() {
    return (
        <DefaultLayout>
            <Topbar
                title="1:1문의 관리 상세"
                path={[
                    { text: "홈", url: "/" },
                    { text: "문의관리", url: "/" },
                    { text: "1:1 문의 관리", url: "/" },
                ]}
            />
            <div className="overflow-y-auto">
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
                                        <td colSpan={3}>
                                            문의 제목이 노출됩니다.
                                        </td>
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
                                            문의한 내용이 노출되는 영역입니다
                                            문의한 내용이 노출되는 영역입니다
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
                        <div className="flex items-center justify-between">
                            <p className="h4">답변영역</p>
                            <span className="flag flag-gray size-m">
                                답변대기
                            </span>
                        </div>

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
                                                <Radio
                                                    name="t1"
                                                    label="발송"
                                                    defaultChecked
                                                />
                                                <Radio
                                                    name="t1"
                                                    label="발송안함"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <p className="h4">관리자 영역</p>
                            <span
                                data-tooltip-id="tooltip"
                                data-tooltip-content="해당 회원 관련 관리가 필요한 경우에 진행합니다."
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
                                        <th className="bg-h-green">
                                            포인트 지급
                                        </th>
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
                            data-tooltip-content="수정 시 관리자 메모 입력을 권장합니다ㄱ."
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
