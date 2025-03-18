import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Radio from "@pub/components/Form/Radio";
import Checkbox from "@pub/components/Form/Check";
import Input from "@pub/components/Form/Input";
import Paging from "@pub/components/Grid/Paging";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";
import IcExcel from "@/assets/icons/ico_excel.svg";

export default function BO033004() {
  return (
    <DefaultLayout>
      <Topbar
        title="공유현황관리"
        path={[
          { text: "홈", url: "/" },
          { text: "배정자관리", url: "/" },
          { text: "공유현황관리", url: "/" },
        ]}
      />
      <div className="box-cont">
        {/* search box */}
        <div className="search-box">
          <ul>
            <li>
              <p>파트너</p>
              <SelectBasic placeholder="전체" size="m" />
            </li>
            <li>
              <p>회원여부</p>
              <div className="flex items-center gap-3">
                <Radio name="t1" label="전체" defaultChecked />
                <Radio name="t1" label="회원(Y)" />
                <Radio name="t1" label="비회원(N)" />
              </div>
            </li>
            <li className="col-span-2">
              <p>검색어</p>
              <div className="flex items-center gap-2">
                <SelectBasic placeholder="전체" size="m" />
                <Input placeholder="검색어를 입력하세요" size="l" />
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

        <div className="grow flex flex-col">
          <div className="flex items-center min-h-[2.5rem] mt-4">
            <p className="h4">
              총 <span className="text-green">231</span>건
            </p>
            <div className="grid grid-cols-[9.375rem_9.375rem] gap-2 ml-auto">
              <SelectBasic placeholder="최근 등록순" />
              <SelectBasic placeholder="50개씩 보기" />
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
                  <th scope="col">파트너명</th>
                  <th scope="col">배정자번호</th>
                  <th scope="col">배정자명</th>
                  <th scope="col">회원여부</th>
                  <th scope="col">주차장명</th>
                  <th scope="col">차량번호</th>
                  <th scope="col">전화번호</th>
                  <th scope="col">배정시작일</th>
                  <th scope="col">배정종료일</th>
                  <th scope="col">누적공유시간</th>
                  <th scope="col">예약시간</th>
                  <th scope="col">주차금액</th>
                  <th scope="col">한도금액</th>
                  <th scope="col">실 정산금액</th>
                  <th scope="col">가점</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>10</td>
                  <td>강남구청</td>
                  <td>
                    <button type="button">
                      <span className="underline">NNNNN</span>
                    </button>
                  </td>
                  <td>
                    <button type="button">
                      <span className="underline">김길동</span>
                    </button>
                  </td>
                  <td>Y</td>
                  <td>101-101</td>
                  <td>22도9382</td>
                  <td>0102362514</td>
                  <td>yyyy-mm-dd 00:00</td>
                  <td>yyyy-mm-dd 00:00</td>
                  <td>00시간00분</td>
                  <td>00시간00분</td>
                  <td>120,000원</td>
                  <td>20,000원</td>
                  <td>20,000원</td>
                  <td>10</td>
                </tr>
              </tbody>
              <tfoot className="bg-cell-green">
                <tr>
                  <td colSpan={2}>합계</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>00시간00분</td>
                  <td>00시간00분</td>
                  <td>1,200,000원</td>
                  <td>1,200,000원</td>
                  <td>500,000원</td>
                  <td></td>
                </tr>
              </tfoot>
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
    </DefaultLayout>
  );
}
