"use client";

import { useState } from "react";
import Image from "next/image";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Button from "@pub/components/Button";
import File from "@pub/components/Form/File";
import Input from "@pub/components/Form/Input";
import ModalBasic from "@pub/components/Modal";
import Alert from "@pub/components/Modal/Alert";
import InputSearch from "@pub/components/Form/InputSearch";
import IcExcel from "@/assets/icons/ico_excel.svg";

export default function GuideModal() {
  const [alert1, setAlert1] = useState(false);
  const [alert2, setAlert2] = useState(false);

  const [pop1, setPop1] = useState(false);
  const [pop3, setPop3] = useState(false);
  const [pop4, setPop4] = useState(false);
  const [pop5, setPop5] = useState(false);
  const [pop6, setPop6] = useState(false);
  const [pop7, setPop7] = useState(false);
  const [pop9, setPop9] = useState(false);
  const [pop10, setPop10] = useState(false);
  const [pop11, setPop11] = useState(false);

  return (
    <DefaultLayout>
      <div className="relative grow py-[2.5rem]">
        <h1 className="h1">Guide_Modal/Alert</h1>
        <dl className="flex flex-col gap-8 max-w-[70rem] mt-9">
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Alert</dt>
            <dd className="flex flex-wrap items-center gap-4 w-[80%]">
              <Button type="green" size="l" onClick={() => setAlert1(true)}>
                alert 1
              </Button>
              <Button type="green" size="l" onClick={() => setAlert2(true)}>
                alert 2
              </Button>
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">
              Modal - S&#40;380&#41; / M&#40;600&#41; / L&#40;960&#41; /
              XL&#40;1200&#41;
            </dt>
            <dd className="flex flex-wrap  items-center gap-4 w-[80%]">
              <Button type="green" size="l" onClick={() => setPop1(true)}>
                링크
              </Button>
              <Button type="green" size="l" onClick={() => setPop3(true)}>
                쿠폰 QR
              </Button>
              <Button type="green" size="l" onClick={() => setPop4(true)}>
                파일등록
              </Button>
              <Button type="green" size="l" onClick={() => setPop5(true)}>
                등록파일
              </Button>
              <Button type="green" size="l" onClick={() => setPop6(true)}>
                접속IP
              </Button>
              <Button type="green" size="l" onClick={() => setPop7(true)}>
                비밀번호 변경
              </Button>
              <Button type="green" size="l" onClick={() => setPop9(true)}>
                개인정보 보호서약
              </Button>
              <Button type="green" size="l" onClick={() => setPop10(true)}>
                최근알림-default
              </Button>
              <Button type="green" size="l" onClick={() => setPop11(true)}>
                최근알림-nodata
              </Button>
            </dd>
          </div>
        </dl>
      </div>

      {/* Alert 01 */}
      <Alert
        open={alert1}
        handleClose={() => setAlert1(false)}
        btns={[
          { type: "gray", label: "취소" },
          { type: "green", label: "확인" },
        ]}
      >
        <p className="h4 text-center">
          현재 페이지의 모든 항목을
          <br />
          승인하시겠습니까?
        </p>
      </Alert>

      {/* Alert 02 */}
      <Alert
        open={alert2}
        handleClose={() => setAlert2(false)}
        btns={[{ type: "green", label: "확인" }]}
      >
        <p className="pt-3 h4 text-center">승인되었습니다.</p>
      </Alert>

      {/* Pop 01 링크 */}
      <ModalBasic open={pop1} size="s" handleClose={() => setPop1(false)}>
        <>
          <p className="modal-tit">링크</p>
          <div className="modal-cont">
            <InputSearch placeholder="신청접수번호를 입력하세요" />
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

      {/* Pop 03 쿠폰 QR */}
      <ModalBasic open={pop3} size="s" handleClose={() => setPop3(false)}>
        <>
          <p className="modal-tit text-center">쿠폰명</p>
          <div className="modal-cont">
            <Image
              src="/images/test/img_qr.png"
              alt="qr"
              width={160}
              height={160}
              className="mx-auto"
            />
          </div>
          <div className="modal-btns justify-center">
            <Button type="blue" size="l">
              QR코드다운로드
            </Button>
            <Button type="green" size="l">
              URL복사
            </Button>
          </div>
        </>
      </ModalBasic>

      {/* Pop 04 파일등록 */}
      <ModalBasic open={pop4} size="s" handleClose={() => setPop4(false)}>
        <>
          <p className="modal-tit">파일등록</p>
          <div className="modal-cont">
            <p className="text-base font-medium">파일을 선택해주세요.</p>
            <File size="l" />
            <ul className="flex flex-col gap-1 text-muted text-sm">
              <li>
                ※엑셀파일을 등록하실 때 엑셀양식
                <Button type="outline" size="s" className="mx-1">
                  <IcExcel />
                  양식다운로드
                </Button>
                을 미리 다운로드 하신 후 양식에 맞춰서 등록해주세요.
              </li>
              <li>※파일은 하나씩 처리가능합니다.</li>
            </ul>
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

      {/* Pop 05 등록파일 */}
      <ModalBasic open={pop5} size="s" handleClose={() => setPop5(false)}>
        <>
          <p className="modal-tit">등록파일</p>
          <div className="modal-cont">
            <div className="table-basic text-center">
              <table>
                <thead>
                  <tr>
                    <th scope="col">성공</th>
                    <th scope="col">실패</th>
                    <th scope="col">성공실패</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>99</td>
                    <td>
                      <button type="button">
                        <span className="text-red underline">1</span>
                      </button>
                    </td>
                    <td>100</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul className="flex flex-col gap-1 text-muted text-sm">
              <li>
                ※실패한 항목은 다운로드 후 수정하시어 다시 업로드해주세요.
              </li>
            </ul>
          </div>
          <div className="modal-btns">
            <Button type="green" size="l" className="grow">
              확인
            </Button>
          </div>
        </>
      </ModalBasic>

      {/* Pop 06 접속IP */}
      <ModalBasic open={pop6} size="m" handleClose={() => setPop6(false)}>
        <>
          <p className="modal-tit">접속IP</p>
          <div className="modal-cont">
            <p className="text-base font-medium">
              파킹프렌즈 파트너 시스템을 이용하시려는 접속 IP를 입력해주세요.
            </p>
            <div className="table-basic text-center">
              <table>
                <colgroup>
                  <col width="152" />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">
                      <span className="text-req">접속 IP</span>
                    </th>
                    <td>
                      <Input size="l" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <span className="text-req">접속 IP 확인</span>
                    </th>
                    <td>
                      <Input size="l" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul className="flex flex-col gap-1 text-muted text-sm">
              <li>
                ※파킹프렌즈 파트너 시스템은 입력하신 IP만 접속이 가능합니다.
              </li>
              <li>※접속 IP는 하나의 계정에 하나의 IP만 등록 가능합니다.</li>
              <li>
                ※파킹프렌즈는 파킹프렌즈와 파트너의 보안을 위해 노력합니다.
              </li>
            </ul>
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

      {/* Pop 07 비밀번호 변경 */}
      <ModalBasic open={pop7} size="m" handleClose={() => setPop7(false)}>
        <>
          <p className="modal-tit">비밀번호 변경</p>
          <div className="modal-cont">
            <div className="table-basic text-center">
              <table>
                <colgroup>
                  <col width="152" />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">현재 비밀번호</th>
                    <td>
                      <Input
                        size="l"
                        placeholder="현재 비밀번호를 입력하세요."
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">변경 비밀번호</th>
                    <td>
                      <Input
                        size="l"
                        placeholder="변경 비밀번호를 입력하세요."
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">변경 비밀번호 확인</th>
                    <td>
                      <Input
                        size="l"
                        placeholder="변경 비밀번호를 한번 더 입력하세요."
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul className="flex flex-col gap-1 text-muted text-sm">
              <li>
                ※영문, 숫자, 특수문자를 함께 사용하시면 보다 안전합니다.
                &#40;8자 이상 16자 이하&#41;
              </li>
              <li>※다른 사람이 알 수 없는 비밀번호로 설정해 주세요.</li>
              <li>
                ※아이디와 동일하거나 전화전호, 연속된 숫자 · 문자 등 타인이 쉽게
                알아낼 수 있는 비밀번호 사용은 위험합니다.
              </li>
              <li>
                ※타 사이트와 동일한 비밀번호의 사용, 이전에 사용했던 비밀번호는
                안전하지 않을 수 있습니다.
              </li>
            </ul>
          </div>
          <div className="modal-btns justify-center">
            <Button type="gray" size="l">
              취소
            </Button>
            <Button type="green" size="l">
              비밀번호 변경
            </Button>
          </div>
        </>
      </ModalBasic>

      {/* Pop 09 개인정보 보호서약 */}
      <ModalBasic open={pop9} size="m" handleClose={() => setPop9(false)}>
        <>
          <p className="modal-tit">개인정보 보호서약</p>
          <div className="modal-cont">
            <p className="text-base font-medium">
              접속을 계속하시려면, 개인정보 보호 서약에 동의해야 합니다.
              &#40;최초1회&#41;
            </p>
            <div className="overflow-auto h-[19.375rem] text-base">
              <p>개인정보 보호서약 등록된 내용 노출</p>
              <p>개인정보 보호서약 등록된 내용 노출</p>
              <p>개인정보 보호서약 등록된 내용 노출</p>
              <p>개인정보 보호서약 등록된 내용 노출</p>
              <p>개인정보 보호서약 등록된 내용 노출</p>
              <p>개인정보 보호서약 등록된 내용 노출</p>
              <p>개인정보 보호서약 등록된 내용 노출</p>
              <p>개인정보 보호서약 등록된 내용 노출</p>
              <p>개인정보 보호서약 등록된 내용 노출</p>
              <p>개인정보 보호서약 등록된 내용 노출</p>
              <p>개인정보 보호서약 등록된 내용 노출</p>
              <p>개인정보 보호서약 등록된 내용 노출</p>
              <p>개인정보 보호서약 등록된 내용 노출</p>
              <p>개인정보 보호서약 등록된 내용 노출</p>
              <p>개인정보 보호서약 등록된 내용 노출</p>
              <p>개인정보 보호서약 등록된 내용 노출</p>
              <p>개인정보 보호서약 등록된 내용 노출</p>
              <p>개인정보 보호서약 등록된 내용 노출</p>
              <p>개인정보 보호서약 등록된 내용 노출</p>
              <p>개인정보 보호서약 등록된 내용 노출</p>
              <p>개인정보 보호서약 등록된 내용 노출</p>
            </div>
          </div>
          <div className="modal-btns">
            <Button type="gray" size="m" className="mr-auto">
              다운로드
            </Button>
            <Button type="gray" size="m">
              동의하지 않습니다
            </Button>
            <Button type="green" size="m">
              동의합니다
            </Button>
          </div>
        </>
      </ModalBasic>

      {/* Pop 10 최근알림-default */}
      <ModalBasic open={pop10} size="m" handleClose={() => setPop10(false)}>
        <>
          <p className="modal-tit">
            최근알림<span className="ml-1 text-[#22D663]">32</span>
          </p>
          <div className="modal-cont">
            <p className="text-muted text-base font-medium">
              최근알림은 최대 10개까지 노출되며 더 많은 알림을 확인하시려면
              [알림 전체보기] 버튼을 클릭해서 확인 가능합니다.
            </p>
            <div className="overflow-auto h-[18.75rem] bg-[#F7F9FC] rounded">
              <ul className="list-alarm">
                <li>
                  <p>
                    &#91;메뉴명&#93; 문구노출&#40;대상메뉴별문구정의예정&#41;
                  </p>
                  <p className="date">2024-04-01</p>
                </li>
                <li>
                  <p>&#91;계정신청관리&#93; 계정신청이 있습니다.</p>
                  <p className="date">2024-04-01</p>
                </li>
                <li>
                  <p>&#91;공유신청관리&#93; 공유신청이 있습니다.</p>
                  <p className="date">2024-04-01</p>
                </li>
                <li>
                  <p>&#91;1:1 문의관리&#93; 1:1 문의가 접수되었습니다.</p>
                  <p className="date">2024-04-01</p>
                </li>
                <li>
                  <p>&#91;공유신청관리&#93; 공유신청이 있습니다.</p>
                  <p className="date">2024-04-01</p>
                </li>
                <li>
                  <p>&#91;1:1 문의관리&#93; 1:1 문의가 접수되었습니다.</p>
                  <p className="date">2024-04-01</p>
                </li>
                <li>
                  <p>&#91;공유신청관리&#93; 공유신청이 있습니다.</p>
                  <p className="date">2024-04-01</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="modal-btns justify-center">
            <Button type="gray" size="l">
              취소
            </Button>
            <Button type="green" size="l">
              알림 전체보기
            </Button>
          </div>
        </>
      </ModalBasic>

      {/* Pop 11 최근알림-nodata */}
      <ModalBasic open={pop11} size="m" handleClose={() => setPop11(false)}>
        <>
          <p className="modal-tit">최근알림</p>
          <div className="modal-cont">
            <p className="text-muted text-base font-medium">
              최근알림은 최대 10개까지 노출되며 더 많은 알림을 확인하시려면
              [알림 전체보기] 버튼을 클릭해서 확인 가능합니다.
            </p>
            <div className="overflow-auto h-[18.75rem] bg-[#F7F9FC] rounded">
              <p className="no-data h-full">최근 받은 알림이 없습니다.</p>
            </div>
          </div>
          <div className="modal-btns justify-center">
            <Button type="gray" size="l">
              취소
            </Button>
            <Button type="green" size="l">
              알림 전체보기
            </Button>
          </div>
        </>
      </ModalBasic>
    </DefaultLayout>
  );
}
