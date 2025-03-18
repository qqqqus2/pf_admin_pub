import DefaultLayout from "@pub/layout/DefaultLayout";
import Button from "@pub/components/Button";
import ButtonGroup from "@pub/components/Button/Group";
import IcArrowRight from "@/assets/icons/ico_arrow_right.svg";
import IcExcel from "@/assets/icons/ico_excel.svg";
import IcFile from "@/assets/icons/ico_file.svg";

export default function GuideButton() {
  return (
    <DefaultLayout>
      <div className="relative grow py-[2.5rem]">
        <h1 className="h1">Guide_Button</h1>
        <dl className="flex flex-col gap-8 max-w-[70rem] mt-9">
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Size - L</dt>
            <dd className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Button type="green" size="l">
                  Green
                </Button>
                <Button type="black" size="l">
                  Black
                </Button>
                <Button type="blue" size="l">
                  Blue
                </Button>
                <Button type="gray" size="l">
                  Gray
                </Button>
                <Button type="outline" size="l">
                  Outline
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <Button type="green" size="l" disabled>
                  Green
                </Button>
                <Button type="black" size="l" disabled>
                  Black
                </Button>
                <Button type="blue" size="l" disabled>
                  Blue
                </Button>
                <Button type="gray" size="l" disabled>
                  Gray
                </Button>
                <Button type="outline" size="l" disabled>
                  Outline
                </Button>
              </div>
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Size - M</dt>
            <dd className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Button type="green" size="m">
                  Green
                </Button>
                <Button type="black" size="m">
                  Black
                </Button>
                <Button type="blue" size="m">
                  Blue
                </Button>
                <Button type="gray" size="m">
                  Gray
                </Button>
                <Button type="outline" size="m">
                  Outline
                </Button>
                <Button type="outline" size="m">
                  <IcExcel />
                  Outline
                </Button>
                <Button type="outline" size="m">
                  <IcFile />
                  Outline
                </Button>
                <Button type="outline" size="m">
                  Outline
                  <IcArrowRight />
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <Button type="green" size="m" disabled>
                  Green
                </Button>
                <Button type="black" size="m" disabled>
                  Black
                </Button>
                <Button type="blue" size="m" disabled>
                  Blue
                </Button>
                <Button type="gray" size="m" disabled>
                  Gray
                </Button>
                <Button type="outline" size="m" disabled>
                  Outline
                </Button>
                <Button type="outline" size="m" disabled>
                  <IcExcel />
                  Outline
                </Button>
                <Button type="outline" size="m" disabled>
                  <IcFile />
                  Outline
                </Button>
                <Button type="outline" size="m" disabled>
                  Outline
                  <IcArrowRight />
                </Button>
              </div>
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Size - S</dt>
            <dd className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Button type="green" size="s">
                  Green
                </Button>
                <Button type="black" size="s">
                  Black
                </Button>
                <Button type="blue" size="s">
                  Blue
                </Button>
                <Button type="gray" size="s">
                  Gray
                </Button>
                <Button type="outline" size="s">
                  Outline
                </Button>
                <Button type="outline" size="s">
                  <IcExcel />
                  Outline
                </Button>
                <Button type="outline" size="s">
                  <IcFile />
                  Outline
                </Button>
                <Button type="outline" size="s">
                  Outline
                  <IcArrowRight />
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <Button type="green" size="s" disabled>
                  Green
                </Button>
                <Button type="black" size="s" disabled>
                  Black
                </Button>
                <Button type="blue" size="s" disabled>
                  Blue
                </Button>
                <Button type="gray" size="s" disabled>
                  Gray
                </Button>
                <Button type="outline" size="s" disabled>
                  Outline
                </Button>
                <Button type="outline" size="s" disabled>
                  <IcExcel />
                  Outline
                </Button>
                <Button type="outline" size="s" disabled>
                  <IcFile />
                  Outline
                </Button>
                <Button type="outline" size="s" disabled>
                  Outline
                  <IcArrowRight />
                </Button>
              </div>
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Button Group</dt>
            <dd className="flex items-center gap-3">
              <ButtonGroup />
            </dd>
          </div>
        </dl>
      </div>
    </DefaultLayout>
  );
}
