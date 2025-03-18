import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Toggle from "@pub/components/Form/Toggle";
import Paging from "@pub/components/Grid/Paging";
import Radio from "@pub/components/Form/Radio";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import FormDateRange from "@pub/components/Form/DateRange";

export default function BO084001() {
  return (
    <DefaultLayout>
      <Topbar
        title="APP버전관리"
        tip={`<ul>
          <li>APP마켓에 배포되는 버전을 관리하며 각 스토어와 연동되지 않으며 관리용으로 사용합니다.</li>
          <li>최신버전이 Y 일 경우 이전버전은 N으로 모두 변경됩니다.</li>
          <li>OS별 Y 는 하나씩 허용 가능합니다. 최신버전이 업데이트 됩니다.</li>
          </ul>`}
        path={[
          { text: "홈", url: "/" },
          { text: "관리자설정관리", url: "/" },
          { text: "APP버전관리", url: "/" },
        ]}
      />
      <div className="box-cont">
        {/* search box */}
        <div className="search-box">
          <ul>
            <li className="col-span-2">
              <p>OS 구분</p>
              <div className="flex items-center gap-3">
                <Radio name="t1" label="전체" defaultChecked />
                <Radio name="t1" label="Android" />
                <Radio name="t1" label="IOS" />
                <Input placeholder="버전정보를 입력하세요" size="m" />
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
          <div className="flex justify-end items-center gap-2">
            <Button type="blue" size="m">
              저장
            </Button>
            <Button type="black" size="m">
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
                  <th scope="col">사용여부</th>
                  <th scope="col">OS</th>
                  <th scope="col">버전정보</th>
                  <th scope="col">업데이트 내용</th>
                  <th scope="col">배포일시</th>
                  <th scope="col">등록자</th>
                  <th scope="col">등록일시</th>
                  <th scope="col">최종수정자</th>
                  <th scope="col">최종수정일시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <Toggle />
                  </td>
                  <td>Android</td>
                  <td>1.0.3</td>
                  <td>
                    <button
                      type="button"
                      data-tooltip-id="tooltip"
                      data-tooltip-place="bottom"
                      data-tooltip-content="업데이트 내용 노출 영역, 업데이트 내용은 콤마로 구분하여 노출"
                    >
                      <p className="underline line-clamp-1">
                        업데이트 내용 노출 영역, 업데이트 내용은 콤마로 구분하여
                        노출
                      </p>
                    </button>
                  </td>
                  <td>2024-10-14 14:38</td>
                  <td>김파프&#40;admin&#41;</td>
                  <td>2024-10-14 14:38</td>
                  <td>-</td>
                  <td>-</td>
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
