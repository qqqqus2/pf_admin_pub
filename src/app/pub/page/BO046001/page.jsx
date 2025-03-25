import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import Paging from "@pub/components/Grid/Paging";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";

export default function BO046001() {
    return (
        <DefaultLayout>
            <Topbar
                title="배너/팝업 관리"
                path={[
                    { text: "홈", url: "/" },
                    { text: "전시컨텐츠관리", url: "/" },
                    { text: "배너/팝업 관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-[#212B36]">
                        전시위치별 앱에 노출되는 배너/팝업을 등록관리 할 수
                        있습니다.
                    </span>
                    <div className="flex items-center gap-2">
                        <Button className="btn-outline" size="m">
                            전시위치보기
                        </Button>
                        <Button type="black" size="m">
                            등록
                        </Button>
                    </div>
                </div>
                <hr className="border-[#E2E8F0]" />
                <div className="grow flex flex-col">
                    <div className="flex itesm-center gap-3">
                        <SelectBasic size="m" className="w-[9.375rem]" />
                        <SelectBasic size="m" className="w-[9.375rem]" />
                        <SelectBasic size="m" className="w-[9.375rem]" />
                        <SelectBasic size="m" className="w-[9.375rem]" />
                        <Input size="l" placeholder="검색어를 입력하세요." />
                        <Button type="green" size="m">
                            검색
                        </Button>
                    </div>
                    <div className="table-grid mt-2">
                        <table>
                            <colgroup>
                                <col width="60px" />
                                <col width="auto" />
                                <col width="auto" />
                                <col width="25%" />
                                <col width="auto" />
                                <col width="320px" />
                                <col width="10%" />
                                <col width="180px" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">전시위치</th>
                                    <th scope="col">대상</th>
                                    <th scope="col">배너/팝업명</th>
                                    <th scope="col">게시상태</th>
                                    <th scope="col">전시기간</th>
                                    <th scope="col">등록자</th>
                                    <th scope="col">등록일시</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>홈 주차장찾기 배너</td>
                                    <td>전체</td>
                                    <td>
                                        <button type="button">
                                            <span className="text-green underline">
                                                홈 주차장찾기 배너
                                            </span>
                                        </button>
                                    </td>
                                    <td>게시중</td>
                                    <td>2024-10-14 00:00 ~ 2024-12-12 00:00</td>
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
