const CERT = {
    MIN_SECONDS: 60,
}

const PAGING = Object.freeze({
    INIT_PAGE: 1,
    ITEM_PER_PAGE: 10,
    ITEM_PER_PAGE5: 5,
})

const SELECT_OPTS = Object.freeze({
    ALL: { id: 'ALL', label: '전체' },
    SELECT: { id: 'SELECT', label: '선택'}
})

const SELECT_RANGE_OPTS = Object.freeze({
    SELECT: { id: 'SELECT', label: '기간선택'}
})

const INPUT_OPTS = Object.freeze({
    ALL: { id: 'ALL', label: '전체' },
    ALL_BLANK: { id: '', label: '전체' },
    SELECT: { id: 'SELECT', label: '선택' },
})

// 컨텐츠 유형
const CONTENTS_TYPE = Object.freeze({
    ASSIGNEE: { id: "ASSIGNEE", label: '공유신청' },            // 공유신청     
    REPORT: { id: "REPORT", label: '부정주차신고' },            // 부정주차신고             
    SUGGEST: { id: "SUGGEST", label: '제보관리' },              // 제보관리         
    CAUTION: { id: "CAUTION", label: '유의사항관리' },          // 유의사항관리   
    APPVERSION: { id: "APPVERSION", label: 'APP버전관리' },     // APP버전관리       
    INQUIRY: { id: "INQUIRY", label: '1:1문의하기' },           // 문의하기      
    COUPON: { id: "COUPON", label: '쿠폰관리' },                // 쿠폰관리       
    POINT_GIFT: { id: "POINT_GIFT", label: '포인트상품권관리' },     // 포인트상품권관리   
})

// 회원 유형
const MEMBER_TYPE = Object.freeze({
    NON: 'NON',                 // 비회원
    ADMIN: 'ADMIN',             // 관리자
    PARTNER: 'PARTNER',         // 파트너
    ASSIGNEE: 'ASSIGNEE',       // 배정자
    APP: 'APP'                  // 회원
})

// 배너별 최소 이미지 사이즈
const BANNER_TYPE_IMG_SIZE = {
    'HOME_PARKINGLOT'   : { x: '320', y: '120' }, // 홈 주차장찾기 배너
    'HOME_HIGHLIGHT'    : { x: '320', y: '40' }, // 홈 하이라이트 배너
    'HOME_BOTTOM'       : { x: '320', y: '168' }, // 홈 하단팝업
    'HOME_CENTER'       : { x: '320', y: '500' }, // 홈 중앙팝업
    'USER_CENTER'       : { x: '320', y: '200' }, // 회원 홈 중앙 배너
    'REPORT'            : { x: '320', y: '52' }, // 제보하기 배너
    'TIME_PICKER'       : { x: '320', y: '120' }, // 시간피커 광고배너
    'USER_MYPAGE'       : { x: '320', y: '200' }, // 회원 마이페이지 배너
}

/**
 * default date format
 */
const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD'

/**
 * 기간 버튼 그룹
 */
const DATE_RANGE_BTN_GROUP = [
    { id: "0d", label: "오늘" },
    { id: "1m", label: "1개월" },
    { id: "6m", label: "6개월" },
    { id: "1y", label: "1년" },
]

// 페이징 사이즈 옵션
const ITEM_PER_PAGE_OPTS = [
    { id: 10, label: "10개씩 보기" },
    { id: 30, label: "30개씩 보기" },
    { id: 50, label: "50개씩 보기" },
    { id: 100, label: "100개씩 보기" },
]

// 큰 페이징 사이즈 옵션
const ITEM_PER_LARGE_PAGE_OPTS = [
    { id: 50, label: "50개씩 보기" },
    { id: 100, label: "100개씩 보기" },
    { id: 150, label: "150개씩 보기" },
    { id: 200, label: "200개씩 보기" },
]

// 업로드 파일 확장자
const FILE_MIME_TYPE = Object.freeze({
    IMAGE: { "image/*": [".jpeg", ".jpg", ".png"] },
    PDF: { "application/pdf": [".pdf"] },
    TEXT: { "text/*": [".txt", ".md"] }
})

const COMMON = Object.freeze({
    CERT,
    PAGING,
    SELECT_OPTS,
    SELECT_RANGE_OPTS,
    INPUT_OPTS,
    ITEM_PER_PAGE_OPTS,
    ITEM_PER_LARGE_PAGE_OPTS,
    BANNER_TYPE_IMG_SIZE,
    DEFAULT_DATE_FORMAT,
    DATE_RANGE_BTN_GROUP,
    CONTENTS_TYPE,
    MEMBER_TYPE,
    FILE_MIME_TYPE
})

export default COMMON