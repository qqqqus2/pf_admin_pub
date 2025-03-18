import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import Paging from "@pub/components/Grid/Paging";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";

export default function BO048001() {
  return (
    <DefaultLayout>
      <Topbar
        title="이용안내관리"
        path={[
          { text: "홈", url: "/" },
          { text: "전시컨텐츠관리", url: "/" },
          { text: "이용안내관리", url: "/" },
        ]}
      />
      <div className="box-cont">
        <div className="flex justify-end items-center">
          <Button type="green" size="m">
            등록
          </Button>
        </div>
        <hr className="border-[#E2E8F0]" />
        <div className="grow flex flex-col">
          <div className="flex itesm-center gap-3">
            <SelectBasic className="w-[9.375rem]" />
            <SelectBasic className="w-[9.375rem]" />
            <Input placeholder="검색어를 입력하세요." />
            <Button type="gray" size="m">
              검색
            </Button>
          </div>
          <div className="table-grid mt-4">
            <table>
              <colgroup>
                <col width="5%" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">노출순서</th>
                  <th scope="col">유형</th>
                  <th scope="col">제목</th>
                  <th scope="col">등록자</th>
                  <th scope="col">등록일시</th>
                  <th scope="col">최종수정자</th>
                  <th scope="col">최종수정일시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>기본</td>
                  <td>
                    <button type="button">
                      <span className="text-green underline">
                        제목이 노출됩니다.
                      </span>
                    </button>
                  </td>
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
