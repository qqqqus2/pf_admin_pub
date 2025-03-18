import DefaultLayout from "@pub/layout/DefaultLayout";
import FormDate from "@pub/components/Form/Date";
import FormDateRange from "@pub/components/Form/DateRange";
import FormTime from "@pub/components/Form/Time";
import FormTimeRange from "@pub/components/Form/TimeRange";

export default function GuideDate() {
  return (
    <DefaultLayout>
      <div className="relative grow py-[2.5rem]">
        <h1 className="h1">Guide_Form_Date/Time</h1>
        <dl className="flex flex-col gap-8 max-w-[70rem] mt-9">
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Date</dt>
            <dd className="grid grid-cols-4 gap-4">
              <FormDate selected={new Date()} />
              <FormDate placeholderText="2024-10-30" />
              <FormDate selected={new Date()} disabled />
              <FormDate placeholderText="2024-10-30" disabled />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Date with Time</dt>
            <dd className="grid grid-cols-4 gap-4">
              <FormDate selected={new Date()} time />
              <FormDate placeholderText="2024-10-30 오전 09:40" />
              <FormDate selected={new Date()} time disabled />
              <FormDate placeholderText="2024-10-30 오전 09:40" disabled />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Date Range</dt>
            <dd className="grid grid-cols-2 gap-4">
              <FormDateRange />
              <FormDateRange disabled />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Date Range with Time</dt>
            <dd className="grid grid-cols-2 gap-4">
              <FormDateRange time />
              <FormDateRange time disabled />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Time</dt>
            <dd className="grid grid-cols-4 gap-4">
              <FormTime />
              <FormTime disabled />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Time Range</dt>
            <dd className="grid grid-cols-2 gap-4">
              <FormTimeRange />
              <FormTimeRange disabled />
            </dd>
          </div>
        </dl>
      </div>
    </DefaultLayout>
  );
}
