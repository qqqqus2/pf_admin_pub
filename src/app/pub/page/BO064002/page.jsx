import Image from "next/image";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import SelectBasic from "@pub/components/Form/Select";
import Input from "@pub/components/Form/Input";
import Radio from "@pub/components/Form/Radio";
import IcInfo from "@/assets/icons/ico_circle_info.svg";
import IcMap from "@/assets/icons/ico_map.svg";

export default function BO064002() {
  return (
    <DefaultLayout>
      <Topbar
        title="부정주차신고관리"
        path={[
          { text: "홈", url: "/" },
          { text: "문의관리", url: "/" },
          { text: "부정주차신고관리", url: "/" },
        ]}
      />
      <div className="box-cont">
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
                <th scope="row">신고접수번호</th>
                <td>
                  <div className="flex items-center gap-2">
                    <span>RM000001</span>
                    <Button type="outline" size="s">
                      복사
                    </Button>
                  </div>
                </td>
                <th scope="row">연관문의 링크</th>
                <td>
                  <div className="flex flex-wrap items-center gap-2">
                    <SelectBasic size="m" />
                    <Button type="outline" size="m">
                      링크
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row" className="bg-h-blue">
                  <div className="flex items-center gap-2">
                    <span className="text-req">내부검토결과</span>
                    <span
                      data-tooltip-id="tooltip"
                      data-tooltip-content="내부검토결과는 수정 및 업데이트 가능하며, 관리자메모는 필수입니다."
                    >
                      <IcInfo />
                    </span>
                  </div>
                </th>
                <td colSpan={3}>
                  <div className="flex items-center">
                    <div className="flex items-center gap-3">
                      <Radio name="t1" label="견인요청" defaultChecked />
                      <Radio name="t1" label="부정주차요금부과" />
                      <Radio name="t1" label="미반영" />
                      <Radio name="t1" label="기타" />
                    </div>
                    <span className="ml-auto text-muted">
                      ※내부관리용으로 신고자에게 통보되지 않습니다.
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <th className="bg-h-blue">
                  <span className="text-req">관리자 메모</span>
                </th>
                <td colSpan={3}>
                  <Input placeholder="관리자 메모를 필수로 작성합니다." />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 신고내용 */}
        <div>
          <p className="h4">신고내용</p>
          <div className="table-basic mt-2">
            <table>
              <colgroup>
                <col width="152px" />
                <col />
                <col width="152px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row" className="bg-h-green">
                    신고자유형
                  </th>
                  <td colSpan={3}>회원</td>
                </tr>
                <tr>
                  <th scope="row" className="bg-h-green">
                    신고자
                  </th>
                  <td>
                    <div className="flex items-center gap-2">
                      <button type="button">
                        <span className="underline">
                          홍길동&nbsp;&#40;010-1234-5678&#41;
                        </span>
                      </button>
                      <span>/</span>
                      <button type="button">
                        <span className="underline">신고이력 N회</span>
                      </button>
                    </div>
                  </td>
                  <th scope="row" className="bg-h-green">
                    주차권번호
                  </th>
                  <td>
                    <div className="flex items-center gap-2">
                      <button type="button">
                        <span className="underline">B123456789</span>
                      </button>
                      <span>&#40;2024-01-01 00:00 ~ 2024-01-01 00:00&#41;</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="bg-h-green">
                    구획번호
                  </th>
                  <td>122-211</td>
                  <th scope="row" className="bg-h-green">
                    신고일시
                  </th>
                  <td>2024-01-01 00:00</td>
                </tr>
                <tr>
                  <th scope="row" className="bg-h-green">
                    신고 된 차량번호
                  </th>
                  <td colSpan={3}>
                    <div className="flex items-center">
                      <div className="flex items-center gap-3">
                        <Input size="m" disabled />
                        <Button type="outline" size="m">
                          차량검색
                        </Button>
                      </div>
                      <span className="text-red ml-auto">
                        ※ 차량번호가 맞는지 오타 확인 및 사진비교를 반드시
                        하세요.
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="bg-h-green">
                    신고내용
                  </th>
                  <td colSpan={3}>
                    신고자가 작성한 내용이 표기됩니다.
                    <br />
                    예약하고 왔는데 다른 차량이 연락도 되지 않고 빼주지도 않아서
                    주차를 못했습니다. 너무 불편했으니 확인해서 처리해주세요.
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="bg-h-green">
                    연관사진
                  </th>
                  <td colSpan={3}>
                    <div className="flex items-center gap-[0.8125rem]">
                      <div
                        className="file-thumb"
                        data-tooltip-id="tooltip"
                        data-tooltip-html="2024년 8월 9일<br />금요일 오전 11:39"
                      >
                        <Image
                          src="/images/test/img_thumb.png"
                          alt=""
                          width={292}
                          height={172}
                        />
                        <button
                          type="button"
                          className="file-thumb-btn"
                        ></button>
                      </div>
                      <div
                        className="file-thumb"
                        data-tooltip-id="tooltip"
                        data-tooltip-html="2024년 8월 9일<br />금요일 오전 11:39"
                      >
                        <Image
                          src="/images/test/img_thumb.png"
                          alt=""
                          width={292}
                          height={172}
                        />
                        <button
                          type="button"
                          className="file-thumb-btn"
                        ></button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <p className="h4">신고된 주차장 관련 정보</p>
          <div className="table-basic mt-2">
            <table>
              <colgroup>
                <col width="152px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">신고 된 주차장</th>
                  <td>
                    <div className="flex items-center gap-2">
                      <button type="button">
                        <span className="underline">주차장명표기</span>
                      </button>
                      <span>/</span>
                      <button type="button">
                        <span className="underline">부정주차신고이력 N회</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">주차장 배정/소유</th>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <button type="button">
                          <span className="underline">파트너</span>
                        </button>
                        &#40;서울시 강남구 학동로82길 14-1
                        <button type="button">
                          <IcMap />
                        </button>
                        &#41;
                      </div>
                      <span>/</span>
                      <button type="button">
                        <span className="underline">파트너대분류</span>
                      </button>
                      <span>/</span>
                      <button type="button">
                        <span className="underline">파트너소분류</span>
                      </button>
                      <span>/</span>
                      <button type="button">
                        <span className="underline">부정주차신고이력 N회</span>
                      </button>
                    </div>
                  </td>
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
                  <th scope="row">검토자</th>
                  <td>
                    <span className="text-muted">검토 시 노출</span>
                  </td>
                  <th scope="row">검토일시</th>
                  <td>
                    <span className="text-muted">검토 시 노출</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex mt-6">
        <Button type="black" size="m">
          목록
        </Button>
        <div className="flex items-center gap-2 ml-auto">
          <Button type="black" size="m">
            취소
          </Button>
          <Button type="green" size="m">
            저장
          </Button>
        </div>
      </div>
    </DefaultLayout>
  );
}
