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
        <div className={`search-box expand${open ? " open" : ""}`}>
          <ul>
            <li>
              <p className="inline-flex items-center gap-2">
                계정상태
                <span
                  data-tooltip-id="tooltip"
                  data-tooltip-html="활성: 아이디(휴대폰번호)가 중복되지 않은 계정<br />
                  비활성: 로그인 후 본인인증(휴대폰본인인증or간편인증)을 통해 본인 번호를 확인한 계정<br />
                  검토:규칙에 의해 비정상 활동이 감지 되어 검토가 필요한 계정<br />
                  정지:관리자가 검토 후 비정상활동 등에 의해 계정을 정지한 계정<br />"
                >
                  <IcInfo />
                </span>
              </p>
              <div className="flex items-center gap-3">
                <Checkbox label="전체" defaultChecked />
                <Checkbox label="활성" />
                <Checkbox label="비활성" />
                <Checkbox label="검토" />
                <Checkbox label="정지" />
              </div>
            </li>
            <li>
              <p className="inline-flex items-center gap-2">
                블랙리스트 여부
                <span
                  data-tooltip-id="tooltip"
                  data-tooltip-place="left"
                  data-tooltip-html="비정상활동을 하거나, 업무방해 행위 등을 한 계정이라 판단하여 <br />관리자가 블랙리스트로 속성을 부여한 계정이다.<br />회원은 블랙리스트인지 알 수 없으며, 활동에 제약이 없고 모니터링 대상입니다."
                >
                  <IcInfo />
                </span>
              </p>
              <div className="flex items-center gap-3">
                <Checkbox label="전체" defaultChecked />
                <Checkbox label="Y" />
                <Checkbox label="N" />
              </div>
            </li>
            <li className="col-span-2">
              <p className="inline-flex items-center gap-2">
                CI값 여부
                <span
                  data-tooltip-id="tooltip"
                  data-tooltip-html="본인인증(휴대폰본인인증 또는 간편인증)을 로그인 후 최초1회 진행하면,<br />CI값(온라인 주민번호 개념)을 획득하며 회원번호 외 내부 관리용 회원을 구분하는 시리얼키 개념입니다."
                >
                  <IcInfo />
                </span>
              </p>
              <div className="flex items-center gap-3">
                <Radio name="f2" label="전체" defaultChecked />
                <Radio name="f2" label="Y" />
                <Radio name="f2" label="N" />
              </div>
            </li>
            <li className="col-span-2">
              <p className="inline-flex items-center gap-2">
                회원 유형
                <span
                  data-tooltip-id="tooltip"
                  data-tooltip-html="일반 APP회원은 “회원＂만 선택하며,<br />파트너(배정자/공유자)는 파트너 선택 후 대분류/소분류를 선택합니다."
                >
                  <IcInfo />
                </span>
              </p>
              <div className="flex items-center gap-3">
                <Radio name="f1" label="전체" defaultChecked />
                <Radio name="f1" label="회원" />
                <Radio name="f1" label="파트너" />
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
            </li>
            <li className="col-span-2">
              <p className="inline-flex items-center gap-2">
                검색어
                <span
                  data-tooltip-id="tooltip"
                  data-tooltip-html="회원번호,휴대폰번호,이름,닉네임, 차량번호를 검색어로 입력 가능합니다."
                >
                  <IcInfo />
                </span>
              </p>
              <Input placeholder="검색어를 입력하세요" size="l" />
            </li>
            <li className="col-span-2">
              <p>가입일자</p>
              <div className="flex items-center gap-2">
                <FormDateRange />
                <ButtonGroup />
              </div>
            </li>
            <li className="col-span-2">
              <p>최종접속일자</p>
              <div className="flex items-center gap-2">
                <FormDateRange />
                <ButtonGroup />
              </div>
            </li>
          </ul>
          <div className="search-btn">
            <Button type="green" size="m" onClick={() => setLoading(true)}>
              검색
            </Button>
          </div>
          <button
            type="button"
            className="btn-open"
            onClick={() => setOpen((prev) => !prev)}
          >
            <IcDown />
          </button>
        </div>
        {/* //search box */}

        <div className="grow flex flex-col">
          <div className="flex items-center min-h-[2.5rem]">
            <p className="h4">
              총 <span className="text-green">231</span>건
            </p>
            <SelectBasic
              size="m"
              placeholder="10개씩 보기"
              className="ml-auto"
            />
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
                  <th scope="col">CI값 여부</th>
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
                    <Checkbox />
                  </td>
                  <td>
                    <button type="button" className="flex items-center gap-1">
                      <Flag type="black" size="s" label="B" />
                      <span className="underline text-green">NNNNN</span>
                    </button>
                  </td>
                  <td>활성</td>
                  <td>APP회원</td>
                  <td>Y</td>
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
            <Button type="outline" size="m" className="justify-self-end">
              <IcExcel />
              엑셀다운로드
            </Button>
          </div>
        </div>
      </div>
      {loading && <Loading />}
    </DefaultLayout>
  );
}
