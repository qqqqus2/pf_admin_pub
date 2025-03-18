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

export default function BO093001() {
  return (
    <DefaultLayout>
      <Topbar
        title="약관이력관리"
        path={[
          { text: "홈", url: "/" },
          { text: "이력관리", url: "/" },
          { text: "약관이력관리", url: "/" },
        ]}
      />
      <div className="box-cont">
        {/* search box */}
        <div className="search-box">
          <ul>
            <li className="col-span-2">
              <p>구분</p>
              <SelectBasic placeholder="전체" size="m" />
            </li>
            <li>
              <p>대상</p>
              <div className="flex items-center gap-3">
                <Checkbox label="전체" defaultChecked />
                <Checkbox label="회원" />
                <Checkbox label="파트너" />
              </div>
            </li>
            <li>
              <p>게시상태</p>
              <div className="flex items-center gap-3">
                <Checkbox label="전체" defaultChecked />
                <Checkbox label="게시중" />
                <Checkbox label="종료" />
                <Checkbox label="예정" />
              </div>
            </li>
            <li className="col-span-2">
              <p>검색어</p>
              <Input placeholder="검색어를 입력하세요." size="l" />
            </li>
            <li className="col-span-2">
              <p>게시일</p>
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
                  <th scope="col">NO</th>
                  <th scope="col">버전</th>
                  <th scope="col">구분</th>
                  <th scope="col">대상</th>
                  <th scope="col">제목</th>
                  <th scope="col">게시상태</th>
                  <th scope="col">등록자</th>
                  <th scope="col">등록일시</th>
                  <th scope="col">최종수정자</th>
                  <th scope="col">최종수정일시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>V0.2</td>
                  <td>개인정보처리방침</td>
                  <td>회원</td>
                  <td>
                    <button type="button">
                      <span className="underline text-green line-clamp-1">
                        약관관리 제목이 보입니다
                      </span>
                    </button>
                  </td>
                  <td>게시중</td>
                  <td>김파프&#40;adminid&#41;</td>
                  <td>2024-10-14 14:38</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>V0.2</td>
                  <td>이용약관</td>
                  <td>파트너</td>
                  <td>
                    <button type="button">
                      <span className="underline text-green line-clamp-1">
                        약관관리 제목이 보입니다 약관관리 제목이 보입니다
                      </span>
                    </button>
                  </td>
                  <td>예정</td>
                  <td>김파프&#40;adminid&#41;</td>
                  <td>2024-10-14 14:38</td>
                  <td>김파프&#40;adminid&#41;</td>
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
