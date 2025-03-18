import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import DefaultLayout from "@pub/layout/DefaultLayout";

export default function GuideTab() {
  return (
    <DefaultLayout>
      <div className="relative grow py-[2.5rem]">
        <h1 className="h1">Guide_Tab</h1>
        <dl className="flex flex-col gap-8 max-w-[70rem] mt-9">
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">Default</dt>
            <dd className="flex items-center gap-3">
              <TabGroup className="tab-basic">
                <TabList>
                  <Tab>Tab 01</Tab>
                  <Tab>Tab 02</Tab>
                  <Tab>Tab 03</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>Content - Tab 01</TabPanel>
                  <TabPanel>Content - Tab 02</TabPanel>
                  <TabPanel>Content - Tab 03</TabPanel>
                </TabPanels>
              </TabGroup>
            </dd>
          </div>
          <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
            <dt className="h4">초기 선택 탭 - defaultIndex</dt>
            <dd className="flex items-center gap-3">
              <TabGroup className="tab-basic" defaultIndex={2}>
                <TabList>
                  <Tab>Tab 01</Tab>
                  <Tab>Tab 02</Tab>
                  <Tab>Tab 03</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>Content - Tab 01</TabPanel>
                  <TabPanel>Content - Tab 02</TabPanel>
                  <TabPanel>Content - Tab 03</TabPanel>
                </TabPanels>
              </TabGroup>
            </dd>
          </div>
        </dl>
      </div>
    </DefaultLayout>
  );
}
