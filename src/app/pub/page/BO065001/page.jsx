import Image from "next/image";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import FormDate from "@pub/components/Form/Date";
import Radio from "@pub/components/Form/Radio";
import SelectBasic from "@pub/components/Form/Select";
import Input from "@pub/components/Form/Input";
import FormDateRange from "@pub/components/Form/DateRange";

export default function BO065001() {
    return (
        <DefaultLayout>
            <Topbar
                title="결제 대행 관리"
                path={[
                    { text: "홈", url: "/" },
                    { text: "문의관리", url: "/" },
                    { text: "결제 대행 관리", url: "/" },
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
                                    <th scope="col" colSpan={4}>
                                        고객정보
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <span className="text-req">
                                            휴대폰번호
                                        </span>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            <Input
                                                size="m"
                                                placeholder="숫자만 입력"
                                            />
                                            <Button type="outline" size="m">
                                                회원조회
                                            </Button>
                                        </div>
                                        <p className="text-muted text-sm mt-3">
                                            [회원조회] 팝업에서 정보조회 후 없을
                                            경우 직접 입력해 주세요.
                                        </p>
                                    </td>
                                    <th scope="row">회원번호</th>
                                    <td>PM2024100001</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <span className="text-req">
                                            차량번호
                                        </span>
                                    </th>
                                    <td>
                                        <Input
                                            size="m"
                                            placeholder="차량번호 입력"
                                        />
                                    </td>
                                    <th scope="row">회원명</th>
                                    <td>김파프</td>
                                </tr>
                                <tr>
                                    <th scope="col" colSpan={4}>
                                        예약정보
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <span className="text-req">주차장</span>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            <Input size="l" disabled />
                                            <Button type="outline" size="m">
                                                조회
                                            </Button>
                                        </div>
                                    </td>
                                    <th scope="row">
                                        <span className="text-req">
                                            주차장종류
                                        </span>
                                    </th>
                                    <td>-</td>
                                </tr>

                                {/* <tr>
                                    <th scope="row">공유시간</th>
                                    <td colSpan={3}>
                                        <div className="table-grid w-2/3">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">
                                                            공유일자
                                                        </th>
                                                        <th scope="col">
                                                            상태
                                                        </th>
                                                        <th scope="col">
                                                            시작시간
                                                        </th>
                                                        <th scope="col">
                                                            종료시간
                                                        </th>
                                                        <th scope="col">
                                                            설정시간
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>YYYY-MM-DD</td>
                                                        <td>공유중</td>
                                                        <td>오전 00:00</td>
                                                        <td>오후 00:00</td>
                                                        <td>00시간 00분</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </td>
                                </tr> */}
                                <tr>
                                    <th scope="row">
                                        <span className="text-req">주차권</span>
                                    </th>
                                    <td colSpan={3}>
                                        <SelectBasic size="m" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <span className="text-req">
                                            예약타입
                                        </span>
                                    </th>
                                    <td colSpan={3}>
                                        <div className="flex items-center gap-3">
                                            <Radio
                                                name="t1"
                                                label="일반예약"
                                                defaultChecked
                                            />
                                            <Radio name="t1" label="연장결제" />
                                            <Radio
                                                name="t1"
                                                label="양심결제 &#40;예약정보 없이 결제&#41;"
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <span className="text-req">
                                            예약일시
                                        </span>
                                    </th>
                                    <td colSpan={3}>
                                        <FormDateRange time />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="bg-cell-green">
                                        결제금액
                                    </th>
                                    <td
                                        colSpan={3}
                                        className="bg-cell-green text-right"
                                    >
                                        <span>0원</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <span className="text-req">
                                            카드 번호
                                        </span>
                                    </th>
                                    <td colSpan={3}>
                                        <Input
                                            className="w-72"
                                            placeholder="15~16자리 카드번호 입력"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <span className="text-req">
                                            카드 유효기간
                                        </span>
                                    </th>
                                    <td colSpan={3}>
                                        <Input
                                            className="w-72"
                                            placeholder="YY/MM 4자리 예)2501 (25년1월)"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <span className="text-req">
                                            카드 비밀번호
                                        </span>
                                    </th>
                                    <td colSpan={3}>
                                        <Input
                                            placeholder="앞 2자리"
                                            className="w-20"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <span className="text-req">
                                            결제자 인증번호
                                        </span>
                                    </th>
                                    <td colSpan={3}>
                                        <Input
                                            className="w-72"
                                            placeholder="주민번호앞6자리 또는 사업자번호(법인카드)"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <span className="text-req">이름</span>
                                    </th>
                                    <td colSpan={3}>
                                        <Input size="m" placeholder="이름" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="flex justify-end items-center gap-3 mt-6">
                <Button type="gray" size="m">
                    초기화
                </Button>
                <Button type="green" size="m">
                    결제
                </Button>
            </div>
        </DefaultLayout>
    );
}
