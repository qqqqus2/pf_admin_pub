import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import Checkbox from "@pub/components/Form/Check";
import Input from "@pub/components/Form/Input";
import Paging from "@pub/components/Grid/Paging";
import SelectBasic from "@pub/components/Form/Select";
import Flag from "@pub/components/Flag";
import FormDate from "@pub/components/Form/Date";
import IcExcel from "@/assets/icons/ico_excel.svg";
import IcFile from "@/assets/icons/ico_file.svg";

export default function BO072001() {
  return (
    <DefaultLayout>
      <Topbar
        title="정산관리"
        path={[
          { text: "홈", url: "/" },
          { text: "정산관리", url: "/" },
          { text: "정산관리", url: "/" },
        ]}
      />
      <div className="box-cont">
        {/* search box */}
        <div className="search-box">
          <ul>
            <li>
              <p>결제월</p>
              <FormDate size="m" selected={new Date()} dateFormat="yyyy-MM" />
            </li>
            <li>
              <p>상태</p>
              <div className="flex items-center gap-3">
                <Checkbox label="전체" defaultChecked />
                <Checkbox label="확인요청" />
                <Checkbox label="반려" />
                <Checkbox label="승인" />
                <Checkbox label="정산확정" />
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

        <div>
          <p className="h4">정산요약</p>
          <div className="table-basic mt-2">
            <table>
              <colgroup>
                <col />
                <col />
                <col width="10%" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">상태</th>
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
                  <td>확인요청</td>
                  <td>
                    <p className="font-bold text-right">1,000,000</p>
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
              <tfoot className="bg-cell-green">
                <tr>
                  <td>합계</td>
                  <td>
                    <p className="font-bold text-right">1,000,000</p>
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
              </tfoot>
            </table>
          </div>
        </div>
        <div className="grow flex flex-col">
          <div className="flex items-center">
            <Button type="outline" size="m">
              대사 전 되돌리기
            </Button>
            <Button type="black" size="m" className="ml-auto">
              정산확정
            </Button>
          </div>
          <div className="flex items-center min-h-[2.5rem] mt-4">
            <p className="h4">
              총 <span className="text-green">231</span>건
            </p>
            <div className="flex items-center gap-2 ml-auto">
              <Button type="outline" size="m">
                <IcFile />
                정산보고서
              </Button>
              <SelectBasic
                placeholder="50개씩 보기"
                className="w-[9.375rem] "
              />
            </div>
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
                    <th scope="col">상태</th>
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
                    <td>
                      <Flag type="gray" label="확인요청" />
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
                  <tr>
                    <td>
                      <Checkbox />
                    </td>
                    <td>
                      <Flag type="red" label="반려" />
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
                  <tr>
                    <td>
                      <Checkbox />
                    </td>
                    <td>
                      <Flag type="blue" label="승인" />
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
                  <tr>
                    <td>
                      <Checkbox />
                    </td>
                    <td>
                      <Flag type="green" label="정산확정" />
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
