export const MENU_LINK = {
    BO_DASHBOARD: '/bo',
    USER: '/bo/user/user',
    INQUIRY: '/bo/inquiry/one-on-one',
    SHARING_REQUEST: "/bo/inquiry/sharing-request",
    ILLEGAL_PARKING_REPORT: "/bo/inquiry/illegal-parking-report",
    PARTNER: '/bo/partner-facility/partner',
    ASSIGNED: "/bo/partner-facility/assigned",
    PAYMENT: '/bo/payment/payment',
    ACCOUNT: '/bo/admin/account',
    NOTICE: "/bo/exhibit-content/notice",
    REPORT: "/bo/inquiry/report"
}

export const menuTitle = [
    { name: "홈", menuLink: MENU_LINK.BO_DASHBOARD },

    // 사용자관리
    { name: "회원관리", menuLink: MENU_LINK.USER,
        tip: '일반회원 정보를 조회하고 관리합니다. 배정자관리는 별도 메뉴로 확인하세요.',
    },
    
    // 파트너/시설관리
    { name: "파트너관리", menuLink: MENU_LINK.PARTNER,
        tip: '',
    },
    { name: "배정자관리", menuLink: MENU_LINK.ASSIGNED,
        tip: '',
    },
    { name: "시설관리", menuLink: "/bo/partner-facility/facility",
        tip: '',
    },
    { name: "주차신고관리", menuLink: "/bo/partner-facility/parking-report",
        tip: '',
    },

    // 전시/컨텐츠관리
    { name: "공지관리", menuLink: MENU_LINK.NOTICE,
        tip: '공지게시판을 관리합니다. 채널별, 대상별 공지를 게시할 수 있습니다.',
    },
    { name: "이벤트관리", menuLink: "/bo/exhibit-content/event",
        tip: '이벤트를 관리합니다. 유형별, 대상별 이벤트 정보를 게시할 수 있습니다.',
    },
    { name: "배너/팝업관리", menuLink: "/bo/exhibit-content/banner" },
    { name: "약관관리", menuLink: "/bo/exhibit-content/terms",
        tip: '앱에 표기되는 이용약관/개인정보처리방침을 버전별로 관리합니다.',
    },
    { name: "FAQ관리", menuLink: "/bo/exhibit-content/faq" },
    { name: "이용안내관리", menuLink: "/bo/exhibit-content/info" },

    // 쿠폰/포인트관리
    { name: "쿠폰관리", menuLink: "/bo/coupon-point/coupon" },
    { name: "포인트관리", menuLink: "/bo/coupon-point/point" },
    { name: "포인트상품권관리", menuLink: "/bo/coupon-point/point-gift" },

    // 문의관리
    { name: "공유신청관리", menuLink: "/bo/inquiry/sharing-request",
        tip: '주차공유 중 개인소유주차공간에 대해 신청을 확인하고 관리합니다.',
    },
    { name: "1:1문의관리", menuLink: MENU_LINK.INQUIRY,
        tip: 'APP을 통한 1:1문의에 대해 확인하고 답변하며 관리합니다.',
    },
    { name: "부정주차신고관리", menuLink: "/bo/inquiry/illegal-parking-report",
        tip: '부정주차신고를 확인하고 부정주차여부를 검토 관리합니다.',
    },
    { name: "제보관리", menuLink: MENU_LINK.REPORT,
        tip: '주차장정보에 대해 일부 수정 요청하는 수정제보와 APP에 없는 신규 주차장에 대한 제보를 확인하고 관리합니다.',
    },
    { name: "결제대행관리", menuLink: "/bo/inquiry/payment-agent" },

    // 정산관리
    { name: "결제관리", menuLink: MENU_LINK.PAYMENT },
    { name: "주차장 결제관리", menuLink: "/bo/payment/parking" },
    { name: "정산관리", menuLink: "/bo/payment/adjustment" },
    
    // 이력관리
    { name: "접속이력관리", menuLink: "/bo/history/login-history" },
    { name: "다운로드이력관리", menuLink: "/bo/history/download-history" },
    { name: "약관이력관리", menuLink: "/bo/history/terms-history" },
    { name: "정보변경관리", menuLink: "/bo/history/modification-history" },

    // 관리자설정관리
    { name: "계정신청관리", menuLink: MENU_LINK.ACCOUNT,
        tip: '신청된 계정을 관리할 수 있습니다. 승인반려 아이콘 마우스오버시 반려사유가 노출됩니다.',
    },
    { name: "관리자계정관리", menuLink: "/bo/admin/admin-account" },
    { name: "메뉴권한관리", menuLink: "/bo/admin/menu" },
    { name: "공통코드관리", menuLink: "/bo/admin/code",
        tip: '공통코드 목록을 확인하고 수정을 합니다. (단, 사용여부는 영향도를 반드시 고려해야 합니다)',
    },
    { name: "App버전관리", menuLink: "/bo/admin/app-version" },
    { name: "운영콘텐츠관리", menuLink: "/bo/admin/contents" },
    { name: "유의사항관리", menuLink: "/bo/admin/caution" },

    // PO
    { name: "부정주차신고관리", menuLink: "/po/illegal-parking-report",
        tip: '',
    },
    { name: "1:1문의관리", menuLink: "/po/inquiry",
        tip: '',
    },

];

export function getMenuLink(name) {
    return menuTitle.find((m) => m.name === name).menuLink || null
}