import DefaultLayout from "@pub/layout/DefaultLayout";
import Checkbox from "@pub/components/Form/Check";
import Radio from "@pub/components/Form/Radio";
import Input from "@pub/components/Form/Input";
import Button from "@pub/components/Button";
import SelectBasic from "@pub/components/Form/Select";

export default function GuideCheck() {
    return (
        <DefaultLayout>
            <div className="relative grow py-[2.5rem]">
                <h1 className="h1">Guide_Form_Check</h1>

                <dl className="flex flex-col gap-8 max-w-[70rem] mt-9">
                    <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
                        <dt className="h4">Size - Default</dt>
                        <dd className="grid grid-cols-4 gap-4">
                            <Checkbox label="Check_On" defaultChecked />
                            <Checkbox label="Check_Off" />
                            <Radio name="t1" label="Radio_On" defaultChecked />
                            <Radio name="t1" label="Radio_Off" />
                            <Checkbox
                                label="Check_On_Dis"
                                defaultChecked
                                disabled
                            />
                            <Checkbox label="Check_Off_Dis" disabled />
                            <Radio
                                name="t3"
                                label="Radio_On_Dis"
                                defaultChecked
                                disabled
                            />
                            <Radio name="t3" label="Radio_Off_Dis" disabled />
                            <Checkbox defaultChecked />
                            <Checkbox />
                            <Radio name="t5" defaultChecked />
                            <Radio name="t5" />
                            <Checkbox defaultChecked disabled />
                            <Checkbox disabled />
                            <Radio name="t7" defaultChecked disabled />
                            <Radio name="t7" disabled />
                        </dd>
                    </div>
                    <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
                        <dt className="h4">Size - S</dt>
                        <dd className="grid grid-cols-4 gap-4">
                            <Checkbox
                                label="Check_On_small"
                                size="s"
                                defaultChecked
                            />
                            <Checkbox label="Check_Off_small" size="s" />
                            <Radio
                                name="t2"
                                label="Radio_On_small"
                                size="s"
                                defaultChecked
                            />
                            <Radio name="t2" label="Radio_Off_small" size="s" />
                            <Checkbox
                                label="Check_On_Dis_small"
                                size="s"
                                defaultChecked
                                disabled
                            />
                            <Checkbox
                                label="Check_Off_Dis_small"
                                size="s"
                                disabled
                            />
                            <Radio
                                name="t4"
                                label="Radio_On_Dis_small"
                                size="s"
                                defaultChecked
                                disabled
                            />
                            <Radio
                                name="t4"
                                label="Radio_Off_Dis_small"
                                size="s"
                                disabled
                            />
                            <Checkbox defaultChecked />
                            <Checkbox />
                            <Radio name="t6" size="s" defaultChecked />
                            <Radio name="t6" size="s" />
                            <Checkbox defaultChecked disabled />
                            <Checkbox disabled />
                            <Radio name="t8" size="s" defaultChecked disabled />
                            <Radio name="t8" size="s" disabled />
                        </dd>
                    </div>
                    <div className="flex flex-col gap-6 pb-8 border-b border-b-green">
                        <dt className="h4">with Others</dt>
                        <dd className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <Checkbox />
                                <SelectBasic
                                    placeholder="포인트 지급 구분 선택"
                                    disabled
                                />
                                <Input
                                    placeholder="포인트(숫자)"
                                    disabled
                                    className="w-[5.9375rem]"
                                />
                            </div>
                            <div className="flex items-center gap-3">
                                <Radio name="t9" label="판매" defaultChecked />
                                <div className="flex items-center gap-3">
                                    <Radio name="t9" label="판매중지" />
                                    <Input
                                        placeholder="판매중지사유를 입력하세요."
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Radio
                                    name="t10"
                                    label="제한없음"
                                    defaultChecked
                                />
                                <div className="flex items-center gap-3">
                                    <Radio name="t10" label="제한있음" />
                                    <Input size="m" disabled />
                                    <span>매</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-3">
                                    <Radio
                                        name="t11"
                                        label="회원"
                                        defaultChecked
                                    />
                                    <SelectBasic defaultSelect size="m" />
                                    <Button type="outline" size="m">
                                        조회
                                    </Button>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Radio name="t11" label="주차장" />
                                    <SelectBasic
                                        placeholder="전체"
                                        size="m"
                                        disabled
                                    />
                                    <Button type="outline" size="m" disabled>
                                        조회
                                    </Button>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Radio
                                    name="t12"
                                    label="당일예약"
                                    defaultChecked
                                />
                                <div className="flex items-center gap-3">
                                    <Radio name="t12" label="예약결제" />
                                    <SelectBasic
                                        placeholder="1일"
                                        disabled
                                        className="w-[4.1875rem]"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Radio
                                    name="t13"
                                    label="설정안함"
                                    defaultChecked
                                />
                                <div className="grow flex items-center gap-3">
                                    <Radio name="t13" label="예약결제" />
                                    <Input
                                        placeholder="HTTP://"
                                        disabled
                                        className="grow"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Radio
                                    name="t14"
                                    label="허용안함"
                                    defaultChecked
                                />
                                <div className="grow flex items-center gap-3">
                                    <Radio name="t14" label="허용" />
                                    &#40;
                                    <Radio name="t14-1" label="추천" />
                                    <Radio name="t14-1" label="BEST" />
                                    &#41;
                                </div>
                            </div>
                        </dd>
                    </div>
                </dl>
            </div>
        </DefaultLayout>
    );
}
