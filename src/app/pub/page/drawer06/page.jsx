"use client";

import Image from "next/image";
import { useState } from "react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Button from "@pub/components/Button";
import ModalBasic from "@pub/components/Modal";
import Drawer from "@pub/components/Drawer";
import Radio from "@pub/components/Form/Radio";
import Checkbox from "@pub/components/Form/Check";
import Flag from "@pub/components/Flag";
import SelectBasic from "@pub/components/Form/Select";
import Carousel from "@pub/components/Carousel";
import Paging from "@pub/components/Grid/Paging";
import Text from "@pub/components/Form/Text";
import FileDropThumb from "@pub/components/Form/FileDropThumb";
import IcMap from "@/assets/icons/ico_map.svg";
import IcArrowRight from "@/assets/icons/ico_arrow_right.svg";

export default function Drawer06() {
  const [open61003, setOpen61003] = useState(false);
  const [open62004, setOpen62004] = useState(false);
  const [open64004, setOpen64004] = useState(false);

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
                  onClick={() => setOpen61003(true)}
                >
                  BO061003_공유신청 간편조회
                </Button>
                <Button
                  type="green"
                  size="m"
                  onClick={() => setOpen62004(true)}
                >
                  BO062004_1:1문의 간편조회
                </Button>
              </dd>
            </div>
            <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
              <dt className="h4">Modal</dt>
              <dd className="flex flex-wrap gap-4 w-[80%]">
                <Button
                  type="green"
                  size="m"
                  onClick={() => setOpen64004(true)}
                >
                  BO064004_이미지 크게보기
                </Button>
              </dd>
            </div>
          </dl>
        </div>
      </DefaultLayout>

      {/* BO061003_공유신청관리>공유신청 간편조회 */}
      <Drawer
        id="drawer-61003"
        open={open61003}
        handleClose={setOpen61003}
        title="공유신청 간편조회"
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
                <th scope="row">공유신청 접수번호</th>
                <td>
                  <div className="flex items-center gap-2">
                    <span>Q12345678</span>
                    <Button type="outline" size="s">
                      복사
                    </Button>
                  </div>
                </td>
                <th scope="row">연관문의 링크</th>
                <td>
                  <div className="flex flex-wrap items-center gap-2">
                    <SelectBasic />
                    <Button type="outline" size="m">
                      링크
                    </Button>
                    <button type="button">
                      <span className="underline">RM00018</span>
                    </button>
                    <button type="button">
                      <span className="underline">RM00017</span>
                    </button>
                    <button type="button">
                      <span className="underline">RM00016</span>
                    </button>
                    <button type="button">
                      <span className="underline">RM00015</span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" className="bg-h-blue">
                  담당자 정보
                </th>
                <td>담당자명&#40;adminID&#41;</td>
                <th scope="row" className="bg-h-blue">
                  내부검토결과
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <Radio name="t61003" label="검토중" defaultChecked />
                    <Radio name="t61003" label="승인완료" />
                    <Radio name="t61003" label="반려" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-memo ">
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
        <p className="h4 mt-6">신청내용</p>
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
                <th scope="row" className="bg-h-green">
                  신청한 회원
                </th>
                <td colSpan={3}>
                  <button type="button">
                    <span className="underline">
                      홍길동&#40;010-1234-5678&#41;
                    </span>
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row" className="bg-h-green">
                  신청유형
                </th>
                <td colSpan={3}>유료주차장사업자 / 개인소유주차공간</td>
              </tr>
              <tr>
                <th scope="row" className="bg-h-green">
                  연락가능한 번호
                </th>
                <td>010-1234-5678</td>
                <th scope="row" className="bg-h-green">
                  주차장소유관계
                </th>
                <td>임차인&#40;주차권한보육&#41; 또는 직원</td>
              </tr>
              <tr>
                <th scope="row" className="bg-h-green">
                  주차장명
                </th>
                <td colSpan={3}>신청자가 작성한 주차장명</td>
              </tr>
              <tr>
                <th scope="row" className="bg-h-green">
                  주차장위치
                </th>
                <td colSpan={3}>
                  <div className="flex items-center gap-1">
                    서울시 강남구 학동로82길 14-1
                    <button type="button">
                      <IcMap />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" className="bg-h-green">
                  요금방식 선택
                </th>
                <td colSpan={3}>
                  <div className="flex items-center gap-3">
                    <Checkbox label="시간권" defaultChecked />
                    <Checkbox label="당일권" />
                    <Checkbox label="월주차" />
                    <Checkbox label="기타" />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" className="bg-h-green">
                  주차면수
                </th>
                <td colSpan={3}>
                  <div className="flex justify-between items-center">
                    <span>112 / 123</span>
                    <span className="text-red">
                      ※ 운영가능면수 / 총주차면수
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" className="bg-h-green">
                  주차장 설명
                </th>
                <td colSpan={3}>
                  신청자가 작성한 주차장 설명이 표기 됩니다. 선택항목이라 없을
                  수 있습니다
                </td>
              </tr>
              <tr>
                <th scope="row" className="bg-h-green">
                  주차장 사진
                </th>
                <td colSpan={3}>
                  <Button type="outline" size="s">
                    일괄 다운로드
                  </Button>
                  <div className="flex items-center gap-[0.8125rem] mt-2">
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
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Drawer>

      {/* BO062004_1:1문의관리>1:1문의 간편조회 */}
      <Drawer
        id="drawer-62004"
        open={open62004}
        handleClose={setOpen62004}
        title="1:1문의 간편조회"
        btns={[{ type: "black", label: "닫기" }]}
      >
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
                  <div className="flex flex-wrap items-center gap-2">
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
                    <span className="underline">010-1234-5678</span>
                    &nbsp;&#40;김파프&#41;
                  </button>
                </td>
                <th scope="row">계정상태</th>
                <td>
                  <div className="flex items-center gap-2">
                    활성
                    <Flag type="black" size="s" label="Black" />
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
                  문의한 내용이 노출되는 영역입니다 문의한 내용이 노출되는
                  영역입니다
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
            </tbody>
          </table>
        </div>
        <p className="h4 mt-6">답변영역</p>
        <div className="table-basic mt-2">
          <table>
            <colgroup>
              <col width="152px" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row" className="bg-h-blue">
                  <span className="text-req">답변내용</span>
                </th>
                <td>
                  <Text
                    rows={5}
                    placeholder="답변을 작성하세요"
                    className="grow"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row" className="bg-h-blue">
                  알림 발송여부
                </th>
                <td>
                  <div className="flex items-center gap-7">
                    <Checkbox label="앱푸시" defaultChecked />
                    <Checkbox label="카카오톡" />
                    <Checkbox label="문자" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="h4 mt-6">관리자 메모</p>
        <div className="table-memo bg-cell-purple mt-4">
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
      </Drawer>

      {/* BO064004_문의관리>제보관리목록>조회상세>이미지 크게보기 */}
      <ModalBasic
        open={open64004}
        size="m"
        handleClose={() => setOpen64004(false)}
      >
        <>
          <p className="modal-tit">이미지 크게보기</p>
          <div className="modal-cont">
            <Carousel />
          </div>
        </>
      </ModalBasic>
    </>
  );
}
