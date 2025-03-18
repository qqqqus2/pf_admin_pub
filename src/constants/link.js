import { MENU_LINK } from "./menuTitle"

/**
 * 링크
 * 페이지 이동 혹은 DRAWER, MODAL 등 오픈
 * 오픈 후 스크립트 동작 필요한 케이스도 존재
 */
const LINK = Object.freeze({
    NAVER_MAP: '주차장 지도 새 브라우저',
    SEARCH_CAR: '차량검색 외부페이지',
    DASHBOARD: '태블로 대시보드 페이지',
    PAGE: {
        CONTRACT_DETAIL: `${MENU_LINK.PARTNER}/:id?tab=contract`, // BO031003: 계약상세 > 계약조회(탭)
        CONTRACT_DETAIL_PARTNER: `${MENU_LINK.PARTNER}/:id?tab=partnerAdmin`, // BO031004: 계약상세 > 파트너계정관리탭(목록) > 파트너 상세 패널
        CONTRACT_DETAIL_PARKING_LOT: `${MENU_LINK.PARTNER}/:id?tab=parkingLot`, // BO031007: 계약상세 > 주차장등록관리탭(목록) > 주차장 상세화면
        CONTRACT_DETAIL_ASSIGNED: `${MENU_LINK.PARTNER}/:id?tab=assigner`, // BO031018: 계약상세 > 배정자조회탭(목록) > 배정자 상세 패널
        PARKING_TICKET_DETAIL: `${MENU_LINK.PARTNER}/:id?tab=parkingLot`, // BO031007: 계약상세 > 주차장등록관리탭(목록) > 주차장 상세화면 > 주차권 상세 패널
        SUGGEST_DETAIL: `${MENU_LINK.REPORT}/:id`, // 제보관리 상세
        INQUIRY_DETAIL: '문의관리 상세',
        ASSIGNEE_DETAIL: '공유신청 상세',
        SUGGEST_DETAIL: '제보관리 상세'
    },
    DRAWER: {
        USER_DETAIL: MENU_LINK.USER, // BO021003: 회원조회
        INQUIRY_DETAIL: MENU_LINK.INQUIRY, // BO062004: 문의관리조회
    },
    MODAL: {
        USER_SEARCH: '회원 간편 조회 팝업',
    }
})

export default LINK