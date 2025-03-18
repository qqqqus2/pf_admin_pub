import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import Checkbox from "@pub/components/Form/Check";
import Paging from "@pub/components/Grid/Paging";
import Input from "@pub/components/Form/Input";
import FormDate from "@pub/components/Form/Date";

export default function BO085001() {
  return (
    <DefaultLayout>
      <Topbar
        title="운영컨텐츠관리"
        path={[
          { text: "홈", url: "/" },
          { text: "관리자설정관리", url: "/" },
          { text: "운영컨텐츠관리", url: "/" },
        ]}
      />
      <div className="box-cont">
        <ul className="list-dot text-[#6A798F] text-base font-medium -my-[0.625rem]">
          <li>
            운영컨텐츠는 전체 사이트에 영향을 줄 수 있으므로 신중히 반영해주시기
            바랍니다.
          </li>
          <li>수정하실 항목을 선택 하시면 항목을 수정하실 수 있습니다.</li>
        </ul>
      </div>
      <div className="box-cont mt-6">
        <div className="table-grid">
          <table>
            <colgroup>
              <col width="5%" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">
                  <Checkbox />
                </th>
                <th scope="col">수정항목</th>
                <th scope="col">수정내용</th>
                <th scope="col">적용일시</th>
                <th scope="col">최종수정자</th>
                <th scope="col">최종수정일시</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Checkbox />
                </td>
                <td>포인트 적립율</td>
                <td>
                  <div className="flex items-center gap-2">
                    결제금액의
                    <Input defaultValue="3" className="w-20" right disabled />%
                  </div>
                </td>
                <td>
                  <FormDate selected={new Date()} time />
                </td>
                <td>system</td>
                <td>yyyy-mm-dd 00:00</td>
              </tr>
              <tr>
                <td>
                  <Checkbox />
                </td>
                <td>취소수수료</td>
                <td>
                  <div className="flex items-center gap-2">
                    <Input defaultValue="3" className="w-20" right disabled />%
                  </div>
                </td>
                <td>
                  <FormDate selected={new Date()} time />
                </td>
                <td>system</td>
                <td>yyyy-mm-dd 00:00</td>
              </tr>
              <tr>
                <td>
                  <Checkbox />
                </td>
                <td>출석이벤트</td>
                <td>
                  <ul className="flex flex-col gap-[0.8125rem]">
                    <li className="flex items-center gap-2">
                      출석체크마다
                      <Input defaultValue="1" className="w-20" right disabled />
                      포인트
                    </li>
                    <li className="flex items-center gap-2">
                      출석체크 7회
                      <Input defaultValue="5" className="w-20" right disabled />
                      포인트
                    </li>
                    <li className="flex items-center gap-2">
                      출석체크 30회
                      <Input
                        defaultValue="10"
                        className="w-20"
                        right
                        disabled
                      />
                      포인트
                    </li>
                  </ul>
                </td>
                <td>
                  <FormDate selected={new Date()} time />
                </td>
                <td>system</td>
                <td>yyyy-mm-dd 00:00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div className="table-basic">
            <table>
              <colgroup>
                <col width="152px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">관리자 메모</th>
                  <td>
                    <div className="flex gap-3">
                      <Input
                        placeholder="관리자 메모를 필수로 작성합니다."
                        className="grow"
                      />
                      <Button type="gray" size="m">
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
                  <td>
                    회원문의 3회 이상 욕설과 강성요청 고객으로 블랙리스트
                    적용합니다. 2024-01-01 00:00
                  </td>
                </tr>
                <tr>
                  <th scope="row">관리자명&#40;아이디&#41; / 소속</th>
                  <td>
                    시스템 오류에 의한 불편함의 이유로 포인트를 지급했습니다.
                    YYYY-MM-DD hh:mm
                  </td>
                </tr>
                <tr>
                  <th scope="row">관리자명&#40;아이디&#41; / 소속</th>
                  <td>
                    관리자가 작성한 메모가 표기됩니다. 관리자가 작성한 메모가
                    표기됩니다. 관리자가 작성한 메모가 표기됩니다. 관리자가
                    작성한 메모가 표기됩니다. 관리자가 작성한 메모가 표기됩니다.
                    관리자가 작성한 메모가 표기됩니다. YYYY-MM-DD hh:mm
                  </td>
                </tr>
              </tbody>
            </table>
            <Paging className="mt-2" />
          </div>
        </div>
      </div>
      <div className="flex mt-6">
        <div className="flex items-center gap-2 ml-auto">
          <Button type="black" size="m">
            취소
          </Button>
          <Button type="green" size="m">
            저장
          </Button>
        </div>
      </div>

      {/* 탭 계약조회 */}
      <div className="box-cont mt-6">
        <p className="h4">이력관리</p>
        <div className="table-grid">
          <table>
            <colgroup>
              <col width="60px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">번호</th>
                <th scope="col">등록자</th>
                <th scope="col">등록일시</th>
                <th scope="col">내용 요약</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>김파프&#40;adminid&#41;</td>
                <td>yyyy-mm-dd 00:00</td>
                <td>계약진행중</td>
              </tr>
              <tr>
                <td>2</td>
                <td>김파프&#40;adminid&#41;</td>
                <td>yyyy-mm-dd 00:00</td>
                <td>계약완료</td>
              </tr>
              <tr>
                <td>3</td>
                <td>김관리&#40;adminid&#41;</td>
                <td>yyyy-mm-dd 00:00</td>
                <td>계약만료&#40;계약연장&#41;</td>
              </tr>
              <tr>
                <td>4</td>
                <td>김파킹&#40;adminid&#41;</td>
                <td>yyyy-mm-dd 00:00</td>
                <td>계약만료</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="box-cont mt-6">
        <p className="h4">이력관리</p>
        <div className="table-grid">
          <table>
            <colgroup>
              <col width="60px" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">번호</th>
                <th scope="col">등록자</th>
                <th scope="col">등록일시</th>
                <th scope="col">내용 요약</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4}>
                  <p className="no-data py-5">이력이 없습니다.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DefaultLayout>
  );
}
