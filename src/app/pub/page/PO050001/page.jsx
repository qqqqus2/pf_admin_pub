import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import Checkbox from "@pub/components/Form/Check";
import Radio from "@pub/components/Form/Radio";
import Input from "@pub/components/Form/Input";
import FormDate from "@pub/components/Form/Date";
import SelectBasic from "@pub/components/Form/Select";
import InputSearch from "@pub/components/Form/InputSearch";

export default function PO050001() {
  return (
    <DefaultLayout>
      <Topbar
        title="수익정산관리"
        path={[
          { text: "홈", url: "/" },
          { text: "수익정산관리", url: "/" },
        ]}
      />
      <div className="box-cont">
        {/* search box */}
        <div className="search-box">
          <ul>
            <li>
              <p>정산월</p>
              <FormDate size="m" selected={new Date()} dateFormat="yyyy-MM" />
            </li>
            <li>
              <p>파트너명</p>
              <InputSearch size="m" placeholder="파트너명" />
            </li>
            <li>
              <p>배정자명</p>
              <InputSearch size="m" placeholder="배정자명" />
            </li>
            <li>
              <p>주차장명</p>
              <InputSearch size="m" placeholder="주차장명" />
            </li>
            <li>
              <p>결제상태</p>
              <div className="flex items-center gap-3">
                <Checkbox label="전체" defaultChecked />
                <Checkbox label="결제완료" />
                <Checkbox label="결제취소" />
              </div>
            </li>
            <li>
              <p>정산확정여부</p>
              <div className="flex items-center gap-3">
                <Radio name="f1" label="전체" defaultChecked />
                <Radio name="f1" label="정산확정" />
                <Radio name="f1" label="정산대기" />
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
          <div className="flex items-center min-h-[2.5rem]">
            <p className="h4">정산내역</p>
          </div>
          <div className="table-basic mt-2 bordered">
            <table>
              <thead>
                <tr>
                  <th scope="colgroup" colSpan={2} rowSpan={2}>
                    구분
                  </th>
                  <th scope="colgroup" colSpan={3}>
                    정산대기금액
                  </th>
                  <th scope="colgroup" colSpan={3}>
                    정산확정금액
                  </th>
                </tr>
                <tr>
                  <th scope="col">파킹프렌즈</th>
                  <th scope="col">파트너</th>
                  <th scope="col">배정자</th>
                  <th scope="col">파킹프렌즈</th>
                  <th scope="col">파트너</th>
                  <th scope="col">배정자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">결제금액&#40;+&#41;</th>
                  <td>결제금액</td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row" rowSpan={3}>
                    공제금액&#40;-&#41;
                  </th>
                  <td>PG수수료</td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                </tr>
                <tr>
                  <td>프로모션비용</td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                </tr>
                <tr>
                  <td>유지관리비용</td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                  <td>
                    <p className="text-right">000 원</p>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row" colSpan={2}>
                    최종 정산 금액 &#40;판매금액 - 공제금액&#41;
                  </th>
                  <td>
                    <p className="font-bold text-right">000 원</p>
                  </td>
                  <td>
                    <p className="font-bold text-right">000 원</p>
                  </td>
                  <td>
                    <p className="font-bold text-right">000 원</p>
                  </td>
                  <td>
                    <p className="font-bold text-right">000 원</p>
                  </td>
                  <td>
                    <p className="font-bold text-right">000 원</p>
                  </td>
                  <td>
                    <p className="font-bold text-right">000 원</p>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
