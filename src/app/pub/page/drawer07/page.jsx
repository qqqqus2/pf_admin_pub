"use client";

import { useState } from "react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Button from "@pub/components/Button";
import ModalBasic from "@pub/components/Modal";
import Drawer from "@pub/components/Drawer";
import Text from "@pub/components/Form/Text";
import Checkbox from "@pub/components/Form/Check";
import Accordion from "@pub/components/Accordion";
import SelectBasic from "@pub/components/Form/Select";
import Carousel from "@pub/components/Carousel";
import Paging from "@pub/components/Grid/Paging";
import Input from "@pub/components/Form/Input";
import FileDropThumb from "@pub/components/Form/FileDropThumb";
import IcMap from "@/assets/icons/ico_map.svg";
import IcArrowRight from "@/assets/icons/ico_arrow_right.svg";

export default function Drawer07() {
  const [open71002, setOpen71002] = useState(false);
  const [open71005, setOpen71005] = useState(false);
  const [open72002, setOpen72002] = useState(false);

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
                  onClick={() => setOpen71002(true)}
                >
                  BO071002_결제상세내역
                </Button>
                <Button
                  type="green"
                  size="m"
                  onClick={() => setOpen71005(true)}
                >
                  BO071005_주차장 결제상세
                </Button>
                <Button
                  type="green"
                  size="m"
                  onClick={() => setOpen72002(true)}
                >
                  BO072002_정산상세
                </Button>
              </dd>
            </div>
          </dl>
        </div>
      </DefaultLayout>

      {/* BO071002_정산관리>결제관리>결제상세내역 */}
      <Drawer
        id="drawer-71002"
        open={open71002}
        handleClose={setOpen71002}
        title="결제상세내역"
        btns={[{ type: "black", label: "닫기" }]}
      >
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
                  예약정보
                </th>
              </tr>
              <tr>
                <th scope="row">주차장명</th>
                <td colSpan={3}>0048571 / 중구청 구획3-88-0&#40;#1111&#41;</td>
              </tr>
              <tr>
                <th scope="row">주차장번호</th>
                <td>NNNNNN</td>
                <th scope="row">연장결제여부</th>
                <td>N</td>
              </tr>
              <tr>
                <th scope="row">주차장 종류</th>
                <td>시간권</td>
                <th scope="row">파트너명</th>
                <td>중구청</td>
              </tr>
              <tr>
                <th scope="row">회원유형</th>
                <td>회원</td>
                <th scope="row">주문자명</th>
                <td>홍길동</td>
              </tr>
              <tr>
                <th scope="row">휴대폰번호</th>
                <td>01012345678</td>
                <th scope="row">차량번호</th>
                <td>
                  <div className="flex items-center gap-2">
                    <Input defaultValue="29호0900" />
                    <Button type="gray" size="m">
                      수정
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">예약시간</th>
                <td colSpan={3}>1일 1시간30분</td>
              </tr>
              <tr>
                <th scope="row">예약시작시간</th>
                <td>2024-11-01 오전00:00</td>
                <th scope="row">예약종료시간</th>
                <td>2024-11-02 오전01:30</td>
              </tr>
              <tr>
                <th scope="col" colSpan={4}>
                  결제정보
                </th>
              </tr>
              <tr>
                <th scope="row">승인번호</th>
                <td>NNNNNN</td>
                <th scope="row">결제일시</th>
                <td>
                  <div className="flex items-center gap-2">
                    <span>yyyy-mm-dd hh:mm:ss</span>
                    <Button type="outline" size="s">
                      영수증 출력
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">결제수단</th>
                <td>카드결제</td>
                <th scope="row">적립&#40;보유&#41;포인트</th>
                <td>20P&#40;3,300P&#41;</td>
              </tr>
              <tr>
                <th scope="row">결제금액</th>
                <td colSpan={3}>
                  <div className="table-basic">
                    <table>
                      <colgroup>
                        <col />
                        <col />
                        <col width="30%" />
                        <col />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">결제금액</th>
                          <th scope="col">쿠폰금액</th>
                          <th scope="col">포인트&#40;전환포인트 외&#41;</th>
                          <th scope="col">전환포인트</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <p className="text-red text-right">-2,000</p>
                          </td>
                          <td>
                            <p className="text-red text-right">-500</p>
                          </td>
                          <td>
                            <p className="text-red text-right">-500</p>
                          </td>
                          <td>
                            <p className="text-right">0</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="col" colSpan={4}>
                  <div className="flex justify-end items-center gap-2">
                    <SelectBasic
                      placeholder="취소/환불사유를 선택하세요"
                      className="w-[15rem]"
                    />
                    <Input
                      defaultValue="블랙리스트 이슈로 환불 처리"
                      className="w-[15rem]"
                    />
                    <Button type="outline" size="m">
                      취소/환불
                    </Button>
                  </div>
                </th>
              </tr>
              <tr>
                <th scope="row">승인번호</th>
                <td>NNNNNN</td>
                <th scope="row">취소/환불일시</th>
                <td>
                  <div className="flex items-center gap-2">
                    <span>yyyy-mm-dd hh:mm:ss</span>
                    <Button type="outline" size="s">
                      영수증 출력
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">취소/환불수단</th>
                <td>카드결제</td>
                <th scope="row">환불&#40;보유&#41;포인트</th>
                <td>20P&#40;3,300P&#41;</td>
              </tr>
              <tr>
                <th scope="row">취소/환불금액</th>
                <td colSpan={3}>
                  <div className="table-basic">
                    <table>
                      <colgroup>
                        <col />
                        <col />
                        <col width="30%" />
                        <col />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">결제금액</th>
                          <th scope="col">쿠폰금액</th>
                          <th scope="col">포인트&#40;전환포인트 외&#41;</th>
                          <th scope="col">전환포인트</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <p className="text-red text-right">-2,000</p>
                          </td>
                          <td>
                            <p className="text-red text-right">-500</p>
                          </td>
                          <td>
                            <p className="text-red text-right">-500</p>
                          </td>
                          <td>
                            <p className="text-right">0</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
                <th scope="row">관리자명&#40;아이디&#41; / 소속</th>
                <td>
                  회원문의 3회 이상 욕설과 강성요청 고객으로 블랙리스트
                  적용합니다. 2024-01-01 00:00
                </td>
              </tr>
              <tr>
                <th scope="row">관리자명&#40;아이디&#41; / 소속</th>
                <td>
                  시스템 오류에 의한 불편함의 이유로 포인트를 지급했습니다.
                  YYYY-MM-DD hh:mm
                </td>
              </tr>
              <tr>
                <th scope="row">관리자명&#40;아이디&#41; / 소속</th>
                <td>
                  관리자가 작성한 메모가 표기됩니다. 관리자가 작성한 메모가
                  표기됩니다. 관리자가 작성한 메모가 표기됩니다.관리자가 작성한
                  메모가 표기됩니다. 관리자가 작성한 메모가 표기됩니다. 관리자가
                  작성한 메모가 표기됩니다. YYYY-MM-DD hh:mm
                </td>
              </tr>
            </tbody>
          </table>
          <Paging className="mt-2" />
        </div>
        <p className="h4 mt-6">차량번호 변경이력관리</p>
        <div className="table-grid mt-4">
          <table>
            <colgroup>
              <col width="60px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">번호</th>
                <th scope="col">등록자</th>
                <th scope="col">등록일시</th>
                <th scope="col">변경내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>김파프&#40;adminid&#41;</td>
                <td>yyyy-mm-dd 00:00</td>
                <td>서울32 2353</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Drawer>

      {/* BO071005_정산관리>주차장 결제관리>주차장 결제상세 */}
      <Drawer
        id="drawer-71005"
        open={open71005}
        handleClose={setOpen71005}
        title="주차장 결제상세"
        btns={[
          { type: "black", label: "취소" },
          { type: "green", label: "저장" },
          { type: "blue", label: "확인요청" },
        ]}
      >
        {/* 기본정보 */}
        <Accordion title="승인이력(00)" open className="mb-8">
          <div className="table-grid">
            <table>
              <colgroup>
                <col width="10%" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">번호</th>
                  <th scope="col">상태</th>
                  <th scope="col">처리자</th>
                  <th scope="col">처리일시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>대사 전 되돌리기</td>
                  <td>김파프&#40;adminid&#41;</td>
                  <td>yyyy-mm-dd 00:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Accordion>
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
                  <div className="flex justify-between items-center">
                    주차장정보
                    <Button type="outline" size="s">
                      주차장상세
                    </Button>
                  </div>
                </th>
              </tr>
              <tr>
                <th scope="row">주차장명</th>
                <td colSpan={3}>0048571 / 중구청 구획3-88-0&#40;#1111&#41;</td>
              </tr>
              <tr>
                <th scope="row">파트너명</th>
                <td>중구청</td>
                <th scope="row">주차장상태</th>
                <td>서비스중</td>
              </tr>
              <tr>
                <th scope="row">주차장종류</th>
                <td>공유&#40;구획제&#41;</td>
                <th scope="row">결제월/결제건수</th>
                <td>2024-10 / 100건</td>
              </tr>
              <tr>
                <th scope="col" colSpan={4}>
                  <div className="flex justify-between items-center">
                    배정자정보
                    <Button type="outline" size="s">
                      배정자상세
                    </Button>
                  </div>
                </th>
              </tr>
              <tr>
                <th scope="row">배정자명</th>
                <td>김길동</td>
                <th scope="row">휴대폰번호</th>
                <td>01012345678</td>
              </tr>
              <tr>
                <th scope="row">차량번호</th>
                <td>29호0900</td>
                <th scope="row">배정자 한도금액</th>
                <td>20,000</td>
              </tr>
              <tr>
                <th scope="row">배정시작일</th>
                <td>2024-11-01</td>
                <th scope="row">배정종료일</th>
                <td>2024-11-02</td>
              </tr>
              <tr>
                <th scope="col" colSpan={4}>
                  매출정보
                </th>
              </tr>
              <tr>
                <th scope="row">수입금액</th>
                <td colSpan={3}>
                  <Input size="m" defaultValue="1,100,000" />
                </td>
              </tr>
              <tr>
                <th scope="row">매출액&#40;공금가액&#41;</th>
                <td>1,000,000</td>
                <th scope="row">부가세</th>
                <td>100,000</td>
              </tr>
              <tr>
                <th scope="row">유지관리비</th>
                <td>
                  <Input size="m" defaultValue="30,000" />
                </td>
                <th scope="row">PG수수료</th>
                <td>
                  <Input size="m" defaultValue="50,000" />
                </td>
              </tr>
              <tr>
                <th scope="col" colSpan={4}>
                  수익정보
                </th>
              </tr>
              <tr>
                <th scope="row">정산비율</th>
                <td colSpan={3}>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                    <div className="flex items-center">
                      <span>파킹프렌즈</span>
                      <Input
                        defaultValue="100"
                        disabled
                        className="w-20 ml-3 mr-3"
                      />
                      <span>%</span>
                    </div>
                    <div className="flex items-center">
                      <span>파트너</span>
                      <Input
                        defaultValue="100"
                        disabled
                        className="w-20 ml-3 mr-3"
                      />
                      <span>%</span>
                    </div>
                    <div className="flex items-center">
                      <span>&#40; 지자체</span>
                      <Input
                        defaultValue="100"
                        disabled
                        className="w-20 ml-3 mr-3"
                      />
                      <span>%</span>
                    </div>
                    <div className="flex items-center">
                      <span>배정자</span>
                      <Input
                        defaultValue="100"
                        disabled
                        className="w-20 ml-3 mr-3"
                      />
                      <span>% &#41;</span>
                    </div>
                    <div className="flex items-center">
                      <span>기타</span>
                      <Input
                        defaultValue="100"
                        disabled
                        className="w-20 ml-3 mr-3"
                      />
                      <span>%</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">총 수익</th>
                <td colSpan={3}>
                  <Input size="m" defaultValue="1,020,000" />
                </td>
              </tr>
              <tr>
                <th scope="row">배정자 수익</th>
                <td colSpan={3}>
                  <Input size="m" defaultValue="100,000" />
                </td>
              </tr>
              <tr>
                <th scope="row">배정자 초과금액</th>
                <td>30,000</td>
                <th scope="row">배정자 실입금액</th>
                <td>
                  <Input size="m" defaultValue="20,000" />
                </td>
              </tr>
              <tr>
                <th scope="row">파트너 수익</th>
                <td colSpan={3}>
                  <Input size="m" defaultValue="400,000" />
                </td>
              </tr>
              <tr>
                <th scope="row">파트너 지급액</th>
                <td colSpan={3}>
                  <Input size="m" defaultValue="430,000" />
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
                <th scope="row">관리자명&#40;아이디&#41; / 소속</th>
                <td>
                  회원문의 3회 이상 욕설과 강성요청 고객으로 블랙리스트
                  적용합니다. 2024-01-01 00:00
                </td>
              </tr>
              <tr>
                <th scope="row">관리자명&#40;아이디&#41; / 소속</th>
                <td>
                  시스템 오류에 의한 불편함의 이유로 포인트를 지급했습니다.
                  YYYY-MM-DD hh:mm
                </td>
              </tr>
              <tr>
                <th scope="row">관리자명&#40;아이디&#41; / 소속</th>
                <td>
                  관리자가 작성한 메모가 표기됩니다. 관리자가 작성한 메모가
                  표기됩니다. 관리자가 작성한 메모가 표기됩니다.관리자가 작성한
                  메모가 표기됩니다. 관리자가 작성한 메모가 표기됩니다. 관리자가
                  작성한 메모가 표기됩니다. YYYY-MM-DD hh:mm
                </td>
              </tr>
            </tbody>
          </table>
          <Paging className="mt-2" />
        </div>
        <p className="h4 mt-6">정보변경이력</p>
        <div className="table-grid mt-4">
          <table>
            <colgroup>
              <col width="60px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">번호</th>
                <th scope="col">변경일시</th>
                <th scope="col">등록자</th>
                <th scope="col">항목</th>
                <th scope="col">변경전 내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>yyyy-mm-dd 00:00</td>
                <td>김파프&#40;adminid&#41;</td>
                <td>총수익</td>
                <td>1,200,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Drawer>

      {/* BO072002_정산관리>정산관리>정산상세 */}
      <Drawer
        id="drawer-72002"
        open={open72002}
        handleClose={setOpen72002}
        title="정산상세"
        btns={[
          { type: "green", label: "정산확정" },
          { type: "black", label: "대사 전 되돌리기" },
          { type: "blue", label: "정산취소" },
        ]}
      >
        {/* 기본정보 */}
        <Accordion title="승인이력(00)" open className="mb-8">
          <div className="table-grid">
            <table>
              <colgroup>
                <col width="10%" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">번호</th>
                  <th scope="col">상태</th>
                  <th scope="col">처리자</th>
                  <th scope="col">처리일시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>대사 전 되돌리기</td>
                  <td>김파프&#40;adminid&#41;</td>
                  <td>yyyy-mm-dd 00:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Accordion>
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
                  주차장정보
                </th>
              </tr>
              <tr>
                <th scope="row">주차장명</th>
                <td colSpan={3}>0048571 / 중구청 구획3-88-0&#40;#1111&#41;</td>
              </tr>
              <tr>
                <th scope="row">파트너명</th>
                <td>중구청</td>
                <th scope="row">주차장상태</th>
                <td>서비스중</td>
              </tr>
              <tr>
                <th scope="row">주차장종류</th>
                <td>공유&#40;구획제&#41;</td>
                <th scope="row">결제월/결제건수</th>
                <td>2024-10 / 100건</td>
              </tr>
              <tr>
                <th scope="col" colSpan={4}>
                  매출정보
                </th>
              </tr>
              <tr>
                <th scope="row">수입금액</th>
                <td colSpan={3}>1,100,000</td>
              </tr>
              <tr>
                <th scope="row">매출액&#40;공금가액&#41;</th>
                <td>1,000,000</td>
                <th scope="row">부가세</th>
                <td>100,000</td>
              </tr>
              <tr>
                <th scope="row">유지관리비</th>
                <td>30,000</td>
                <th scope="row">PG수수료</th>
                <td>50,000</td>
              </tr>
              <tr>
                <th scope="col" colSpan={4}>
                  수익정보
                </th>
              </tr>
              <tr>
                <th scope="row">정산비율</th>
                <td colSpan={3}>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                    <div className="flex items-center">
                      <span>파킹프렌즈</span>
                      <Input
                        defaultValue="100"
                        disabled
                        className="w-20 ml-3 mr-3"
                      />
                      <span>%</span>
                    </div>
                    <div className="flex items-center">
                      <span>파트너</span>
                      <Input
                        defaultValue="100"
                        disabled
                        className="w-20 ml-3 mr-3"
                      />
                      <span>%</span>
                    </div>
                    <div className="flex items-center">
                      <span>기타</span>
                      <Input
                        defaultValue="100"
                        disabled
                        className="w-20 ml-3 mr-3"
                      />
                      <span>%</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">총 수익</th>
                <td colSpan={3}>1,020,000</td>
              </tr>
              <tr>
                <th scope="row">파트너 수익</th>
                <td colSpan={3}>400,000</td>
              </tr>
              <tr>
                <th scope="row">파트너 지급액</th>
                <td colSpan={3}>430,000</td>
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
                <th scope="row">관리자명&#40;아이디&#41; / 소속</th>
                <td>
                  회원문의 3회 이상 욕설과 강성요청 고객으로 블랙리스트
                  적용합니다. 2024-01-01 00:00
                </td>
              </tr>
              <tr>
                <th scope="row">관리자명&#40;아이디&#41; / 소속</th>
                <td>
                  시스템 오류에 의한 불편함의 이유로 포인트를 지급했습니다.
                  YYYY-MM-DD hh:mm
                </td>
              </tr>
              <tr>
                <th scope="row">관리자명&#40;아이디&#41; / 소속</th>
                <td>
                  관리자가 작성한 메모가 표기됩니다. 관리자가 작성한 메모가
                  표기됩니다. 관리자가 작성한 메모가 표기됩니다.관리자가 작성한
                  메모가 표기됩니다. 관리자가 작성한 메모가 표기됩니다. 관리자가
                  작성한 메모가 표기됩니다. YYYY-MM-DD hh:mm
                </td>
              </tr>
            </tbody>
          </table>
          <Paging className="mt-2" />
        </div>
        <p className="h4 mt-6">정보변경이력</p>
        <div className="table-grid mt-4">
          <table>
            <colgroup>
              <col width="60px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">번호</th>
                <th scope="col">변경일시</th>
                <th scope="col">등록자</th>
                <th scope="col">항목</th>
                <th scope="col">변경전 내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>yyyy-mm-dd 00:00</td>
                <td>김파프&#40;adminid&#41;</td>
                <td>총수익</td>
                <td>1,200,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Drawer>
    </>
  );
}
