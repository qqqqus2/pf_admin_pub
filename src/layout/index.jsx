"use client";

// import type { Metadata } from "next";
import { useEffect, useMemo, useState } from "react";
import { usePopupStore, useUserStore } from "@/store";
import { usePathname, useRouter } from "next/navigation";
import { fetchMenuList, initCheck, requsetLogout } from "@/api/account/login";
import { poDummyMenuList } from "@/constants/dummyMenuList";
import { menuTitle } from "@/constants/menuTitle";
import usePageHook from "@/hooks/usePageHook";

import "moment/locale/ko";

import Sidebar from "@/layout/Sidebar";

import IcAlarm from "@/assets/icons/ico_alarm.svg";
import IcSnbOpen from "@/assets/icons/ico_snb_open.svg";
import IcSnbClose from "@/assets/icons/ico_snb_close.svg";

import IcSnb01 from "@/assets/icons/sidebar/ico_snb_01.svg";
import IcSnb02 from "@/assets/icons/sidebar/ico_snb_02.svg";
import IcSnb03 from "@/assets/icons/sidebar/ico_snb_03.svg";
import IcSnb04 from "@/assets/icons/sidebar/ico_snb_04.svg";
import IcSnb05 from "@/assets/icons/sidebar/ico_snb_05.svg";
import IcSnb06 from "@/assets/icons/sidebar/ico_snb_06.svg";
import IcSnb07 from "@/assets/icons/sidebar/ico_snb_07.svg";
import IcSnb08 from "@/assets/icons/sidebar/ico_snb_08.svg";
import IcSnb09 from "@/assets/icons/sidebar/ico_snb_09.svg";
import IcSnb10 from "@/assets/icons/sidebar/ico_snb_10.svg";
import IcSnb11 from "@/assets/icons/sidebar/ico_snb_11.svg";
import IcSnb12 from "@/assets/icons/sidebar/ico_snb_12.svg";
import IcSnb14 from "@/assets/icons/sidebar/ico_snb_14.svg";
import IcSnb15 from "@/assets/icons/sidebar/ico_snb_15.svg";

import Alert from "@/components/Modal/Alert";
import Modal from "@/components/Modal";
import Topbar from "@/components/Topbar";
import Loading from "@/components/Loading";
import { RESPONSE_CODE } from "@/constants/api";
import TermsAgreement from "@/features/common-modal/TermsAgreement";
import RegisterAccessIp from "@/features/common-modal/RegisterAccessIp";
import ChangePwd from "@/features/common-modal/ChangePwd";

// export const metadata: Metadata = {
// 	title: "ParkingFreinds CMS",
// 	description: "CMS",
// };

// // 서브 메뉴의 타입
// interface SubMenu {
// 	title: string;
// 	url: string;
// }

// // 메뉴의 타입
// interface Menu {
// 	title: string;
// 	icon: typeof IcSnb08;
// 	url?: string;
// 	sub?: SubMenu[]; // 서브 메뉴는 선택적
// }

// // 전체 메뉴 카테고리 타입
// interface MenuCategory {
// 	cate: string;
// 	menus: Menu[];
// }

export default function Layout({
	children,
}
// : Readonly<{
// 	children: React.ReactNode;
// }>
) {
	const [snbOpen, setSnbOpen] = useState(true);
	const pathname = usePathname();
	const { user, logout, accessToken, setAccessToken } = useUserStore();
	const { tokenChecked, setTokenChecked, menuList, setMenuList } = useUserStore();
	const { openModal, openAlert } = usePopupStore()
	const { pageMoveToLogin } = usePageHook();

	const title = useMemo(() => {
		// let menu: Menu | undefined = menuList.find(
		let menu = menuTitle.find(v => pathname === v.menuLink);

		return menu?.name || '';
	}, [pathname]);

	const onClickLogout = async () => {
		/* #TODO: 임시로그인 사용자 로그아웃 처리 */
		if (process.env.NEXT_PUBLIC_ENV === 'local') {
			logout()
			pageMoveToLogin()
			return
		}
		/* // #TODO: 임시로그인 사용자 로그아웃 처리 */

		requsetLogout({ username: user.username })
		logout()
		pageMoveToLogin()
	};



	useEffect(() => {
		console.log(`tokenChecked: ${tokenChecked}, accessToken: ${accessToken}`)
		if (!accessToken) {
			onClickLogout()
		} 
		else if (!tokenChecked) {
			authCheck()
		}
	}, [tokenChecked, accessToken])

	/**
	 * 관리자 이용 가능 여부 체크
	 */
	const authCheck = async () => {
		/* #TODO: 임시로그인 사용자 권한 체크 */
		if (process.env.NEXT_PUBLIC_ENV === 'local') return
		// return
		/* // #TODO: 임시로그인 사용자 권한 체크 */

		// console.log(user) // #임시

		// 1. tokenCheck // 화면 최초 로딩 시 인증정보 유효성 검토
		console.log(`tokenCheck:: ${tokenChecked}`)
		if (!tokenChecked) {
			await tokenCheck()
		}

		privacyAgreeCheck()

		// 2. 개인정보 보호서약 동의여부 체크
		async function privacyAgreeCheck() {
			console.log(`privacyAgreeCheck:: ${user.privacyAgreeYn}`)
			if (user.privacyAgreeYn !== 'Y') {
				return openModal(true, {
					size: 'm',
					contents: <TermsAgreement onClickAgree={ipCheck}/>,
					showIcXmark: false,
				})
			}

			ipCheck()
		}

		// 3. 접속 IP 등록여부 체크 // #TODO:
		async function ipCheck() {
			console.log(`ipCheck:: ${user.accessIpYn}`)
			// if (user.accessIpYn !== 'Y') {
			// 	return openModal(true, {
			// 		size: 'm',
			// 		contents: <RegisterAccessIp onRegister={pwdCheck} />,
			// 		showIcXmark: false,
			// 	})
			// }

			pwdCheck()
		}

		// 4. 6개월에 한 번 비밀번호 변경 팝업 자동 노출
		async function pwdCheck() {
			console.log(`pwdCheck:: ${user.changePwdYn}`)
			if (user.changePwdYn !== 'Y') { // TODO !== 'Y'
				return openModal(true, {
					size: 'm',
					contents: <ChangePwd 
						onConfirm={getMenuList} 
						onCancel={getMenuList}
					/>,
					showIcXmark: false,
				})
			}

			getMenuList()
		}
		
		// 5. 사용자 메뉴 권한 체크 // #TODO:
		async function getMenuList() {
			// console.log(`getMenuList:: `)
			const res = await fetchMenuList()
			if (res.code === RESPONSE_CODE.SUCCESS) {
				// console.log(`fetchMenuList, ${res}`)
				const resList = res.data.list

				const userMenuList = resList.filter(v => v.depth === 1).map(v => ({ ...v, sub: [] }))
				resList.forEach(v => {
					let parentMenu = userMenuList.find(m => m.id === v.parentId && v.id !== v.parentId)
					// console.log(parentMenu)
					
					if(!parentMenu) {
						return console.log(`parentMenu not found - name:${v.name}, parentId: ${v.parentId}`)
					}
					parentMenu.sub.push(v)
				})
				// console.log(userMenuList)

				setMenuList(userMenuList)
				return 
			}
			
			openAlert(res.message || '알 수 없는 오류가 발생했습니다.')
		}

	}

	// 화면 최초 로딩 시 인증정보 유효성 검토
	const tokenCheck = async () => {
		const res = await initCheck({ accessToken })
		if (res.code !== RESPONSE_CODE.SUCCESS) {
			console.log(`tokenCheck, ${res}`) // #TODO Alert
			return onClickLogout()
		}

		if (res.data.accessToken === '') {
			console.log(`tokenCheck, ${res}`) // #TODO Alert
			return onClickLogout()
		}

		setAccessToken(res.data.accessToken)
		setTokenChecked(true)
	}

	/**
	 * 비밀번호 변경 클릭 시
	 */
	const onClickChangePwd = () => {
		openModal(true, {
			size: 'm',
			contents: <ChangePwd />,
			showIcXmark: false,
		})		
	}


	return (
		<div className="root-container">
			{/* Sidebar */}
			<Sidebar 
				menuList={
					process.env.NEXT_PUBLIC_ENV === 'local' ? poDummyMenuList : menuList
				} 
				open={snbOpen} 
			/>

			{/*  */}
			<main className="grow">
				{/* header */}
				<header className="header">
					{/* SNB 열고 닫기 */}
					<button
						type="button"
						className="btn-snb"
						onClick={() => setSnbOpen((prev) => !prev)}
					>
						{snbOpen ? <IcSnbClose /> : <IcSnbOpen />}
					</button>

					{/* 사용자 정보, 로그인, 알림, .. */}
					<div className="flex items-center gap-2 ml-auto">
						<p className="user">홍길동님</p>
						<button className="btn-header" onClick={onClickLogout}>
							로그아웃
						</button>
						<button className="btn-header" onClick={onClickChangePwd}>비밀번호 변경</button>
						<button className="btn-header btn-alarm" data-cnt="99+">
							<IcAlarm />
						</button>
					</div>
				</header>
				{/* // header */}

				{/* Contents */}
				<div className="overflow-y-hidden flex flex-col h-[calc(100vh-3rem)] px-[2.5rem] pb-[2.5rem] bg-[#F7F9FC]">
					{/* #TODO: */}
					<Topbar title={title} />
					<div className="overflow-y-auto pr-1 flex flex-col h-full">
						{children}
					</div>
					{/* Loading */}
					<Loading />
				</div>
			</main>

			{/* Alert, Confirm */}
			<Alert />
			{/* Modal */}
			<Modal />
		</div>
	);
}
