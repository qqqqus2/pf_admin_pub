import DefaultLayout from "@pub/layout/DefaultLayout";
import Flag from "@pub/components/Flag";

export default function GuideFlag() {
  return (
    <DefaultLayout>
      <div className="relative grow py-[2.5rem]">
        <h1 className="h1">Guide_Flag</h1>
        <dl className="flex flex-col gap-8 max-w-[70rem] mt-9">
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Size - L&#40;Default&#41; - H32</dt>
            <dd className="flex items-center gap-3">
              <Flag type="gray" label="승인대기" />
              <Flag type="blue" label="승인완료" />
              <Flag type="red" label="승인반려" />
              <Flag type="green" label="승인" />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Size - M - H26</dt>
            <dd className="flex items-center gap-3">
              <Flag type="gray" size="m" label="확인요청" />
              <Flag type="blue" size="m" label="승인" />
              <Flag type="red" size="m" label="반려" />
              <Flag type="green" size="m" label="정산확정" />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Size - S - H18</dt>
            <dd className="flex items-center gap-3">
              <Flag type="gray" size="s" label="확인요청" />
              <Flag type="blue" size="s" label="승인" />
              <Flag type="red" size="s" label="반려" />
              <Flag type="green" size="s" label="정산확정" />
            </dd>
            <dd className="flex items-center gap-3">
              <Flag type="black" size="s" label="Black" />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">with Tooltip</dt>
            <dd className="flex items-center gap-3">
              <Flag type="gray" label="승인대기" tip="type gray" />
              <Flag type="blue" label="승인완료" tip="type blue" />
              <Flag type="red" label="승인반려" tip="type red" />
              <Flag type="green" label="승인" tip="type green" />
            </dd>
          </div>
        </dl>
      </div>
    </DefaultLayout>
  );
}
