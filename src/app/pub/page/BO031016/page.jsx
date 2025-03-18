import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Checkbox from "@pub/components/Form/Check";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";

export default function BO031016() {
  return (
    <DefaultLayout>
      <Topbar
        title="계약상세 (강남구청)"
        path={[
          { text: "홈", url: "/" },
          { text: "파트너 · 시설관리", url: "/" },
          { text: "파트너관리", url: "/" },
          { text: "계약상세", url: "/" },
          { text: "주차등록관리", url: "/" },
        ]}
      />
      <div className="box-cont">
        <TabGroup className="tab-basic" defaultIndex={2}>
          <TabList>
            <Tab>계약조회</Tab>
            <Tab>파트너계정관리</Tab>
            <Tab>주차장등록관리</Tab>
            <Tab>배정자관리</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>계약조회</TabPanel>
            <TabPanel>파트너계정관리</TabPanel>
            <TabPanel>
              <div className="flex flex-col space-y-8">
                {/* search box */}
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
                {/* //search box */}

                <div>
                  <div className="flex justify-between items-center">
                    <Button type="outline" size="m">
                      선택삭제
                    </Button>
                    <Button type="black" size="m">
                      주차장등록
                    </Button>
                  </div>
                  <div className="flex items-center min-h-[2.5rem] mt-4">
                    <p className="h4">
                      총 <span className="text-green">4</span>건
                    </p>
                    <div className="grid grid-cols-[9.375rem_9.375rem] gap-2 ml-auto">
                      <SelectBasic placeholder="최근 등록순" />
                      <SelectBasic placeholder="50개씩 보기" />
                    </div>
                  </div>
                  <div className="table-grid mt-4">
                    <table>
                      <colgroup>
                        <col width="5%" />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col width="6%" />
                        <col width="5%" />
                        <col width="5%" />
                        <col width="10%" />
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
                          <th scope="col">상태</th>
                          <th scope="col">주차장번호</th>
                          <th scope="col">주차장명</th>
                          <th scope="col">종류</th>
                          <th scope="col">담당자</th>
                          <th scope="col">주차권 등록수</th>
                          <th scope="col">시설 등록수</th>
                          <th scope="col">별점/후기</th>
                          <th scope="col">QR코드</th>
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
                          <td>서비스중</td>
                          <td>
                            <button type="button">
                              <span className="underline">NNNNN</span>
                            </button>
                          </td>
                          <td>구획3-88-0&#40;#1111&#41;</td>
                          <td>일반제휴</td>
                          <td>이동훈</td>
                          <td>0</td>
                          <td>0</td>
                          <td>
                            <button type="button">
                              <span className="underline">0</span>
                            </button>
                          </td>
                          <td>
                            <div className="flex flex-wrap justify-center gap-2">
                              <Button type="black" size="s">
                                조회
                              </Button>
                              <Button type="gray" size="s">
                                업데이트
                              </Button>
                              <Button type="outline" size="s">
                                삭제
                              </Button>
                            </div>
                          </td>
                          <td>김파프&#40;admin&#41;</td>
                          <td>2024-10-14 14:38</td>
                          <td>김파프&#40;admin&#41;</td>
                          <td>2024-10-14 14:38</td>
                        </tr>
                        <tr>
                          <td>
                            <Checkbox />
                          </td>
                          <td>정보등록중</td>
                          <td>
                            <button type="button">
                              <span className="underline">NNNNN</span>
                            </button>
                          </td>
                          <td>강남 스마트공유 주차장1-01</td>
                          <td>일반제휴</td>
                          <td>이동훈</td>
                          <td>0</td>
                          <td>0</td>
                          <td>
                            <button type="button">
                              <span className="underline">10</span>
                            </button>
                          </td>
                          <td>
                            <div className="flex flex-wrap justify-center gap-2">
                              <Button type="outline" size="s">
                                삭제
                              </Button>
                            </div>
                          </td>
                          <td>김파프&#40;admin&#41;</td>
                          <td>2024-10-14 14:38</td>
                          <td>김파프&#40;admin&#41;</td>
                          <td>2024-10-14 14:38</td>
                        </tr>
                        <tr>
                          <td>
                            <Checkbox />
                          </td>
                          <td>
                            <p>서비스 만료예정</p>
                            <p className="mt-1 text-red">&#40;D-20&#41;</p>
                          </td>
                          <td>
                            <button type="button">
                              <span className="underline">NNNNN</span>
                            </button>
                          </td>
                          <td>구획3-88-0&#40;#1111&#41;</td>
                          <td>일반제휴</td>
                          <td>이동훈</td>
                          <td>0</td>
                          <td>0</td>
                          <td>
                            <button type="button">
                              <span className="underline">0</span>
                            </button>
                          </td>
                          <td>
                            <div className="flex flex-wrap justify-center gap-2">
                              <Button type="black" size="s">
                                조회
                              </Button>
                              <Button type="gray" size="s">
                                업데이트
                              </Button>
                              <Button type="outline" size="s">
                                삭제
                              </Button>
                            </div>
                          </td>
                          <td>김파프&#40;admin&#41;</td>
                          <td>2024-10-14 14:38</td>
                          <td>김파프&#40;admin&#41;</td>
                          <td>2024-10-14 14:38</td>
                        </tr>
                        <tr>
                          <td>
                            <Checkbox />
                          </td>
                          <td>정보제공</td>
                          <td>
                            <button type="button">
                              <span className="underline">NNNNN</span>
                            </button>
                          </td>
                          <td>강남 스마트공유 주차장1-01</td>
                          <td>일반제휴</td>
                          <td>김길동</td>
                          <td>100</td>
                          <td>100</td>
                          <td>
                            <button type="button">
                              <span className="underline">0</span>
                            </button>
                          </td>
                          <td>
                            <div className="flex flex-wrap justify-center gap-2">
                              <Button type="outline" size="s">
                                삭제
                              </Button>
                            </div>
                          </td>
                          <td>김파프&#40;admin&#41;</td>
                          <td>2024-10-14 14:38</td>
                          <td>김파프&#40;admin&#41;</td>
                          <td>2024-10-14 14:38</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>배정자관리</TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </DefaultLayout>
  );
}
