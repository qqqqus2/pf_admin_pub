import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Checkbox from "@pub/components/Form/Check";
import Paging from "@pub/components/Grid/Paging";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";
import IcInfo from "@/assets/icons/ico_circle_info.svg";
import IcExcel from "@/assets/icons/ico_excel.svg";

export default function BO088001() {
  return (
    <DefaultLayout>
      <Topbar
        title="관리자계정관리"
        path={[
          { text: "홈", url: "/" },
          { text: "관리자설정관리", url: "/" },
          { text: "관리자계정관리", url: "/" },
        ]}
      />
      <div className="box-cont">
        {/* search box */}
        <div className="search-box">
          <ul>
            <li>
              <p>소속부서</p>
              <SelectBasic placeholder="전체" size="m" />
            </li>
            <li>
              <p className="inline-flex items-center gap-2">
                계정상태
                <span
                  data-tooltip-id="tooltip"
                  data-tooltip-html="- 활성: 계정이 정상적으로 사용 중인 상태<br />
                - 정지: 계정이 일시적으로 사용 중지된 상태<br />
                - 만료: 담당자가 바뀌거나 이직 시 계정을 만료시키는 상태"
                >
                  <IcInfo />
                </span>
              </p>
              <div className="flex items-center gap-3">
                <Checkbox label="전체" defaultChecked />
                <Checkbox label="활성" />
                <Checkbox label="정지" />
                <Checkbox label="만료" />
              </div>
            </li>
            <li className="col-span-2">
              <p>검색어</p>
              <div className="flex items-center gap-2">
                <SelectBasic placeholder="전체" size="m" />
                <Input placeholder="입력정보" className="grow" />
              </div>
            </li>
            <li className="col-span-2">
              <p>등록일자</p>
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
          <div className="flex items-center min-h-[2.5rem] mt-4">
            <p className="h4">
              총 <span className="text-green">231</span>건
            </p>
            <SelectBasic
              placeholder="30개씩 보기"
              className="w-[9.375rem] ml-auto"
            />
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
                  <th scope="col">계정상태</th>
                  <th scope="col">아이디</th>
                  <th scope="col">이름</th>
                  <th scope="col">휴대폰번호</th>
                  <th scope="col">접속IP</th>
                  <th scope="col">소속부서</th>
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
                  <td>활성</td>
                  <td>
                    <button type="button">
                      <span className="underline">Parking00</span>
                    </button>
                  </td>
                  <td>김길동</td>
                  <td>010-1234-5678</td>
                  <td>설정</td>
                  <td>사업실</td>
                  <td>-</td>
                  <td>-</td>
                  <td>2024-10-14</td>
                  <td>김파프&#40;admin&#41;</td>
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
