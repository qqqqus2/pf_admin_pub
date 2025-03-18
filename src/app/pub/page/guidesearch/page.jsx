"use client";

import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Button from "@pub/components/Button";
import SelectBasic from "@pub/components/Form/Select";
import Checkbox from "@pub/components/Form/Check";
import Radio from "@pub/components/Form/Radio";
import ButtonGroup from "@pub/components/Button/Group";
import Input from "@pub/components/Form/Input";
import FormDateRange from "@pub/components/Form/DateRange";
import IcDown from "@/assets/icons/ico_double_down.svg";
import IcInfo from "@/assets/icons/ico_circle_info.svg";

export default function GuideSearch() {
  const [open, setOpen] = useState(false);

  return (
    <DefaultLayout>
      <div className="relative grow flex flex-col py-[2.5rem] gap-8">
        <h1 className="h1">Guide_Search</h1>
        <div className="box-cont">
          <div className="search-box">
            <ul>
              <li>
                <p>상태</p>
                <SelectBasic placeholder="전체" size="m" />
              </li>
              <li>
                <p>종류</p>
                <SelectBasic placeholder="전체" size="m" />
              </li>
              <li>
                <p>구분</p>
                <div className="flex items-center gap-3">
                  <Radio name="f1" label="전체" defaultChecked />
                  <Radio name="f1" label="파트너" />
                  <Radio name="f1" label="관리자" />
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
                <p>검색어</p>
                <Input placeholder="검색어를 입력하세요" size="l" />
              </li>
              <li className="col-span-2">
                <p>종류</p>
                <div className="flex flex-wrap gap-[1rem_1.25rem]">
                  <Checkbox label="전체" defaultChecked />
                  <Checkbox label="구매포인트" />
                  <Checkbox label="이벤트포인트" />
                  <Checkbox label="상품권등록" />
                  <Checkbox label="고객보상포인트" />
                  <Checkbox label="배정자정산포인트" />
                  <Checkbox label="제휴포인트" />
                  <Checkbox label="제보포인트" />
                  <Checkbox label="감면포인트전환" />
                  <Checkbox label="상품권전환" />
                  <Checkbox label="파킹프렌즈포인트전환" />
                  <Checkbox label="opt1" />
                  <Checkbox label="opt2" />
                  <Checkbox label="opt3" />
                  <Checkbox label="opt4" />
                  <Checkbox label="opt5" />
                  <Checkbox label="opt6" />
                </div>
              </li>
            </ul>
            <div className="search-btn">
              <Button type="green" size="m">
                검색
              </Button>
            </div>
          </div>
        </div>

        <div className="box-cont">
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
              <Button type="green" size="m">
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
        </div>

        {/* Search - with Tab */}
        <div className="box-cont">
          <TabGroup className="tab-basic">
            <TabList>
              <Tab>AloT센서</Tab>
              <Tab>CCTV</Tab>
              <Tab>파프차단기</Tab>
              <Tab>키오스크</Tab>
              <Tab>안내판</Tab>
              <Tab>기타장비</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className="search-box">
                  <ul>
                    <li>
                      <p>상태</p>
                      <div className="flex items-center gap-3">
                        <Checkbox label="전체" defaultChecked />
                        <Checkbox label="운영중" defaultChecked />
                        <Checkbox label="공사중" />
                        <Checkbox label="철거" />
                        <Checkbox label="폐기" />
                      </div>
                    </li>
                    <li>
                      <p>주차장종류</p>
                      <SelectBasic placeholder="전체" size="m" />
                    </li>
                    <li>
                      <p>통신 개통여부</p>
                      <div className="flex items-center gap-3">
                        <Radio name="f1" label="전체" defaultChecked />
                        <Radio name="f1" label="개통(Y)" />
                        <Radio name="f1" label="미개통(N)" />
                      </div>
                    </li>
                    <li>
                      <p>통신상태</p>
                      <div className="flex items-center gap-3">
                        <Radio name="f2" label="전체" defaultChecked />
                        <Radio name="f2" label="ON" />
                        <Radio name="f2" label="OFF" />
                      </div>
                    </li>
                    <li className="col-span-2">
                      <p>검색어</p>
                      <div className="flex items-center gap-2">
                        <SelectBasic placeholder="전체" size="m" />
                        <Input placeholder="검색어를 입력하세요." size="l" />
                      </div>
                    </li>
                    <li className="col-span-2">
                      <p>기간</p>
                      <div className="flex items-center gap-2">
                        <SelectBasic placeholder="전체" size="m" />
                        <FormDateRange />
                        <ButtonGroup />
                      </div>
                    </li>
                    <li className="col-span-2">
                      <p>기간</p>
                      <div className="flex items-center gap-2">
                        <FormDateRange />
                        <ButtonGroup />
                      </div>
                    </li>
                  </ul>
                  <div className="search-btn">
                    <Button type="green" size="m">
                      검색
                    </Button>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>CCTV</TabPanel>
              <TabPanel>파프차단기</TabPanel>
              <TabPanel>키오스크</TabPanel>
              <TabPanel>안내판</TabPanel>
              <TabPanel>기타장비</TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </DefaultLayout>
  );
}
