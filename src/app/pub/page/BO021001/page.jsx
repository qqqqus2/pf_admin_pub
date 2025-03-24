"use client";

import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Flag from "@pub/components/Flag";
import Radio from "@pub/components/Form/Radio";
import Checkbox from "@pub/components/Form/Check";
import Input from "@pub/components/Form/Input";
import Paging from "@pub/components/Grid/Paging";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";
import Loading from "@pub/components/Loading";
import IcExcel from "@/assets/icons/ico_excel.svg";
import IcInfo from "@/assets/icons/ico_circle_info.svg";

import { useState } from "react";
import IcDown from "@/assets/icons/ico_double_down.svg";

export default function BO021001() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <DefaultLayout>
            <Topbar
                title="회원관리"
                tip="APP회원 정보를 조회하고 관리합니다.<br />파트너(배정자/공유자)관리는 별도 메뉴로 확인하세요."
                path={[
                    { text: "홈", url: "/" },
                    { text: "사용자관리", url: "/" },
                    { text: "회원관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                {/* search box */}
                <div className="search-box relative">
                    <ul>
                        <li>
                            <p className="inline-flex items-center gap-2">
                                계정상태
                            </p>
                            <div className="flex items-center gap-3">
                                <Checkbox label="전체" defaultChecked />
                                <Checkbox label="활성" />
                                <Checkbox label="비활성" />
                                <Checkbox label="정지" />
                            </div>
                        </li>
                        <li>
                            <p className="inline-flex items-center gap-2">
                                검토 여부
                            </p>
                            <div className="flex items-center gap-3">
                                <Radio label="전체" defaultChecked />
                                <Radio label="Y" />
                                <Radio label="N" />
                            </div>
                        </li>
                        <li>
                            <p className="inline-flex items-center gap-2">
                                회원 유형
                            </p>
                            <div className="flex items-center gap-3">
                                <Radio name="f1" label="전체" defaultChecked />
                                <Radio name="f1" label="회원" />
                                <Radio name="f1" label="배정자" />
                                <div className="flex items-center gap-2">
                                    <SelectBasic
                                        placeholder="전체"
                                        size="m"
                                        disabled
                                    />
                                </div>
                            </div>
                        </li>
                        <li>
                            <p className="inline-flex items-center gap-2">
                                블랙리스트 여부
                            </p>
                            <div className="flex items-center gap-3">
                                <Radio label="전체" defaultChecked />
                                <Radio label="Y" />
                                <Radio label="N" />
                            </div>
                        </li>
                        <li className="col-span-2">
                            <p className="inline-flex items-center gap-2">
                                검색어
                            </p>
                            <Input
                                placeholder="이름/휴대폰번호/차량번호로 검색가능합니다."
                                size="l"
                            />
                        </li>
                        <li className="col-span-2">
                            <p>기간</p>
                            <div className="flex items-center gap-2">
                                <FormDateRange />
                                <ButtonGroup />
                            </div>
                        </li>
                    </ul>
                    <div className="search-btn absolute right-0 bottom-6 mt-0">
                        <Button
                            type="green"
                            size="m"
                            onClick={() => setLoading(true)}
                        >
                            검색
                        </Button>
                    </div>
                </div>
                {/* //search box */}

                <div className="grow flex flex-col">
                    <div className="flex items-center min-h-[2.5rem] mb-2">
                        <p className="h4">
                            총 <span className="text-green">231</span>건
                        </p>
                        <div className="ml-4">
                            <Button
                                type="outline"
                                size="m"
                                className="justify-self-end"
                            >
                                <IcExcel />
                                엑셀다운로드
                            </Button>
                        </div>

                        <SelectBasic
                            size="m"
                            placeholder="10개씩 보기"
                            className="ml-auto"
                        />
                    </div>
                    <div className="table-grid">
                        <table>
                            <colgroup>
                                <col width="auto" />
                                <col width="auto" />
                                <col width="auto" />
                                <col width="auto" />
                                <col width="auto" />
                                <col width="auto" />
                                <col width="180px" />
                                <col width="180px" />
                            </colgroup>

                            <thead>
                                <tr>
                                    <th scope="col">회원번호</th>
                                    <th scope="col">검토여부</th>
                                    <th scope="col">계정상태</th>
                                    <th scope="col">회원유형</th>
                                    <th scope="col">휴대폰 번호</th>
                                    <th scope="col">이름&#40;닉네임&#41;</th>
                                    <th scope="col">차량번호</th>
                                    <th scope="col">가입일시</th>
                                    <th scope="col">최종접속일시</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <button type="button">
                                            <span className="underline text-green">
                                                NNNNN
                                            </span>
                                        </button>
                                    </td>
                                    <td>Y</td>
                                    <td>활성</td>
                                    <td>APP회원</td>

                                    <td>010-1234-5678</td>
                                    <td>홍길동</td>
                                    <td>123가4567</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                    <td>yyyy-mm-dd 00:00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="table-bottom">
                        <Paging />
                    </div>
                </div>
            </div>
            {loading && <Loading />}
        </DefaultLayout>
    );
}
