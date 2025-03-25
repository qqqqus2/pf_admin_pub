"use client";

import React, { useState } from "react";
import Link from "next/link";
import IcStarOff from "@/assets/icons/ico_star_off.svg";
import IcStarOn from "@/assets/icons/ico_star_on.svg";
import IcInfo from "@/assets/icons/ico_circle_info.svg";

// TypeScript interface 제거
// JavaScript에서는 PropTypes를 사용하거나 문서화 주석을 사용할 수 있습니다

export default function Topbar({
    // checked = false,
    title,
    tip,
    path = [{ text: "홈", url: "/" }],
}) {
    // const [bm, setBm] = useState(checked);

    return (
        <div className="topbar">
            <div className="title-box">
                <button>
                    <IcStarOn />
                </button>
                <span className="h3">{title}</span>
                {tip && ( // tip 대신 true를 사용해 항상 렌더링
                    <span data-tooltip-id="tooltip" data-tooltip-html={tip}>
                        <IcInfo />
                    </span>
                )}
            </div>

            <ul className="breadcrumb">
                {path.map((p, i) => (
                    <li key={`${i}-${p.text}`}>
                        {i === path.length - 1 ? (
                            <span className="current">{p.text}</span>
                        ) : (
                            <Link href={p.url}>{p.text}</Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
