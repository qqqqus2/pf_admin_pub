import DefaultLayout from "@pub/layout/DefaultLayout";
import Flag from "@pub/components/Flag";
import Topbar from "@pub/components/Topbar";
import IcInfo from "@/assets/icons/ico_circle_info.svg";

export default function GuideTooltip() {
  return (
    <DefaultLayout>
      <div className="relative grow py-[2.5rem]">
        <h1 className="h1">Guide_Tooltip</h1>
        <dl className="flex flex-col gap-8 max-w-[70rem] mt-9">
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Flag with Tooltip</dt>
            <dd className="flex items-center gap-3">
              <Flag type="gray" label="승인대기" tip="type gray" />
              <Flag type="blue" label="승인완료" tip="type blue" />
              <Flag type="red" label="승인반려" tip="반려 사유" />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Icon with Tooltip</dt>
            <dd className="flex items-center gap-3">
              <span
                data-tooltip-id="tooltip"
                data-tooltip-content="회원가입 및 마이페이지에서 추가정보 입력이 가능하나, 필수입력은 아닙니다."
              >
                <IcInfo />
              </span>
              <span
                data-tooltip-id="tooltip"
                data-tooltip-html={`<img src="/images/logo_pf.png" alt="가이드 이미지" />`}
              >
                <IcInfo />
              </span>
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Title with Tooltip</dt>
            <dd>
              <Topbar
                title="계정신청관리"
                tip={`<ul>
          <li>신청된 계정을 관리할 수 있습니다.</li>
          <li>승인반려 아이콘 마우스오버시 반려사유가 노출됩니다.</li>
          </ul>`}
                path={[
                  { text: "홈", url: "/" },
                  { text: "관리자설정관리", url: "/" },
                  { text: "계정신청관리", url: "/" },
                ]}
              />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Text with Tooltip</dt>
            <dd className="flex items-center gap-3">
              <span
                data-tooltip-id="tooltip"
                data-tooltip-content="회원가입 및 마이페이지에서 추가정보 입력이 가능하나, 필수입력은 아닙니다."
              >
                Tooltip Right
              </span>
              <span
                data-tooltip-id="tooltip"
                data-tooltip-place="bottom"
                data-tooltip-content="회원가입 및 마이페이지에서 추가정보 입력이 가능하나, 필수입력은 아닙니다."
              >
                Tooltip Bootom
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </DefaultLayout>
  );
}
