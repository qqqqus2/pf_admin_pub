import DefaultLayout from "@pub/layout/DefaultLayout";
import Flag from "@pub/components/Flag";
import IcArrowRight from "@/assets/icons/ico_arrow_right_home.svg";
import IcArrowRight2 from "@/assets/icons/ico_arrow_right_home_2.svg";
import IcHomeCnt1 from "@/assets/icons/ico_home_cnt_1.svg";
import IcHomeCnt2 from "@/assets/icons/ico_home_cnt_2.svg";
import IcHomeCnt3 from "@/assets/icons/ico_home_cnt_3.svg";

export default function BO010001() {
  return (
    <DefaultLayout home={true}>
      <div className="grid grid-cols-[1fr_20rem] gap-[1.875rem] pt-[2.5rem]">
        {/* 좌측 */}
        <div className="grid grid-cols-2 gap-[1.25rem]">
          {/* 결제현황 */}
          <div className="box-cont gap-0">
            <div className="flex justify-between items-center">
              <p className="h3">결제 현황</p>
              <button type="button">
                <IcArrowRight2 />
              </button>
            </div>
            <div className="grid grid-cols-2 divide-x mt-6 -mx-8">
              <div className="px-8">
                <p className="h-tit">결제건수</p>
                <p className="h-num">2,500건</p>
              </div>
              <div className="px-8">
                <p className="h-tit">결제금액</p>
                <p className="h-num text-[#09BC71]">2,500,000원</p>
              </div>
            </div>
          </div>
          {/* 회원현황 */}
          <div className="box-cont gap-0">
            <div className="flex justify-between items-center">
              <p className="h3">회원 현황</p>
              <button type="button">
                <IcArrowRight2 />
              </button>
            </div>
            <div className="grid grid-cols-2 divide-x mt-6 -mx-8">
              <div className="px-8">
                <p className="h-tit">신규 회원수</p>
                <p className="h-num">100명</p>
              </div>
              <div className="px-8">
                <p className="h-tit">누적 회원수</p>
                <p className="h-num text-[#09BC71]">12,021명</p>
              </div>
            </div>
          </div>
          {/* 주차장 현황 */}
          <div className="box-cont gap-0">
            <div className="flex justify-between items-center">
              <p className="h3">주차장 현황</p>
            </div>
            <div className="grid grid-cols-3 divide-x mt-6 -mx-8">
              <div className="px-8">
                <p className="h-tit">등록수</p>
                <p className="h-num">5,000</p>
              </div>
              <div className="px-8">
                <p className="h-tit">운영중</p>
                <p className="h-num">2,500</p>
              </div>
              <div className="px-8">
                <p className="h-tit">운영종료</p>
                <p className="h-num">2,500</p>
              </div>
            </div>
          </div>
          {/* 배정자 현황 */}
          <div className="box-cont gap-0">
            <div className="flex justify-between items-center">
              <p className="h3">배정자 현황</p>
              <button type="button">
                <IcArrowRight2 />
              </button>
            </div>
            <div className="grid grid-cols-2 divide-x mt-6 -mx-8">
              <div className="px-8">
                <p className="h-tit">전체 배정자수</p>
                <p className="h-num">5,523</p>
              </div>
              <div className="px-8">
                <p className="h-tit">공유중 배정자수</p>
                <p className="h-num flex justify-between items-center">
                  <span>2,500</span>
                  <span className="text-[#3056D3] text-sm font-bold">
                    28.3%
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* 계정 신청 현황 */}
          <div className="box-cont gap-0">
            <div className="flex justify-between items-center">
              <p className="h3">계정 신청 현황</p>
              <button type="button">
                <IcArrowRight2 />
              </button>
            </div>
            <div className="h-table mt-6 -mx-4">
              <table>
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col" className="text-left">
                      상태
                    </th>
                    <th scope="col" className="text-right">
                      관리자
                    </th>
                    <th scope="col" className="text-right">
                      파트너
                    </th>
                    <th scope="col" className="text-right">
                      합계
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Flag type="gray" label="승인대기" size="m" />
                    </td>
                    <td>
                      <p className="font-bold text-right">10</p>
                    </td>
                    <td>
                      <p className="font-bold text-right">30</p>
                    </td>
                    <td>
                      <p className="font-bold text-right">40</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Flag type="blue" label="승인완료" size="m" />
                    </td>
                    <td>
                      <p className="font-bold text-right">0</p>
                    </td>
                    <td>
                      <p className="font-bold text-right">10</p>
                    </td>
                    <td>
                      <p className="font-bold text-right">10</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Flag type="red" label="승인반려" size="m" />
                    </td>
                    <td>
                      <p className="font-bold text-right">12</p>
                    </td>
                    <td>
                      <p className="font-bold text-right">32</p>
                    </td>
                    <td>
                      <p className="font-bold text-right">44</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* 파트너 계약현황 */}
          <div className="box-cont gap-0">
            <div className="flex justify-between items-center">
              <p className="h3">파트너 계약현황</p>
              <button type="button">
                <IcArrowRight2 />
              </button>
            </div>
            <div className="grid grid-cols-2 divide-x mt-6 -mx-8">
              <div className="px-8">
                <p className="h-tit">전체</p>
                <p className="mt-3 h3">12,039</p>
              </div>
              <ul className="flex flex-col space-y-[0.625rem] px-8">
                <li className="flex justify-between items-center text-base">
                  <span className="font-medium">계약진행중</span>
                  <span className="font-bold">10</span>
                </li>
                <li className="flex justify-between items-center text-base">
                  <span className="font-medium">계약완료</span>
                  <span className="font-bold">1,200</span>
                </li>
                <li className="flex justify-between items-center text-base">
                  <span className="font-medium">계약만료</span>
                  <span className="font-bold">22</span>
                </li>
                <li className="flex justify-between items-center text-base">
                  <span className="text-[#3056D3] font-medium">
                    계약만료 예정
                  </span>
                  <span className="font-bold">12</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="box-cont col-span-2">
            <div className="flex justify-between items-center">
              <p className="h3">공지사항 </p>
              <button type="button">
                <IcArrowRight2 />
              </button>
            </div>
            <ul className="h-notice">
              <li>
                <span className="cate">APP</span>
                <button type="button" className="tit">
                  공지제목이 노출됩니다.
                </button>
                <span className="date">2024-10-14 14:38</span>
              </li>
              <li>
                <span className="cate">PO</span>
                <button type="button" className="tit">
                  공지제목이 노출됩니다.
                </button>
                <span className="date">2024-10-14 14:38</span>
              </li>
              <li>
                <span className="cate">PO</span>
                <button type="button" className="tit">
                  공지제목이 노출됩니다.
                </button>
                <span className="date">2024-10-14 14:38</span>
              </li>
              <li>
                <span className="cate">PO</span>
                <button type="button" className="tit">
                  공지제목이 노출됩니다.
                </button>
                <span className="date">2024-10-14 14:38</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 우측 */}
        <div className="flex flex-col gap-[1.25rem]">
          <button type="button" className="btn-dashboard">
            대시보드
            <IcArrowRight />
          </button>
          <div className="box-cont cnt">
            <button type="button" className="item">
              <IcHomeCnt1 />
              <p className="h-tit">공유신청건수</p>
              <p className="h-num">36건</p>
            </button>
            <hr />
            <button type="button" className="item">
              <IcHomeCnt2 />
              <p className="h-tit">부정주차 신청건수</p>
              <p className="h-num">24건</p>
            </button>
            <hr />
            <button type="button" className="item">
              <IcHomeCnt3 />
              <p className="h-tit">문의건수</p>
              <p className="h-num">9건</p>
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
