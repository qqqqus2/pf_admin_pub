import Image from "next/image";
import DefaultLayout from "@pub/layout/DefaultLayout";
import Toggle from "@pub/components/Form/Toggle";
import File from "@pub/components/Form/File";
import FileDrop from "@pub/components/Form/FileDrop";
import FileDropThumb from "@pub/components/Form/FileDropThumb";
import SelectBasic from "@pub/components/Form/Select";
import SelectMulti from "@pub/components/Form/SelectMulti";
import IcDoc from "@/assets/icons/ico_doc.svg";

export default function GuideForm() {
  return (
    <DefaultLayout>
      <div className="relative grow py-[2.5rem]">
        <h1 className="h1">Guide_Form</h1>
        <dl className="flex flex-col gap-8 max-w-[70rem] mt-9">
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Toggle</dt>
            <dd className="grid grid-cols-4 gap-4">
              <Toggle />
              <Toggle checked={false} />
              <Toggle disabled />
              <Toggle checked={false} disabled />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Toggle - With Label</dt>
            <dd className="grid grid-cols-4 gap-4">
              <Toggle label={["공유", "휴식"]} />
              <Toggle label={["공유", "휴식"]} checked={false} />
              <Toggle label={["공유", "휴식"]} disabled />
              <Toggle label={["공유", "휴식"]} checked={false} disabled />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Select</dt>
            <dd className="grid grid-cols-4 gap-4">
              <SelectBasic defaultSelect />
              <SelectBasic />
              <SelectBasic defaultSelect disabled />
              <SelectBasic defaultSelect error />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Select - Multiple</dt>
            <dd className="grid grid-cols-4 gap-4">
              <SelectMulti defaultSelect />
              <SelectMulti />
              <SelectMulti defaultSelect disabled />
              <SelectMulti defaultSelect error />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Select - Multiple & Search</dt>
            <dd className="grid grid-cols-4 gap-4">
              <SelectMulti search defaultSelect />
              <SelectMulti search />
              <SelectMulti search defaultSelect disabled />
              <SelectMulti search defaultSelect error />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Download / Upload</dt>
            <dd className="flex flex-col gap-6">
              <a href="/images/logo_pf.png" download className="file-down">
                logo_pf.png
              </a>
              <File label="이미지 업로드" className="grow" />
              <div className="flex items-center gap-[0.8125rem]">
                <div className="file-thumb">
                  <Image
                    src="/images/test/img_thumb.png"
                    alt=""
                    width={292}
                    height={172}
                  />
                  <button type="button" className="file-thumb-btn"></button>
                </div>
                <div className="file-thumb bg-[#DEE4EE]">
                  <IcDoc className="self-center" />
                  <button type="button" className="file-thumb-btn"></button>
                </div>
                <FileDropThumb />
              </div>
              <FileDrop />
            </dd>
          </div>
        </dl>
      </div>
    </DefaultLayout>
  );
}
