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

export default function BO053001() {
  return (
    <DefaultLayout>
      <Topbar
        title="포인트상품권관리"
        path={[
          { text: "홈", url: "/" },
          { text: "포인트관리", url: "/" },
          { text: "포인트상품권", url: "/" },
        ]}
      />
      <div className="box-cont">
        {/* search box */}
        <div className="search-box">
          <ul>
            <li>
              <p>판매처</p>
              <div className="flex items-center gap-3">
                <Checkbox label="전체" defaultChecked />
                <Checkbox label="스마트스토어" />
                <Checkbox label="카카오쇼핑" />
              </div>
            </li>
            <li>
              <p>사용여부</p>
              <div className="flex items-center gap-3">
                <Radio name="t1" label="전체" defaultChecked />
                <Radio name="t1" label="사용(Y)" />
                <Radio name="t1" label="사용안함(N)" />
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
          <div className="flex items-center">
            <Button type="black" size="m" className="ml-auto">
              등록
            </Button>
          </div>
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
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">번호</th>
                  <th scope="col">상품권코드</th>
                  <th scope="col">사용여부</th>
                  <th scope="col">상품권명</th>
                  <th scope="col">판매처</th>
                  <th scope="col">판매기간</th>
                  <th scope="col">난수번호</th>
                  <th scope="col">생성코드수</th>
                  <th scope="col">등록코드수</th>
                  <th scope="col">등록일시</th>
                  <th scope="col">등록자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10</td>
                  <td>
                    <button type="button">
                      <span className="underline">NNNNNN</span>
                    </button>
                  </td>
                  <td>사용</td>
                  <td>주차상품권 1만원권</td>
                  <td>스마트스토어</td>
                  <td>yyyy-mm-dd 00:00 ~ yyyy-mm-dd 00:00</td>
                  <td>
                    <Button type="outline" size="s">
                      난수번호생성
                    </Button>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td>yyyy-mm-dd 00:00</td>
                  <td>김파프&#40;adminid&#41;</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>
                    <button type="button">
                      <span className="underline">NNNNNN</span>
                    </button>
                  </td>
                  <td>사용</td>
                  <td>주차상품권 1만원권</td>
                  <td>스마트스토어</td>
                  <td>yyyy-mm-dd 00:00 ~ yyyy-mm-dd 00:00</td>
                  <td>
                    <Button type="outline" size="s">
                      <IcExcel />
                      엑셀다운로드
                    </Button>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td>yyyy-mm-dd 00:00</td>
                  <td>김파프&#40;adminid&#41;</td>
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
    </DefaultLayout>
  );
}
