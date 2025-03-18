"use client";

import { useState } from "react";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Button from "@pub/components/Button";
import Drawer from "@pub/components/Drawer";
import SelectBasic from "@pub/components/Form/Select";
import Radio from "@pub/components/Form/Radio";
import Text from "@pub/components/Form/Text";
import Paging from "@pub/components/Grid/Paging";
import IcExcel from "@/assets/icons/ico_excel.svg";

export default function Drawer09() {
  const [open91002, setOpen91002] = useState(false);
  const [open93002, setOpen93002] = useState(false);
  const [open94002, setOpen94002] = useState(false);

  return (
    <>
      <DefaultLayout>
        <div className="relative grow py-[2.5rem]">
          <h1 className="h1">Guide_Drawer</h1>
          <dl className="flex flex-col gap-8 max-w-[70rem] mt-9">
            <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
              <dt className="h4">Drawer</dt>
              <dd className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Button
                    type="green"
                    size="m"
                    onClick={() => setOpen91002(true)}
                  >
                    BO091002_접속이력 상세
                  </Button>
                  <Button
                    type="green"
                    size="m"
                    onClick={() => setOpen93002(true)}
                  >
                    BO093002_약관상세/수정
                  </Button>
                  <Button
                    type="green"
                    size="m"
                    onClick={() => setOpen94002(true)}
                  >
                    BO094002_정보변경이력 상세
                  </Button>
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </DefaultLayout>

      {/* BO091002_이력관리>접속이력 상세 */}
      <Drawer
        id="drawer-91002"
        open={open91002}
        handleClose={setOpen91002}
        title="정보이력 상세"
        btns={[{ type: "black", label: "닫기" }]}
      >
        <>
          <div className="table-basic bordered text-center">
            <table>
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col width="20%" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">구분</th>
                  <th scope="col">아이디</th>
                  <th scope="col">이름</th>
                  <th scope="col">소속부서</th>
                  <th scope="col">접속횟수</th>
                  <th scope="col">최종접속일시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>관리자</td>
                  <td>Parking00</td>
                  <td>김길동</td>
                  <td>사업실</td>
                  <td>00</td>
                  <td>2024-01-01 00:00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-center min-h-[2.5rem] mt-6">
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
                  <th scope="col">NO</th>
                  <th scope="col">접속IP</th>
                  <th scope="col">접속일시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>50</td>
                  <td>111.11.111.111</td>
                  <td>yyyy-mm-dd 00:00</td>
                </tr>
                <tr>
                  <td>49</td>
                  <td>111.11.111.111</td>
                  <td>yyyy-mm-dd 00:00</td>
                </tr>
                <tr>
                  <td>48</td>
                  <td>111.11.111.111</td>
                  <td>yyyy-mm-dd 00:00</td>
                </tr>
                <tr>
                  <td>4756</td>
                  <td>111.11.111.111</td>
                  <td>yyyy-mm-dd 00:00</td>
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
        </>
      </Drawer>

      {/* BO093002_이력관리>약관이력관리 */}
      <Drawer
        id="drawer-93002"
        open={open93002}
        handleClose={setOpen93002}
        title="약관상세/수정"
        btns={[{ type: "black", label: "닫기" }]}
      >
        <>
          <div className="table-basic">
            <table>
              <colgroup>
                <col width="152px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">구분</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <Radio name="t93002" label="이용약관" defaultChecked />
                      <Radio name="t93002" label="개인정보처리방침" />
                      <Radio name="t93002" label="위치정보이용약관" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">게시일시</th>
                  <td>2024-01-31 00:00</td>
                </tr>
                <tr>
                  <th scope="row">제목</th>
                  <td>작성했던 약관의 제목이 보입니다.</td>
                </tr>
                <tr>
                  <th scope="row">내용</th>
                  <td>
                    <Text
                      rows={20}
                      defaultValue="제1조(목적)
이 약관은 (주)MDS모빌리티(이하 “회사”라 함)가 운영하는 “파킹프렌즈”에서 제공하는 모든 서비스를 이용함에 있어 이용자의 권리 및 의무, 기타 부수 사항에 관하여 규정함을 목적으로 합니다.

제2조(정의)
1. “파킹프렌즈”이라 함은 “회사”가 “회사” 및 “파트너”가 등록한 “주차면”을 “주차면 이용자”에게 제공하기 위해 온라인 웹, 모바일 어플리케이션 등 정보통신 소프트웨어를 이용하여 설정한 가상의 영업장을 말하며, 아울러 이를 운영하는 사업자의 의미로도 사용합니다.
2. “주차면”이라 함은 자동차를 주차시키기 위한 시설을 말하며, “파킹프렌즈”에서는 일반제휴주차장, 그린파킹주차장, 거주자우선주차구역, 민영주차장, 공영주차장 등으로 구분합니다.
3. “파트너”라 함은 “회사”와 계약하여, 본인이 소유한 주차면을 “파킹프렌즈”를 통해 “주차면
제1조(목적)
이 약관은 (주)MDS모빌리티(이하 “회사”라 함)가 운영하는 “파킹프렌즈”에서 제공하는 모든 서비스를 이용함에 있어 이용자의 권리 및 의무, 기타 부수 사항에 관하여 규정함을 목적으로 합니다.

제2조(정의)
1. “파킹프렌즈”이라 함은 “회사”가 “회사” 및 “파트너”가 등록한 “주차면”을 “주차면 이용자”에게 제공하기 위해 온라인 웹, 모바일 어플리케이션 등 정보통신 소프트웨어를 이용하여 설정한 가상의 영업장을 말하며, 아울러 이를 운영하는 사업자의 의미로도 사용합니다.
2. “주차면”이라 함은 자동차를 주차시키기 위한 시설을 말하며, “파킹프렌즈”에서는 일반제휴주차장, 그린파킹주차장, 거주자우선주차구역, 민영주차장, 공영주차장 등으로 구분합니다.
3. “파트너”라 함은 “회사”와 계약하여, 본인이 소유한 주차면을 “파킹프렌즈”를 통해 “주차면
제1조(목적)
이 약관은 (주)MDS모빌리티(이하 “회사”라 함)가 운영하는 “파킹프렌즈”에서 제공하는 모든 서비스를 이용함에 있어 이용자의 권리 및 의무, 기타 부수 사항에 관하여 규정함을 목적으로 합니다.

제2조(정의)
1. “파킹프렌즈”이라 함은 “회사”가 “회사” 및 “파트너”가 등록한 “주차면”을 “주차면 이용자”에게 제공하기 위해 온라인 웹, 모바일 어플리케이션 등 정보통신 소프트웨어를 이용하여 설정한 가상의 영업장을 말하며, 아울러 이를 운영하는 사업자의 의미로도 사용합니다.
2. “주차면”이라 함은 자동차를 주차시키기 위한 시설을 말하며, “파킹프렌즈”에서는 일반제휴주차장, 그린파킹주차장, 거주자우선주차구역, 민영주차장, 공영주차장 등으로 구분합니다.
3. “파트너”라 함은 “회사”와 계약하여, 본인이 소유한 주차면을 “파킹프렌즈”를 통해 “주차면
제1조(목적)
이 약관은 (주)MDS모빌리티(이하 “회사”라 함)가 운영하는 “파킹프렌즈”에서 제공하는 모든 서비스를 이용함에 있어 이용자의 권리 및 의무, 기타 부수 사항에 관하여 규정함을 목적으로 합니다.

제2조(정의)
1. “파킹프렌즈”이라 함은 “회사”가 “회사” 및 “파트너”가 등록한 “주차면”을 “주차면 이용자”에게 제공하기 위해 온라인 웹, 모바일 어플리케이션 등 정보통신 소프트웨어를 이용하여 설정한 가상의 영업장을 말하며, 아울러 이를 운영하는 사업자의 의미로도 사용합니다.
2. “주차면”이라 함은 자동차를 주차시키기 위한 시설을 말하며, “파킹프렌즈”에서는 일반제휴주차장, 그린파킹주차장, 거주자우선주차구역, 민영주차장, 공영주차장 등으로 구분합니다.
3. “파트너”라 함은 “회사”와 계약하여, 본인이 소유한 주차면을 “파킹프렌즈”를 통해 “주차면
제1조(목적)
이 약관은 (주)MDS모빌리티(이하 “회사”라 함)가 운영하는 “파킹프렌즈”에서 제공하는 모든 서비스를 이용함에 있어 이용자의 권리 및 의무, 기타 부수 사항에 관하여 규정함을 목적으로 합니다.

제2조(정의)
1. “파킹프렌즈”이라 함은 “회사”가 “회사” 및 “파트너”가 등록한 “주차면”을 “주차면 이용자”에게 제공하기 위해 온라인 웹, 모바일 어플리케이션 등 정보통신 소프트웨어를 이용하여 설정한 가상의 영업장을 말하며, 아울러 이를 운영하는 사업자의 의미로도 사용합니다.
2. “주차면”이라 함은 자동차를 주차시키기 위한 시설을 말하며, “파킹프렌즈”에서는 일반제휴주차장, 그린파킹주차장, 거주자우선주차구역, 민영주차장, 공영주차장 등으로 구분합니다.
3. “파트너”라 함은 “회사”와 계약하여, 본인이 소유한 주차면을 “파킹프렌즈”를 통해 “주차면
제1조(목적)
이 약관은 (주)MDS모빌리티(이하 “회사”라 함)가 운영하는 “파킹프렌즈”에서 제공하는 모든 서비스를 이용함에 있어 이용자의 권리 및 의무, 기타 부수 사항에 관하여 규정함을 목적으로 합니다.

제2조(정의)
1. “파킹프렌즈”이라 함은 “회사”가 “회사” 및 “파트너”가 등록한 “주차면”을 “주차면 이용자”에게 제공하기 위해 온라인 웹, 모바일 어플리케이션 등 정보통신 소프트웨어를 이용하여 설정한 가상의 영업장을 말하며, 아울러 이를 운영하는 사업자의 의미로도 사용합니다.
2. “주차면”이라 함은 자동차를 주차시키기 위한 시설을 말하며, “파킹프렌즈”에서는 일반제휴주차장, 그린파킹주차장, 거주자우선주차구역, 민영주차장, 공영주차장 등으로 구분합니다.
3. “파트너”라 함은 “회사”와 계약하여, 본인이 소유한 주차면을 “파킹프렌즈”를 통해 “주차면
"
                      disabled
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6">
            <p className="h4">이력관리</p>
            <div className="table-grid mt-4">
              <table>
                <colgroup>
                  <col width="10%" />
                  <col width="20%" />
                  <col width="20%" />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">번호</th>
                    <th scope="col">등록자</th>
                    <th scope="col">변경일시</th>
                    <th scope="col">변경항목</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>김파프&#40;amdinid&#41;</td>
                    <td>2024-01-31 00:00</td>
                    <td>승인반려&#40;반려사유&#41;</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>김파프&#40;amdinid&#41;</td>
                    <td>2024-01-31 00:00</td>
                    <td>승인완료</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      </Drawer>

      {/* BO094002_이력관리>정보변경이력관리>상세 */}
      <Drawer
        id="drawer-94002"
        open={open94002}
        handleClose={setOpen94002}
        title="정보변경이력 상세"
        btns={[{ type: "black", label: "닫기" }]}
      >
        <div className="flex flex-col space-y-8">
          <div className="table-basic bordered">
            <table>
              <colgroup>
                <col width="152px" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">구분</th>
                  <th scope="col">이름</th>
                  <th scope="col">소속부서</th>
                  <th scope="col">최종수정자</th>
                  <th scope="col">최종수정일시</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">관리자</th>
                  <td>김길동</td>
                  <td>사업실</td>
                  <td>김파프&#40;admin&#41;</td>
                  <td>2024-01-01 00:00</td>
                </tr>
                <tr>
                  <th scope="row">메뉴</th>
                  <td colSpan={4}>
                    <div className="flex items-center justify-between">
                      <span>
                        BO &gt; 파트너시설관리 &gt; 시설관리 &gt; AloT센서
                      </span>
                      <Button type="outline" size="s">
                        상세조회
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-basic bordered">
            <table>
              <colgroup>
                <col width="152px" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">구분</th>
                  <th scope="col">항목명</th>
                  <th scope="col" colSpan={3}>
                    내용
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">삭제</th>
                  <th>전체</th>
                  <td colSpan={3}>삭제</td>
                </tr>
                <tr>
                  <th scope="row">이력내역</th>
                  <th>수정자</th>
                  <td>김파프</td>
                  <th>업데이트일시</th>
                  <td>2024-01-01 00:00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-basic bordered">
            <table>
              <colgroup>
                <col width="152px" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">구분</th>
                  <th scope="col">항목명</th>
                  <th scope="col" colSpan={3}>
                    내용
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">추가</th>
                  <th>통신상태</th>
                  <td colSpan={3}>이름/일자/점검사유</td>
                </tr>
                <tr>
                  <th scope="row" rowSpan={2}>
                    변경
                  </th>
                  <th rowSpan={2}>상태</th>
                  <td>변경후</td>
                  <td colSpan={2}>운영중</td>
                </tr>
                <tr>
                  <td>변경전</td>
                  <td colSpan={2}>폐기</td>
                </tr>
                <tr>
                  <th scope="row">이력내역</th>
                  <th>수정자</th>
                  <td>김파프&#40;admin&#41;</td>
                  <th>업데이트일시</th>
                  <td>2024-01-01 00:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Drawer>
    </>
  );
}
