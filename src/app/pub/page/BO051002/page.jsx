import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import Text from "@pub/components/Form/Text";
import Checkbox from "@pub/components/Form/Check";
import Radio from "@pub/components/Form/Radio";
import FormDateRange from "@pub/components/Form/DateRange";
import IcExcel from "@/assets/icons/ico_excel.svg";

export default function BO051002() {
    return (
        <DefaultLayout>
            <Topbar
                title="쿠폰 관리"
                path={[
                    { text: "홈", url: "/" },
                    { text: "쿠폰 · 포인트관리", url: "/" },
                    { text: "쿠폰 관리", url: "/" },
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
                                <col width="152px" />
                                <col />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th scope="row">쿠폰번호</th>
                                    <td>NNNNN</td>
                                    <th scope="row">사용여부</th>
                                    <td>
                                        <div className="flex items-center gap-7">
                                            <Radio
                                                name="t1"
                                                label="사용"
                                                defaultChecked
                                            />
                                            <Radio name="t1" label="사용안함" />
                                        </div>
                                    </td>
                                    <th scope="row">진행상태</th>
                                    <td>
                                        <SelectBasic defaultSelect size="m" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">쿠폰유형</th>
                                    <td colSpan={5}>
                                        <div className="flex items-center gap-7">
                                            <Radio
                                                name="t2"
                                                label="온라인 쿠폰"
                                                defaultChecked
                                            />
                                            <Radio
                                                name="t2"
                                                label="오프라인 쿠폰"
                                            />
                                            <Radio
                                                name="t2"
                                                label="웰컴 쿠폰"
                                            />
                                            <Radio
                                                name="t2"
                                                label="첫구매 쿠폰"
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <span className="text-req">쿠폰명</span>
                                    </th>
                                    <td>
                                        <Input size="l" />
                                    </td>
                                    <td colSpan={4}></td>
                                </tr>
                                <tr>
                                    <th scope="row">할인유형</th>
                                    <td colSpan={5}>
                                        <div className="flex items-center gap-7">
                                            <Radio
                                                name="t3"
                                                label="정액"
                                                defaultChecked
                                            />
                                            <Radio name="t3" label="정률" />
                                        </div>
                                        <div className="flex items-center gap-3 mt-[0.8125rem]">
                                            <div className="inline-flex items-center gap-3">
                                                <Input size="m" />원
                                            </div>
                                            <div className="inline-flex items-center gap-3">
                                                결제대상금액
                                                <Input size="m" />원 이상
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">적용 주차권</th>
                                    <td>
                                        <SelectBasic
                                            placeholder="전체"
                                            size="m"
                                        />
                                    </td>
                                    <td colSpan={4}></td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <span className="text-req">
                                            발급기간
                                        </span>
                                    </th>
                                    <td colSpan={5}>
                                        <div className="flex items-center gap-3">
                                            <FormDateRange time />
                                            <Checkbox size="s" label="무제한" />
                                        </div>
                                        <p className="text-muted text-sm mt-3">
                                            설정된 기간동안 다운로드가 가능한
                                            쿠폰이 노출됩니다. 무제한 선택 시
                                            발급시작일은 익일부터로 설정됩니다.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <span className="text-req">
                                            유효기간
                                        </span>
                                    </th>
                                    <td colSpan={5}>
                                        <div className="flex items-center gap-7">
                                            <Radio
                                                name="t4"
                                                label="기간으로 설정"
                                                defaultChecked
                                            />
                                            <Radio
                                                name="t4"
                                                label="발급일 기준으로 설정"
                                            />
                                        </div>
                                        <FormDateRange
                                            time
                                            className="mt-[0.8125rem]"
                                        />
                                        <p className="text-muted text-sm mt-3">
                                            유효기간 시작일시는 발급기간
                                            시작일시와 동일하게 자동입력됩니다.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">발급방법</th>
                                    <td colSpan={5}>
                                        <div className="flex items-center gap-7">
                                            <Radio
                                                name="t5"
                                                label="다운로드"
                                                defaultChecked
                                            />
                                            <Radio name="t5" label="직접등록" />
                                        </div>
                                        <p className="text-muted text-sm mt-3">
                                            다운로드: 고객이 다운로드 버튼을
                                            클릭하여 쿠폰을 발급해야
                                            사용가능합니다.
                                            <br />
                                            직접등록: 쿠폰QR 또는 쿠폰코드를
                                            직접 등록하여 사용가능합니다.
                                        </p>
                                    </td>
                                </tr>
                                {/* <tr>
                                    <th scope="row">발급수량</th>
                                    <td colSpan={5}>
                                        <div className="flex items-center gap-3">
                                            <Radio
                                                name="t6"
                                                label="제한없음"
                                                defaultChecked
                                            />
                                            <div className="flex items-center gap-3">
                                                <Radio
                                                    name="t6"
                                                    label="제한있음"
                                                />
                                                <Input size="m" disabled />
                                                <span>매</span>
                                            </div>
                                        </div>
                                        <p className="text-muted text-sm mt-3">
                                            발급쿠폰수량을 제한하지 않는 것을
                                            말합니다.
                                            <br />
                                            쿠폰 상태값이 진행중일 경우 계속
                                            다운받을 수 있지만 회원ID당 같은
                                            쿠폰은 한번만 다운받을 수 있습니다.
                                        </p>
                                    </td>
                                </tr> */}
                                <tr>
                                    <th scope="row">유의사항</th>
                                    <td colSpan={5}>
                                        <div className="flex gap-3">
                                            <Text rows={3} className="grow" />
                                            <Button type="outline" size="s">
                                                유의사항 불러오기
                                            </Button>
                                        </div>
                                        <p className="text-muted text-sm mt-3">
                                            쿠폰에 들어가는 유의사항을
                                            입력합니다.
                                        </p>
                                    </td>
                                </tr>
                                {/* <tr>
                                    <th scope="row">관리자메모</th>
                                    <td colSpan={5}>
                                        <div className="flex gap-3">
                                            <Text
                                                rows={3}
                                                placeholder="관리자 메모를 작성합니다."
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
                    {/* <div className="table-basic mt-6">
                        <table>
                            <tbody>
                                <tr>
                                    <th scope="row" rowSpan={2}>
                                        대상설정
                                    </th>
                                    <td colSpan={5}>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-3">
                                                <Radio
                                                    name="t7"
                                                    label="회원"
                                                    defaultChecked
                                                />
                                                <SelectBasic
                                                    defaultSelect
                                                    size="m"
                                                />
                                                <Button type="outline" size="s">
                                                    조회
                                                </Button>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Radio
                                                    name="t7"
                                                    label="주차장"
                                                />
                                                <SelectBasic
                                                    placeholder="전체"
                                                    size="m"
                                                    disabled
                                                />
                                                <Button
                                                    type="outline"
                                                    size="s"
                                                    disabled
                                                >
                                                    조회
                                                </Button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={5}>
                                        <div className="flex justify-center items-center gap-2 h-[7.375rem]">
                                            <Button
                                                type="outline"
                                                size="s"
                                                className="opacity-60"
                                            >
                                                조회
                                            </Button>
                                            <span className="text-muted text-sm">
                                                버튼을 선택한 후 대상을
                                                선택해주세요.
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" rowSpan={2}>
                                        대상설정
                                    </th>
                                    <td colSpan={5}>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-3">
                                                <Radio
                                                    name="t8"
                                                    label="회원"
                                                    defaultChecked
                                                />
                                                <SelectBasic
                                                    defaultSelect
                                                    size="m"
                                                />
                                                <Button type="outline" size="s">
                                                    조회
                                                </Button>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Radio
                                                    name="t8"
                                                    label="주차장"
                                                />
                                                <SelectBasic
                                                    placeholder="전체"
                                                    size="m"
                                                    disabled
                                                />
                                                <Button
                                                    type="outline"
                                                    size="s"
                                                    disabled
                                                >
                                                    조회
                                                </Button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={5}>
                                        <div className="flex items-center min-h-[2.5rem]">
                                            <p className="h4">
                                                총{" "}
                                                <span className="text-green">
                                                    99
                                                </span>
                                                건
                                            </p>
                                            <div className="flex items-center gap-2 ml-auto">
                                                <Button type="gray" size="m">
                                                    선택삭제
                                                </Button>
                                                <Button type="outline" size="m">
                                                    <IcExcel />
                                                    엑셀다운로드
                                                </Button>
                                            </div>
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
                                                        <th scope="col">
                                                            회원번호
                                                        </th>
                                                        <th scope="col">
                                                            계정상태
                                                        </th>
                                                        <th scope="col">
                                                            회원유형
                                                        </th>
                                                        <th scope="col">
                                                            휴대폰번호
                                                        </th>
                                                        <th scope="col">
                                                            이름(닉네임)
                                                        </th>
                                                        <th scope="col">
                                                            차량번호
                                                        </th>
                                                        <th scope="col">
                                                            가입일시
                                                        </th>
                                                        <th scope="col">
                                                            최종접속일시
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <Checkbox
                                                                size="s"
                                                                size="s"
                                                            />
                                                        </td>
                                                        <td>
                                                            <button
                                                                type="button"
                                                                className="underline text-green"
                                                            >
                                                                345678
                                                            </button>
                                                        </td>
                                                        <td>활성</td>
                                                        <td>APP회원</td>
                                                        <td>010-1234-5678</td>
                                                        <td>홍길동</td>
                                                        <td>123가1234</td>
                                                        <td>
                                                            2024-10-14 14:38
                                                        </td>
                                                        <td>
                                                            2024-10-14 14:38
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Checkbox />
                                                        </td>
                                                        <td>
                                                            <button type="button">
                                                                <span className="underline text-green">
                                                                    345678
                                                                </span>
                                                            </button>
                                                        </td>
                                                        <td>검토</td>
                                                        <td>파트너</td>
                                                        <td>010-1234-5678</td>
                                                        <td>을자매</td>
                                                        <td>123가1234</td>
                                                        <td>
                                                            2024-10-14 14:38
                                                        </td>
                                                        <td>
                                                            2024-10-14 14:38
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Checkbox />
                                                        </td>
                                                        <td>
                                                            <button type="button">
                                                                <span className="underline text-green">
                                                                    345678
                                                                </span>
                                                            </button>
                                                        </td>
                                                        <td>활성</td>
                                                        <td>APP회원</td>
                                                        <td>010-1234-5678</td>
                                                        <td>홍길동</td>
                                                        <td>123가1234</td>
                                                        <td>
                                                            2024-10-14 14:38
                                                        </td>
                                                        <td>
                                                            2024-10-14 14:38
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Checkbox />
                                                        </td>
                                                        <td>
                                                            <button type="button">
                                                                <span className="underline text-green">
                                                                    345678
                                                                </span>
                                                            </button>
                                                        </td>
                                                        <td>검토</td>
                                                        <td>파트너</td>
                                                        <td>010-1234-5678</td>
                                                        <td>을자매</td>
                                                        <td>123가1234</td>
                                                        <td>
                                                            2024-10-14 14:38
                                                        </td>
                                                        <td>
                                                            2024-10-14 14:38
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">제외대상설정</th>
                                    <td>
                                        <div className="flex items-center gap-7">
                                            <Radio
                                                name="t9"
                                                label="제외없음"
                                                defaultChecked
                                            />
                                            <Radio name="t9" label="회원">
                                                <div className="inline-flex items-center gap-3 ml-3">
                                                    <SelectBasic
                                                        placeholder="전체"
                                                        size="m"
                                                    />
                                                    <Button
                                                        type="outline"
                                                        size="s"
                                                    >
                                                        조회
                                                    </Button>
                                                </div>
                                            </Radio>
                                            <Radio name="t9" label="주차장">
                                                <div className="inline-flex items-center gap-3 ml-3">
                                                    <SelectBasic
                                                        placeholder="전체"
                                                        size="m"
                                                    />
                                                    <Button
                                                        type="outline"
                                                        size="s"
                                                        disabled
                                                    >
                                                        조회
                                                    </Button>
                                                </div>
                                            </Radio>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}
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
                                    <th scope="row">등록자</th>
                                    <td>김파프&#40;adminid&#41;</td>
                                    <th scope="row">등록일시</th>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="flex mt-6">
                {/* <Button type="black" size="m">
                    목록
                </Button> */}
                <div className="flex items-center gap-2 ml-auto">
                    <Button type="black" size="m">
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
