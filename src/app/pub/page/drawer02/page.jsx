"use client";

import { useState } from "react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Drawer from "@pub/components/Drawer";
import ModalBasic from "@pub/components/Modal";
import Flag from "@pub/components/Flag";
import Checkbox from "@pub/components/Form/Check";
import Radio from "@pub/components/Form/Radio";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";
import Paging from "@pub/components/Grid/Paging";

export default function Drawer02() {
    const [open21003, setOpen21003] = useState(false);
    const [open21011, setOpen21011] = useState(false);

    return (
        <>
            <DefaultLayout>
                <div className="relative grow py-[2.5rem]">
                    <h1 className="h1">Guide_Drawer/Modal</h1>
                    <dl className="flex flex-col gap-8 max-w-[70rem] mt-9">
                        <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
                            <dt className="h4">Drawer</dt>
                            <dd className="flex flex-wrap gap-4 w-[80%]">
                                <Button
                                    type="green"
                                    size="m"
                                    onClick={() => setOpen21003(true)}
                                >
                                    BO021003_회원간편조회
                                </Button>
                            </dd>
                        </div>
                        <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
                            <dt className="h4">Modal</dt>
                            <dd className="flex flex-wrap gap-4 w-[80%]">
                                <Button
                                    type="green"
                                    size="m"
                                    onClick={() => setOpen21011(true)}
                                >
                                    BO021011_회원조회
                                </Button>
                            </dd>
                        </div>
                    </dl>
                </div>
            </DefaultLayout>

            {/* BO021003_사용자관리>회원간편조회 */}
            <Drawer
                id="drawer-21003"
                open={open21003}
                handleClose={setOpen21003}
                title="회원간편조회"
                btns={[{ type: "black", label: "닫기" }]}
            >
                <>
                    <p className="h4">회원기본정보 / 추가정보</p>
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
                                    <th scope="row">회원번호</th>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            <span>3231344</span>
                                            <Button type="outline" size="s">
                                                복사
                                            </Button>
                                        </div>
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
                                    <th scope="row">회원유형</th>
                                    <td>APP회원</td>
                                    <th scope="row">CI값</th>
                                    <td>Y / 2024-01-31 00:00 / 휴대폰인증</td>
                                </tr>
                                <tr>
                                    <th scope="row">휴대폰번호</th>
                                    <td>010-2244-1234</td>
                                    <th scope="row">이메일</th>
                                    <td>parking@email.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">이름&#40;닉네임&#41;</th>
                                    <td>홍길동</td>
                                    <th scope="row">마케팅활용동의</th>
                                    <td>Y &#40;2024-01-31 00:00&#41;</td>
                                </tr>
                                <tr>
                                    <th scope="row">간편로그인</th>
                                    <td>네이버, 카카오톡, Apple, Google</td>
                                    <th scope="row">가입일시</th>
                                    <td>2024-01-31 00:00</td>
                                </tr>
                                <tr>
                                    <th scope="row">최종접속일시</th>
                                    <td>2024-01-31 00:00</td>
                                    <th scope="row">최종결제주차장</th>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                주차장명
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">차량번호</th>
                                    <td>
                                        <div className="flex items-center gap-2">
                                            <span className="underline">
                                                123가1234
                                            </span>
                                            <span>&#91;대표&#93;</span>
                                        </div>
                                    </td>
                                    <th scope="row">초대코드</th>
                                    <td>abcdefg</td>
                                </tr>
                                <tr>
                                    <th scope="row">추가정보</th>
                                    <td>전기차</td>
                                    <th scope="row">추가정보</th>
                                    <td>SUV</td>
                                </tr>
                                <tr>
                                    <th scope="row">추가정보</th>
                                    <td>미정</td>
                                    <th scope="row"></th>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6">
                        <p className="h4">회원이력정보</p>
                        <div className="table-basic mt-2">
                            <table>
                                <colgroup>
                                    <col width="152px" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th scope="row">현재포인트</th>
                                        <td colSpan={7}>
                                            <div className="flex items-center gap-3">
                                                <span className="text-green">
                                                    12,234P
                                                </span>
                                                <span>
                                                    총 22,234P / 사용 10,000P /
                                                    소멸예정 10,000P
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">결제</th>
                                        <td colSpan={7}>
                                            <span className="text-green">
                                                32건
                                            </span>
                                            <span className="mx-3">
                                                총 35건 / 취소 1건 / 환불 2건
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">리뷰</th>
                                        <td>
                                            <span className="text-green">
                                                32건
                                            </span>
                                        </td>
                                        <th scope="row">제보</th>
                                        <td>
                                            <span className="text-green">
                                                5건
                                            </span>
                                        </td>
                                        <th scope="row">신고</th>
                                        <td>
                                            <span className="text-green">
                                                2건
                                            </span>
                                        </td>
                                        <th scope="row">접속</th>
                                        <td>
                                            <span className="text-green">
                                                50회
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="mt-6">
                        <p className="h4">관리자 메모</p>
                        <div className="table-memo">
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
                                            포인트를 지급했습니다. YYYY-MM-DD
                                            hh:mm
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            관리자명&#40;아이디&#41; / 소속
                                        </th>
                                        <td>
                                            관리자가 작성한 메모가 표기됩니다.
                                            관리자가 작성한 메모가 표기됩니다.
                                            관리자가 작성한 메모가 표기됩니다.
                                            관리자가 작성한 메모가 표기됩니다.
                                            관리자가 작성한 메모가 표기됩니다.
                                            관리자가 작성한 메모가 표기됩니다.
                                            YYYY-MM-DD hh:mm
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <Paging className="mt-2" />
                        </div>
                    </div>
                </>
            </Drawer>

            {/* BO021011_회원조회 */}
            <ModalBasic
                open={open21011}
                size="xl"
                handleClose={() => setOpen21011(false)}
            >
                <>
                    <p className="modal-tit">회원조회</p>
                    <div className="modal-cont">
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
                                        <th scope="row">계정상태</th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <Checkbox
                                                    label="전체"
                                                    defaultChecked
                                                />
                                                <Checkbox label="활성" />
                                                <Checkbox label="비활성" />
                                                <Checkbox label="검토" />
                                                <Checkbox label="정지" />
                                            </div>
                                        </td>
                                        <th scope="row">블랙리스트 여부</th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <Checkbox
                                                    label="전체"
                                                    defaultChecked
                                                />
                                                <Checkbox label="Y" />
                                                <Checkbox label="N" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">회원유형</th>
                                        <td colSpan={3}>
                                            <div className="flex items-center gap-3">
                                                <Radio
                                                    name="t2"
                                                    label="전체"
                                                    defaultChecked
                                                />
                                                <Radio name="t2" label="회원" />
                                                <Radio
                                                    name="t2"
                                                    label="파트너"
                                                />
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
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">검색어</th>
                                        <td colSpan={3}>
                                            <Input
                                                placeholder="검색어를 입력하세요."
                                                size="l"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">가입일자</th>
                                        <td colSpan={3}>
                                            <div className="flex items-center gap-2">
                                                <FormDateRange size="s" />
                                                <ButtonGroup />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-end mt-4">
                            <Button type="green" size="m">
                                검색
                            </Button>
                        </div>
                        <div className="flex items-center min-h-[2.5rem] mt-6">
                            <p className="h4">
                                총 <span className="text-green">9,999</span>건
                            </p>
                        </div>
                        <div className="table-grid mt-4">
                            <table>
                                <colgroup>
                                    <col width="5%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th scope="col">
                                            <Checkbox />
                                        </th>
                                        <th scope="col">회원번호</th>
                                        <th scope="col">계정상태</th>
                                        <th scope="col">회원유형</th>
                                        <th scope="col">휴대폰번호</th>
                                        <th scope="col">
                                            이름&#40;닉네임&#41;
                                        </th>
                                        <th scope="col">차량번호</th>
                                        <th scope="col">가입일시</th>
                                        <th scope="col">최종접속일시</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Checkbox />
                                        </td>
                                        <td>NNNNNN</td>
                                        <td>활성</td>
                                        <td>APP회원</td>
                                        <td>010-1234-5678</td>
                                        <td>홍길동</td>
                                        <td>123가4567</td>
                                        <td>2024-12-31 00:00</td>
                                        <td>2024-12-31 00:00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Paging className="mt-6" />
                    </div>
                    <div className="modal-btns justify-center">
                        <Button type="gray" size="l">
                            취소
                        </Button>
                        <Button type="green" size="l">
                            확인
                        </Button>
                    </div>
                </>
            </ModalBasic>
        </>
    );
}
