import DefaultLayout from "@pub/layout/DefaultLayout";
import Topbar from "@pub/components/Topbar";

export default function GuideTopbar() {
  return (
    <DefaultLayout>
      <div className="relative grow py-[2.5rem]">
        <h1 className="h1">Guide_Topbar</h1>
        <dl className="flex flex-col gap-8 max-w-[70rem] mt-9">
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Default</dt>
            <dd>
              <Topbar
                checked
                title="Page Name"
                path={[
                  { text: "Home", url: "/" },
                  { text: "Page Name", url: "/" },
                  { text: "Page Name", url: "/" },
                ]}
              />
            </dd>
            <dd>
              <Topbar
                title="Page Name"
                path={[
                  { text: "Home", url: "/" },
                  { text: "Page Name", url: "/" },
                  { text: "Page Name", url: "/" },
                ]}
              />
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">with Tooltip</dt>
            <dd>
              <Topbar
                checked
                title="Page Name"
                tip="Tooltip"
                path={[
                  { text: "Home", url: "/" },
                  { text: "Page Name", url: "/" },
                  { text: "Page Name", url: "/" },
                ]}
              />
            </dd>
            <dd>
              <Topbar
                title="Page Name"
                tip="Tooltip"
                path={[
                  { text: "Home", url: "/" },
                  { text: "Page Name", url: "/" },
                  { text: "Page Name", url: "/" },
                ]}
              />
            </dd>
          </div>
        </dl>
      </div>
    </DefaultLayout>
  );
}
