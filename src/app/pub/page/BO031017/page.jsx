import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Checkbox from "@pub/components/Form/Check";
import Radio from "@pub/components/Form/Radio";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";
import Paging from "@pub/components/Grid/Paging";
import IcExcel from "@/assets/icons/ico_excel.svg";

export default function BO031017() {
  return (
    <DefaultLayout>
      <Topbar
        title="계약상세 (강남구청)"
        path={[
          { text: "홈", url: "/" },
          { text: "파트너 · 시설관리", url: "/" },
          { text: "파트너관리", url: "/" },
          { text: "계약상세", url: "/" },
          { text: "배정자관리", url: "/" },
        ]}
      />
      <div className="box-cont">
        <TabGroup className="tab-basic h-full" defaultIndex={3}>
          <TabList>
            <Tab>계약조회</Tab>
            <Tab>파트너계정관리</Tab>
            <Tab>주차장등록관리</Tab>
            <Tab>배정자관리</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>계약조회</TabPanel>
            <TabPanel>파트너계정관리</TabPanel>
            <TabPanel>주차장등록관리</TabPanel>
            <TabPanel>
              {/* search box */}
              <div className="search-box">
                <ul>
                  <li className="col-span-2">
                    <p>상태</p>
                    <div className="flex items-center gap-3">
                      <Radio name="f1" label="전체" defaultChecked />
                      <Radio name="f1" label="활성(Y)" />
                      <Radio name="f1" label="비활성(N)" />
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
                </ul>
                <div className="search-btn">
                  <Button type="green" size="m">
                    검색
                  </Button>
                </div>
              </div>
              {/* //search box */}

              <div className="grow flex flex-col mt-6">
                <div className="flex items-center">
                  <Button type="black" size="m" className="ml-auto">
                    배정자등록
                  </Button>
                </div>
                <div className="flex items-center min-h-[2.5rem] mt-4">
                  <p className="h4">
                    총 <span className="text-green">231</span>건
                  </p>
                  <div className="flex items-center ml-auto">
                    <Button type="outline" size="m">
                      <IcExcel />
                      공유 포인트 지급
                    </Button>
                    <Button type="outline" size="m" className="ml-2">
                      <IcExcel />
                      배정자 일괄등록
                    </Button>
                    <SelectBasic
                      placeholder="50개씩 보기"
                      className="w-[9.375rem] ml-3"
                    />
                  </div>
                </div>
                <div className="table-grid mt-4">
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
                        <th scope="col">번호</th>
                        <th scope="col">회원번호</th>
                        <th scope="col">활성화 여부</th>
                        <th scope="col">주차장명</th>
                        <th scope="col">배정자명</th>
                        <th scope="col">차량번호</th>
                        <th scope="col">휴대폰번호</th>
                        <th scope="col">배정시작일</th>
                        <th scope="col">배정종료일</th>
                        <th scope="col">공유시간</th>
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
                        <td>Y</td>
                        <td>구획3-88-0&#40;#11111&#40;</td>
                        <td>
                          <button type="button">
                            <span className="underline">김길동</span>
                          </button>
                        </td>
                        <td>22도9382</td>
                        <td>0102362514</td>
                        <td>yyyy-mm-dd 00:00</td>
                        <td>yyyy-mm-dd 00:00</td>
                        <td>00시간00분</td>
                        <td>강남&#40;kangnam&#41;</td>
                        <td>yyyy-mm-dd 00:00</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-bottom">
                  <Paging />
                  <Button type="outline" size="m" className="justify-self-end">
                    <IcExcel />
                    배정자 엑셀 다운로드
                  </Button>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </DefaultLayout>
  );
}
