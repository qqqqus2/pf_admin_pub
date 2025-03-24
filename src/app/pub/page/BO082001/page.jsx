import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import Toggle from "@pub/components/Form/Toggle";
import Checkbox from "@pub/components/Form/Check";
import Paging from "@pub/components/Grid/Paging";
import Radio from "@pub/components/Form/Radio";
import Input from "@pub/components/Form/Input";
import SelectBasic from "@pub/components/Form/Select";
import IcArrowRight from "@/assets/icons/ico_arrow_right.svg";
import IcCirclePlus from "@/assets/icons/ico_circle_plus.svg";
import IcCircleMinus from "@/assets/icons/ico_circle_minus.svg";

export default function BO082001() {
    return (
        <DefaultLayout>
            <Topbar
                title="메뉴권한관리"
                path={[
                    { text: "홈", url: "/" },
                    { text: "관리자설정관리", url: "/" },
                    { text: "메뉴권한관리", url: "/" },
                ]}
            />
            <div className="box-cont grow-0">
                <ul className="list-dot text-[#6A798F] text-base font-medium -my-[0.625rem]">
                    <li>
                        슈퍼관리자만이 새로운 관리자를 등록하고, 관리자별 권한
                        메뉴를 설정할 수 있습니다.
                    </li>
                    <li>
                        관리자명을 클릭하여 관리자 권한 메뉴를 오른쪽 영역에서
                        권한 설정을 통해 할 수 있으며, 관리자 목록 내 편집으로
                        프로필 수정이 가능합니다.
                    </li>
                    <li>
                        상위 메뉴 선택 시 하위 메뉴가 모두 선택되며 하위
                        메뉴에서 선택 또는 해제할 수 있습니다.
                    </li>
                </ul>
            </div>
            <div className="grow grid grid-cols-2 gap-[1.875rem] mt-[1.875rem]">
                {/* 목록 */}
                <div className="box-cont">
                    <div className="grow flex flex-col">
                        <p className="h3">목록</p>
                        <div className="flex items-center gap-3 mt-4">
                            <Button type="outline" size="m">
                                삭제
                            </Button>
                            <SelectBasic className="mr-auto" />
                            <Button type="gray" size="m">
                                추가
                            </Button>
                            <Button type="blue" size="m">
                                저장
                            </Button>
                        </div>
                        <div className="table-grid mt-4">
                            <table>
                                <colgroup>
                                    <col width="10%" />
                                    <col width="10%" />
                                    <col width="15%" />
                                    <col />
                                    <col width="15%" />
                                    <col width="20%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th scope="col">
                                            <Checkbox />
                                        </th>
                                        <th scope="col">No</th>
                                        <th scope="col">구분</th>
                                        <th scope="col">그룹/개인</th>
                                        <th scope="col">사용여부</th>
                                        <th scope="col">권한설정</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Checkbox />
                                        </td>
                                        <td>1</td>
                                        <td>관리자</td>
                                        <td>그룹/슈퍼관리자</td>
                                        <td>
                                            <Toggle />
                                        </td>
                                        <td>
                                            <Button type="outline" size="s">
                                                설정
                                                <IcArrowRight />
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Checkbox />
                                        </td>
                                        <td>2</td>
                                        <td>관리자</td>
                                        <td>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <Radio
                                                        name="t1"
                                                        label="파트너"
                                                        size="s"
                                                    />
                                                    <Radio
                                                        name="t1"
                                                        label="파트너"
                                                        size="s"
                                                        defaultChecked
                                                    />
                                                </div>
                                                <div className="flex items-center gap-2 mt-3">
                                                    <Input
                                                        defaultValue="김관리"
                                                        className="w-[7rem]"
                                                    />
                                                    <Button
                                                        type="black"
                                                        size="m"
                                                    >
                                                        조회
                                                    </Button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <Toggle checked={false} />
                                        </td>
                                        <td>
                                            <Button type="outline" size="s">
                                                설정
                                                <IcArrowRight />
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Checkbox />
                                        </td>
                                        <td>3</td>
                                        <td>관리자</td>
                                        <td>그룹/슈퍼관리자</td>
                                        <td>
                                            <Toggle checked={false} />
                                        </td>
                                        <td>
                                            <Button type="outline" size="s">
                                                설정
                                                <IcArrowRight />
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Checkbox />
                                        </td>
                                        <td>4</td>
                                        <td>관리자</td>
                                        <td>그룹/슈퍼관리자</td>
                                        <td>
                                            <Toggle />
                                        </td>
                                        <td>
                                            <Button type="outline" size="s">
                                                설정
                                                <IcArrowRight />
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="table-bottom">
                            <Paging />
                        </div>
                    </div>
                </div>

                {/* 권한메뉴 */}
                <div className="box-cont">
                    <div>
                        <p className="h3">권한메뉴</p>
                        <div className="flex items-center gap-3 mt-4">
                            <Button type="outline" size="m">
                                전체펼침
                            </Button>
                            <Button type="outline" size="m" className="mr-auto">
                                전체닫힘
                            </Button>
                            <Button type="blue" size="m">
                                저장
                            </Button>
                        </div>
                        <div className="table-grid mt-4">
                            <table>
                                <colgroup>
                                    <col />
                                    <col width="10%" />
                                    <col width="14%" />
                                    <col width="10%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th scope="col">메뉴명</th>
                                        <th scope="col">조회</th>
                                        <th scope="col">등록/수정</th>
                                        <th scope="col">삭제</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <button
                                                type="button"
                                                className="flex items-center gap-3"
                                            >
                                                <IcCirclePlus />
                                                <span>파트너/시설관리</span>
                                            </button>
                                        </td>
                                        <td>
                                            <Checkbox />
                                        </td>
                                        <td>
                                            <Checkbox />
                                        </td>
                                        <td>
                                            <Checkbox />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button
                                                type="button"
                                                className="flex items-center gap-3 ml-[1.25rem]"
                                            >
                                                <IcCirclePlus />
                                                <span>파트너/시설관리</span>
                                            </button>
                                        </td>
                                        <td>
                                            <Checkbox />
                                        </td>
                                        <td>
                                            <Checkbox />
                                        </td>
                                        <td>
                                            <Checkbox />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button
                                                type="button"
                                                className="flex items-center gap-3 ml-[2.5rem]"
                                            >
                                                <IcCircleMinus />
                                                <span>파트너/시설관리</span>
                                            </button>
                                        </td>
                                        <td>
                                            <Checkbox />
                                        </td>
                                        <td>
                                            <Checkbox />
                                        </td>
                                        <td>
                                            <Checkbox />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button
                                                type="button"
                                                className="flex items-center gap-3 ml-[3.75rem]"
                                            >
                                                <IcCircleMinus />
                                                <span>파트너/시설관리</span>
                                            </button>
                                        </td>
                                        <td>
                                            <Checkbox />
                                        </td>
                                        <td>
                                            <Checkbox />
                                        </td>
                                        <td>
                                            <Checkbox />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button
                                                type="button"
                                                className="flex items-center gap-3 ml-[5rem]"
                                            >
                                                <IcCircleMinus />
                                                <span>파트너/시설관리</span>
                                            </button>
                                        </td>
                                        <td>
                                            <Checkbox />
                                        </td>
                                        <td>
                                            <Checkbox />
                                        </td>
                                        <td>
                                            <Checkbox />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
