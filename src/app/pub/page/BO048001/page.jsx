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
                title="이용안내 관리"
                path={[
                    { text: "홈", url: "/" },
                    { text: "전시컨텐츠관리", url: "/" },
                    { text: "이용안내 관리", url: "/" },
                ]}
            />
            <div className="box-cont">
                <div className="search-box relative">
                    <ul>
                        <li className="col-span-2">
                            <p>유형</p>
                            <div className="flex items-center gap-2">
                                <SelectBasic size="m" />
                                <SelectBasic size="m" />
                                <Input
                                    size="l"
                                    placeholder="검색어를 입력하세요."
                                />
                                <Button type="green" size="m">
                                    검색
                                </Button>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="grow flex flex-col">
                    <div className="flex justify-end items-center">
                        <Button type="black" size="m">
                            등록
                        </Button>
                    </div>
                    <div className="flex items-center min-h-[2.5rem] mt-2">
                        <p className="h4">
                            총 <span className="text-green">231</span>건
                        </p>
                        <SelectBasic
                            size="m"
                            placeholder="50개씩 보기"
                            className=" ml-auto"
                        />
                    </div>
                    <div className="table-grid mt-2">
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
