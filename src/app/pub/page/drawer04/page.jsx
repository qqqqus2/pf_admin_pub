"use client";

import { useState } from "react";
import Image from "next/image";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Drawer from "@pub/components/Drawer";
import Input from "@pub/components/Form/Input";
import Toggle from "@pub/components/Form/Toggle";
import File from "@pub/components/Form/File";
import FormEditor from "@pub/components/Form/Editor";
import FormDate from "@pub/components/Form/Date";
import SelectBasic from "@pub/components/Form/Select";
import ModalBasic from "@pub/components/Modal";
import FormDateRange from "@pub/components/Form/DateRange";
import Checkbox from "@pub/components/Form/Check";
import Radio from "@pub/components/Form/Radio";
import Paging from "@pub/components/Grid/Paging";
import IcExcel from "@/assets/icons/ico_excel.svg";
import IcInfo from "@/assets/icons/ico_circle_info.svg";

export default function Drawer04() {
  const [open41002, setOpen41002] = useState(false);
  const [open42006, setOpen42006] = useState(false);
  const [open42007a, setOpen42007a] = useState(false);
  const [open42007b, setOpen42007b] = useState(false);
  const [open42007c, setOpen42007c] = useState(false);
  const [open45002, setOpen45002] = useState(false);
  const [open46002, setOpen46002] = useState(false);
  const [open46004, setOpen46004] = useState(true);
  const [open47002, setOpen47002] = useState(false);
  const [open48002, setOpen48002] = useState(false);
  const [open48004, setOpen48004] = useState(false);

  const [selected, setSelected] = useState(0);

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
                    onClick={() => setOpen41002(true)}
                  >
                    BO041002_공지등록
                  </Button>
                  <Button
                    type="green"
                    size="m"
                    onClick={() => setOpen42006(true)}
                  >
                    BO042006_참여자정보
                  </Button>
                  <Button
                    type="green"
                    size="m"
                    onClick={() => setOpen45002(true)}
                  >
                    BO045002_약관등록
                  </Button>
                  <Button
                    type="green"
                    size="m"
                    onClick={() => setOpen46002(true)}
                  >
                    BO046002_배너/팝업등록
                  </Button>
                  <Button
                    type="green"
                    size="m"
                    onClick={() => setOpen47002(true)}
                  >
                    BO047002_FAQ등록
                  </Button>
                  <Button
                    type="green"
                    size="m"
                    onClick={() => setOpen48002(true)}
                  >
                    BO048002_이용안내 등록
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
                    onClick={() => setOpen42007a(true)}
                  >
                    BO042007_이벤트 미리보기 Iphon14Pro 1
                  </Button>
                  <Button
                    type="green"
                    size="m"
                    onClick={() => setOpen42007b(true)}
                  >
                    BO042007_이벤트 미리보기 Iphon12Pro 2
                  </Button>
                  <Button
                    type="green"
                    size="m"
                    onClick={() => setOpen42007c(true)}
                  >
                    BO042007_이벤트 미리보기 GalaxyS20Ultra 2
                  </Button>
                  <Button
                    type="green"
                    size="m"
                    onClick={() => setOpen46004(true)}
                  >
                    BO046004_전시위치보기
                  </Button>
                  <Button
                    type="green"
                    size="m"
                    onClick={() => setOpen48004(true)}
                  >
                    BO048004_유의사항조회
                  </Button>
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </DefaultLayout>

      {/* BO041002_전시컨텐츠관리>공지관리>공지등록 */}
      <Drawer
        id="drawer-41002"
        open={open41002}
        handleClose={setOpen41002}
        title="공지등록"
        btns={[
          { type: "black", label: "취소" },
          { type: "green", label: "저장" },
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
                  <th scope="row">게시물번호</th>
                  <td>B0000001</td>
                  <th scope="row">사용여부</th>
                  <td>
                    <Toggle />
                  </td>
                </tr>
                <tr>
                  <th scope="row">전시시작일</th>
                  <td colSpan={3}>
                    <FormDate selected={new Date()} time />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">채널</span>
                  </th>
                  <td colSpan={3}>
                    <div className="flex items-center gap-3">
                      <Radio name="t41002a" label="전체" defaultChecked />
                      <Radio name="t41002a" label="APP" />
                      <Radio name="t41002a" label="PO" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">대상</span>
                  </th>
                  <td colSpan={3}>
                    <div className="flex items-center gap-3">
                      <Radio name="t41002b" label="전체" defaultChecked />
                      <Radio name="t41002b" label="회원" />
                      <Radio name="t41002b" label="파트너" />
                      <div className="grid grid-cols-[7.5rem_7.5rem_1fr] items-center gap-2">
                        <SelectBasic placeholder="대분류" disabled />
                        <SelectBasic placeholder="소분류" disabled />
                        <Button type="gray" size="m">
                          추가
                        </Button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">제목</span>
                  </th>
                  <td colSpan={3}>
                    <Input placeholder="제목 입력" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">내용</span>
                  </th>
                  <td colSpan={3}>
                    <FormEditor />
                  </td>
                </tr>
                <tr>
                  <th scope="row">등록자</th>
                  <td>김파프 &#40;admin&#41;</td>
                  <th scope="row">등록일시</th>
                  <td>
                    <span className="text-muted">등록 후 노출</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      </Drawer>

      {/* BO042006_전시컨텐츠관리>이벤트관리>이벤트상세/수정>참여자정보 */}
      <Drawer
        id="drawer-42006"
        open={open42006}
        handleClose={setOpen42006}
        title="참여자정보"
        desc="현재시각 2024-08-27 14:23 기준"
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
                <th scope="row">총 참여자 정보</th>
                <td>
                  <span className="text-green">12,340명</span>
                </td>
                <th scope="row">평균 참여 횟수</th>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">총 참여자 정보</th>
                <td colSpan={3}>
                  <span className="text-green">12,020,340</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center min-h-[2.5rem] mt-6">
          <p className="h4">
            총 <span className="text-green">231</span>건
          </p>
          <Button type="outline" size="m" className="ml-auto">
            <IcExcel />
            엑셀다운로드
          </Button>
        </div>
        <div className="table-grid row-10 mt-4">
          <table>
            <thead>
              <tr>
                <th scope="col">NO</th>
                <th scope="col">아이디</th>
                <th scope="col">유형</th>
                <th scope="col">총 참여 횟수</th>
                <th scope="col">총 포인트</th>
                <th scope="col">마지막 참여일시</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <button type="button">
                    <span className="underline">010-1234-5678</span>
                  </button>
                </td>
                <td>일반회원</td>
                <td>7</td>
                <td>290</td>
                <td>2024-01-31 00:00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <button type="button">
                    <span className="underline">010-1234-5678</span>
                  </button>
                </td>
                <td>일반회원</td>
                <td>7</td>
                <td>290</td>
                <td>2024-01-31 00:00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <button type="button">
                    <span className="underline">010-1234-5678</span>
                  </button>
                </td>
                <td>일반회원</td>
                <td>7</td>
                <td>290</td>
                <td>2024-01-31 00:00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <button type="button">
                    <span className="underline">010-1234-5678</span>
                  </button>
                </td>
                <td>일반회원</td>
                <td>7</td>
                <td>290</td>
                <td>2024-01-31 00:00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <button type="button">
                    <span className="underline">010-1234-5678</span>
                  </button>
                </td>
                <td>일반회원</td>
                <td>7</td>
                <td>290</td>
                <td>2024-01-31 00:00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <button type="button">
                    <span className="underline">010-1234-5678</span>
                  </button>
                </td>
                <td>일반회원</td>
                <td>7</td>
                <td>290</td>
                <td>2024-01-31 00:00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <button type="button">
                    <span className="underline">010-1234-5678</span>
                  </button>
                </td>
                <td>일반회원</td>
                <td>7</td>
                <td>290</td>
                <td>2024-01-31 00:00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <button type="button">
                    <span className="underline">010-1234-5678</span>
                  </button>
                </td>
                <td>일반회원</td>
                <td>7</td>
                <td>290</td>
                <td>2024-01-31 00:00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <button type="button">
                    <span className="underline">010-1234-5678</span>
                  </button>
                </td>
                <td>일반회원</td>
                <td>7</td>
                <td>290</td>
                <td>2024-01-31 00:00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <button type="button">
                    <span className="underline">010-1234-5678</span>
                  </button>
                </td>
                <td>일반회원</td>
                <td>7</td>
                <td>290</td>
                <td>2024-01-31 00:00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <button type="button">
                    <span className="underline">010-1234-5678</span>
                  </button>
                </td>
                <td>일반회원</td>
                <td>7</td>
                <td>290</td>
                <td>2024-01-31 00:00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <button type="button">
                    <span className="underline">010-1234-5678</span>
                  </button>
                </td>
                <td>일반회원</td>
                <td>7</td>
                <td>290</td>
                <td>2024-01-31 00:00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <button type="button">
                    <span className="underline">010-1234-5678</span>
                  </button>
                </td>
                <td>일반회원</td>
                <td>7</td>
                <td>290</td>
                <td>2024-01-31 00:00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <button type="button">
                    <span className="underline">010-1234-5678</span>
                  </button>
                </td>
                <td>일반회원</td>
                <td>7</td>
                <td>290</td>
                <td>2024-01-31 00:00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <button type="button">
                    <span className="underline">010-1234-5678</span>
                  </button>
                </td>
                <td>일반회원</td>
                <td>7</td>
                <td>290</td>
                <td>2024-01-31 00:00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <button type="button">
                    <span className="underline">010-1234-5678</span>
                  </button>
                </td>
                <td>일반회원</td>
                <td>7</td>
                <td>290</td>
                <td>2024-01-31 00:00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <button type="button">
                    <span className="underline">010-1234-5678</span>
                  </button>
                </td>
                <td>일반회원</td>
                <td>7</td>
                <td>290</td>
                <td>2024-01-31 00:00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <button type="button">
                    <span className="underline">010-1234-5678</span>
                  </button>
                </td>
                <td>일반회원</td>
                <td>7</td>
                <td>290</td>
                <td>2024-01-31 00:00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <button type="button">
                    <span className="underline">010-1234-5678</span>
                  </button>
                </td>
                <td>일반회원</td>
                <td>7</td>
                <td>290</td>
                <td>2024-01-31 00:00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <button type="button">
                    <span className="underline">010-1234-5678</span>
                  </button>
                </td>
                <td>일반회원</td>
                <td>7</td>
                <td>290</td>
                <td>2024-01-31 00:00</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <button type="button">
                    <span className="underline">010-1234-5678</span>
                  </button>
                </td>
                <td>일반회원</td>
                <td>7</td>
                <td>290</td>
                <td>2024-01-31 00:00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-bottom">
          <Paging />
        </div>
      </Drawer>
      {/* BO045002_전시컨텐츠관리>약관관리>약관등록 */}
      <Drawer
        id="drawer-45002"
        open={open45002}
        handleClose={setOpen45002}
        title="약관등록"
        btns={[
          { type: "black", label: "취소" },
          { type: "green", label: "저장" },
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
                  <th scope="row">구분</th>
                  <td colSpan={3}>
                    <div className="flex items-center gap-3">
                      <SelectBasic placeholder="전체" size="m" />
                      <Button type="outline" size="m">
                        최신버전 불러오기
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">게시일시</th>
                  <td colSpan={3}>
                    <div className="flex items-center">
                      <FormDate selected={new Date()} time />
                      <span className="ml-auto text-muted">
                        ※ 게시일시가 되면 이전 게시물이 이전 버전이 됩니다.
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">대상</th>
                  <td colSpan={3}>
                    <div className="flex items-center gap-3">
                      <Checkbox label="회원" defaultChecked />
                      <Checkbox label="파트너" />
                      <Checkbox label="관리자" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">제목</span>
                  </th>
                  <td colSpan={3}>
                    <Input placeholder="제목 입력" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">내용</span>
                  </th>
                  <td colSpan={3}>
                    <FormEditor />
                  </td>
                </tr>
                <tr>
                  <th scope="row">등록자</th>
                  <td>김파프 &#40;admin&#41;</td>
                  <th scope="row">등록일시</th>
                  <td>
                    <span className="text-muted">등록 후 노출</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      </Drawer>
      {/* BO046002_전시컨텐츠관리>배너/팝업관리>배너/팝업등록 */}
      <Drawer
        id="drawer-46002"
        open={open46002}
        handleClose={setOpen46002}
        title="배너/팝업등록"
        btns={[
          { type: "black", label: "취소" },
          { type: "outline", label: "삭제" },
          { type: "green", label: "저장" },
        ]}
      >
        <>
          <div className="table-basic">
            <table>
              <colgroup>
                <col width="152px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">사용여부</th>
                  <td>
                    <Toggle />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="flex items-center gap-2">
                      <span className="text-req">전사위치</span>
                      <span
                        data-tooltip-id="tooltip"
                        data-tooltip-html={`<img src="/images/logo_pf.png" alt="가이드 이미지" />`}
                      >
                        <IcInfo />
                      </span>
                    </div>
                  </th>
                  <td>
                    <SelectBasic size="m" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">전시기간</span>
                  </th>
                  <td>
                    <FormDateRange time />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">대상</span>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <Checkbox label="회원" defaultChecked />
                      <Checkbox label="배정자" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">배너/팝업명</span>
                  </th>
                  <td>
                    <Input
                      size="l"
                      placeholder="간략하게 설명하는 명칭을 넣으세요."
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">이미지</span>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <File label="이미지 업로드" />
                      <span className="text-green">이미지 사이즈 640x640</span>
                    </div>
                    <p className="mt-2 text-muted text-sm font-normal">
                      전시위치를 선택하면 이미지 사이즈 안내가 나옵니다. 그
                      사이즈의 2배수 등록을 추천합니다.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">링크</th>
                  <td>
                    <div className="flex flex-wrap items-center gap-2">
                      <SelectBasic size="m" />
                      <Input size="l" placeholder="게시물의 번호를 넣으세요." />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">외부링크</th>
                  <td>
                    <Input
                      size="l"
                      placeholder="https://로 작성해 주세요. 게시물의 번호랑 동시에 작성시 게시물의 번호로 링크됩니다."
                    />
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
                  <td>2024-10-14 14:38</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      </Drawer>
      {/* BO047002_전시컨텐츠관리>FAQ관리>FAQ등록 */}
      <Drawer
        id="drawer-47002"
        open={open47002}
        handleClose={setOpen47002}
        title="FAQ등록"
        btns={[
          { type: "black", label: "취소" },
          { type: "green", label: "저장" },
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
                  <th scope="row">유형</th>
                  <td colSpan={3}>
                    <SelectBasic size="m" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">베스트여부</th>
                  <td>
                    <Checkbox />
                  </td>
                  <th scope="row">사용여부</th>
                  <td>
                    <Toggle />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">제목</span>
                  </th>
                  <td colSpan={3}>
                    <Input placeholder="제목 입력" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">내용</span>
                  </th>
                  <td colSpan={3}>
                    <FormEditor />
                  </td>
                </tr>
                <tr>
                  <th scope="row">첨부파일</th>
                  <td colSpan={3}>
                    <File label="찾아보기" />
                    <p className="mt-2 text-muted text-sm font-normal">
                      첨부파일은 PDF, PNG만 등록 가능합니다. 이미지 파일은
                      에디터를 사용해서 등록 가능합니다.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">등록자</th>
                  <td>김파프 &#40;admin&#41;</td>
                  <th scope="row">등록일시</th>
                  <td>
                    <span className="text-muted">등록 후 노출</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      </Drawer>
      {/* BO048002_전시컨텐츠관리>이용안내관리>등록 */}
      <Drawer
        id="drawer-48002"
        open={open48002}
        handleClose={setOpen48002}
        title="이용안내 등록"
        btns={[
          { type: "black", label: "취소" },
          { type: "green", label: "저장" },
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
                  <th scope="row">
                    <span className="text-req">유형</span>
                  </th>
                  <td colSpan={3}>
                    <div className="flex items-center gap-3">
                      <Radio name="t48002a" label="기본" defaultChecked />
                      <Radio name="t48002a" label="사진" />
                      <Radio name="t48002a" label="영상" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">사용여부</th>
                  <td>
                    <Toggle />
                  </td>
                  <th scope="row">노출순서</th>
                  <td>
                    <Input />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">제목</span>
                  </th>
                  <td colSpan={3}>
                    <Input placeholder="제목 입력" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">내용</span>
                  </th>
                  <td colSpan={3}>
                    <FormEditor />
                  </td>
                </tr>
                <tr>
                  <th scope="row">등록자</th>
                  <td>김파프 &#40;admin&#41;</td>
                  <th scope="row">등록일시</th>
                  <td>
                    <span className="text-muted">등록 후 노출</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      </Drawer>

      {/* BO042007_전시컨텐츠관리>이벤트관리>이벤트등록>미리보기A */}
      <ModalBasic
        open={open42007a}
        size="l"
        handleClose={() => setOpen42007a(false)}
      >
        <>
          <p className="modal-tit">이벤트 미리보기</p>
          <div className="modal-cont items-center">
            <SelectBasic size="m" placeholder="iPhone 14 pro" />
            <div className="flex justify-center items-center gap-[1.25rem] mt-4">
              <div className="relative">
                <Image
                  src="/images/img_iphone14pro.png"
                  alt=""
                  width={414}
                  height={872}
                />
                <div className="overflow-hidden absolute top-[13.8125rem] right-[0.625rem] bottom-[0.625rem] left-[0.625rem] flex flex-col gap-8  rounded-b-[3.125rem]">
                  {/* 이벤트 1 */}
                  <div className="box-event">
                    <div className="evt-img rounded-2xl mx-[1.25rem]">
                      <Image
                        src="/images/test/img_evt.png"
                        alt=""
                        width={354}
                        height={246}
                      />
                      <div className="txt">
                        <span>지역, 기간 미리 설정해서 똑똑하게!</span>
                        <p>
                          월주차권
                          <br />
                          파킹프렌즈에서
                          <br />
                          구매하세요
                        </p>
                      </div>
                    </div>
                    <div className="evt-info">
                      <span className="status bg-[#39B76B] text-white">
                        진행중
                      </span>
                      <span className="date">2024.07 ~ 2024.12</span>
                    </div>
                  </div>
                  {/* 이벤트 2 */}
                  <div className="box-event">
                    <div className="evt-img rounded-2xl mx-[1.25rem]"></div>
                    <div className="evt-info">
                      <span className="status bg-[#E7E9ED] text-[#9DA0A7]">
                        종료
                      </span>
                      <span className="date">2024.07 ~ 2024.12</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </ModalBasic>

      {/* BO042007_전시컨텐츠관리>이벤트관리>이벤트등록>미리보기B */}
      <ModalBasic
        open={open42007b}
        size="xl"
        handleClose={() => setOpen42007b(false)}
      >
        <>
          <p className="modal-tit">이벤트 미리보기</p>
          <div className="modal-cont items-center">
            <SelectBasic placeholder="iPhone 12 pro" className="w-[15rem]" />
            <div className="flex justify-center items-center gap-[1.25rem] mt-4">
              <div className="relative">
                <Image
                  src="/images/img_iphone12pro_1.png"
                  alt=""
                  width={410}
                  height={864}
                />
                <div className="overflow-hidden absolute top-[13.8125rem] right-[0.625rem] bottom-[0.625rem] left-[0.625rem] flex flex-col gap-8  rounded-b-[3.125rem]">
                  {/* 이벤트 1 */}
                  <div className="box-event">
                    <div className="evt-img rounded-2xl mx-[1.25rem]">
                      <Image
                        src="/images/test/img_evt.png"
                        alt=""
                        width={354}
                        height={246}
                      />
                      <div className="txt">
                        <span>지역, 기간 미리 설정해서 똑똑하게!</span>
                        <p>
                          월주차권
                          <br />
                          파킹프렌즈에서
                          <br />
                          구매하세요
                        </p>
                      </div>
                    </div>
                    <div className="evt-info">
                      <span className="status bg-[#39B76B] text-white">
                        진행중
                      </span>
                      <span className="date">2024.07 ~ 2024.12</span>
                    </div>
                  </div>
                  {/* 이벤트 2 */}
                  <div className="box-event">
                    <div className="evt-img rounded-2xl mx-[1.25rem]"></div>
                    <div className="evt-info">
                      <span className="status bg-[#E7E9ED] text-[#9DA0A7]">
                        종료
                      </span>
                      <span className="date">2024.07 ~ 2024.12</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/img_iphone12pro_2.png"
                  alt=""
                  width={410}
                  height={864}
                />
                <div className="overflow-hidden absolute top-[8.4375rem] right-[0.625rem] bottom-[0.625rem] left-[0.625rem] flex flex-col gap-8  rounded-b-[3.125rem]">
                  {/* 이벤트 1 */}
                  <div className="box-event">
                    <div className="bg-[#f4f5f8]">
                      <div className="evt-img rounded-2xl mx-[1.25rem]">
                        <Image
                          src="/images/test/img_evt.png"
                          alt=""
                          width={354}
                          height={246}
                        />
                        <div className="txt">
                          <span>지역, 기간 미리 설정해서 똑똑하게!</span>
                          <p>
                            월주차권
                            <br />
                            파킹프렌즈에서
                            <br />
                            구매하세요
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="evt-info">
                      <span className="status bg-[#39B76B] text-white">
                        진행중
                      </span>
                      <span className="date">2024.07 ~ 2024.12</span>
                    </div>
                  </div>
                  {/* 이벤트 2 */}
                  <div className="box-event">
                    <div className="evt-img rounded-2xl mx-[1.25rem] h-[22.5rem]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </ModalBasic>

      {/* BO042007_전시컨텐츠관리>이벤트관리>이벤트등록>미리보기C */}
      <ModalBasic
        open={open42007c}
        size="xl"
        handleClose={() => setOpen42007c(false)}
      >
        <>
          <p className="modal-tit">이벤트 미리보기</p>
          <div className="modal-cont items-center">
            <SelectBasic
              placeholder="Samsung Galaxy S20 Ultra"
              className="w-[15rem]"
            />
            <div className="flex justify-center items-center gap-[1.25rem] mt-4">
              <div className="relative">
                <Image
                  src="/images/img_galaxys20ultra_1.png"
                  alt=""
                  width={432}
                  height={935}
                />
                <div className="overflow-hidden absolute top-[13.8125rem] right-[0.625rem] bottom-[0.625rem] left-[0.625rem] flex flex-col gap-8 rounded-b-[3.125rem]">
                  {/* 이벤트 1 */}
                  <div className="box-event">
                    <div className="evt-img rounded-2xl mx-[1.25rem]">
                      <Image
                        src="/images/test/img_evt.png"
                        alt=""
                        width={354}
                        height={246}
                      />
                      <div className="txt">
                        <span>지역, 기간 미리 설정해서 똑똑하게!</span>
                        <p>
                          월주차권
                          <br />
                          파킹프렌즈에서
                          <br />
                          구매하세요
                        </p>
                      </div>
                    </div>
                    <div className="evt-info">
                      <span className="status bg-[#39B76B] text-white">
                        진행중
                      </span>
                      <span className="date">2024.07 ~ 2024.12</span>
                    </div>
                  </div>
                  {/* 이벤트 2 */}
                  <div className="box-event">
                    <div className="evt-img rounded-2xl mx-[1.25rem]"></div>
                    <div className="evt-info">
                      <span className="status bg-[#E7E9ED] text-[#9DA0A7]">
                        종료
                      </span>
                      <span className="date">2024.07 ~ 2024.12</span>
                    </div>
                  </div>
                  {/* 이벤트 3 */}
                  <div className="box-event">
                    <div className="evt-img rounded-2xl mx-[1.25rem]"></div>
                    <div className="evt-info">
                      <span className="status bg-[#E7E9ED] text-[#9DA0A7]">
                        종료
                      </span>
                      <span className="date">2024.07 ~ 2024.12</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/img_galaxys20ultra_2.png"
                  alt=""
                  width={432}
                  height={935}
                />
                <div className="overflow-hidden absolute top-[8.4375rem] right-[0.625rem] bottom-[0.625rem] left-[0.625rem] flex flex-col gap-8 rounded-b-[3.125rem]">
                  {/* 이벤트 1 */}
                  <div className="box-event">
                    <div className="bg-[#f4f5f8]">
                      <div className="evt-img rounded-2xl mx-[1.25rem]">
                        <Image
                          src="/images/test/img_evt.png"
                          alt=""
                          width={354}
                          height={246}
                        />
                        <div className="txt">
                          <span>지역, 기간 미리 설정해서 똑똑하게!</span>
                          <p>
                            월주차권
                            <br />
                            파킹프렌즈에서
                            <br />
                            구매하세요
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="evt-info">
                      <span className="status bg-[#39B76B] text-white">
                        진행중
                      </span>
                      <span className="date">2024.07 ~ 2024.12</span>
                    </div>
                  </div>
                  {/* 이벤트 2 */}
                  <div className="box-event">
                    <div className="evt-img rounded-2xl mx-[1.25rem] h-[22.5rem]"></div>
                    <p className="mt-6 mx-[1.25rem] text-[#43484F] text-base font-medium">
                      에디터에서 등록한 내용
                      <br />
                      파킹프렌즈는 자체 개발한 IoT 센서와 CCTV를 활용하여 주차
                      공간에 대한 실시간 정보를 제공함으로써, 주차면을 제공한
                      파트너와 주차면을 이용하는 운전자에게 안전하고 편리한 주차
                      서비스를 제공합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </ModalBasic>

      {/* BO046004_전시컨텐츠관리>배너/팝업관리>전시위치보기 */}
      <ModalBasic
        open={open46004}
        size="l"
        handleClose={() => setOpen46004(false)}
      >
        <>
          <p className="modal-tit">전시위치보기</p>
          <div className="modal-cont">
            <div className="grid grid-cols-[17.5rem_1fr] gap-6">
              <ul className="list-contents">
                {[
                  {
                    tit: "홈 주차장찾기 배너",
                    desc: "이미지 사이즈: 320×120/3×(960×360)",
                  },
                  {
                    tit: "홈 하이라이트 배너",
                    desc: "이미지 사이즈: 320×40/3×(960×120)",
                  },
                  {
                    tit: "홈 하단 팝업",
                    desc: "이미지 사이즈: 320×168/3×(960×504)",
                  },
                  {
                    tit: "홈 중앙 팝업",
                    desc: "이미지 사이즈: 통이미지 등록시 최대 320×500권장/3×(960×1500)",
                  },
                  {
                    tit: "회원 홈 중앙배너",
                    desc: "이미지 사이즈: 320×200/3×(960×600)",
                  },
                  {
                    tit: "제보하기 배너",
                    desc: "이미지 사이즈: 320×52/3×(960×156)",
                  },
                  {
                    tit: "시간피커 광고배너",
                    desc: "이미지 사이즈: 320×120/3×(960×360)",
                  },
                  {
                    tit: "회원 마이페이지 배너",
                    desc: "이미지 사이즈: 320×200/3×(960×600)",
                  },
                ].map((item, idx) => (
                  <li key={item.tit}>
                    <button
                      type="button"
                      className={`btn-item${
                        idx === selected ? " selected" : ""
                      }`}
                      onClick={() => setSelected(idx)}
                    >
                      <p className="tit">{item.tit}</p>
                      <p className="desc">
                        {item.desc}
                        <br />
                        배경컬러 별도 등록
                      </p>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="min-h-[54.5rem]">
                <Image
                  src={`/images/img_display_banner_${selected}.png`}
                  alt=""
                  width={414}
                  height={872}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </>
      </ModalBasic>

      {/* BO048004_유의사항조회 */}
      <ModalBasic
        open={open48004}
        size="xl"
        handleClose={() => setOpen48004(false)}
      >
        <>
          <p className="modal-tit">유의사항 조회</p>
          <div className="modal-cont">
            <div className="table-basic">
              <table>
                <colgroup>
                  <col width="152px" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">구분</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <Checkbox label="전체" defaultChecked />
                        <Checkbox label="주차장상세" />
                        <Checkbox label="주차권" />
                        <Checkbox label="결제" />
                        <Checkbox label="이벤트" />
                        <Checkbox label="기타" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">사용여부</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <Radio name="t1" label="전체" defaultChecked />
                        <Radio name="t1" label="사용(Y)" />
                        <Radio name="t1" label="사용안함(N)" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">검색어</th>
                    <td>
                      <Input size="l" placeholder="검색어를 입력하세요." />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">기간</th>
                    <td>
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
                    <th scope="col">번호</th>
                    <th scope="col">사용여부</th>
                    <th scope="col">구분</th>
                    <th scope="col">주차장명</th>
                    <th scope="col">제목</th>
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
                    <td>Y</td>
                    <td>주차장 상세</td>
                    <td>성북구 도담도담 주차장</td>
                    <td>제목이 노출됩니다.</td>
                    <td>김파프&#40;adminId&#41;</td>
                    <td>2024-12-31 00:00</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>
                      <Checkbox />
                    </td>
                    <td>9</td>
                    <td>Y</td>
                    <td>주차권</td>
                    <td>자양동래미안 프리미어 필리스</td>
                    <td>제목이 노출됩니다.</td>
                    <td>김파프&#40;adminId&#41;</td>
                    <td>2024-12-31 00:00</td>
                    <td>김파프&#40;adminId&#41;</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>
                      <Checkbox />
                    </td>
                    <td>8</td>
                    <td>N</td>
                    <td>결제</td>
                    <td>동작구 갯마을 주차장</td>
                    <td>제목이 노출됩니다.</td>
                    <td>김파프&#40;adminId&#41;</td>
                    <td>2024-12-31 00:00</td>
                    <td>-</td>
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
