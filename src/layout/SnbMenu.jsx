"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import IcCate from "@/assets/icons/sidebar/ico_cate_arrow.svg";
import IcSnb01 from "@/assets/icons/sidebar/ico_snb_01.svg";
import IcSnb02 from "@/assets/icons/sidebar/ico_snb_02.svg";
import IcSnb03 from "@/assets/icons/sidebar/ico_snb_03.svg";
import IcSnb04 from "@/assets/icons/sidebar/ico_snb_04.svg";
import IcSnb05 from "@/assets/icons/sidebar/ico_snb_05.svg";
import IcSnb06 from "@/assets/icons/sidebar/ico_snb_06.svg";
// import IcSnb07 from "@/assets/icons/sidebar/ico_snb_07.svg";
import IcSnb08 from "@/assets/icons/sidebar/ico_snb_08.svg";
// import IcSnb09 from "@/assets/icons/sidebar/ico_snb_09.svg";
// import IcSnb10 from "@/assets/icons/sidebar/ico_snb_10.svg";
// import IcSnb11 from "@/assets/icons/sidebar/ico_snb_11.svg";
// import IcSnb12 from "@/assets/icons/sidebar/ico_snb_12.svg";
import IcSnb14 from "@/assets/icons/sidebar/ico_snb_14.svg";
import IcSnb15 from "@/assets/icons/sidebar/ico_snb_15.svg";

export default function SnbMenu({ 
  menu,
  opened1depth,
  setOpened1depth,
}) {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const menuIcon = {
    'CUSTOMER000': <IcSnb02 />, // 사용자관리
    'PATNER000': <IcSnb03 />,   // 파트너/시설관리
    'SERVICES000': <IcSnb04 />, // 전시/컨텐츠관리
    'COUPOIN000': <IcSnb14 />,  // 쿠폰/포인트관리
    'INQUIRY000': <IcSnb05 />,  // 문의관리
    'HISTORY000': <IcSnb15 />,  // 이력관리
    'FINANCE000': <IcSnb06 />,  // 정산관리
    'SETTING000': <IcSnb08 />, // 관리자설정관리
  }

  const movePage = (url) => {
    url.startsWith("/bo/test") || url.startsWith("/pub")
      ? window.open(url, "_blank", "")
      : router.push(url);
  };

  const onClickMenu = (menu) => {
    setOpened1depth(prev => prev === menu.menuCode ? '' : menu.menuCode)
    
    if (menu.menuLink) {
      movePage(menu.menuLink);
    }
  };

  const onClickSubMenu = (menu) => {
    if (menu.menuLink) {
      movePage(menu.menuLink);
    }
  };

  return (
    <li>
      <button
        className={`menu-item ${menu.menuCode === opened1depth ? "open" : ""}`}
        onClick={() => onClickMenu(menu)}
      >
        <span className="menu-item-icon">{menuIcon[menu.menuCode]}</span>
        <span className="menu-item-tit">{menu.name}</span>
        {menu.sub ? <IcCate className="menu-item-arrow" /> : ""}
      </button>

      {menu.sub && (
        <div className="sub-menu">
          <div className="overflow-hidden">
            <ul>
              {menu.sub.map((s) => (
                <li key={s.name}>
                  {/* active class: selected */}
                  <button
                    className="sub-item"
                    onClick={() => onClickSubMenu(s)}
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
}
