import DefaultLayout from "@pub/layout/DefaultLayout";
import Paging from "@pub/components/Grid/Paging";
import Checkbox from "@pub/components/Form/Check";
// import TableWithDragAndDrop from "@/app/bo/test/grid/dnd/page";

export default function GuideGrid() {
    return (
        <DefaultLayout>
            <div className="relative grow py-[2.5rem]">
                <h1 className="h1">Guide_Grid / Paging</h1>
                <dl className="flex flex-col gap-8 max-w-[70rem] mt-9">
                    <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
                        <dt className="h4">Paging</dt>
                        <dd>
                            <Paging />
                        </dd>
                    </div>
                    <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
                        <dt className="h4">Table Memo - Default</dt>
                        <dd>
                            <div className="table-memo">
                                <table>
                                    <colgroup>
                                        <col width="212px" />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                관리자명&#40;아이디&#41; / 소속
                                            </th>
                                            <td>
                                                회원문의 3회 이상 욕설과
                                                강성요청 고객으로 블랙리스트
                                                적용합니다. 2024-01-01 00:00
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                관리자명&#40;아이디&#41; / 소속
                                            </th>
                                            <td>
                                                시스템 오류에 의한 불편함의
                                                이유로 포인트를 지급했습니다.
                                                YYYY-MM-DD hh:mm
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                관리자명&#40;아이디&#41; / 소속
                                            </th>
                                            <td>
                                                관리자가 작성한 메모가
                                                표기됩니다. 관리자가 작성한
                                                메모가 표기됩니다. 관리자가
                                                작성한 메모가
                                                표기됩니다.관리자가 작성한
                                                메모가 표기됩니다. 관리자가
                                                작성한 메모가 표기됩니다.
                                                관리자가 작성한 메모가
                                                표기됩니다. YYYY-MM-DD hh:mm
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Paging className="mt-2" />
                            </div>
                        </dd>
                    </div>
                    <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
                        <dt className="h4">Table Memo - No Data</dt>
                        <dd>
                            <div className="table-memo">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p className="no-data py-5">
                                                    관리자 메모 이력이 없습니다.
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Paging className="mt-2" />
                            </div>
                        </dd>
                    </div>
                    <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
                        <dt className="h4">Table Basic</dt>
                        <dd>
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
                                            <th scope="row">차량번호</th>
                                            <td>
                                                <span className="underline">
                                                    123가1234
                                                </span>
                                            </td>
                                            <th scope="row">초대코드</th>
                                            <td>abcdefg</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                마이페이지추가정보
                                            </th>
                                            <td>차량모델명</td>
                                            <th scope="row">
                                                마이페이지추가정보
                                            </th>
                                            <td>차량색상</td>
                                        </tr>
                                        <tr>
                                            <th
                                                scope="row"
                                                className="bg-h-green"
                                            >
                                                마이페이지추가정보
                                            </th>
                                            <td>차량제조사</td>
                                            <th scope="row">
                                                마이페이지추가정보
                                            </th>
                                            <td>parking@email.com</td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <th
                                                scope="row"
                                                className="bg-h-red"
                                            >
                                                차량번호
                                            </th>
                                            <td>
                                                <span className="underline">
                                                    123가1234
                                                </span>
                                            </td>
                                            <th scope="row">초대코드</th>
                                            <td>abcdefg</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                마이페이지추가정보
                                            </th>
                                            <td>차량모델명</td>
                                            <th scope="row">
                                                마이페이지추가정보
                                            </th>
                                            <td>차량색상</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                마이페이지추가정보
                                            </th>
                                            <td>차량제조사</td>
                                            <th scope="row">
                                                마이페이지추가정보
                                            </th>
                                            <td>parking@email.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </dd>
                    </div>
                    <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
                        <dt className="h4">
                            Table Basic - Bordered / Align / Bg
                        </dt>
                        <dd>
                            <div className="table-basic text-center bordered">
                                <table>
                                    <thead>
                                        <tr>
                                            <th scope="col">구분</th>
                                            <th scope="col">장비개수</th>
                                            <th scope="col">설치비</th>
                                            <th scope="col">사용료</th>
                                            <th scope="col">전기료</th>
                                            <th scope="col">통신료</th>
                                            <th
                                                scope="col"
                                                className="bg-h-red"
                                            >
                                                보험료
                                            </th>
                                            <th scope="col">A/S관리비</th>
                                            <th scope="col">
                                                플랫폼운영관리비
                                            </th>
                                            <th scope="col">기타운영비</th>
                                            <th scope="col">합계</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">CCTV</th>
                                            <td>00</td>
                                            <td className="bg-h-green"></td>
                                            <td className="bg-h-green"></td>
                                            <td className="bg-h-green"></td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>
                                                <p className="text-right">
                                                    100,000원
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th
                                                scope="row"
                                                className="bg-h-green"
                                            >
                                                센서
                                            </th>
                                            <td>00</td>
                                            <td className="bg-h-green"></td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td className="bg-h-green"></td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>
                                                <p className="text-right">
                                                    100,000원
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">안내판</th>
                                            <td>00</td>
                                            <td className="bg-h-green"></td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>
                                                <p className="text-right">
                                                    100,000원
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">라인마킹</th>
                                            <td>00</td>
                                            <td className="bg-h-green"></td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>
                                                <p className="text-right">
                                                    100,000원
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">기타비용</th>
                                            <td></td>
                                            <td className="bg-h-green">
                                                bg-h-green
                                            </td>
                                            <td className="bg-h-red">
                                                bg-h-red
                                            </td>
                                            <td className="bg-h-green"></td>
                                            <td className="bg-h-green"></td>
                                            <td className="bg-h-green"></td>
                                            <td className="bg-h-green"></td>
                                            <td className="bg-h-green"></td>
                                            <td className="bg-h-green"></td>
                                            <td>
                                                <p className="text-right">
                                                    100,000원
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">총합계</th>
                                            <td colSpan={10}>
                                                <p className="font-bold text-right">
                                                    1,000,000원
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </dd>
                    </div>
                    <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
                        <dt className="h4">Table Grid - Default</dt>
                        <dd>
                            <div className="table-grid">
                                <table>
                                    <colgroup>
                                        <col width="60px" />
                                        <col />
                                        <col />
                                        <col width="15%" />
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <Checkbox />
                                            </th>
                                            <th scope="col">유형</th>
                                            <th scope="col">상세내용</th>
                                            <th scope="col">일시</th>
                                            <th scope="col">적립</th>
                                            <th scope="col">사용</th>
                                            <th scope="col">취소</th>
                                            <th scope="col">소멸</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Checkbox />
                                            </td>
                                            <td>default</td>
                                            <td>2939958595</td>
                                            <td>2024-01-31 00:00</td>
                                            <td>1,000</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr className="bg-cell-green">
                                            <td>
                                                <Checkbox />
                                            </td>
                                            <td>bg-cell-green</td>
                                            <td>2939958595</td>
                                            <td>2024-01-31 00:00</td>
                                            <td>1,000</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr className="bg-cell-red">
                                            <td>
                                                <Checkbox />
                                            </td>
                                            <td>bg-cell-red</td>
                                            <td>2939958595</td>
                                            <td>2024-01-31 00:00</td>
                                            <td>1,000</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr className="bg-cell-purple">
                                            <td>
                                                <Checkbox />
                                            </td>
                                            <td>bg-cell-purple</td>
                                            <td>2939958595</td>
                                            <td>2024-01-31 00:00</td>
                                            <td>1,000</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr className="bg-cell-blue">
                                            <td>
                                                <Checkbox />
                                            </td>
                                            <td>bg-cell-blue</td>
                                            <td>2939958595</td>
                                            <td>2024-01-31 00:00</td>
                                            <td>1,000</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </dd>
                    </div>
                    <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
                        <dt className="h4">Table Grid - No Data</dt>
                        <dd>
                            <div className="table-grid">
                                <table>
                                    <colgroup>
                                        <col width="60px" />
                                        <col />
                                        <col />
                                        <col width="15%" />
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <Checkbox />
                                            </th>
                                            <th scope="col">유형</th>
                                            <th scope="col">상세내용</th>
                                            <th scope="col">일시</th>
                                            <th scope="col">적립</th>
                                            <th scope="col">사용</th>
                                            <th scope="col">취소</th>
                                            <th scope="col">소멸</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan={8}>
                                                <p className="no-data py-14">
                                                    관리자 메모 이력이 없습니다.
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </dd>
                    </div>
                    <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
                        <dt className="h4">
                            Table Grid with VScroll&#40;높이 지정&#41; - Row 10
                            / 20 / 30 / 40 / 50
                        </dt>
                        <dd>
                            <div className="table-grid row-10">
                                <table>
                                    <colgroup>
                                        <col width="60px" />
                                        <col className="bg-cell-red" />
                                        <col />
                                        <col
                                            width="15%"
                                            className="bg-cell-blue"
                                        />
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <Checkbox />
                                            </th>
                                            <th
                                                scope="col"
                                                className="bg-h-red"
                                            >
                                                유형
                                            </th>
                                            <th scope="col">상세내용</th>
                                            <th
                                                scope="col"
                                                className="bg-h-blue"
                                            >
                                                일시
                                            </th>
                                            <th scope="col">적립</th>
                                            <th scope="col">사용</th>
                                            <th scope="col">취소</th>
                                            <th scope="col">소멸</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Checkbox />
                                            </td>
                                            <td>default</td>
                                            <td>2939958595</td>
                                            <td>2024-01-31 00:00</td>
                                            <td>1,000</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox />
                                            </td>
                                            <td>bg-cell-green</td>
                                            <td>2939958595</td>
                                            <td>2024-01-31 00:00</td>
                                            <td>1,000</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox />
                                            </td>
                                            <td>bg-cell-red</td>
                                            <td>2939958595</td>
                                            <td>2024-01-31 00:00</td>
                                            <td>1,000</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox />
                                            </td>
                                            <td>bg-cell-purple</td>
                                            <td>2939958595</td>
                                            <td>2024-01-31 00:00</td>
                                            <td>1,000</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox />
                                            </td>
                                            <td>default</td>
                                            <td>2939958595</td>
                                            <td>2024-01-31 00:00</td>
                                            <td>1,000</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox />
                                            </td>
                                            <td>default</td>
                                            <td>2939958595</td>
                                            <td>2024-01-31 00:00</td>
                                            <td>1,000</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox />
                                            </td>
                                            <td>default</td>
                                            <td>2939958595</td>
                                            <td>2024-01-31 00:00</td>
                                            <td>1,000</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox />
                                            </td>
                                            <td>default</td>
                                            <td>2939958595</td>
                                            <td>2024-01-31 00:00</td>
                                            <td>1,000</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox />
                                            </td>
                                            <td>default</td>
                                            <td>2939958595</td>
                                            <td>2024-01-31 00:00</td>
                                            <td>1,000</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox />
                                            </td>
                                            <td>default</td>
                                            <td>2939958595</td>
                                            <td>2024-01-31 00:00</td>
                                            <td>1,000</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox />
                                            </td>
                                            <td>default</td>
                                            <td>2939958595</td>
                                            <td>2024-01-31 00:00</td>
                                            <td>1,000</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox />
                                            </td>
                                            <td>default</td>
                                            <td>2939958595</td>
                                            <td>2024-01-31 00:00</td>
                                            <td>1,000</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox />
                                            </td>
                                            <td>default</td>
                                            <td>2939958595</td>
                                            <td>2024-01-31 00:00</td>
                                            <td>1,000</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox />
                                            </td>
                                            <td>default</td>
                                            <td>2939958595</td>
                                            <td>2024-01-31 00:00</td>
                                            <td>1,000</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox />
                                            </td>
                                            <td>default</td>
                                            <td>2939958595</td>
                                            <td>2024-01-31 00:00</td>
                                            <td>1,000</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Checkbox />
                                            </td>
                                            <td>default</td>
                                            <td>2939958595</td>
                                            <td>2024-01-31 00:00</td>
                                            <td>1,000</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </dd>
                    </div>
                    <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
                        <dt className="h4">
                            Table Grid with VScroll & HScroll
                        </dt>
                        <dd>
                            <div className="table-hscroll">
                                <div className="table-grid row-10">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    <Checkbox />
                                                </th>
                                                <th scope="col">유형</th>
                                                <th scope="col">상세내용</th>
                                                <th scope="col">일시</th>
                                                <th scope="col">적립</th>
                                                <th scope="col">유형</th>
                                                <th scope="col">상세내용</th>
                                                <th scope="col">일시</th>
                                                <th scope="col">적립</th>
                                                <th scope="col">유형</th>
                                                <th scope="col">상세내용</th>
                                                <th scope="col">일시</th>
                                                <th scope="col">적립</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <Checkbox />
                                                </td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                            </tr>
                                            <tr className="bg-cell-green">
                                                <td>
                                                    <Checkbox />
                                                </td>
                                                <td>bg-cell-green</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>bg-cell-green</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>bg-cell-green</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                            </tr>
                                            <tr className="bg-cell-red">
                                                <td>
                                                    <Checkbox />
                                                </td>
                                                <td>bg-cell-red</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>bg-cell-red</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>bg-cell-red</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                            </tr>
                                            <tr className="bg-cell-purple">
                                                <td>
                                                    <Checkbox />
                                                </td>
                                                <td>bg-cell-purple</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>bg-cell-purple</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>bg-cell-purple</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Checkbox />
                                                </td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Checkbox />
                                                </td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Checkbox />
                                                </td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Checkbox />
                                                </td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Checkbox />
                                                </td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Checkbox />
                                                </td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Checkbox />
                                                </td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Checkbox />
                                                </td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Checkbox />
                                                </td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Checkbox />
                                                </td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Checkbox />
                                                </td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Checkbox />
                                                </td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                                <td>default</td>
                                                <td>2939958595</td>
                                                <td>2024-01-31 00:00</td>
                                                <td>1,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </dd>
                    </div>
                    <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
                        <dt className="h4">Table Dnd</dt>
                        <dd>{/* <TableWithDragAndDrop /> */}</dd>
                    </div>
                </dl>
            </div>
        </DefaultLayout>
    );
}
