import Image from "next/image";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";
import Button from "@pub/components/Button";
import Input from "@pub/components/Form/Input";
import File from "@pub/components/Form/File";
import Toggle from "@pub/components/Form/Toggle";
import SelectBasic from "@pub/components/Form/Select";
import Text from "@pub/components/Form/Text";
import FormEditor from "@pub/components/Form/Editor";
import Radio from "@pub/components/Form/Radio";
import FormDateRange from "@pub/components/Form/DateRange";
import IcUpload from "@/assets/icons/ico_upload.svg";

export default function BO042004() {
  return (
    <DefaultLayout>
      <Topbar
        title="이벤트등록"
        path={[
          { text: "홈", url: "/" },
          { text: "전시컨텐츠관리", url: "/" },
          { text: "이벤트관리", url: "/" },
          { text: "이벤트등록", url: "/" },
        ]}
      />

      <div className="box-cont">
        <div>
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
                  <th scope="row">게시물번호</th>
                  <td>
                    <div className="flex items-center gap-2">
                      <span>EG000001</span>
                      <Button type="gray" size="s">
                        참여자 정보
                      </Button>
                    </div>
                  </td>
                  <th scope="row">사용여부</th>
                  <td>
                    <Toggle />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">이벤트 기간</span>
                  </th>
                  <td colSpan={3}>
                    <FormDateRange time />
                  </td>
                </tr>
                <tr>
                  <th scope="row">유형</th>
                  <td colSpan={3}>
                    <div className="flex items-center gap-3">
                      <Radio name="t1" label="일반" defaultChecked />
                      <Radio name="t1" label="출석체크" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">대상</span>
                  </th>
                  <td colSpan={3}>
                    <div className="flex items-center gap-3">
                      <Radio name="t2" label="전체" defaultChecked />
                      <Radio name="t2" label="파트너" />
                      <Radio name="t2" label="관리자" />
                      <div className="flex items-center gap-2">
                        <SelectBasic
                          placeholder="대분류를 선택하세요"
                          size="m"
                          disabled
                        />
                        <SelectBasic
                          placeholder="소분류를 선택하세요"
                          size="m"
                          disabled
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">제목</span>
                  </th>
                  <td colSpan={3}>
                    <Input size="l" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">내용</span>
                    <p className="mt-2 text-green">이미지 사이즈 000*000px</p>
                  </th>
                  <td colSpan={3}>
                    <FormEditor />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">템플릿</span>
                  </th>
                  <td colSpan={3}>
                    <ul className="grid grid-cols-5 gap-4">
                      <li className="flex flex-col gap-2">
                        <Radio name="t3" label="봄" defaultChecked />
                        <div className="overflow-hidden rounded">
                          <Image
                            src="/images/test/img_t1.jpg"
                            alt=""
                            width={388}
                            height={772}
                          />
                        </div>
                      </li>
                      <li className="flex flex-col gap-2">
                        <Radio name="t3" label="여름" />
                        <div className="overflow-hidden rounded">
                          <Image
                            src="/images/test/img_t2.jpg"
                            alt=""
                            width={388}
                            height={772}
                          />
                        </div>
                      </li>
                      <li className="flex flex-col gap-2">
                        <Radio name="t3" label="가을" />
                        <div className="overflow-hidden rounded">
                          <Image
                            src="/images/test/img_t3.jpg"
                            alt=""
                            width={388}
                            height={772}
                          />
                        </div>
                      </li>
                      <li className="flex flex-col gap-2">
                        <Radio name="t3" label="겨울" />
                        <div className="overflow-hidden rounded">
                          <Image
                            src="/images/test/img_t4.jpg"
                            alt=""
                            width={388}
                            height={772}
                            priority
                          />
                        </div>
                      </li>
                      <li className="flex flex-col gap-2">
                        <Radio name="t3" label="직접등록" />
                        <label className="overflow-hidden grow flex flex-col justify-center items-center bg-[#F4F5F8] rounded">
                          <input type="file" hidden />
                          <IcUpload />
                          <p className="mt-2 text-muted text-sm font-medium">
                            393x783
                          </p>
                        </label>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="text-req">유의사항</span>
                  </th>
                  <td colSpan={3}>
                    <Text rows={3} placeholder="안내, 유의사항 입력" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">목록 이미지</th>
                  <td colSpan={3}>
                    <div className="flex items-center">
                      <File />
                      <p className="ml-auto text-green">
                        이미지 사이즈 000*000px
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">등록자</th>
                  <td>김관리&#40;adminid&#41;</td>
                  <th scope="row">등록일시</th>
                  <td>
                    <span className="text-muted">등록 후 노출</span>
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
