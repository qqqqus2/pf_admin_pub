"use client";

import { useState } from "react";
import Sidebar from "@pub/layout/Sidebar";
import IcAlarm from "@/assets/icons/ico_alarm.svg";
import IcSnbOpen from "@/assets/icons/ico_snb_open.svg";
import IcSnbClose from "@/assets/icons/ico_snb_close.svg";
import IcRefresh from "@/assets/icons/ico_refresh.svg";

export default function DefaultLayout({ home = false, children }) {
    const [snbOpen, setSnbOpen] = useState(true);

    return (
        <div className="root-container">
            <Sidebar open={snbOpen} />
            <main className="grow">
                <header className="header">
                    <button
                        type="button"
                        className="btn-snb"
                        onClick={() => setSnbOpen((prev) => !prev)}
                    >
                        {snbOpen ? <IcSnbClose /> : <IcSnbOpen />}
                    </button>
                    {home && (
                        <div className="flex items-center gap-2 ml-8">
                            <span className="h3">2024년 11월 09일</span>
                            <button type="button" className="p-1">
                                <IcRefresh />
                            </button>
                        </div>
                    )}
                    <div className="flex items-center gap-2 ml-auto">
                        <p className="user">홍길동님</p>
                        <button className="btn-header">로그아웃</button>
                        <button className="btn-header">비밀번호 변경</button>
                        <button className="btn-header btn-alarm" data-cnt="99+">
                            <IcAlarm />
                        </button>
                    </div>
                </header>
                <div className="overflow-y-hidden relative flex flex-col h-[calc(100vh-3rem)] px-[2.5rem] pb-[2.5rem] bg-[#F7F9FC]">
                    {children}
                </div>
            </main>
        </div>
    );
}
