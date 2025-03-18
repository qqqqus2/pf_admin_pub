import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import Radio from "@pub/components/Form/Radio";
import Checkbox from "@pub/components/Form/Check";
import Input from "@pub/components/Form/Input";
import Paging from "@pub/components/Grid/Paging";
import SelectBasic from "@pub/components/Form/Select";
import SelectMulti from "@pub/components/Form/SelectMulti";
import FormDateRange from "@pub/components/Form/DateRange";
import IcExcel from "@/assets/icons/ico_excel.svg";

export default function BO071001() {
  return (
    <DefaultLayout>
      <Topbar
        title="결제관리"
        path={[
          { text: "홈", url: "/" },
          { text: "정산관리", url: "/" },
          { text: "결제관리", url: "/" },
        ]}
      />
      <div className="box-cont">
        {/* search box */}
        <div className="search-box">
          <ul>
            <li>
              <p>결제상태</p>
              <div className="flex items-center gap-3">
                <Radio name="t1" label="전체" defaultChecked />
                <Radio name="t1" label="결제완료" />
                <Radio name="t1" label="결제취소" />
              </div>
            </li>
            <li>
              <p>회원유형</p>
              <div className="flex items-center gap-3">
                <Radio name="t2" label="전체" defaultChecked />
                <Radio name="t2" label="회원" />
                <Radio name="t2" label="비회원" />
              </div>
            </li>
            <li className="col-span-2">
              <p>결제수단</p>
              <div className="flex items-center gap-3">
                <Checkbox label="전체" defaultChecked />
                <Checkbox label="이노페이&#40;카드결제&#41;" />
                <Checkbox label="이노페이&#40;간편결제&#41;" />
                <Checkbox label="이노페이&#40;소액결제&#41;" />
                <Checkbox label="카카오페이" />
                <Checkbox label="네이버페이" />
              </div>
            </li>
            <li>
              <p>유입경로</p>
              <div className="flex items-center gap-3">
                <Checkbox label="전체" defaultChecked />
                <Checkbox label="APP" />
                <Checkbox label="NFC" />
                <Checkbox label="QR" />
                <Checkbox label="ARS" />
                <Checkbox label="무인정산기" />
                <Checkbox label="CS" />
              </div>
            </li>
            <li>
              <p>주차권종류</p>
              <SelectMulti size="m" search placeholder="전체" />
            </li>
            <li>
              <p>포인트 사용여부</p>
              <div className="flex items-center gap-3">
                <Radio name="t3" label="전체" defaultChecked />
                <Radio name="t3" label="사용" />
                <Radio name="t3" label="사용안함" />
                <Radio name="t3" label="전환포인트 사용" />
              </div>
            </li>
            <li>
              <p>연장결제여부</p>
              <div className="flex items-center gap-3">
                <Radio name="t4" label="전체" defaultChecked />
                <Radio name="t4" label="Y" />
                <Radio name="t4" label="N" />
              </div>
            </li>
            <li className="col-span-2">
              <p>검색어</p>
              <div className="flex items-center gap-2">
                <SelectBasic placeholder="전체" size="m" />
                <Input placeholder="검색어를 입력하세요" size="l" />
              </div>
            </li>
            <li className="col-span-2">
              <p>결제일시</p>
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
          <p className="h4">결제현황</p>
          <div className="table-basic mt-2">
            <table>
              <thead>
                <tr>
                  <th scope="col">결제상태</th>
                  <th scope="col">결제금액</th>
                  <th scope="col">쿠폰사용금액</th>
                  <th scope="col">포인트 사용금액&#40;전환포인트 외&#41;</th>
                  <th scope="col">전환포인트 사용금액</th>
                  <th scope="col">총 금액&#40;합계&#41;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>결제완료</td>
                  <td>
                    <p className="text-right">961,000</p>
                  </td>
                  <td>
                    <p className="text-right">20,000</p>
                  </td>
                  <td>
                    <p className="text-right">9,000</p>
                  </td>
                  <td>
                    <p className="text-right">10,000</p>
                  </td>
                  <td>
                    <p className="font-bold text-right">1,000,000</p>
                  </td>
                </tr>
                <tr>
                  <td>결제취소</td>
                  <td>
                    <p className="text-red text-right">-20,000</p>
                  </td>
                  <td>
                    <p className="text-red text-right">-2,000</p>
                  </td>
                  <td>
                    <p className="text-red text-right">-2,000</p>
                  </td>
                  <td>
                    <p className="text-red text-right">-2,000</p>
                  </td>
                  <td>
                    <p className="text-red font-bold text-right">-26,000</p>
                  </td>
                </tr>
              </tbody>
              <tfoot className="bg-cell-green">
                <tr>
                  <td>합계</td>
                  <td>
                    <p className="text-green text-right">939,000</p>
                  </td>
                  <td>
                    <p className="text-green text-right">18,000</p>
                  </td>
                  <td>
                    <p className="text-green text-right">10,000</p>
                  </td>
                  <td>
                    <p className="text-green text-right">8,000</p>
                  </td>
                  <td>
                    <p className="text-green font-bold text-right">974,000</p>
                  </td>
                </tr>
              </tfoot>
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
          <div className="table-hscroll mt-4">
            <div className="table-grid row-10">
              <table>
                <colgroup>
                  <col width="60px" />
                </colgroup>
                <thead>
                  <tr>
                    <th rowSpan={2} scope="col">
                      <Checkbox />
                    </th>
                    <th rowSpan={2} scope="col">
                      주차권번호
                    </th>
                    <th rowSpan={2} scope="col">
                      파트너명
                    </th>
                    <th rowSpan={2} scope="col">
                      주차권종류
                    </th>
                    <th rowSpan={2} scope="col">
                      주차장번호
                    </th>
                    <th rowSpan={2} scope="col">
                      주차장명
                    </th>
                    <th rowSpan={2} scope="col">
                      회원유형
                    </th>
                    <th rowSpan={2} scope="col">
                      주문자명
                    </th>
                    <th rowSpan={2} scope="col">
                      휴대폰번호
                    </th>
                    <th rowSpan={2} scope="col">
                      차량번호
                    </th>
                    <th rowSpan={2} scope="col">
                      예약시간
                    </th>
                    <th rowSpan={2} scope="col">
                      예약시작시간
                    </th>
                    <th rowSpan={2} scope="col">
                      예약종료시간
                    </th>
                    <th rowSpan={2} scope="col">
                      유입경로
                    </th>
                    <th rowSpan={2} scope="col">
                      판매가
                    </th>
                    <th rowSpan={2} scope="col">
                      결제수단
                    </th>
                    <th rowSpan={2} scope="col">
                      결제상태
                    </th>
                    <th colSpan={5} scope="colgroup">
                      결제금액
                    </th>
                    <th colSpan={5} scope="colgroup">
                      취소금액
                    </th>
                    <th rowSpan={2} scope="col">
                      연장결제여부
                    </th>
                  </tr>
                  <tr>
                    <th scope="col">결제일시</th>
                    <th scope="col">결제금액</th>
                    <th scope="col">쿠폰금액</th>
                    <th scope="col">포인트</th>
                    <th scope="col">전환포인트</th>
                    <th scope="col">취소/환불일시</th>
                    <th scope="col">결제금액</th>
                    <th scope="col">쿠폰금액</th>
                    <th scope="col">포인트</th>
                    <th scope="col">전환포인트</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Checkbox />
                    </td>
                    <td>
                      <button type="button">
                        <span className="underline">NNNNNN</span>
                      </button>
                    </td>
                    <td>중구청</td>
                    <td>시간권</td>
                    <td>0048571</td>
                    <td>
                      <button type="button">
                        <span className="underline">
                          중구청 구획3-88-0&#40;#1111&#41;
                        </span>
                      </button>
                    </td>
                    <td>비회원</td>
                    <td>홍길동</td>
                    <td>01012343456</td>
                    <td>29호0900</td>
                    <td>1일 1시간30분</td>
                    <td>2024-11-01 오전00:00</td>
                    <td>2024-11-02 오전01:30</td>
                    <td>APP</td>
                    <td>3,000</td>
                    <td>이노페이&#40;간편결제&#41;</td>
                    <td>결제완료</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>2,000</td>
                    <td>500</td>
                    <td>500</td>
                    <td>0</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>
                      <span className="text-red">-2,000</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>0</td>
                    <td>
                      <div className="flex flex-wrap items-center gap-2">
                        Y
                        <button type="button">
                          <span className="underline">
                            중구청 구획3-88-0&#40;#1111&#41;
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Checkbox />
                    </td>
                    <td>
                      <button type="button">
                        <span className="underline">NNNNNN</span>
                      </button>
                    </td>
                    <td>중구청</td>
                    <td>시간권</td>
                    <td>0048571</td>
                    <td>
                      <button type="button">
                        <span className="underline">
                          중구청 구획3-88-0&#40;#1111&#41;
                        </span>
                      </button>
                    </td>
                    <td>비회원</td>
                    <td>홍길동</td>
                    <td>01012343456</td>
                    <td>29호0900</td>
                    <td>1일 1시간30분</td>
                    <td>2024-11-01 오전00:00</td>
                    <td>2024-11-02 오전01:30</td>
                    <td>APP</td>
                    <td>3,000</td>
                    <td>이노페이&#40;간편결제&#41;</td>
                    <td>결제완료</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>2,000</td>
                    <td>500</td>
                    <td>500</td>
                    <td>0</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>
                      <span className="text-red">-2,000</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>0</td>
                    <td>
                      <div className="flex flex-wrap items-center gap-2">
                        Y
                        <button type="button">
                          <span className="underline">
                            중구청 구획3-88-0&#40;#1111&#41;
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Checkbox />
                    </td>
                    <td>
                      <button type="button">
                        <span className="underline">NNNNNN</span>
                      </button>
                    </td>
                    <td>중구청</td>
                    <td>시간권</td>
                    <td>0048571</td>
                    <td>
                      <button type="button">
                        <span className="underline">
                          중구청 구획3-88-0&#40;#1111&#41;
                        </span>
                      </button>
                    </td>
                    <td>비회원</td>
                    <td>홍길동</td>
                    <td>01012343456</td>
                    <td>29호0900</td>
                    <td>1일 1시간30분</td>
                    <td>2024-11-01 오전00:00</td>
                    <td>2024-11-02 오전01:30</td>
                    <td>APP</td>
                    <td>3,000</td>
                    <td>이노페이&#40;간편결제&#41;</td>
                    <td>결제완료</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>2,000</td>
                    <td>500</td>
                    <td>500</td>
                    <td>0</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>
                      <span className="text-red">-2,000</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>0</td>
                    <td>
                      <div className="flex flex-wrap items-center gap-2">
                        Y
                        <button type="button">
                          <span className="underline">
                            중구청 구획3-88-0&#40;#1111&#41;
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Checkbox />
                    </td>
                    <td>
                      <button type="button">
                        <span className="underline">NNNNNN</span>
                      </button>
                    </td>
                    <td>중구청</td>
                    <td>시간권</td>
                    <td>0048571</td>
                    <td>
                      <button type="button">
                        <span className="underline">
                          중구청 구획3-88-0&#40;#1111&#41;
                        </span>
                      </button>
                    </td>
                    <td>비회원</td>
                    <td>홍길동</td>
                    <td>01012343456</td>
                    <td>29호0900</td>
                    <td>1일 1시간30분</td>
                    <td>2024-11-01 오전00:00</td>
                    <td>2024-11-02 오전01:30</td>
                    <td>APP</td>
                    <td>3,000</td>
                    <td>이노페이&#40;간편결제&#41;</td>
                    <td>결제완료</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>2,000</td>
                    <td>500</td>
                    <td>500</td>
                    <td>0</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>
                      <span className="text-red">-2,000</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>0</td>
                    <td>
                      <div className="flex flex-wrap items-center gap-2">
                        Y
                        <button type="button">
                          <span className="underline">
                            중구청 구획3-88-0&#40;#1111&#41;
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Checkbox />
                    </td>
                    <td>
                      <button type="button">
                        <span className="underline">NNNNNN</span>
                      </button>
                    </td>
                    <td>중구청</td>
                    <td>시간권</td>
                    <td>0048571</td>
                    <td>
                      <button type="button">
                        <span className="underline">
                          중구청 구획3-88-0&#40;#1111&#41;
                        </span>
                      </button>
                    </td>
                    <td>비회원</td>
                    <td>홍길동</td>
                    <td>01012343456</td>
                    <td>29호0900</td>
                    <td>1일 1시간30분</td>
                    <td>2024-11-01 오전00:00</td>
                    <td>2024-11-02 오전01:30</td>
                    <td>APP</td>
                    <td>3,000</td>
                    <td>이노페이&#40;간편결제&#41;</td>
                    <td>결제완료</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>2,000</td>
                    <td>500</td>
                    <td>500</td>
                    <td>0</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>
                      <span className="text-red">-2,000</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>0</td>
                    <td>
                      <div className="flex flex-wrap items-center gap-2">
                        Y
                        <button type="button">
                          <span className="underline">
                            중구청 구획3-88-0&#40;#1111&#41;
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Checkbox />
                    </td>
                    <td>
                      <button type="button">
                        <span className="underline">NNNNNN</span>
                      </button>
                    </td>
                    <td>중구청</td>
                    <td>시간권</td>
                    <td>0048571</td>
                    <td>
                      <button type="button">
                        <span className="underline">
                          중구청 구획3-88-0&#40;#1111&#41;
                        </span>
                      </button>
                    </td>
                    <td>비회원</td>
                    <td>홍길동</td>
                    <td>01012343456</td>
                    <td>29호0900</td>
                    <td>1일 1시간30분</td>
                    <td>2024-11-01 오전00:00</td>
                    <td>2024-11-02 오전01:30</td>
                    <td>APP</td>
                    <td>3,000</td>
                    <td>이노페이&#40;간편결제&#41;</td>
                    <td>결제완료</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>2,000</td>
                    <td>500</td>
                    <td>500</td>
                    <td>0</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>
                      <span className="text-red">-2,000</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>0</td>
                    <td>
                      <div className="flex flex-wrap items-center gap-2">
                        Y
                        <button type="button">
                          <span className="underline">
                            중구청 구획3-88-0&#40;#1111&#41;
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Checkbox />
                    </td>
                    <td>
                      <button type="button">
                        <span className="underline">NNNNNN</span>
                      </button>
                    </td>
                    <td>중구청</td>
                    <td>시간권</td>
                    <td>0048571</td>
                    <td>
                      <button type="button">
                        <span className="underline">
                          중구청 구획3-88-0&#40;#1111&#41;
                        </span>
                      </button>
                    </td>
                    <td>비회원</td>
                    <td>홍길동</td>
                    <td>01012343456</td>
                    <td>29호0900</td>
                    <td>1일 1시간30분</td>
                    <td>2024-11-01 오전00:00</td>
                    <td>2024-11-02 오전01:30</td>
                    <td>APP</td>
                    <td>3,000</td>
                    <td>이노페이&#40;간편결제&#41;</td>
                    <td>결제완료</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>2,000</td>
                    <td>500</td>
                    <td>500</td>
                    <td>0</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>
                      <span className="text-red">-2,000</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>0</td>
                    <td>
                      <div className="flex flex-wrap items-center gap-2">
                        Y
                        <button type="button">
                          <span className="underline">
                            중구청 구획3-88-0&#40;#1111&#41;
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Checkbox />
                    </td>
                    <td>
                      <button type="button">
                        <span className="underline">NNNNNN</span>
                      </button>
                    </td>
                    <td>중구청</td>
                    <td>시간권</td>
                    <td>0048571</td>
                    <td>
                      <button type="button">
                        <span className="underline">
                          중구청 구획3-88-0&#40;#1111&#41;
                        </span>
                      </button>
                    </td>
                    <td>비회원</td>
                    <td>홍길동</td>
                    <td>01012343456</td>
                    <td>29호0900</td>
                    <td>1일 1시간30분</td>
                    <td>2024-11-01 오전00:00</td>
                    <td>2024-11-02 오전01:30</td>
                    <td>APP</td>
                    <td>3,000</td>
                    <td>이노페이&#40;간편결제&#41;</td>
                    <td>결제완료</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>2,000</td>
                    <td>500</td>
                    <td>500</td>
                    <td>0</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>
                      <span className="text-red">-2,000</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>0</td>
                    <td>
                      <div className="flex flex-wrap items-center gap-2">
                        Y
                        <button type="button">
                          <span className="underline">
                            중구청 구획3-88-0&#40;#1111&#41;
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Checkbox />
                    </td>
                    <td>
                      <button type="button">
                        <span className="underline">NNNNNN</span>
                      </button>
                    </td>
                    <td>중구청</td>
                    <td>시간권</td>
                    <td>0048571</td>
                    <td>
                      <button type="button">
                        <span className="underline">
                          중구청 구획3-88-0&#40;#1111&#41;
                        </span>
                      </button>
                    </td>
                    <td>비회원</td>
                    <td>홍길동</td>
                    <td>01012343456</td>
                    <td>29호0900</td>
                    <td>1일 1시간30분</td>
                    <td>2024-11-01 오전00:00</td>
                    <td>2024-11-02 오전01:30</td>
                    <td>APP</td>
                    <td>3,000</td>
                    <td>이노페이&#40;간편결제&#41;</td>
                    <td>결제완료</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>2,000</td>
                    <td>500</td>
                    <td>500</td>
                    <td>0</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>
                      <span className="text-red">-2,000</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>0</td>
                    <td>
                      <div className="flex flex-wrap items-center gap-2">
                        Y
                        <button type="button">
                          <span className="underline">
                            중구청 구획3-88-0&#40;#1111&#41;
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Checkbox />
                    </td>
                    <td>
                      <button type="button">
                        <span className="underline">NNNNNN</span>
                      </button>
                    </td>
                    <td>중구청</td>
                    <td>시간권</td>
                    <td>0048571</td>
                    <td>
                      <button type="button">
                        <span className="underline">
                          중구청 구획3-88-0&#40;#1111&#41;
                        </span>
                      </button>
                    </td>
                    <td>비회원</td>
                    <td>홍길동</td>
                    <td>01012343456</td>
                    <td>29호0900</td>
                    <td>1일 1시간30분</td>
                    <td>2024-11-01 오전00:00</td>
                    <td>2024-11-02 오전01:30</td>
                    <td>APP</td>
                    <td>3,000</td>
                    <td>이노페이&#40;간편결제&#41;</td>
                    <td>결제완료</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>2,000</td>
                    <td>500</td>
                    <td>500</td>
                    <td>0</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>
                      <span className="text-red">-2,000</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>0</td>
                    <td>
                      <div className="flex flex-wrap items-center gap-2">
                        Y
                        <button type="button">
                          <span className="underline">
                            중구청 구획3-88-0&#40;#1111&#41;
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Checkbox />
                    </td>
                    <td>
                      <button type="button">
                        <span className="underline">NNNNNN</span>
                      </button>
                    </td>
                    <td>중구청</td>
                    <td>시간권</td>
                    <td>0048571</td>
                    <td>
                      <button type="button">
                        <span className="underline">
                          중구청 구획3-88-0&#40;#1111&#41;
                        </span>
                      </button>
                    </td>
                    <td>비회원</td>
                    <td>홍길동</td>
                    <td>01012343456</td>
                    <td>29호0900</td>
                    <td>1일 1시간30분</td>
                    <td>2024-11-01 오전00:00</td>
                    <td>2024-11-02 오전01:30</td>
                    <td>APP</td>
                    <td>3,000</td>
                    <td>이노페이&#40;간편결제&#41;</td>
                    <td>결제완료</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>2,000</td>
                    <td>500</td>
                    <td>500</td>
                    <td>0</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>
                      <span className="text-red">-2,000</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>0</td>
                    <td>
                      <div className="flex flex-wrap items-center gap-2">
                        Y
                        <button type="button">
                          <span className="underline">
                            중구청 구획3-88-0&#40;#1111&#41;
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Checkbox />
                    </td>
                    <td>
                      <button type="button">
                        <span className="underline">NNNNNN</span>
                      </button>
                    </td>
                    <td>중구청</td>
                    <td>시간권</td>
                    <td>0048571</td>
                    <td>
                      <button type="button">
                        <span className="underline">
                          중구청 구획3-88-0&#40;#1111&#41;
                        </span>
                      </button>
                    </td>
                    <td>비회원</td>
                    <td>홍길동</td>
                    <td>01012343456</td>
                    <td>29호0900</td>
                    <td>1일 1시간30분</td>
                    <td>2024-11-01 오전00:00</td>
                    <td>2024-11-02 오전01:30</td>
                    <td>APP</td>
                    <td>3,000</td>
                    <td>이노페이&#40;간편결제&#41;</td>
                    <td>결제완료</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>2,000</td>
                    <td>500</td>
                    <td>500</td>
                    <td>0</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>
                      <span className="text-red">-2,000</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>0</td>
                    <td>
                      <div className="flex flex-wrap items-center gap-2">
                        Y
                        <button type="button">
                          <span className="underline">
                            중구청 구획3-88-0&#40;#1111&#41;
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Checkbox />
                    </td>
                    <td>
                      <button type="button">
                        <span className="underline">NNNNNN</span>
                      </button>
                    </td>
                    <td>중구청</td>
                    <td>시간권</td>
                    <td>0048571</td>
                    <td>
                      <button type="button">
                        <span className="underline">
                          중구청 구획3-88-0&#40;#1111&#41;
                        </span>
                      </button>
                    </td>
                    <td>비회원</td>
                    <td>홍길동</td>
                    <td>01012343456</td>
                    <td>29호0900</td>
                    <td>1일 1시간30분</td>
                    <td>2024-11-01 오전00:00</td>
                    <td>2024-11-02 오전01:30</td>
                    <td>APP</td>
                    <td>3,000</td>
                    <td>이노페이&#40;간편결제&#41;</td>
                    <td>결제완료</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>2,000</td>
                    <td>500</td>
                    <td>500</td>
                    <td>0</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>
                      <span className="text-red">-2,000</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>0</td>
                    <td>
                      <div className="flex flex-wrap items-center gap-2">
                        Y
                        <button type="button">
                          <span className="underline">
                            중구청 구획3-88-0&#40;#1111&#41;
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Checkbox />
                    </td>
                    <td>
                      <button type="button">
                        <span className="underline">NNNNNN</span>
                      </button>
                    </td>
                    <td>중구청</td>
                    <td>시간권</td>
                    <td>0048571</td>
                    <td>
                      <button type="button">
                        <span className="underline">
                          중구청 구획3-88-0&#40;#1111&#41;
                        </span>
                      </button>
                    </td>
                    <td>비회원</td>
                    <td>홍길동</td>
                    <td>01012343456</td>
                    <td>29호0900</td>
                    <td>1일 1시간30분</td>
                    <td>2024-11-01 오전00:00</td>
                    <td>2024-11-02 오전01:30</td>
                    <td>APP</td>
                    <td>3,000</td>
                    <td>이노페이&#40;간편결제&#41;</td>
                    <td>결제완료</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>2,000</td>
                    <td>500</td>
                    <td>500</td>
                    <td>0</td>
                    <td>yyyy-mm-dd hh:mm:ss</td>
                    <td>
                      <span className="text-red">-2,000</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>
                      <span className="text-red">-500</span>
                    </td>
                    <td>0</td>
                    <td>
                      <div className="flex flex-wrap items-center gap-2">
                        Y
                        <button type="button">
                          <span className="underline">
                            중구청 구획3-88-0&#40;#1111&#41;
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
