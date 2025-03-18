import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Paging from "@pub/components/Grid/Paging";
import Input from "@pub/components/Form/Input";
import Checkbox from "@pub/components/Form/Check";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";
import IcExcel from "@/assets/icons/ico_excel.svg";

export default function BO094001() {
  return (
    <DefaultLayout>
      <Topbar
        title="다운로드 이력관리"
        path={[
          { text: "홈", url: "/" },
          { text: "이력관리", url: "/" },
          { text: "다운로드 이력관리", url: "/" },
        ]}
      />
      <div className="box-cont">
        {/* search box */}
        <div className="search-box">
          <ul>
            <li className="col-span-2">
              <p>구분</p>
              <div className="flex items-center gap-2">
                <SelectBasic placeholder="전체" size="m" />
                <SelectBasic placeholder="전체" size="m" disabled />
              </div>
            </li>
            <li className="col-span-2">
              <p>메뉴</p>
              <div className="flex items-center gap-2">
                <SelectBasic placeholder="전체" size="m" />
                <SelectBasic placeholder="전체" size="m" disabled />
                <SelectBasic placeholder="전체" size="m" disabled />
                <SelectBasic placeholder="전체" size="m" disabled />
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
              <p>다운로드일</p>
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
        {/* //search box */}

        <div className="grow flex flex-col">
          <div className="flex items-center min-h-[2.5rem]">
            <p className="h4">
              총 <span className="text-green">231</span>건
            </p>
            <div className="grid grid-cols-[9.375rem_9.375rem] gap-2 ml-auto">
              <SelectBasic placeholder="최근 다운로드순" />
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
                  <th scope="col">
                    <Checkbox />
                  </th>
                  <th scope="col">구분</th>
                  <th scope="col">아이디</th>
                  <th scope="col">이름</th>
                  <th scope="col">소속회사/소속부서</th>
                  <th scope="col">메뉴</th>
                  <th scope="col">다운로드파일</th>
                  <th scope="col">다운로드일시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>관리자</td>
                  <td>
                    <button type="button">
                      <span className="underline">Parking00</span>
                    </button>
                  </td>
                  <td>김길동</td>
                  <td>사업실</td>
                  <td>BO &gt; 파트너시설관리 &gt; 시설관리 &gt; AIoT센서 </td>
                  <td>
                    <a
                      href="/images/logo_pf.png"
                      download
                      className="inline-flex"
                    >
                      <IcExcel />
                    </a>
                  </td>
                  <td>2024-10-14 14:38</td>
                </tr>
                <tr>
                  <td>
                    <Checkbox />
                  </td>
                  <td>관리자</td>
                  <td>
                    <button type="button">
                      <span className="underline">Parking00</span>
                    </button>
                  </td>
                  <td>김길동</td>
                  <td>사업실</td>
                  <td>BO &gt; 파트너시설관리 &gt; 시설관리 &gt; AIoT센서 </td>
                  <td>
                    <a
                      href="/images/logo_pf.png"
                      download
                      className="file-down"
                    >
                      logo_pf.png
                    </a>
                  </td>
                  <td>2024-10-14 14:38</td>
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
