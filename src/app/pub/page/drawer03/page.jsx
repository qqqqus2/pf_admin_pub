"use client";

import { useState } from "react";
import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Drawer from "@pub/components/Drawer";
import ModalBasic from "@pub/components/Modal";
import Alert from "@pub/components/Modal/Alert";
import Input from "@pub/components/Form/Input";
import Toggle from "@pub/components/Form/Toggle";
import SelectBasic from "@pub/components/Form/Select";
import FormDate from "@pub/components/Form/Date";
import FormDateRange from "@pub/components/Form/DateRange";
import FormTimeRange from "@pub/components/Form/TimeRange";
import Checkbox from "@pub/components/Form/Check";
import Radio from "@pub/components/Form/Radio";
import Rating from "@pub/components/Rating";
import Text from "@pub/components/Form/Text";
import Paging from "@pub/components/Grid/Paging";
import FileDropThumb from "@pub/components/Form/FileDropThumb";
import IcExcel from "@/assets/icons/ico_excel.svg";
import IcTagGreen from "@/assets/icons/ico_tag_green.svg";
import IcTagRed from "@/assets/icons/ico_tag_red.svg";

export default function Drawer03() {
  const [open31004, setOpen31004] = useState(false);
  const [open31006, setOpen31006] = useState(false);
  const [open31013, setOpen31013] = useState(false);
  const [open31014, setOpen31014] = useState(false);
  const [open31020, setOpen31020] = useState(false);
  const [open31021, setOpen31021] = useState(false);
  const [open31024a, setOpen31024a] = useState(false);
  const [open31024b, setOpen31024b] = useState(false);
  const [open33005, setOpen33005] = useState(false);
  const [open33006, setOpen33006] = useState(false);
  const [open33008, setOpen33008] = useState(false);
  const [open33011, setOpen33011] = useState(false);
  const [open33015, setOpen33015] = useState(false);
  const [open33017, setOpen33017] = useState(false);
  const [open34002, setOpen34002] = useState(false);

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
                  onClick={() => setOpen31004(true)}
                >
                  BO031004_계정조회
                </Button>
                <Button
                  type="green"
                  size="m"
                  onClick={() => setOpen31006(true)}
                >
                  BO031006_주차권 등록
                </Button>
                <Button
                  type="green"
                  size="m"
                  onClick={() => setOpen31020(true)}
                >
                  BO031020_배정자 등록
                </Button>
                <Button
                  type="green"
                  size="m"
                  onClick={() => setOpen33005(true)}
                >
                  BO033005_CCTV 등록
                </Button>
                <Button
                  type="green"
                  size="m"
                  onClick={() => setOpen33006(true)}
                >
                  BO033006_배정자 공유현황
                </Button>
                <Button
                  type="green"
                  size="m"
                  onClick={() => setOpen33008(true)}
                >
                  BO033008_파프차단기 등록
                </Button>
                <Button
                  type="green"
                  size="m"
                  onClick={() => setOpen33011(true)}
                >
                  BO033011_키오스크 등록/상세
                </Button>
                <Button
                  type="green"
                  size="m"
                  onClick={() => setOpen33015(true)}
                >
                  BO033015_안내판 등록/상세
                </Button>
                <Button
                  type="green"
                  size="m"
                  onClick={() => setOpen33017(true)}
                >
                  BO033017_기타장비 등록/상세
                </Button>
                <Button
                  type="green"
                  size="m"
                  onClick={() => setOpen34002(true)}
                >
                  BO034002_AIoT센서 등록
                </Button>
              </dd>
            </div>
            <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
              <dt className="h4">Modal</dt>
              <dd className="flex flex-wrap gap-4 w-[80%]">
                <Button
                  type="green"
                  size="m"
                  onClick={() => setOpen31013(true)}
                >
                  BO031013_주차장조회
                </Button>
                <Button
                  type="green"
                  size="m"
                  onClick={() => setOpen31014(true)}
                >
                  BO031014_파트너조회
                </Button>
                <Button
                  type="green"
                  size="m"
                  onClick={() => setOpen31021(true)}
                >
                  BO031021_별점/리뷰조회
                </Button>
                <Button
                  type="green"
                  size="m"
                  onClick={() => setOpen31024a(true)}
                >
                  BO031024_판매변경예약
                </Button>
                <Button
                  type="green"
                  size="m"
                  onClick={() => setOpen31024b(true)}
                >
                  BO031024_판매변경예약 확인
                </Button>
              </dd>
            </div>
          </dl>
        </div>
      </DefaultLayout>

      {/* BO031004_파트너관리>계약상세>파트너계정관리>계정조회 */}
      <Drawer
        id="drawer-31004"
        open={open31004}
        handleClose={setOpen31004}
        title="계정조회"
        btns={[
          { type: "black", label: "취소" },
          { type: "green", label: "저장" },
        ]}
      >
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
                  <th scope="row">파트너번호</th>
                  <td>NNNNNN</td>
                  <th scope="row">파트너구분</th>
                  <td>B2G</td>
                </tr>
                <tr>
                  <th scope="row">사용여부</th>
                  <td colSpan={3}>
                    <div className="flex items-center gap-3">
                      <Radio name="t1" label="사용(Y)" defaultChecked />
                      <Radio name="t1" label="사용안함(N)" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">아이디</th>
                  <td>parking_mk</td>
                  <th scope="row">등록일자</th>
                  <td>yyyy-mm-dd</td>
                </tr>
                <tr>
                  <th scope="row">이름</th>
                  <td colSpan={3}>김길동</td>
                </tr>
                <tr>
                  <th scope="row">휴대폰번호</th>
                  <td colSpan={3}>010-2939-3929</td>
                </tr>
                <tr>
                  <th scope="row">이메일주소</th>
                  <td colSpan={3}>Ieghieo@nate.com</td>
                </tr>
                <tr>
                  <th scope="row">소속회사</th>
                  <td colSpan={3}>강남구청</td>
                </tr>
                <tr>
                  <th scope="row">추가관리자</th>
                  <td colSpan={3}>2024-09-01 ~ 2024-09-30</td>
                </tr>
                <tr>
                  <th scope="row">접속IP</th>
                  <td colSpan={3}>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-3">
                        <Radio name="t2" label="설정" defaultChecked />
                        <Input placeholder="111.11.111.111" disabled />
                      </div>
                      <Radio name="t2" label="미설정" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">승인여부</th>
                  <td colSpan={3}>승인완료</td>
                </tr>
                <tr>
                  <th scope="row">활성화여부</th>
                  <td>Y</td>
                  <th scope="row">동의일시</th>
                  <td>2024-10-14 14:38</td>
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
                    담당주무관으로 접속IP를 미설정 🡪 설정으로 변경함. 2024-01-01
                    00:00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Drawer>
      {/* BO031006_파트너/시설관리>계약상세>주차장등록관리_등록 */}
      <Drawer
        id="drawer-31006"
        open={open31006}
        handleClose={setOpen31006}
        title="주차권 등록"
        btns={[
          { type: "black", label: "취소" },
          { type: "green", label: "저장" },
        ]}
      >
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
                  <th scope="row">주차장명</th>
                  <td>
                    <Input defaultValue="강남 스마트공유 주차장 1-01" />
                  </td>
                  <th scope="row">파트너명</th>
                  <td>
                    <div className="flex justify-between items-center">
                      <span>아마노코리아</span>
                      <Button type="blue" size="s" disabled>
                        할인권등록
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">주차권번호</th>
                  <td>NNNNNN</td>
                  <th scope="row">판매상태</th>
                  <td>
                    <SelectBasic size="m" defaultSelect />
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="bg-h-green">
                    <span className="text-req">주차권종류</span>
                  </th>
                  <td>
                    <SelectBasic />
                  </td>
                  <th scope="row">
                    <span className="text-req">금액</span>
                  </th>
                  <td>
                    <div className="flex items-center gap-2">
                      <Input />원
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">판매기간</span>
                  </th>
                  <td colSpan={3}>
                    <div className="flex items-center gap-3">
                      <FormDateRange time />
                      <Checkbox label="무제한" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">이용가능기간</span>
                  </th>
                  <td colSpan={3}>
                    <div className="flex items-center gap-3">
                      <FormDateRange time />
                      <span className="text-muted">사이 주차가능</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">구매가능기간</span>
                  </th>
                  <td colSpan={3}>
                    <div className="flex items-center gap-3">
                      <SelectBasic size="l" placeholder="날짜별 설정" />
                      <FormDateRange time />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">판매변경예약</th>
                  <td colSpan={3}>
                    <div className="flex items-center gap-3">
                      <SelectBasic size="l" placeholder="날짜별 설정" />
                      <FormDateRange time disabled />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">결제방식</span>
                  </th>
                  <td colSpan={3}>
                    <div className="flex items-center gap-3">
                      <Radio name="2cA" label="당일예약" defaultChecked />
                      <div className="flex items-center gap-3">
                        <Radio name="2cA" label="예약결제" />
                        <SelectBasic
                          placeholder="1일"
                          disabled
                          className="w-[4.1875rem]"
                        />
                      </div>
                      <Radio name="2cA" label="바로주차" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">아이콘설정</th>
                  <td colSpan={3}>
                    <div className="flex items-center gap-3">
                      <Radio name="2cB" label="허용안함" defaultChecked />
                      <div className="grow flex items-center gap-3">
                        <Radio name="2cB" label="허용" />
                        &#40;
                        <Radio name="ico" label="추천" />
                        <Radio name="ico" label="BEST" />
                        <Radio name="ico" label="SALE" />
                        <Radio name="ico" label="EVENT" />
                        &#41;
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">웹결제사용여부</th>
                  <td colSpan={3}>
                    <div className="flex items-center gap-3">
                      <Radio name="2cC" label="허용안함" defaultChecked />
                      <div className="grow flex items-center gap-3">
                        <Radio name="2cC" label="허용" />
                        <Input
                          placeholder="HTTP://"
                          disabled
                          className="grow"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="bg-h-green">
                    <span className="text-req">정산비율&#40;%&#41;</span>
                  </th>
                  <td colSpan={3}>
                    <div className="flex flex-wrap gap-[0.8125rem_1.5rem]">
                      <div className="flex items-center">
                        <span>파킹프렌즈</span>
                        <Input defaultValue="100" className="w-20 ml-3 mr-3" />
                        <span>%</span>
                      </div>
                      <div className="flex items-center ">
                        <span>파트너</span>
                        <Input defaultValue="100" className="w-20 ml-3 mr-3" />
                        <span>%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center ">
                          <span>&#40; 지자체</span>
                          <Input
                            defaultValue="100"
                            className="w-20 ml-3 mr-3"
                          />
                          <span>%</span>
                        </div>
                        <div className="flex items-center ">
                          <span>배정자</span>
                          <Input
                            defaultValue="100"
                            className="w-20 ml-3 mr-3"
                          />
                          <span>% &#41;</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span>기타</span>
                        <Input defaultValue="100" className="w-20 ml-3 mr-3" />
                        <span>%</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">판매가능면수</th>
                  <td colSpan={3}>
                    <div className="flex flex-wrap gap-[0.8125rem_1.5rem]">
                      <SelectBasic size="m" />
                      <div className="flex items-center gap-2">
                        <span>계약 주차면수</span>
                        <Input defaultValue="100" disabled className="w-20" />
                        <span>X</span>
                        <Input defaultValue="100" disabled className="w-20" />
                        <span>%</span>
                        <span>=</span>
                        <span>운영면수</span>
                        <Input defaultValue="100" disabled className="w-20" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">유의사항</th>
                  <td colSpan={3}>
                    <div className="flex gap-3">
                      <Text rows={3} className="grow" />
                      <Button type="outline" size="s" disabled>
                        유의사항 불러오기
                      </Button>
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
                  <td>김파프 &#40;admin&#41;</td>
                  <th scope="row">등록일시</th>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Drawer>
      {/* BO031020_파트너/시설관리>계약상세>배정자등록 */}
      <Drawer
        id="drawer-31020"
        open={open31020}
        handleClose={setOpen31020}
        title="배정자 등록"
        btns={[
          { type: "black", label: "취소" },
          { type: "green", label: "저장" },
        ]}
      >
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
                  <th scope="row">
                    <span className="text-req">주차장 구분</span>
                  </th>
                  <td>
                    <SelectBasic size="m" defaultSelect />
                  </td>
                  <th scope="row" className="bg-h-green">
                    파트너명
                  </th>
                  <td>강남구청</td>
                </tr>
                <tr>
                  <th scope="row" className="bg-h-green">
                    <span className="text-req">주차장명</span>
                  </th>
                  <td colSpan={3}>
                    <div className="flex items-center gap-3">
                      <Input
                        placeholder="구획3-88-0(#11111)"
                        size="l"
                        disabled
                      />
                      <Button type="outline" size="m" disabled>
                        조회
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">회원번호</span>
                  </th>
                  <td>
                    <div className="flex justify-between items-center">
                      <span>NNNNN</span>
                      <Button type="outline" size="s">
                        회원조회
                      </Button>
                    </div>
                  </td>
                  <th scope="row" className="bg-h-green">
                    <span className="text-req">배정자명</span>
                  </th>
                  <td>
                    <Input defaultValue="김강남" />
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="bg-h-green">
                    <span className="text-req">차량번호</span>
                  </th>
                  <td>
                    <Input defaultValue="253도 2039" />
                  </td>
                  <th scope="row" className="bg-h-green">
                    <span className="text-req">휴대폰번호</span>
                  </th>
                  <td>
                    <Input defaultValue="010-558-5516" />
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="bg-h-green">
                    <span className="text-req">배정시작일</span>
                  </th>
                  <td>
                    <FormDate selected={new Date()} />
                  </td>
                  <th scope="row" className="bg-h-green">
                    <span className="text-req">배정종료일</span>
                  </th>
                  <td>
                    <FormDate placeholderText="yyyy-mm-dd" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">활성화여부</th>
                  <td>Y</td>
                  <th scope="row">
                    <span className="text-req">배정자 한도금액</span>
                  </th>
                  <td>
                    <div className="flex items-center gap-2">
                      <Input defaultValue="20,000" size="m" right />원
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">정산비율&#40;%&#41;</span>
                  </th>
                  <td colSpan={3}>
                    <div className="flex flex-wrap gap-[0.8125rem_1.25rem]">
                      <div className="flex items-center">
                        <span>파킹프렌즈</span>
                        <Input defaultValue="50" className="w-20 ml-3 mr-3" />
                        <span>%</span>
                      </div>
                      <div className="flex items-center">
                        <span>파트너</span>
                        <Input defaultValue="50" className="w-20 ml-3 mr-3" />
                        <span>%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center">
                          <span>&#40; 지자체</span>
                          <Input defaultValue="30" className="w-20 ml-3 mr-3" />
                          <span>%</span>
                        </div>
                        <div className="flex items-center">
                          <span>배정자</span>
                          <Input defaultValue="20" className="w-20 ml-3 mr-3" />
                          <span>% &#41;</span>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">포인트 지급현황</th>
                  <td colSpan={3} className="bg-cell-purple">
                    <div className="flex justify-between items-center">
                      <SelectBasic size="m" />
                      <Button type="gray" size="s">
                        행추가
                      </Button>
                    </div>
                    <div className="table-grid mt-3">
                      <table>
                        <thead>
                          <tr>
                            <th scope="col">지급월</th>
                            <th scope="col">지급/회수 포인트</th>
                            <th scope="col">지급일</th>
                            <th scope="col">지급사유</th>
                            <th scope="col">관리</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                          </tr>
                        </tbody>
                        <tfoot className="bg-cell-green">
                          <tr>
                            <td>합계</td>
                            <td>0</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </tfoot>
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
                    표기됩니다. 관리자가 작성한 메모가 표기됩니다. YYYY-MM-DD
                    hh:mm
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
                  <th scope="row">등록자</th>
                  <td>김파프 &#40;admin&#41;</td>
                  <th scope="row">등록일시</th>
                  <td>2024-10-14 14:38</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Drawer>
      {/* BO033005_파트너/시설관리>시설관리>CCTV>등록 */}
      <Drawer
        id="drawer-33005"
        open={open33005}
        handleClose={setOpen33005}
        title="CCTV 등록"
        btns={[
          { type: "black", label: "취소" },
          { type: "green", label: "저장" },
        ]}
      >
        <div className="table-basic">
          <table>
            <colgroup>
              <col width="152px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">
                  <span className="text-req">상태</span>
                </th>
                <td>
                  <SelectBasic size="m" />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span className="text-req">주차장</span>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <Input
                      size="l"
                      defaultValue="999999/ 강남 스마트공유 주차장 1-01"
                      disabled
                    />
                    <Button type="outline" size="m">
                      조회
                    </Button>
                    <Button type="black" size="m">
                      추가
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">파트너명</th>
                <td>
                  <span className="text-muted">
                    주차장을 등록하면 자동입력됩니다.
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">기기ID</th>
                <td>NNNNNN</td>
              </tr>
              <tr>
                <th scope="row">CCTV이름</th>
                <td>
                  <Input size="l" />
                </td>
              </tr>
              <tr>
                <th scope="row">업체명</th>
                <td>
                  <Input size="l" />
                </td>
              </tr>
              <tr>
                <th scope="row">설치일자</th>
                <td>
                  <div className="flex items-center gap-2">
                    <FormDate selected={new Date()} size="m" />
                    <Input size="m" placeholder="설치자명" />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">실시간 연동정보</th>
                <td>
                  <div className="grid grid-cols-[2fr-3fr] gap-6">
                    <div className="col-span-2 grid grid-cols-[3.125rem_1fr] gap-3 items-center">
                      <p>URL</p>
                      <Input size="l" />
                    </div>
                    <div className="grid grid-cols-[3.125rem_1fr] gap-3 items-center">
                      <p>아이디</p>
                      <Input size="m" />
                    </div>
                    <div className="grid grid-cols-[3.125rem_1fr] gap-3 items-center">
                      <p>비밀번호</p>
                      <div className="flex items-center gap-3 ">
                        <Input />
                        <Button type="outline" size="m">
                          조회
                        </Button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="col" colSpan={2}>
                  <div className="flex justify-between items-center">
                    <span>관리정보</span>
                    <span>
                      ※최초설치자 등 작업자의 업데이트 이력을 입력합니다.
                    </span>
                  </div>
                </th>
              </tr>
              <tr>
                <td colSpan={2} className="bg-cell-purple">
                  <div className="flex items-center">
                    <p className="text-base font-medium">
                      총 <span className="text-green">0</span>건
                    </p>
                    <Button type="gray" size="s" className="ml-auto">
                      추가
                    </Button>
                  </div>
                  <div className="table-grid mt-4">
                    <table>
                      <colgroup>
                        <col width="60px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">번호</th>
                          <th scope="col">
                            <span className="text-req">이름</span>
                          </th>
                          <th scope="col">
                            <span className="text-req">날짜</span>
                          </th>
                          <th scope="col">내용 요약</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <Input />
                          </td>
                          <td>
                            <FormDate placeholderText="2024-10-30" />
                          </td>
                          <td>
                            <Input />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">관리자메모</th>
                <td className="bg-cell-purple">
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
                  표기됩니다. 관리자가 작성한 메모가 표기됩니다. YYYY-MM-DD
                  hh:mm
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
                <th scope="row">등록자</th>
                <td>김파프 &#40;admin&#41;</td>
                <th scope="row">등록일시</th>
                <td>2024-10-14 14:38</td>
              </tr>
              <tr>
                <th scope="row">최종수정자</th>
                <td>홍길동 &#40;admin_hong&#41;</td>
                <th scope="row">최종수정일시</th>
                <td>2024-10-14 14:38</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Drawer>
      {/* BO033006_파트너/시설관리>배정자관리>공유현황관리 */}
      <Drawer
        id="drawer-33006"
        open={open33006}
        handleClose={setOpen33006}
        title="배정자 공유현황"
        btns={[{ type: "black", label: "닫기" }]}
      >
        <div className="flex flex-col space-y-8">
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
                  <th scope="row">주차장명</th>
                  <td>101-101</td>
                  <th scope="row">파트너명</th>
                  <td>강남구청</td>
                </tr>
                <tr>
                  <th scope="row">배정자명</th>
                  <td>김길동</td>
                  <th scope="row">한도금액 / 감면금액</th>
                  <td>20,000원 / 10,000원</td>
                </tr>
                <tr>
                  <th scope="row">차량번호</th>
                  <td>22도 9382</td>
                  <th scope="row">휴대폰번호</th>
                  <td>01012345678</td>
                </tr>
                <tr>
                  <th scope="row">배정시작일</th>
                  <td>2024-01-01</td>
                  <th scope="row">배정종료일</th>
                  <td>2024-01-31</td>
                </tr>
              </tbody>
            </table>
          </div>
          <TabGroup className="tab-basic" defaultIndex={0}>
            <TabList>
              <Tab>공유현황</Tab>
              <Tab>공유설정조회</Tab>
            </TabList>
            <TabPanels>
              {/* 탭 - 공유현황  */}
              <TabPanel>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <p className="text-sm text-muted">
                      ※ 최대 1년까지 설정이 가능합니다.
                    </p>
                    <div className="flex items-center gap-2">
                      <SelectBasic size="m" />
                      <FormDateRange />
                      <Button type="gray" size="m">
                        공유설정
                      </Button>
                    </div>
                  </div>
                  <div className="px-[1.25rem] py-4 bg-[#F8F9FC] rounded-[0.1875rem]">
                    <div className="flex items-center gap-3">
                      <FormDateRange />
                      <Toggle label={["공유", "휴식"]} checked={false} />
                      <div className="flex items-center gap-2">
                        <Button type="green" size="s">
                          추가
                        </Button>
                        <Button type="outline" size="s">
                          삭제
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-[0.8125rem]">
                      <FormDateRange />
                      <Toggle label={["공유", "휴식"]} />
                      <Button type="outline" size="s">
                        삭제
                      </Button>
                      <div className="flex items-center gap-2 ml-auto">
                        <Button type="black" size="m">
                          취소
                        </Button>
                        <Button type="blue" size="m">
                          저장
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="table-basic bordered text-center">
                    <table>
                      <thead>
                        <tr>
                          <th scope="col">설정일시</th>
                          <th scope="col">등록자</th>
                          <th scope="col">공유일자</th>
                          <th scope="col">상태</th>
                          <th scope="col">시작시간</th>
                          <th scope="col">종료시간</th>
                          <th scope="col">설정시간</th>
                          <th scope="col">관리</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td rowSpan={3}>2024-01-01 00:00</td>
                          <td rowSpan={3}>-</td>
                          <td>2024-12-12</td>
                          <td>공유중 </td>
                          <td>오전 00:00</td>
                          <td>오전 00:00</td>
                          <td>00시간 00분</td>
                          <td>
                            <div className="flex items-center gap-2">
                              <Button type="outline" size="s">
                                수정
                              </Button>
                              <Button type="black" size="s">
                                저장
                              </Button>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-cell-purple">
                          <td>2024-08-31</td>
                          <td>휴식중 </td>
                          <td>오전 00:00</td>
                          <td>오전 00:00</td>
                          <td>24시간 02분</td>
                          <td>
                            <div className="flex items-center gap-2">
                              <Button type="outline" size="s">
                                수정
                              </Button>
                              <Button type="black" size="s">
                                저장
                              </Button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>2024-11-11</td>
                          <td>공유중 </td>
                          <td>오전 00:00</td>
                          <td>오전 00:00</td>
                          <td>12시간 34분</td>
                          <td>
                            <div className="flex items-center gap-2">
                              <Button type="outline" size="s">
                                수정
                              </Button>
                              <Button type="black" size="s">
                                저장
                              </Button>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-cell-purple">
                          <td>2024-01-01 00:00</td>
                          <td>김파프&#40;kan..&#41;</td>
                          <td>2024-01-01</td>
                          <td>휴식중 </td>
                          <td>오전 00:00</td>
                          <td>오전 00:00</td>
                          <td>4시간 24분</td>
                          <td>
                            <div className="flex items-center gap-2">
                              <Button type="outline" size="s">
                                수정
                              </Button>
                              <Button type="black" size="s">
                                저장
                              </Button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>2024-01-01 00:00</td>
                          <td>김파프&#40;kan..&#41;</td>
                          <td>2024-01-01</td>
                          <td>공유중 </td>
                          <td>오전 00:00</td>
                          <td>오전 00:00</td>
                          <td>4시간 24분</td>
                          <td>
                            <div className="flex items-center gap-2">
                              <Button type="outline" size="s" disabled>
                                수정
                              </Button>
                              <Button type="black" size="s">
                                저장
                              </Button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={8} className="bg-cell-purple">
                            <div className="flex items-center gap-3">
                              <FormDate selected={new Date()} />
                              <Toggle label={["공유", "휴식"]} />
                              <FormTimeRange />
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-cell-purple">
                          <td>2024-01-01 00:00</td>
                          <td>김파프&#40;kan..&#41;</td>
                          <td>2024-01-01</td>
                          <td>휴식중 </td>
                          <td>오전 00:00</td>
                          <td>오전 00:00</td>
                          <td>4시간 24분</td>
                          <td>
                            <div className="flex items-center gap-2">
                              <Button type="outline" size="s">
                                수정
                              </Button>
                              <Button type="black" size="s">
                                저장
                              </Button>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-cell-green">
                          <td>합계</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>100시간 00분</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex justify-end">
                    <Button type="outline" size="m">
                      <IcExcel />
                      엑셀다운로드
                    </Button>
                  </div>
                </div>
              </TabPanel>

              {/* 탭 - 공유설정조회  */}
              <TabPanel>
                <>
                  <div className="flex items-center gap-2">
                    <SelectBasic placeholder="전체" size="m" />
                    <FormDateRange />
                  </div>
                  <p className="mt-3 text-sm text-muted">
                    ※ 최대 1년까지 설정이 가능합니다.
                  </p>
                  <div className="table-basic bordered mt-4 text-center">
                    <table>
                      <colgroup>
                        <col width="220px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">설정일시</th>
                          <th scope="col">상태</th>
                          <th scope="col">시작시간</th>
                          <th scope="col">종료시간</th>
                          <th scope="col">설정시간</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td rowSpan={3}>2024-01-01 00:00</td>
                          <td>공유중 </td>
                          <td>오전 00:00</td>
                          <td>오전 00:00</td>
                          <td>00시간 00분</td>
                        </tr>
                        <tr className="bg-cell-purple">
                          <td>휴식중 </td>
                          <td>오전 00:00</td>
                          <td>오전 00:00</td>
                          <td>00시간 00분</td>
                        </tr>
                        <tr>
                          <td>공유중 </td>
                          <td>오전 00:00</td>
                          <td>오전 00:00</td>
                          <td>00시간 00분</td>
                        </tr>
                        <tr className="bg-cell-purple">
                          <td>2024-01-01 00:00</td>
                          <td>휴식중 </td>
                          <td>오전 00:00</td>
                          <td>오전 00:00</td>
                          <td>00시간 00분</td>
                        </tr>
                        <tr className="bg-cell-purple">
                          <td>2024-01-01 00:00</td>
                          <td>휴식중 </td>
                          <td>오전 00:00</td>
                          <td>오전 00:00</td>
                          <td>00시간 00분</td>
                        </tr>
                        <tr>
                          <td>2024-01-01 00:00</td>
                          <td>공유중 </td>
                          <td>오전 00:00</td>
                          <td>오전 00:00</td>
                          <td>00시간 00분</td>
                        </tr>
                        <tr className="bg-cell-green">
                          <td>합계</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>00시간 00분</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex justify-end mt-6">
                    <Button type="outline" size="m">
                      <IcExcel />
                      엑셀다운로드
                    </Button>
                  </div>
                </>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </Drawer>
      {/* BO033008_파트너/시설관리>시설관리>파프차단기>등록 */}
      <Drawer
        id="drawer-33008"
        open={open33008}
        handleClose={setOpen33008}
        title="파프차단기 등록"
        btns={[
          { type: "black", label: "취소" },
          { type: "green", label: "저장" },
        ]}
      >
        <div className="table-basic">
          <table>
            <colgroup>
              <col width="152px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">
                  <span className="text-req">상태</span>
                </th>
                <td>
                  <SelectBasic size="m" />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span className="text-req">주차장</span>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <Input
                      size="l"
                      defaultValue="999999/ 강남 스마트공유 주차장 1-01"
                      disabled
                    />
                    <Button type="outline" size="m">
                      조회
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">파트너명</th>
                <td>
                  <span className="text-muted">
                    주차장을 등록하면 자동입력됩니다.
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">기기ID</th>
                <td>NNNNNN</td>
              </tr>
              <tr>
                <th scope="row">업체명</th>
                <td>
                  <Input size="l" />
                </td>
              </tr>
              <tr>
                <th scope="col">프로그램 버전정보</th>
                <td>
                  <div className="flex items-center gap-3">
                    <Input size="m" />
                    <span className="text-muted">예&#41; v0.1</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">디지털키</th>
                <td>
                  <div className="flex items-center gap-3">
                    <Input size="l" disabled />
                    <Button type="outline" size="m">
                      URL생성
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="col" colSpan={2}>
                  <div className="flex justify-between items-center">
                    <span>관리정보</span>
                    <span>
                      ※최초설치자 등 작업자의 업데이트 이력을 입력합니다.
                    </span>
                  </div>
                </th>
              </tr>
              <tr>
                <td colSpan={2} className="bg-cell-purple">
                  <div className="flex items-center">
                    <p className="text-base font-medium">
                      총 <span className="text-green">0</span>건
                    </p>
                    <Button type="gray" size="s" className="ml-auto">
                      추가
                    </Button>
                  </div>
                  <div className="table-grid mt-4">
                    <table>
                      <colgroup>
                        <col width="60px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">번호</th>
                          <th scope="col">
                            <span className="text-req">이름</span>
                          </th>
                          <th scope="col">
                            <span className="text-req">날짜</span>
                          </th>
                          <th scope="col">내용 요약</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <Input />
                          </td>
                          <td>
                            <FormDate placeholderText="2024-10-30" />
                          </td>
                          <td>
                            <Input />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">관리자메모</th>
                <td className="bg-cell-purple">
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
                  표기됩니다. 관리자가 작성한 메모가 표기됩니다. YYYY-MM-DD
                  hh:mm
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
                <th scope="row">등록자</th>
                <td>김파프 &#40;admin&#41;</td>
                <th scope="row">등록일시</th>
                <td>2024-10-14 14:38</td>
              </tr>
              <tr>
                <th scope="row">최종수정자</th>
                <td>홍길동 &#40;admin_hong&#41;</td>
                <th scope="row">최종수정일시</th>
                <td>2024-10-14 14:38</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Drawer>
      {/* BO033011_파트너/시설관리>시설관리>키오스크_등록/상세 */}
      <Drawer
        id="drawer-33011"
        open={open33011}
        handleClose={setOpen33011}
        title="키오스크 등록/상세"
        btns={[
          { type: "black", label: "취소" },
          { type: "green", label: "저장" },
        ]}
      >
        <div className="table-basic">
          <table>
            <colgroup>
              <col width="152px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">
                  <span className="text-req">상태</span>
                </th>
                <td>
                  <SelectBasic size="m" />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span className="text-req">주차장</span>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <Input size="l" disabled />
                    <Button type="outline" size="s">
                      조회
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span className="text-req">주차장</span>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <Input
                      size="l"
                      defaultValue="999999/강남 스마트공유 주차장 1-01"
                      disabled
                    />
                    <Button type="outline" size="s" disabled>
                      조회
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">파트너명</th>
                <td>
                  <span className="text-muted">
                    주차장을 등록하면 자동입력됩니다.
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">파트너명</th>
                <td>강남구청</td>
              </tr>
              <tr>
                <th scope="row">기기ID</th>
                <td>NNNNNN</td>
              </tr>
              <tr>
                <th scope="row">업체명</th>
                <td>
                  <Input size="l" />
                </td>
              </tr>
              <tr>
                <th scope="row">API 연동정보</th>
                <td>
                  <div className="grid grid-cols-[2fr-3fr] gap-6">
                    <div className="col-span-2 grid grid-cols-[3.125rem_1fr] gap-3 items-center">
                      <p>URL</p>
                      <Input size="l" />
                    </div>
                    <div className="grid grid-cols-[3.125rem_1fr] gap-3 items-center">
                      <p>아이디</p>
                      <Input size="m" />
                    </div>
                    <div className="grid grid-cols-[3.125rem_1fr] gap-3 items-center">
                      <p>비밀번호</p>
                      <div className="flex items-center gap-3 ">
                        <Input />
                        <Button type="outline" size="m">
                          조회
                        </Button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="col">프로그램 버전정보</th>
                <td>
                  <div className="flex items-center gap-3">
                    <Input size="m" />
                    <span className="text-muted">예&#41; v0.1</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="col">설치사진</th>
                <td>
                  <div className="flex items-center gap-[0.8125rem]">
                    <div className="file-thumb">
                      <Image
                        src="/images/test/img_thumb.png"
                        alt=""
                        width={292}
                        height={172}
                      />
                      <button type="button" className="file-thumb-btn"></button>
                    </div>
                    <div className="file-thumb">
                      <Image
                        src="/images/test/img_thumb.png"
                        alt=""
                        width={292}
                        height={172}
                      />
                      <button type="button" className="file-thumb-btn"></button>
                    </div>
                    <FileDropThumb />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="col" colSpan={2}>
                  <div className="flex justify-between items-center">
                    <span>관리정보</span>
                    <span>
                      ※최초설치자 등 작업자의 업데이트 이력을 입력합니다.
                    </span>
                  </div>
                </th>
              </tr>
              <tr>
                <td colSpan={2} className="bg-cell-purple">
                  <div className="flex items-center">
                    <p className="text-base font-medium">
                      총 <span className="text-green">0</span>건
                    </p>
                    <Button type="gray" size="s" className="ml-auto">
                      추가
                    </Button>
                  </div>
                  <div className="table-grid mt-4">
                    <table>
                      <colgroup>
                        <col width="60px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">번호</th>
                          <th scope="col">
                            <span className="text-req">이름</span>
                          </th>
                          <th scope="col">
                            <span className="text-req">날짜</span>
                          </th>
                          <th scope="col">내용 요약</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <Input />
                          </td>
                          <td>
                            <FormDate placeholderText="2024-10-30" />
                          </td>
                          <td>
                            <Input />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">관리자메모</th>
                <td className="bg-cell-green">
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
                  표기됩니다. 관리자가 작성한 메모가 표기됩니다. YYYY-MM-DD
                  hh:mm
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
                <th scope="row">등록자</th>
                <td>김파프 &#40;admin&#41;</td>
                <th scope="row">등록일시</th>
                <td>2024-10-14 14:38</td>
              </tr>
              <tr>
                <th scope="row">최종수정자</th>
                <td>홍길동 &#40;admin_hong&#41;</td>
                <th scope="row">최종수정일시</th>
                <td>2024-10-14 14:38</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Drawer>
      {/* BO033015_파트너/시설관리>시설관리>안내판_등록/상세 */}
      <Drawer
        id="drawer-33015"
        open={open33015}
        handleClose={setOpen33015}
        title="안내판 등록/상세"
        btns={[
          { type: "black", label: "취소" },
          { type: "green", label: "저장" },
        ]}
      >
        <div className="table-basic">
          <table>
            <colgroup>
              <col width="152px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">상태</th>
                <td>
                  <SelectBasic size="m" />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span className="text-req">주차장</span>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <Input size="l" disabled />
                    <Button type="outline" size="m">
                      조회
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span className="text-req">주차장</span>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <Input
                      size="l"
                      defaultValue="999999/강남 스마트공유 주차장 1-01"
                      disabled
                    />
                    <Button type="outline" size="m" disabled>
                      조회
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">파트너명</th>
                <td>
                  <span className="text-muted">
                    주차장을 등록하면 자동입력됩니다.
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">파트너명</th>
                <td>강남구청</td>
              </tr>
              <tr>
                <th scope="row">기기ID</th>
                <td>NNNNNN</td>
              </tr>
              <tr>
                <th scope="col" colSpan={2}>
                  설치정보
                </th>
              </tr>
              <tr>
                <td colSpan={2} className="bg-cell-purple">
                  <div className="flex items-center">
                    <p className="text-base font-medium">
                      총 <span className="text-green">0</span>건
                    </p>
                    <Button type="gray" size="s" className="ml-auto">
                      추가
                    </Button>
                  </div>
                  <div className="table-grid mt-4">
                    <table>
                      <colgroup>
                        <col width="60px" />
                        <col />
                        <col width="23%" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">번호</th>
                          <th scope="col">상태</th>
                          <th scope="col">날짜</th>
                          <th scope="col">형태</th>
                          <th scope="col">사이즈/수량</th>
                          <th scope="col">설치사진</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <SelectBasic placeholder="선택" />
                          </td>
                          <td>
                            <FormDate placeholderText="2024-10-30" />
                          </td>
                          <td>
                            <SelectBasic placeholder="선택" />
                          </td>
                          <td>
                            <div className="flex flex-col gap-2">
                              <Input placeholder="500*500" />
                              <div className="flex items-center gap-2">
                                <Input placeholder="100" />
                                EA
                              </div>
                            </div>
                          </td>
                          <td>
                            <FileDropThumb />
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            <SelectBasic placeholder="선택" />
                          </td>
                          <td>
                            <FormDate placeholderText="2024-10-30" />
                          </td>
                          <td>
                            <SelectBasic placeholder="선택" />
                          </td>
                          <td>
                            <div className="flex flex-col gap-2">
                              <Input placeholder="500*500" />
                              <div className="flex items-center gap-2">
                                <Input placeholder="100" />
                                EA
                              </div>
                            </div>
                          </td>
                          <td>
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
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">관리자메모</th>
                <td className="bg-cell-green">
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
                  표기됩니다. 관리자가 작성한 메모가 표기됩니다. YYYY-MM-DD
                  hh:mm
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
                <th scope="row">등록자</th>
                <td>김파프 &#40;admin&#41;</td>
                <th scope="row">등록일시</th>
                <td>2024-10-14 14:38</td>
              </tr>
              <tr>
                <th scope="row">최종수정자</th>
                <td>홍길동 &#40;admin_hong&#41;</td>
                <th scope="row">최종수정일시</th>
                <td>2024-10-14 14:38</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Drawer>
      {/* BO033017_파트너/시설관리>시설관리>기타장비>등록 */}
      <Drawer
        id="drawer-33017"
        open={open33017}
        handleClose={setOpen33017}
        title="기타장비 등록"
        btns={[
          { type: "black", label: "취소" },
          { type: "green", label: "저장" },
        ]}
      >
        <div className="table-basic">
          <table>
            <colgroup>
              <col width="152px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">
                  <span className="text-req">상태</span>
                </th>
                <td>
                  <SelectBasic size="m" />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span className="text-req">주차장</span>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <Input
                      size="l"
                      defaultValue="999999/ 강남 스마트공유 주차장 1-01"
                      disabled
                    />
                    <Button type="outline" size="m">
                      조회
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">파트너명</th>
                <td>
                  <span className="text-muted">
                    주차장을 등록하면 자동입력됩니다.
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">기기ID</th>
                <td>NNNNNN</td>
              </tr>
              <tr>
                <th scope="col" colSpan={2}>
                  <div className="flex  items-center">
                    <span>설치정보</span>
                  </div>
                </th>
              </tr>
              <tr>
                <td colSpan={2} className="bg-cell-purple">
                  <div className="flex items-center">
                    <p className="text-base font-medium">
                      총 <span className="text-green">0</span>건
                    </p>
                    <Button type="gray" size="s" className="ml-auto">
                      추가
                    </Button>
                  </div>
                  <div className="table-grid mt-4">
                    <table>
                      <colgroup>
                        <col width="60px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">번호</th>
                          <th scope="col">
                            <span className="text-req">상태</span>
                          </th>
                          <th scope="col">
                            <span className="text-req">날짜</span>
                          </th>
                          <th scope="col">장비명</th>
                          <th scope="col">수량</th>
                          <th scope="col">설치사진</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <SelectBasic placeholder="선택" />
                          </td>
                          <td>
                            <FormDate placeholderText="2024-10-30" />
                          </td>
                          <td>
                            <Input />
                          </td>
                          <td>
                            <div className="flex items-center gap-1">
                              <Input />
                              <span>EA</span>
                            </div>
                          </td>
                          <td>
                            <FileDropThumb />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">관리자메모</th>
                <td className="bg-cell-purple">
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
                  표기됩니다. 관리자가 작성한 메모가 표기됩니다. YYYY-MM-DD
                  hh:mm
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
                <th scope="row">등록자</th>
                <td>김파프 &#40;admin&#41;</td>
                <th scope="row">등록일시</th>
                <td>2024-10-14 14:38</td>
              </tr>
              <tr>
                <th scope="row">최종수정자</th>
                <td>홍길동 &#40;admin_hong&#41;</td>
                <th scope="row">최종수정일시</th>
                <td>2024-10-14 14:38</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Drawer>
      {/* BO034002_파트너/시설관리>시설관리>AIoT센서>등록 */}
      <Drawer
        id="drawer-34002"
        open={open34002}
        handleClose={setOpen34002}
        title="AIoT센서 등록"
        btns={[
          { type: "black", label: "취소" },
          { type: "green", label: "저장" },
        ]}
      >
        <div className="table-basic">
          <table>
            <colgroup>
              <col width="152px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">
                  <span className="text-req">상태</span>
                </th>
                <td>
                  <SelectBasic size="m" />
                </td>
              </tr>
              <tr>
                <th scope="row">주차장종류</th>
                <td>
                  <SelectBasic size="m" />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span className="text-req">주차장</span>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <Input size="l" disabled />
                    <Button type="outline" size="m">
                      조회
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">파트너명</th>
                <td>
                  <span className="text-muted">
                    주차장을 등록하면 자동입력됩니다.
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span className="text-req">기기ID &#40;DEUI&#41;</span>
                </th>
                <td>
                  <Input size="l" />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span className="text-req">시리얼번호</span>
                </th>
                <td>
                  <Input size="l" />
                </td>
              </tr>
              <tr>
                <th scope="row">운영방식</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-3">
                        <Radio name="t34002a" label="구획" defaultChecked />
                        <Input />
                      </div>
                      <div className="flex items-center gap-3">
                        <Radio name="t34002a" label="구간" />
                        <Input disabled />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">통신 개통여부</th>
                <td>
                  <div className="flex items-center gap-3">
                    <Radio name="t34002b" label="개통" defaultChecked />
                    <Radio name="t34002b" label="미개통" />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">통신상태</th>
                <td>
                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center gap-2">
                      <IcTagRed />
                      <span className="text-red">OFF</span>
                    </span>
                    <Button type="gray" size="s">
                      추가
                    </Button>
                  </div>
                  <div className="table-grid mt-3">
                    <table>
                      <colgroup>
                        <col width="5%" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">
                            <span className="text-req">이름</span>
                          </th>
                          <th scope="col">
                            <span className="text-req">날짜</span>
                          </th>
                          <th scope="col">점검/처리사유</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <Input />
                          </td>
                          <td>
                            <FormDate selected={new Date()} />
                          </td>
                          <td>
                            <SelectBasic />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">배터리 교체일</th>
                <td>
                  <div className="flex items-center gap-2">
                    <FormDate selected={new Date()} size="m" />
                    <Input size="m" defaultValue="김길동" />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">관리자메모</th>
                <td className="bg-cell-purple">
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
                  표기됩니다. 관리자가 작성한 메모가 표기됩니다. YYYY-MM-DD
                  hh:mm
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
                <th scope="row">등록자</th>
                <td>김파프 &#40;admin&#41;</td>
                <th scope="row">등록일시</th>
                <td>2024-10-14 14:38</td>
              </tr>
              <tr>
                <th scope="row">최종수정자</th>
                <td>홍길동 &#40;admin_hong&#41;</td>
                <th scope="row">최종수정일시</th>
                <td>2024-10-14 14:38</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Drawer>

      {/* BO031013_파트너조회 */}
      <ModalBasic
        open={open31013}
        size="xl"
        handleClose={() => setOpen31013(false)}
      >
        <>
          <p className="modal-tit">주차장 조회</p>
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
                    <th scope="row">상태</th>
                    <td>
                      <SelectBasic placeholder="전체" size="m" />
                    </td>
                    <th scope="row">종류</th>
                    <td>
                      <SelectBasic placeholder="전체" size="m" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">파트너</th>
                    <td colSpan={3}>
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
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">검색어</th>
                    <td colSpan={3}>
                      <Input placeholder="검색어를 입력하세요." size="l" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">기간</th>
                    <td colSpan={3}>
                      <div className="flex items-center gap-2">
                        <SelectBasic placeholder="전체" size="m" />
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
                  <col />
                  <col />
                  <col width="15%" />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">
                      <Checkbox />
                    </th>
                    <th scope="col">주차장번호</th>
                    <th scope="col">상태</th>
                    <th scope="col">주차장명</th>
                    <th scope="col">종류</th>
                    <th scope="col">담당자</th>
                    <th scope="col">등록자</th>
                    <th scope="col">등록일시</th>
                    <th scope="col">최종수정자</th>
                    <th scope="col">최종수정일시</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Checkbox />
                    </td>
                    <td>NNNNNN</td>
                    <td>정보등록중</td>
                    <td>
                      자양동 래미안 프리미어 필리스 &#40;아마노코리아&#41;
                    </td>
                    <td>일반제휴</td>
                    <td>이동훈/사업실</td>
                    <td>김파프&#40;adminId&#41;</td>
                    <td>2024-12-31 00:00</td>
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
      {/* BO031014_파트너조회 */}
      <ModalBasic
        open={open31014}
        size="xl"
        handleClose={() => setOpen31014(false)}
      >
        <>
          <p className="modal-tit">파트너 조회</p>
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
                    <th scope="row">구분</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <Checkbox label="전체" defaultChecked />
                        <Checkbox label="개인" />
                        <Checkbox label="개인사업자" />
                        <Checkbox label="법인" />
                      </div>
                    </td>
                    <th scope="row">파트너구분</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <Checkbox label="전체" defaultChecked />
                        <Checkbox label="B2G" />
                        <Checkbox label="B2B" />
                        <Checkbox label="B2C" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">진행상태</th>
                    <td colSpan={3}>
                      <div className="flex items-center gap-3">
                        <Checkbox label="전체" defaultChecked />
                        <Checkbox label="계약진행중" />
                        <Checkbox label="계약완료" />
                        <Checkbox label="계약만료" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">검색어</th>
                    <td colSpan={3}>
                      <div className="flex items-center gap-2">
                        <SelectBasic placeholder="전체" size="m" />
                        <Input placeholder="검색어를 입력하세요." size="l" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">기간</th>
                    <td colSpan={3}>
                      <div className="flex items-center gap-2">
                        <SelectBasic placeholder="전체" size="m" />
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
                  <col width="5%" />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col width="15%" />
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">
                      <Checkbox />
                    </th>
                    <th scope="col">번호</th>
                    <th scope="col">계약번호</th>
                    <th scope="col">구분</th>
                    <th scope="col">파트너구분</th>
                    <th scope="col">진행상태</th>
                    <th scope="col">회사명/개인명</th>
                    <th scope="col">계약담당자</th>
                    <th scope="col">계약기간</th>
                    <th scope="col">등록자</th>
                    <th scope="col">등록일시</th>
                    <th scope="col">최종수정자</th>
                    <th scope="col">최종수정일시</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Checkbox />
                    </td>
                    <td>10</td>
                    <td>NNNNNN</td>
                    <td>법인</td>
                    <td>B2G</td>
                    <td>계약진행중</td>
                    <td>강남구청</td>
                    <td>이동훈/사업실</td>
                    <td>2024-12-31 ~ 2024-12-31</td>
                    <td>김파프&#40;adminId&#41;</td>
                    <td>2024-12-31 00:00</td>
                    <td>-</td>
                    <td>-</td>
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
      {/* BO031021_파트너/시설관리>파트너관리>별점/리뷰_조회 */}
      <ModalBasic
        open={open31021}
        size="xl"
        handleClose={() => setOpen31021(false)}
      >
        <>
          <p className="modal-tit">별점/리뷰 조회</p>
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
                    <th scope="row">주차장명</th>
                    <td>구획3-88-0&#40;#111111&#41;</td>
                    <th scope="row">별점/리뷰수</th>
                    <td>
                      <div className="flex items-center gap-1">
                        <Rating value={1} />
                        <span>4.2&#40;1111&#41;</span>
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
                    <th scope="row">주차권종류</th>
                    <td>
                      <SelectBasic placeholder="전체" size="m" />
                    </td>
                    <th scope="row">별점</th>
                    <td>
                      <SelectBasic placeholder="전체" size="m" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">주차권종류</th>
                    <td colSpan={3}>
                      <Input placeholder="검색어를 입력하세요." />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">기간</th>
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
                  <col />
                  <col />
                  <col width="25%" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">주차권 종류</th>
                    <th scope="col">별점</th>
                    <th scope="col">내용</th>
                    <th scope="col">작성자&#40;이름/닉네임&#41;</th>
                    <th scope="col">작성일시</th>
                    <th scope="col">결제일시</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>1시간권</td>
                    <td>
                      <div>
                        <Rating value={5} />
                        <p className="mt-1">좋았어요</p>
                      </div>
                    </td>
                    <td>
                      이용요금이 저렴해요.
                      <br />
                      주차장 입구가 넓어요.
                      <br />
                      사장님이 친절했어요.
                      <br />
                      기타&#40;앱사용성이 좋아져서 편했어요&#41;
                    </td>
                    <td>
                      <button type="button">
                        <span className="underline">긍정적인 파파푸</span>
                      </button>
                    </td>
                    <td>2024-12-31 00:00</td>
                    <td>2024-12-31 00:00</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>1시간권</td>
                    <td>
                      <div>
                        <Rating value={3} />
                        <p className="mt-1">불편했어요</p>
                      </div>
                    </td>
                    <td>
                      이용요금이 비싸요.
                      <br />
                      주차장 입구가 좁아요.
                      <br />
                      사장님이 불친절했어요.
                    </td>
                    <td>
                      <button type="button">
                        <span className="underline">을지매</span>
                      </button>
                    </td>
                    <td>2024-12-31 00:00</td>
                    <td>2024-12-31 00:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="modal-btns justify-center">
            <Button type="green" size="l">
              확인
            </Button>
          </div>
        </>
      </ModalBasic>
      {/* BO031024a_파트너/시설관리>주차장등록관리>주차장상세 */}
      <ModalBasic
        open={open31024a}
        size="m"
        handleClose={() => setOpen31024a(false)}
      >
        <>
          <p className="modal-tit">판매변경예약</p>
          <div className="modal-cont">
            <p className="text-base font-medium">
              대상 주차권: 총 <span className="text-green">99</span>건
            </p>
            <div className="table-grid">
              <table>
                <thead>
                  <tr>
                    <th scope="col">판매상태</th>
                    <th scope="col">주차권번호</th>
                    <th scope="col">주차권종류</th>
                    <th scope="col">판매기간</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>판매중</td>
                    <td>NNNNN</td>
                    <td>시간권</td>
                    <td>2024-08-01 ~ 2024-10-31</td>
                  </tr>
                  <tr>
                    <td>판매대기</td>
                    <td>NNNNN</td>
                    <td>시간권</td>
                    <td>2024-08-01 ~ 2024-10-31</td>
                  </tr>
                  <tr>
                    <td>판매중</td>
                    <td>NNNNN</td>
                    <td>시간권</td>
                    <td>2024-08-01 ~ 2024-10-31</td>
                  </tr>
                  <tr>
                    <td>판매중</td>
                    <td>NNNNN</td>
                    <td>시간권</td>
                    <td>2024-08-01 ~ 2024-10-31</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <SelectBasic size="m" />
            <FormDateRange time />
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
      {/* BO031024b_파트너/시설관리>주차장등록관리>주차장상세 */}
      <Alert
        open={open31024b}
        handleClose={() => setOpen31024b(false)}
        btns={[
          { type: "gray", label: "취소" },
          { type: "green", label: "확인" },
        ]}
      >
        <>
          <p className="h4 text-center">
            선택한 주차권을
            <br />
            판매변경예약을 하시겠습니까?
          </p>
          <p className="text-green text-base font-bold text-center">
            판매변경예약을 할 경우 설정된 기간동안
            <br />
            판매중지 또는 판매금액이 변경됩니다.
          </p>
        </>
      </Alert>
    </>
  );
}
