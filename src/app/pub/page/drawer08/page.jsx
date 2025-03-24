"use client";

import { useState } from "react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Drawer from "@pub/components/Drawer";
import ModalBasic from "@pub/components/Modal";
import Input from "@pub/components/Form/Input";
import Toggle from "@pub/components/Form/Toggle";
import SelectBasic from "@pub/components/Form/Select";
import FormDate from "@pub/components/Form/Date";
import FormDateRange from "@pub/components/Form/DateRange";
import Checkbox from "@pub/components/Form/Check";
import Radio from "@pub/components/Form/Radio";
import Text from "@pub/components/Form/Text";
import FormEditor from "@pub/components/Form/Editor";
import Paging from "@pub/components/Grid/Paging";

export default function Drawer08() {
    const [open81003, setOpen81003] = useState(false);
    const [open83002, setOpen83002] = useState(false);
    const [open84002, setOpen84002] = useState(false);
    const [open88002, setOpen88002] = useState(false);
    const [open88003, setOpen88003] = useState(false);

    return (
        <>
            <DefaultLayout>
                <div className="relative grow py-[2.5rem]">
                    <h1 className="h1">Guide_Drawer</h1>
                    <dl className="flex flex-col gap-8 max-w-[70rem] mt-9">
                        <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
                            <dt className="h4">Drawer</dt>
                            <dd className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <Button
                                        type="green"
                                        size="m"
                                        onClick={() => setOpen81003(true)}
                                    >
                                        BO081003_계정 신청
                                    </Button>
                                    <Button
                                        type="green"
                                        size="m"
                                        onClick={() => setOpen83002(true)}
                                    >
                                        BO083002_서브코드 등록/조회
                                    </Button>
                                    <Button
                                        type="green"
                                        size="m"
                                        onClick={() => setOpen84002(true)}
                                    >
                                        BO084002_APP버전관리
                                    </Button>
                                    <Button
                                        type="green"
                                        size="m"
                                        onClick={() => setOpen88002(true)}
                                    >
                                        BO088002_관리자계정조회
                                    </Button>
                                </div>
                            </dd>
                        </div>
                        <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
                            <dt className="h4">Modal</dt>
                            <dd className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <Button
                                        type="green"
                                        size="m"
                                        onClick={() => setOpen88003(true)}
                                    >
                                        BO088003_관리자조회
                                    </Button>
                                </div>
                            </dd>
                        </div>
                    </dl>
                </div>
            </DefaultLayout>

            {/* BO081003_관리자설정관리>계정신청관리_상세 */}
            <Drawer
                id="drawer-81003"
                open={open81003}
                handleClose={setOpen81003}
                title="계정 신청"
                btns={[
                    { type: "gray", label: "닫기" },
                    // { type: "green", label: "등록" },
                ]}
            >
                <>
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
                                    <th scope="row">아이디</th>
                                    <td>parking_mk</td>
                                    <th scope="row">등록일자</th>
                                    <td>2024-01-31 00:00</td>
                                </tr>
                                <tr>
                                    <th scope="row">비밀번호</th>
                                    <td colSpan={3}>
                                        <Button type="outline" size="s">
                                            임시비밀번호 발송
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">이름</th>
                                    <td colSpan={3}>김길동</td>
                                </tr>
                                <tr>
                                    <th scope="row">휴대폰번호</th>
                                    <td colSpan={3}>010-1223-1245</td>
                                </tr>
                                <tr>
                                    <th scope="row">이메일주소</th>
                                    <td colSpan={3}>leghieo@nate.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">소속부서 / 소속회사</th>
                                    <td colSpan={3}>
                                        <div className="flex items-center gap-2">
                                            <span>하이파킹</span>
                                            <Button type="outline" size="s">
                                                파트너명 매핑
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">추가관리자</th>
                                    <td colSpan={3}>2024-09-01 ~ 2024-09-30</td>
                                </tr>
                                <tr>
                                    <th scope="row">접속IP</th>
                                    <td colSpan={3}>
                                        <div className="flex items-center gap-3">
                                            <Radio name="t31003" label="설정" />
                                            <Radio
                                                name="t31003"
                                                label="미설정"
                                                defaultChecked
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">승인여부</th>
                                    <td colSpan={3}>
                                        <SelectBasic defaultSelect size="m" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">승인자</th>
                                    <td>김파프&#40;amdinid&#41;</td>
                                    <th scope="row">승인일시</th>
                                    <td>2024-01-31 00:00</td>
                                </tr>
                                <tr>
                                    <th scope="row">관리자메모</th>
                                    <td colSpan={3}>
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
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
                                        하이파킹 관리자 이며 , 해당 담당자
                                        요청으로 IP 미설정 2024-01-01 00:00
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6">
                        <p className="h4">이력관리</p>
                        <div className="table-grid mt-4">
                            <table>
                                <colgroup>
                                    <col width="10%" />
                                    <col width="25%" />
                                    <col width="25%" />
                                    <col />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th scope="col">번호</th>
                                        <th scope="col">등록자</th>
                                        <th scope="col">등록일시</th>
                                        <th scope="col">내용요약</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>김파프&#40;amdinid&#41;</td>
                                        <td>2024-01-31 00:00</td>
                                        <td>승인반려&#40;반려사유&#41;</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>김파프&#40;amdinid&#41;</td>
                                        <td>2024-01-31 00:00</td>
                                        <td>승인완료</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            </Drawer>
            {/* BO083002_관리자설정관리>관리자계정관리>상세 */}
            <Drawer
                id="drawer-83002"
                open={open83002}
                handleClose={setOpen83002}
                title="서브코드 등록/조회"
                btns={[{ type: "gray", label: "닫기" }]}
            >
                <>
                    <div className="flex items-center min-h-[2.5rem]">
                        <p className="h4">
                            총 <span className="text-green">0</span>건
                        </p>
                        <Button type="gray" size="m" className="ml-auto">
                            추가
                        </Button>
                    </div>
                    <div className="overflow-auto flex flex-col gap-6 mt-4">
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
                                        <th scope="row">사용여부</th>
                                        <td>
                                            <Toggle />
                                        </td>
                                        <th scope="row">
                                            <span className="text-req">ID</span>
                                        </th>
                                        <td>
                                            <Input />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <span className="text-req">
                                                서브 코드명&#40;한글&#41;
                                            </span>
                                        </th>
                                        <td>
                                            <Input />
                                        </td>
                                        <th scope="row">
                                            <span className="text-req">
                                                서브 코드명&#40;영문&#41;
                                            </span>
                                        </th>
                                        <td>
                                            <Input />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">코드내용</th>
                                        <td colSpan={3}>
                                            <Input />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">등록자</th>
                                        <td>김파프&#40;amdinid&#41;</td>
                                        <th scope="row">등록일시</th>
                                        <td>
                                            <span className="text-muted">
                                                등록 후 노출
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
                                        <th scope="row">사용여부</th>
                                        <td>
                                            <Toggle checked={false} />
                                        </td>
                                        <th scope="row">
                                            <span className="text-req">ID</span>
                                        </th>
                                        <td>
                                            <Input />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <span className="text-req">
                                                서브 코드명&#40;한글&#41;
                                            </span>
                                        </th>
                                        <td>
                                            <Input />
                                        </td>
                                        <th scope="row">
                                            <span className="text-req">
                                                서브 코드명&#40;영문&#41;
                                            </span>
                                        </th>
                                        <td>
                                            <Input />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">코드내용</th>
                                        <td colSpan={3}>
                                            <Input />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">등록자</th>
                                        <td>김파프&#40;amdinid&#41;</td>
                                        <th scope="row">등록일시</th>
                                        <td>
                                            <span className="text-muted">
                                                등록 후 노출
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            </Drawer>
            {/* BO084002_관리자설정관리>APP버전관리 */}
            <Drawer
                id="drawer-84002"
                open={open84002}
                handleClose={setOpen84002}
                title="APP버전관리"
                btns={[{ type: "gray", label: "닫기" }]}
            >
                <>
                    <p className="flex justify-end gap-1 text-muted text-sm font-medium">
                        <span className="text-red">*</span>
                        필수항목
                    </p>
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
                                    <th scope="row">
                                        <span className="text-req">OS</span>
                                    </th>
                                    <td colSpan={3}>
                                        <div className="flex items-center gap-3">
                                            <Radio
                                                name="t1"
                                                label="Android"
                                                defaultChecked
                                            />
                                            <Radio name="t1" label="IOS" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">버전정보</th>
                                    <td colSpan={3}>
                                        <div className="flex items-center gap-2">
                                            <Input size="m" disabled />
                                            <span className="text-muted">
                                                실제 스토어에 업데이트되는
                                                버전과 동일하게 입력해주세요.
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <span className="text-req">
                                            사용여부
                                        </span>
                                    </th>
                                    <td colSpan={3}>
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center gap-3">
                                                <Radio
                                                    name="t3"
                                                    label="사용"
                                                    defaultChecked
                                                />
                                                <FormDate
                                                    selected={new Date()}
                                                    size="m"
                                                />
                                            </div>
                                            <Radio name="t3" label="사용안함" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">배포일시</th>
                                    <td colSpan={3}>
                                        <div className="flex items-center">
                                            <FormDate
                                                selected={new Date()}
                                                time
                                            />
                                            <span className="ml-auto text-muted">
                                                ※배포한 일자와 시간을
                                                입력합니다.
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <span className="text-req">
                                            업데이트내용
                                        </span>
                                    </th>
                                    <td colSpan={3}>
                                        <FormEditor />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">관리자메모</th>
                                    <td colSpan={3}>
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
                                </tr>
                                <tr>
                                    <th scope="row">등록자</th>
                                    <td>김파프 &#40;admin&#41;</td>
                                    <th scope="row">등록일시</th>
                                    <td>
                                        <span className="text-muted">
                                            등록 후 노출
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            </Drawer>
            {/* BO088002_관리자설정관리>관리자계정관리>상세 */}
            <Drawer
                id="drawer-88002"
                open={open88002}
                handleClose={setOpen88002}
                title="관리자계정 조회"
                btns={[{ type: "gray", label: "닫기" }]}
            >
                <>
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
                                    <td colSpan={3}>
                                        <div className="flex items-center gap-3">
                                            <Radio
                                                name="t88002a"
                                                label="활성"
                                                defaultChecked
                                            />
                                            <Radio
                                                name="t88002a"
                                                label="정지"
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">아이디</th>
                                    <td>parking_mk</td>
                                    <th scope="row">등록일자</th>
                                    <td>2024-01-31</td>
                                </tr>
                                <tr>
                                    <th scope="row">이름</th>
                                    <td colSpan={3}>김길동</td>
                                </tr>
                                <tr>
                                    <th scope="row">휴대폰번호</th>
                                    <td colSpan={3}>010-1223-1245</td>
                                </tr>
                                <tr>
                                    <th scope="row">이메일주소</th>
                                    <td colSpan={3}>leghieo@nate.com</td>
                                </tr>
                                <tr>
                                    <th scope="row">소속부서 / 소속회사</th>
                                    <td colSpan={3}>하이파킹</td>
                                </tr>
                                <tr>
                                    <th scope="row">접속IP</th>
                                    <td>설정 &#40;111.11.111.111&#41;</td>
                                    <th scope="row">서약서 동의일시</th>
                                    <td>2024-01-31 00:00</td>
                                </tr>
                                <tr>
                                    <th scope="row">승인여부</th>
                                    <td>승인완료</td>
                                    <th scope="row">최종접속일시</th>
                                    <td>2024-01-31 00:00</td>
                                </tr>
                                <tr>
                                    <th scope="row">승인자</th>
                                    <td>김파프&#40;amdinid&#41;</td>
                                    <th scope="row">승인일시</th>
                                    <td>2024-01-31 00:00</td>
                                </tr>
                                <tr>
                                    <th scope="row">관리자메모</th>
                                    <td colSpan={3}>
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
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
                                        하이파킹 관리자 이며 , 해당 담당자
                                        요청으로 IP 미설정 2024-01-01 00:00
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            </Drawer>

            {/* BO088003_관리자조회 */}
            <ModalBasic
                open={open88003}
                size="xl"
                handleClose={() => setOpen88003(false)}
            >
                <>
                    <p className="modal-tit">관리자 조회</p>
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
                                        <th scope="row">사용여부</th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <Radio
                                                    name="t88003"
                                                    label="전체"
                                                    defaultChecked
                                                />
                                                <Radio
                                                    name="t88003"
                                                    label="사용(Y)"
                                                />
                                                <Radio
                                                    name="t88003"
                                                    label="사용안함(N)"
                                                />
                                            </div>
                                        </td>
                                        <th scope="row">소속부서</th>
                                        <td>
                                            <SelectBasic
                                                placeholder="전체"
                                                size="m"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">검색어</th>
                                        <td colSpan={3}>
                                            <div className="flex items-center gap-2">
                                                <SelectBasic
                                                    placeholder="전체"
                                                    size="m"
                                                />
                                                <Input
                                                    placeholder="검색어를 입력하세요."
                                                    size="l"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">등록일자</th>
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
                                    <col width="60px" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th scope="col">
                                            <Checkbox />
                                        </th>
                                        <th scope="col">사용여부</th>
                                        <th scope="col">아이디</th>
                                        <th scope="col">이름</th>
                                        <th scope="col">휴대폰번호</th>
                                        <th scope="col">소속부서</th>
                                        <th scope="col">서약서동의일시</th>
                                        <th scope="col">최종접속일시</th>
                                        <th scope="col">등록일시</th>
                                        <th scope="col">승인자</th>
                                        <th scope="col">승인일시</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Checkbox />
                                        </td>
                                        <td>Y</td>
                                        <td>Parking00</td>
                                        <td>김길동</td>
                                        <td>010-1234-5678</td>
                                        <td>사업실</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>2024-12-31</td>
                                        <td>김파프&#40;adminId&#41;</td>
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
