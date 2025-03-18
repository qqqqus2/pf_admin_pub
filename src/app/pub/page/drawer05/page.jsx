"use client";

import { useState } from "react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Button from "@pub/components/Button";
import Drawer from "@pub/components/Drawer";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import Checkbox from "@pub/components/Form/Check";
import Radio from "@pub/components/Form/Radio";
import Paging from "@pub/components/Grid/Paging";
import FormDateRange from "@pub/components/Form/DateRange";
import Text from "@pub/components/Form/Text";
import IcExcel from "@/assets/icons/ico_excel.svg";

export default function Drawer05() {
  const [open51004, setOpen51004] = useState(false);
  const [open53003, setOpen53003] = useState(false);

  return (
    <>
      <DefaultLayout>
        <div className="relative grow py-[2.5rem]">
          <h1 className="h1">Guide_Drawer</h1>
          <dl className="flex flex-col gap-8 max-w-[70rem] mt-9">
            <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
              <dt className="h4">Drawer</dt>
              <dd className="flex flex-wrap gap-4 w-[80%]">
                <Button
                  type="green"
                  size="m"
                  onClick={() => setOpen51004(true)}
                >
                  BO051004_쿠폰발급현황
                </Button>
                <Button
                  type="green"
                  size="m"
                  onClick={() => setOpen53003(true)}
                >
                  BO053003_상품권상세
                </Button>
              </dd>
            </div>
          </dl>
        </div>
      </DefaultLayout>

      {/* BO051004_쿠폰포인트관리>쿠폰관리>상세/조회 */}
      <Drawer
        id="drawer-51004"
        open={open51004}
        handleClose={setOpen51004}
        title="쿠폰발급현황"
        btns={[{ type: "black", label: "확인" }]}
      >
        <div className="table-basic">
          <table>
            <colgroup>
              <col width="152px" />
              <col />
              <col width="152px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">쿠폰번호</th>
                <td>NNNNNN</td>
                <th scope="row">다운로드수/사용수량</th>
                <td>
                  <p>
                    200매/<span className="text-red">30</span>매
                  </p>
                </td>
              </tr>
              <tr>
                <th scope="row">사용여부</th>
                <td colSpan={3}>
                  <div className="flex items-center gap-3">
                    <Checkbox label="전체" defaultChecked />
                    <Checkbox label="사용완료" />
                    <Checkbox label="미사용" />
                    <Checkbox label="기간만료" />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">검색어</th>
                <td colSpan={3}>
                  <div className="flex items-center gap-2">
                    <SelectBasic placeholder="전체" size="m" />
                    <Input placeholder="검색어를 입력하세요." size="l" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-4">
          <Button type="green" size="m">
            검색
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
              <col width="5%" />
              <col />
              <col width="12%" />
              <col width="12%" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">번호</th>
                <th scope="col">휴대전화번호</th>
                <th scope="col">회원명</th>
                <th scope="col">사용여부</th>
                <th scope="col">쿠폰 발급일</th>
                <th scope="col">쿠폰 사용일</th>
                <th scope="col">주차권번호</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10</td>
                <td>010-****-5678</td>
                <td>홍*동</td>
                <td>사용완료</td>
                <td>2024-12-31 00:00</td>
                <td>2024-12-31 00:00</td>
                <td>2024082300321</td>
              </tr>
              <tr>
                <td>9</td>
                <td>010-****-5678</td>
                <td>홍*동</td>
                <td>사용완료</td>
                <td>2024-12-31 00:00</td>
                <td>2024-12-31 00:00</td>
                <td>2024082300321</td>
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
      </Drawer>
      {/* BO053003_쿠폰포인트관리>포인트상품권관리>상품권상세 */}
      <Drawer
        id="drawer-53003"
        open={open53003}
        handleClose={setOpen53003}
        title="상품권상세"
        btns={[
          { type: "black", label: "취소" },
          { type: "green", label: "저장" },
        ]}
      >
        <div className="table-basic">
          <table>
            <colgroup>
              <col width="152px" />
              <col />
              <col width="152px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">상품권번호</th>
                <td>NNNNNN</td>
                <th scope="row">사용여부</th>
                <td>
                  <div className="flex items-center gap-3">
                    <Radio name="t53003a" label="사용" defaultChecked />
                    <Radio name="t53003a" label="사용안함" />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span className="text-req">판매처</span>
                </th>
                <td colSpan={3}>
                  <div className="flex items-center gap-3">
                    <Radio name="t53003b" label="스마트스토어" defaultChecked />
                    <Radio name="t53003b" label="카카오톡" />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span className="text-req">상품권명</span>
                </th>
                <td colSpan={3}>
                  <Input size="l" defaultValue="주차상품권 1만원권" />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span className="text-req">상품권명</span>
                </th>
                <td colSpan={3}>
                  <div className="flex items-center gap-2">
                    <Input defaultValue="100,000" right className="w-24" />
                    <span>원</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span className="text-req">판매기간</span>
                </th>
                <td colSpan={3}>
                  <div className="flex items-center gap-3">
                    <FormDateRange time />
                    <Checkbox label="무제한" />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span className="text-req">유효기간</span>
                </th>
                <td colSpan={3}>
                  <div className="flex items-center gap-2">
                    <span>상품권 등록일로부터</span>
                    <Input defaultValue="362" right className="w-20" />
                    <span>일 &#40;최대 5년&#41;</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">발급수량</th>
                <td colSpan={3}>
                  <div className="flex items-center gap-2">
                    <Input defaultValue="1,000" right className="w-20" />
                    <span>매</span>
                  </div>
                  <ul className="list-dot mt-2 text-muted text-sm font-normal">
                    <li>난수발급 이후에는 정보 수정을 할 수 없습니다. </li>
                    <li>상품권변경을 하시려면 신규로 등록해주시기 바랍니다.</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th scope="row">관리자메모</th>
                <td colSpan={3}>
                  <div className="flex gap-3">
                    <Text
                      rows={3}
                      placeholder="관리자 메모를 작성합니다."
                      className="grow"
                    />
                    <Button type="gray" size="s">
                      확인
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-memo">
          <table>
            <colgroup>
              <col width="212px" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">관리자명&#40;아이디&#41; / 소속</th>
                <td>스마트스토어 판매정책으로 매수 설정함. 2024-01-01 00:00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-basic mt-[1.25rem]">
          <table>
            <colgroup>
              <col width="152px" />
              <col />
              <col width="152px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">등록자</th>
                <td>김파프 &#40;admin&#41;</td>
                <th scope="row">등록일시</th>
                <td>2024-01-01 00:00</td>
              </tr>
              <tr>
                <th scope="row">최종수정자</th>
                <td>홍길동 &#40;admin_hong&#41;</td>
                <th scope="row">최종수정일시</th>
                <td>2024-01-01 00:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Drawer>
    </>
  );
}
