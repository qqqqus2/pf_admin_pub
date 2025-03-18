'use client'

// import type { Metadata } from "next";
import Script from "next/script";

import "react-datepicker/dist/react-datepicker.css";
import "react-quill-new/dist/quill.snow.css";
import "@/assets/scss/index.scss";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { menuTitle } from "@/constants/menuTitle";

// export const metadata: Metadata = {
// 	title: "ParkingFreinds",
// 	description: "ParkingFreinds",
// };

// export const metadata = {
// 	title: "ParkingFreinds Admin",
// 	description: "ParkingFreinds Admin",
// };

export default function RootLayout({
	children,
}
// : Readonly<{
// 	children: React.ReactNode;
// }>
) {
	const pathname = usePathname();

	const title = useMemo(() => {
		let menu = menuTitle.find(v => pathname === v.menuLink);
		return menu?.name || 'ParkingFreinds Admin';
	}, [pathname]);
	
	return (
		<html lang="en">
			<head>
				<title>{title}</title>
				{/* 네이버 지도 */}
				<Script src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=pcrrty836m" async={false}></Script> 
				{/* 카카오 우편번호 찾기 */}
				<Script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" async={false}></Script> 
			</head>
			<body>
				{children}
			</body>
		</html>
	);
}
