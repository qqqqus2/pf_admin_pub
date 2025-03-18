import DefaultLayout from "@pub/layout/DefaultLayout";
import Input from "@pub/components/Form/Input";
import Text from "@pub/components/Form/Text";
import InputSearch from "@pub/components/Form/InputSearch";

export default function GuideInput() {
  return (
    <DefaultLayout>
      <div className="relative grow py-[2.5rem]">
        <h1 className="h1">Guide_Form_Input</h1>
        <dl className="flex flex-col gap-8 max-w-[70rem] mt-9">
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Size - M &#40;196px&#41;</dt>
            <dd className="grid grid-cols-4 gap-4">
              <Input size="m" defaultValue="입력정보" />
              <Input size="m" placeholder="입력정보" />
              <Input size="m" defaultValue="입력정보" disabled />
              <Input
                size="m"
                defaultValue="입력정보"
                error="입력정보를 확인해주세요."
              />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Size - L &#40;늘어남&#41;</dt>
            <dd className="grid grid-cols-2 gap-4">
              <Input size="l" defaultValue="입력정보" />
              <Input size="l" placeholder="입력정보" />
              <Input size="l" defaultValue="입력정보" disabled />
              <Input
                size="l"
                defaultValue="입력정보"
                error="입력정보를 확인해주세요."
              />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Search - M / L</dt>
            <dd className="grid grid-cols-2 gap-4">
              <InputSearch size="m" placeholder="신청접수번호를 입력하세요" />
              <InputSearch size="l" placeholder="신청접수번호를 입력하세요" />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Textarea</dt>
            <dd className="grid grid-cols-3 gap-4">
              <Text rows={3} defaultValue="입력하세요" />
              <Text rows={3} placeholder="입력하세요" />
              <Text rows={3} defaultValue="입력정보" disabled />
            </dd>
          </div>
        </dl>
      </div>
    </DefaultLayout>
  );
}
