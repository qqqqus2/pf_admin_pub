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

export default function BO051001() {
  return (
    <DefaultLayout>
      <Topbar
        title="쿠폰관리"
        path={[
          { text: "홈", url: "/" },
          { text: "포인트관리", url: "/" },
          { text: "쿠폰관리", url: "/" },
        ]}
      />
      <div className="box-cont">
        {/* search box */}
        <div className="search-box">
          <ul>
            <li className="col-span-2">
              <p>쿠폰유형</p>
              <div className="flex items-center gap-3">
                <Checkbox label="전체" defaultChecked />
                <Checkbox label="온라인쿠폰" />
                <Checkbox label="웰컴쿠폰" />
                <Checkbox label="첫구매쿠폰" />
                <Checkbox label="오프라인쿠폰" />
              </div>
            </li>
            <li>
              <p>상태</p>
              <div className="flex items-center gap-3">
                <Checkbox label="전체" defaultChecked />
                <Checkbox label="진행중" />
                <Checkbox label="대기" />
                <Checkbox label="종료" />
                <Checkbox label="중지" />
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
              <Input placeholder="검색어를 입력하세요" size="l" />
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
            <SelectBasic
              placeholder="50개씩 보기"
              className="w-[9.375rem] ml-auto"
            />
          </div>
          <div className="table-grid mt-4">
            <table>
              <colgroup>
                <col width="60px" />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col width="12%" />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">번호</th>
                  <th scope="col">쿠폰번호</th>
                  <th scope="col">사용여부</th>
                  <th scope="col">진행상태</th>
                  <th scope="col">쿠폰명</th>
                  <th scope="col">쿠폰유형</th>
                  <th scope="col">할인율/금액</th>
                  <th scope="col">유효기간</th>
                  <th scope="col">발급시작일</th>
                  <th scope="col">발급종료일</th>
                  <th scope="col">발급현황&#40;발급/사용&#41;</th>
                  <th scope="col">작성자</th>
                  <th scope="col">작성일시</th>
                  <th scope="col">최종수정자</th>
                  <th scope="col">최종수정일시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10</td>
                  <td>NNNNNN</td>
                  <td>사용</td>
                  <td>진행중</td>
                  <td>
                    <button type="button">
                      <span className="underline">쿠폰명이 노출됩니다</span>
                    </button>
                  </td>
                  <td>등급별쿠폰</td>
                  <td>5%</td>
                  <td>yyyy-mm-dd 00:00 ~ yyyy-mm-dd 00:00</td>
                  <td>yyyy-mm-dd 00:00</td>
                  <td>yyyy-mm-dd 00:00</td>
                  <td>
                    <div className="flex flex-wrap justify-center items-center gap-2">
                      <p>
                        200매/<span className="text-red">30</span>매
                      </p>
                      <div className="flex items-center gap-2">
                        <Button type="black" size="s">
                          현황조회
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td>김파프&#40;adminid&#41;</td>
                  <td>yyyy-mm-dd 00:00</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>NNNNNN</td>
                  <td>사용</td>
                  <td>진행중</td>
                  <td>
                    <button type="button">
                      <span className="underline">쿠폰명이 노출됩니다</span>
                    </button>
                  </td>
                  <td>등급별쿠폰</td>
                  <td>5%</td>
                  <td>yyyy-mm-dd 00:00 ~ yyyy-mm-dd 00:00</td>
                  <td>yyyy-mm-dd 00:00</td>
                  <td>yyyy-mm-dd 00:00</td>
                  <td>
                    <div className="flex flex-wrap justify-center items-center gap-2">
                      <p>
                        200매/<span className="text-red">30</span>매
                      </p>
                      <div className="flex items-center gap-2">
                        <Button type="black" size="s">
                          현황조회
                        </Button>
                        <Button type="outline" size="s">
                          QR코드
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td>김파프&#40;adminid&#41;</td>
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
              엑셀다운로드
            </Button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
