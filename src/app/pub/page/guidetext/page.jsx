import DefaultLayout from "@pub/layout/DefaultLayout";

export default function GuideText() {
  return (
    <DefaultLayout>
      <div className="relative grow py-[2.5rem]">
        <h1 className="h1">Guide_Text</h1>
        <dl className="flex flex-col gap-8 max-w-[70rem] mt-9">
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Color</dt>
            <dd className="flex items-center gap-3">
              <span className="text-green">text-green</span>
              <span className="text-red">text-red</span>
              <span className="text-muted">text-muted</span>
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Align</dt>
            <dd className="flex flex-col gap-4">
              <p className="text-left">text-left</p>
              <p className="text-center">text-center</p>
              <p className="text-right">text-right</p>
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">
              Font Size - font-size / line-height / font-weight
            </dt>
            <dd className="flex flex-col gap-4">
              <p className="h1">h1 - 26px/30px/bold</p>
              <p className="h2">h2 - 24px/30px/bold</p>
              <p className="h3">h3 - 22px/28px/bold</p>
              <p className="h4">h4 - 20px/28px/bold</p>
            </dd>
            <dd className="flex flex-col gap-4">
              <p className="text-base">text-base - 16px/24px</p>
              <p className="text-sm">text-sm - 14px/20px</p>
              <p className="text-xs">text-xs - 12px/16px</p>
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Font Weight</dt>
            <dd className="flex flex-col gap-4">
              <p className="text-base">Reqular</p>
              <p className="text-base font-medium">Medium / 500</p>
              <p className="text-base font-semibold">Semibold / 600</p>
              <p className="text-base font-bold">Bold / 700</p>
            </dd>
          </div>
        </dl>
      </div>
    </DefaultLayout>
  );
}
