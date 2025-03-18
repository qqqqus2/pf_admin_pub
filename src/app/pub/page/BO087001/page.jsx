import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Checkbox from "@pub/components/Form/Check";
import Toggle from "@pub/components/Form/Toggle";
import Flag from "@pub/components/Flag";
import Paging from "@pub/components/Grid/Paging";
import Radio from "@pub/components/Form/Radio";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";

export default function BO087001() {
  return (
    <DefaultLayout>
      <Topbar
        title="유의사항관리"
        path={[
          { text: "홈", url: "/" },
          { text: "관리자설정관리", url: "/" },
          { text: "유의사항관리", url: "/" },
        ]}
      />
      <div className="box-cont">
        {/* search box */}
        <div className="search-box">
          <ul>
            <li className="col-span-2">
              <p>구분</p>
              <div className="flex items-center gap-3">
                <Checkbox label="전체" defaultChecked />
                <Checkbox label="주차장상세" />
                <Checkbox label="주차권" />
                <Checkbox label="결제" />
                <Checkbox label="이벤트" />
                <Checkbox label="기타" />
              </div>
            </li>
            <li className="col-span-2">
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
          <div className="flex items-center">
            <Button type="outline" size="m">
              선택삭제
            </Button>
            <div className="flex justify-end items-center gap-2 ml-auto">
              <Button type="blue" size="m">
                저장
              </Button>
              <Button type="black" size="m">
                등록
              </Button>
            </div>
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
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">
                    <Checkbox />
                  </th>
                  <th scope="col">번호</th>
                  <th scope="col">사용여부</th>
                  <th scope="col">구분</th>
                  <th scope="col">주차장명</th>
                  <th scope="col">제목</th>
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
                  <td>1</td>
                  <td>
                    <Toggle />
                  </td>
                  <td>주차장상세</td>
                  <td>주차장명</td>
                  <td>
                    <button type="button">
                      <p className="underline">제목이 노출됩니다</p>
                    </button>
                  </td>
                  <td>김파프&#40;admin&#41;</td>
                  <td>2024-10-14 14:38</td>
                  <td>김파프&#40;admin&#41;</td>
                  <td>2024-10-14 14:38</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-bottom">
            <Paging />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
