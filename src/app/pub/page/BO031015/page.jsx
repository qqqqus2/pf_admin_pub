import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Input from "@pub/components/Form/Input";
import Radio from "@pub/components/Form/Radio";
import SelectBasic from "@pub/components/Form/Select";
import Checkbox from "@pub/components/Form/Check";
import FormDateRange from "@pub/components/Form/DateRange";
import Paging from "@pub/components/Grid/Paging";
import IcExcel from "@/assets/icons/ico_excel.svg";

export default function BO031015() {
  return (
    <>
      <DefaultLayout>
        <Topbar
          title="계약상세 (강남구청)"
          path={[
            { text: "홈", url: "/" },
            { text: "파트너 · 시설관리", url: "/" },
            { text: "파트너관리", url: "/" },
            { text: "계약상세", url: "/" },
            { text: "파트너계정관리", url: "/" },
          ]}
        />
        <div className="box-cont">
          <TabGroup className="tab-basic" defaultIndex={1}>
            <TabList>
              <Tab>계약조회</Tab>
              <Tab>파트너계정관리</Tab>
              <Tab>주차장등록관리</Tab>
              <Tab>배정자관리</Tab>
            </TabList>
            <TabPanels>
              {/* 계약조회 */}
              <TabPanel>계약조회</TabPanel>
              {/* 파트너계정관리 */}
              <TabPanel>
                <div className="search-box">
                  <ul>
                    <li>
                      <p>사용여부</p>
                      <div className="flex items-center gap-3">
                        <Radio name="t1" label="전체" defaultChecked />
                        <Radio name="t1" label="사용(Y)" />
                        <Radio name="t1" label="사용안함(N)" />
                      </div>
                    </li>
                    <li>
                      <p>접속IP 설정여부</p>
                      <div className="flex items-center gap-3">
                        <Radio name="t2" label="전체" defaultChecked />
                        <Radio name="t2" label="설정(Y)" />
                        <Radio name="t2" label="설정안함(N)" />
                      </div>
                    </li>
                    <li className="col-span-2">
                      <p>검색어</p>
                      <Input placeholder="검색어를 입력하세요." size="l" />
                    </li>
                    <li className="col-span-2">
                      <p>기간</p>
                      <div className="flex items-center gap-2">
                        <SelectBasic placeholder="전체" size="m" />
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
                <div className="flex items-center min-h-[2.5rem] mt-6">
                  <p className="h4">
                    총 <span className="text-green">231</span>건
                  </p>
                </div>
                <div className="grow flex flex-col mt-4">
                  <div className="table-grid">
                    <table>
                      <colgroup>
                        <col width="60px" />
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
                          <th scope="col">접속IP</th>
                          <th scope="col">추가관리자</th>
                          <th scope="col">서약서동의일시</th>
                          <th scope="col">최종접속일시</th>
                          <th scope="col">등록일자</th>
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
                          <td>
                            <button type="button">
                              <span className="underline">Parking00</span>
                            </button>
                          </td>
                          <td>김길동</td>
                          <td>010-1234-5678</td>
                          <td>설정</td>
                          <td>Y</td>
                          <td>-</td>
                          <td>-</td>
                          <td>yyyy-mm-dd</td>
                          <td>김파프&#40;adminid&#41;</td>
                          <td>yyyy-mm-dd 00:00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="table-bottom">
                    <Paging />
                    <Button
                      type="outline"
                      size="m"
                      className="justify-self-end"
                    >
                      <IcExcel />
                      엑셀다운로드
                    </Button>
                  </div>
                </div>
              </TabPanel>
              {/* 주차장등록관리 */}
              <TabPanel>주차장등록관리</TabPanel>

              {/* 배정자관리 */}
              <TabPanel>배정자관리</TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
        <div className="flex mt-6">
          <Button type="black" size="m">
            목록
          </Button>
          <div className="flex items-center gap-2 ml-auto">
            <Button type="black" size="m">
              취소
            </Button>
            <Button type="gray" size="m">
              미리보기
            </Button>
            <Button type="green" size="m">
              저장
            </Button>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
