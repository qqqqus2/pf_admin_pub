import DefaultLayout from "@pub/layout/DefaultLayout";
import FormEditor from "@pub/components/Form/Editor";

export default function GuideEditor() {
  return (
    <DefaultLayout>
      <div className="relative grow py-[2.5rem]">
        <h1 className="h1">Guide_Editor</h1>
        <dl className="flex flex-col gap-8 max-w-[70rem] mt-9">
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">FormEditor</dt>
            <dd className="flex flex-col gap-4">
              <FormEditor />
            </dd>
          </div>
        </dl>
      </div>
    </DefaultLayout>
  );
}
