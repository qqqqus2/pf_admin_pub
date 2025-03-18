import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import Radio from "@pub/components/Form/Radio";
import Checkbox from "@pub/components/Form/Check";
import Input from "@pub/components/Form/Input";
import Paging from "@pub/components/Grid/Paging";
import SelectBasic from "@pub/components/Form/Select";
import FormDate from "@pub/components/Form/Date";
import IcExcel from "@/assets/icons/ico_excel.svg";

export default function BO071004() {
  return (
    <DefaultLayout>
      <Topbar
        title="주차장 결제관리"
        path={[
          { text: "홈", url: "/" },
          { text: "정산관리", url: "/" },
          { text: "주차장 결제관리", url: "/" },
        ]}
      />
      <div className="box-cont">
        {/* search box */}
        <div className="search-box">
          <ul>
            <li>
              <p>결제일</p>
              <FormDate size="m" selected={new Date()} />
            </li>
            <li>
              <p>결제건수유무</p>
              <div className="flex items-center gap-3">
                <Radio name="t1" label="전체" defaultChecked />
                <Radio name="t1" label="Y" />
                <Radio name="t1" label="N" />
              </div>
            </li>
            <li className="col-span-2">
              <p>주차장상태</p>
              <div className="flex items-center gap-3">
                <Checkbox label="전체" defaultChecked />
                <Checkbox label="정보등록중" />
                <Checkbox label="등록완료" />
                <Checkbox label="서비스중" />
                <Checkbox label="서비스만료예정" />
                <Checkbox label="정보제공" />
              </div>
            </li>
            <li className="col-span-2">
              <p>주차장종류</p>
              <div className="flex items-center gap-3">
                <Checkbox label="전체" defaultChecked />
                <Checkbox label="공유&#40;구간제&#41;" />
                <Checkbox label="공유&#40;구획제&#41;" />
                <Checkbox label="공유&#40;노외주차장&#41;" />
                <Checkbox label="노상공영" />
                <Checkbox label="노외공영" />
                <Checkbox label="일반제휴" />
              </div>
            </li>
            <li className="col-span-2">
              <p>검색어</p>
              <div className="flex items-center gap-2">
                <SelectBasic placeholder="전체" size="m" />
                <Input placeholder="검색어를 입력하세요" size="l" />
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

        <div className="grow flex flex-col">
          <p className="h4">결제현황</p>
          <div className="table-basic mt-2">
            <table>
              <colgroup>
                <col />
                <col />
                <col width="10%" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">결제건수</th>
                  <th scope="col">수입금액</th>
                  <th scope="col">매출액&#40;공급가액&#41;</th>
                  <th scope="col">부가세</th>
                  <th scope="col">유지관리비</th>
                  <th scope="col">PG수수료</th>
                  <th scope="col">수익금</th>
                  <th scope="col">파트너수익</th>
                  <th scope="col">파트너지급액</th>
                  <th scope="col">배정자수익</th>
                  <th scope="col">배정자초과금</th>
                  <th scope="col">배정자지급액</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="text-right">3,000</p>
                  </td>
                  <td>
                    <p className="text-green text-right">1,000,000</p>
                  </td>
                  <td>
                    <p className="text-right">961,000</p>
                  </td>
                  <td>
                    <p className="text-right">20,000</p>
                  </td>
                  <td>
                    <p className="text-right">1,000</p>
                  </td>
                  <td>
                    <p className="text-right">1,000</p>
                  </td>
                  <td>
                    <p className="text-right">1,000</p>
                  </td>
                  <td>
                    <p className="text-right">1,000</p>
                  </td>
                  <td>
                    <p className="text-right">1,000</p>
                  </td>
                  <td>
                    <p className="text-right">1,000</p>
                  </td>
                  <td>
                    <p className="text-right">1,000</p>
                  </td>
                  <td>
                    <p className="text-right">10,000</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-center min-h-[2.5rem] mt-6">
            <p className="h4">
              총 <span className="text-green">231</span>건
            </p>
            <SelectBasic
              placeholder="50개씩 보기"
              className="w-[9.375rem] ml-auto"
            />
          </div>
          <div className="table-hscroll mt-4">
            <div className="table-grid row-10">
              <table>
                <colgroup>
                  <col width="60px" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">
                      <Checkbox />
                    </th>
                    <th scope="col">파트너명</th>
                    <th scope="col">배정자명</th>
                    <th scope="col">배정자 차량번호</th>
                    <th scope="col">배정자 휴대폰번호</th>
                    <th scope="col">배정시작일</th>
                    <th scope="col">배정종료일</th>
                    <th scope="col">주차장명</th>
                    <th scope="col" className="">
                      주차장상태
                    </th>
                    <th scope="col" className="">
                      주차장종류
                    </th>
                    <th scope="col" className="">
                      결제건수
                    </th>
                    <th scope="col">수입금액</th>
                    <th scope="col">PG수수료</th>
                    <th scope="col">유지관리비</th>
                    <th scope="col">수익</th>
                    <th scope="col">파트너 수익</th>
                    <th scope="col">소득세액</th>
                    <th scope="col">파트너 지급액</th>
                    <th scope="col">배정자 초과금</th>
                    <th scope="col">배정자 실 입금금액</th>
                    <th scope="col">배정자 한도금액</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Checkbox />
                    </td>
                    <td>중구청</td>
                    <td>김길동</td>
                    <td>29호0900</td>
                    <td>01012343456</td>
                    <td>2024-11-02</td>
                    <td>2024-11-02</td>
                    <td>
                      <button type="button">
                        <span className="underline">
                          중구청 구획3-88-0&#40;#1111&#41;
                        </span>
                      </button>
                    </td>
                    <td>등록완료</td>
                    <td>공유&#40;구획제&#41;</td>
                    <td>110</td>

                    <td>1,100,000</td>
                    <td>30,000</td>
                    <td>30,000</td>
                    <td>1,020,000</td>
                    <td>400,000</td>
                    <td>-</td>
                    <td>400,000</td>
                    <td>30,000</td>
                    <td>30,000</td>
                    <td>30,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
    </DefaultLayout>
  );
}
