import COMMON from "./common";

function handleOptions(comOpt=null, opts=[], filterIds=[]) {
    let options=[];
    if(comOpt !== null) {
        options.push(comOpt)
    }
    if(opts) {
        let filterOptions = opts.filter((o) => filterIds.some((id) => o.id === id));
        // console.log(filterOptions);
        options.concat(filterOptions);
    }
    return options;
}

function addAllChecked(arr) {
    return arr.map(v => ({ ...v, checked: true }))
}

function addChecked(arr, data) {
    return arr.map(v => ({ ...v, checked: data.includes(v.id) }))
}


function getLabelById(optsId, id) {
    if (id === 'ALL') {
        return '전체'
    }
    
    return OPTS[optsId]?.find(v => v.id === id)?.label || id || '-'
}

const OPTS = {
    
    // 회원 유형
    MEMBER_TYPE_OPTS: [
        { id: "NON", label: "비회원"},
        { id: "APP", label: "회원" },
        { id: "PARTNER", label: "파트너"},
    ],

    // 회원 유형 ---> 파트너, 배정자 분리하는지 확인 필요!!
    MEMBER_TYPE_OPTS2: [
        { id: "NON", label: "비회원"},
        { id: "APP", label: "회원" },
        { id: "PARTNER", label: "파트너"},
        { id: "ASSIGNEE", label: "배정자"},
    ],

    // 동의 여부
    AGREE_TYPE_OPTS: [
        { id: 0, label: '미동의'},
        { id: 1, label: '동의'}
    ],

    // 가입회원 유형
    JOIN_MEMBER_TYPE_OPTS: [
        { id: "APP", label: "회원" },
        { id: "PARTNER", label: "파트너"}
    ],

    // 사용여부
    USE_YN_OPTS: [
        { id: 'Y', label: '사용' },
        { id: 'N', label: '사용안함' }
    ],

    // 사용여부 (전체 포함)
    USE_YN_OPTS2: [
        { id: 'ALL', label: '전체' },
        { id: 'Y', label: '사용(Y)' },
        { id: 'N', label: '사용안함(N)' }
    ],

    // Y,N 
    YN_OPTS: [
        { id: 'Y', label: 'Y'},
        { id: 'N', label: 'N'},
    ],
    YN_NUMBER_OPTS: [
        { id: 1, label: 'Y'},
        { id: 0, label: 'N'},
    ],

    // 답변 알림 옵션
    ANSWER_NOTI_OPTS: [
        { id: 1, label: '발송' },
        { id: 0, label: '발송안함' },
        /*
        { id: 'notiApp', label: '앱푸시' },
        { id: 'notiKakao', label: '카카오톡' },
        { id: 'notiSms', label: '문자' },
         */
    ],

    // 설정여부
    SETTING_YN_OPTS: [
        { id: 'Y', label: '설정' },
        { id: 'N', label: '설정안함' }
    ],

    // 검색 기간
    SEARCH_DATE_TYPE_OPTS: [
        { id: 10, label: '등록일자' },
        { id: 20, label: '최종수정일자' },
    ],


    /** 파트너관리 */
    // 파트너 구분
    PARTNER_GROUP_OPTS: [
        { id: 'B2G', label: '거주자' },
        { id: 'B2B', label: '파트너' },
        { id: 'B2C', label: '개인' },
    ],

    // 사업자 형태
    BUSINESS_TYPE_OPTS: [
        { id: 'OWNER', label: '개인' },
        { id: 'COMPANY', label: '개인사업자' },
        { id: 'CORPORATION', label: '법인' },
    ],

    // 파트너 계약 진행 상태
    CONTRACT_STATUS_OPTS: [
        { id: 'PROCESSING', label: '계약진행중' },
        { id: 'COMPLETED', label: '계약완료' },
        { id: 'EXPIRED', label: '계약만료' },
        { id: 'EXPIRED_SCHEDULE', label: '계약만료예정' },
        { id: '계약종료', label: '계약종료' }, // #TODO:
    ],

    // 파트너 계약 연장 여부
    CONTRACT_RENEWAL_STATUS_OPTS: [
        { id: 'Y', label: '연장(Y)' },
        { id: 'N', label: '연장안함(N)' },
    ],

    // 파트너 검색구분
    PARTNER_SEARCH_TYPE_OPTS: [
        { id: '10', label: '파트너명' },
        { id: '20', label: '담당자명' },
    ],

    // 파트너 기간 검색구분
    PARTNER_SEARCH_DATE_TYPE_OPTS: [
        { id: '10', label: '계약시작일' },
        { id: '20', label: '계약종료일' },
    ],

    // 파트너관리_정렬
    PARTNER_ORDER_OPTS: [
        { id: 'C', label: '최근등록순'},
    ],

    // 소득세 부과 여부
    TAX_YN_OPTS: [
        { id: 'Y', label: '부과' },
        { id: 'N', label: '미부과' },
    ],

    // PG 수수료 부과 여부
    PG_YN_OPTS: [
        { id: 'Y', label: '부과' },
        { id: 'N', label: '미부과' },
    ],

    // 가점 기준 설정 여부
    SCORE_WEIGHT_YN_OPTS: [
        { id: 'Y', label: '설정' },
        { id: 'N', label: '미설정' },
    ],

    // 가점 기준 기간 옵션
    SCORE_WEIGHT_TERMS_OPTS: [
        { id: '1m', label: '1개월' },
        { id: '2m', label: '2개월' },
        { id: '3m', label: '3개월' },
        { id: '6m', label: '6개월' },
        { id: '12m', label: '12개월' },
    ],

    // 초과 / 이상 / 이하 / 미만
    RANGE_CONDITION_OPTS: [
        { id: 'greaterThanOrEqual', label: '이상' },
        { id: 'lessThanOrEqual', label: '이하' },
        { id: 'lessThan', label: '미만' },
        { id: 'greaterThan', label: '초과' },
    ],

    // 배정자 연동 여부
    ASSIGNEE_YN_OPTS: [
        { id: 'Y', label: '연동' },
        { id: 'N', label: '미연동' },
    ],

    
    /** // 파트너관리 */

    /** 이벤트관리 */

    // 이벤트 유형
    EVENT_TYPE_OPTS: [
        { id: 'NORMAL', label: '일반' },
        { id: 'ATTENDANCE', label: '출석체크' },
    ],

    // 이벤트 대상
    EVENT_APP_TYPE_OPTS: [
        { id: 'SERVICE', label: '회원' },
        { id: 'PARTNER', label: '배정자' },
    ],

    // 이벤트관리_정렬
    EVENT_ORDER_OPTS: [
        { id: 'C', label: '최근등록순'},
        // { id: 'M', label: '최근수정순'},
    ],

    // 이벤트 - 출석 템플릿
    EVENT_ATTENDANCE_TEMPLATE_OPTS: [
        { id: 'SPRING', label: '봄'},
        { id: 'SUMMER', label: '여름'},
        { id: 'AUTUMN', label: '가을'},
        { id: 'WINTER', label: '겨울'},
        { id: 'CUSTOM', label: '직접등록'},
    ],
    /** // 이벤트관리 */

    
    /** 배너/팝업관리 */
    BANNER_USE_YN_OPTS: [
        { id: 'Y', label: '사용중' },
        { id: 'N', label: '사용안함' },
    ],
    BANNER_TYPE_OPTS: [
        { id: 'HOME_PARKINGLOT', label: '홈 주차장찾기 배너' },
        { id: 'HOME_HIGHLIGHT', label: '홈 하이라이트 배너' },
        { id: 'HOME_BOTTOM', label: '홈 하단팝업' },
        { id: 'HOME_CENTER', label: '홈 중앙팝업' },
        { id: 'USER_CENTER', label: '회원 홈 중앙 배너' },
        { id: 'REPORT', label: '제보하기 배너' },
        { id: 'TIME_PICKER', label: '시간피커 광고배너' },
        { id: 'USER_MYPAGE', label: '회원 마이페이지 배너' },
    ],
    BANNER_APP_TYPE_OPTS: [
        { id: 'SERVICE', label: '회원' },
        { id: 'ASSIGNEE', label: '배정자' }, // #TODO: ASIS 데이터 중 PARTNER -> ASSIGNEE로 하면 될 지 확인 필요
    ],
    BANNER_STATUS_OPTS: [
        { id: 'ING', label: '게시중' },
        { id: 'PLAN', label: '예약' },
        { id: 'END', label: '기간만료' },
    ],
    BANNER_LINK_TYPE_OPTS: [
        { id: 'EVENT', label: '이벤트' },
        { id: 'NOTICE', label: '공지사항' },
        { id: 'PARKING_LOT', label: '주차장상세' },
    ],
    /** // 배너/팝업관리 */
    


    // 관리자 조회 팝업 -  계정상태
    ADMIN_ACCOUNT_STATUS_OPTS: [
        { id: 'ACTIVE', label: '활성' },
        { id: 'STOP', label: '정지' },
        { id: 'EXPIRE', label: '만료' },
    ],

    // 관리자 조회 팝업 - 검색어 종류
    ADMIN_ACCOUNT_SEARCH_TYPE_OPTS: [
        { id: 'ID', label: '아이디' },
        { id: 'NAME', label: '이름' },
    ],


    /* --- 부정주차 */
    // 부정주차_내부검토결과
    ILLEGAL_PARKING_REVIEW_OPTS: [
        {id: 1, label: '견인요청'},
        {id: 2, label: '부정주차요금부과'},
        {id: 3, label: '미반영'},
        {id: 4, label: '기타'}
    ],

    // 부정주차신고관리_계약승인날짜범위 선택
    CONTRACT_DATE_RANGE_OPTS: [
        { id: "contractStartDate", label: "등록일자" },
        { id: "contractEndDate", label: "승인일자" },
        { id: "regDate", label: "서약서동의일자" },
        { id: "modDate", label: "최종접속일자" },
    ],
    /* --- 부정주차 */


    /* --- 공유신청관리 */
    // 신청유형
    SHARING_REQ_TYPE_OPTS: [
        { id: "0", label: "전체" },
        { id: "1", label: "개인주차공간" },
        { id: "2", label: "유료주차장" },
    ],

    // 검토결과
    SHARING_REQ_STATUS_OPTS: [
        { id: "REQUEST", label: "검토중" },
        { id: "COMPLETED", label: "승인완료" },
        { id: "REJECT", label: "반려" },
    ],

    // 요금방식
    SHARING_REQ_FEE_TYPE_OPTS: [
        { id: "HOURLY", label: "시간권" },
        { id: "DAILY", label: "당일권" },
        { id: "MONTHLY", label: "월주차" },
        { id: "ETC", label: "기타" },
    ],

    // 주차장 소유관계
    SHARING_REQ_OWNERSHIP_OPTS: [
        { id: "1", label: "본인" },
        { id: "2", label: "직원, 임차인" },
        { id: "3", label: "관리자" },
    ],
    /* // --- 공유신청관리 */


    /* --- 문의관리 */
    
    // 회원유형
    INQUIRY_MEMBER_TYPE_OPTS: [
        { id: "APP", label: "회원" },
        { id: "ASSIGNEE", label: "배정자"},
        { id: "PARTNER", label: "파트너"},
    ],

    // 문의유형
    INQUIRY_TYPE_OPTS: [
        { id: "NORMAL", label: "일반문의" },
        { id: "PAYMENT", label: "결제" },
        { id: "REFUND", label: "취소 및 환불" },
        { id: "PARKINGLOT", label: "주차장" },
        { id: "CLAIM", label: "부정주차" },
        { id: "SHARE", label: "공유관리" },
        { id: "CAR", label: "차량관리" },
        { id: "PARTNER", label: "PO문의"},
        { id: "ETC", label: "기타" },
    ],

    // 답변상태
    ANSWER_TYPE_OPTS: [
        { id: 0, label: "답변대기" },
        { id: 1, label: "답변완료" },
    ],

    // 계정상태
    ACCOUNT_ACTIVE_STATUS_OPTS: [
        { id: 0, label: '비활성'},
        { id: 1, label: '활성'},
        { id: -1, label: '탈퇴' },
        { id: -2, label: '정지' }
    ],

    // 문의관리_정렬
    INQUIRY_ORDER_OPTS: [
        { id: 'R', label: '최근답변순'},
        { id: 'M', label: '최근수정순'},
    ],
    /* --- 문의관리 */


    /** --- 제보관리 */
    // 제보관리 연관링크
    REPORT_RELATION_LINK_OPTS: [
        COMMON.CONTENTS_TYPE.INQUIRY,
        COMMON.CONTENTS_TYPE.SUGGEST
    ],

    // 제보유형
    REPORT_TYPE_OPTS: [
        { id: "UPDATE", label: "수정"},
        { id: "NEW", label: "신규" },
    ],

    // 검토 결과
    REPORT_REVIEW_OPTS: [
        { id: 1, label: "미반영"},
        { id: 2, label: "반영필요" },
        { id: 3, label: "기타" },
    ],
    /** --- 제보관리 */

    /** -- 공지관리 */
    // 채널 옵션
    CHANNEL_OPTS: [
        { id: 'APP', label: 'APP' },
        { id: 'PO', label: 'PO' },
    ],

    //공지대상
    NOTICE_TARGET_OPTS: [
        { id: 'SERVICE', label: '회원' },
        { id: 'ASSIGNEE', label: '배정자' },        
        { id: 'PARTNER', label: '파트너' },
    ],
    /** -- 공지관리 */


    /** -- 약관관리 */
    //약관대상
    TERMS_TARGET_OPTS: [
        { id: 'SERVICE', label: '회원' },
        { id: 'ASSIGNEE', label: '배정자' },        
        { id: 'PARTNER', label: '파트너' },       
        { id: 'ADMIN', label: '관리자' },
    ],

    //약관구분
    TERMS_TYPE_OPTS: [
        { id: 'ACCESS', label: '이용약관' },
        { id: 'LOCATION', label: '위치기반 서비스 이용약관' },
        { id: 'PRIVACY', label: '개인(위치)정보 처리 방침' },
        { id: 'THIRD', label: '제3자 정보제공 이용 약관' },
        { id: 'MARKETING', label: '개인정보 마케팅 동의서' },
        { id: 'AUTOMATIC', label: '자동연장 처리약관' },
        { id: 'PROTECTION', label: '개인정보보호서약' },
    ],

    //게시상태
    POST_STATUS_OPTS: [
        { id: 'ING', label: '게시중' },
        { id: 'END', label: '종료' },
        { id: 'PLAN', label: '예정' },
    ],

    /** -- 약관관리 */

    /** -- FAQ관리 */
    //FAQ CODE
    FAQ_CODE_OPTS: [
        { id: 'FAQ001', label: '파킹프렌즈 소개' },
        { id: 'FAQ002', label: '서비스 이용' },
        { id: 'FAQ003', label: '결제 /포인트' },
        { id: 'FAQ004', label: '부정주차' },
        { id: 'FAQ101', label: '이용 방법' },
        { id: 'FAQ102', label: '정산포인트' },
        { id: 'FAQ104', label: '정산' },
    ],
    //베스트 플래그
    BEST_FLAG_OPTS: [
        { id: 'Y', label: '베스트' },
        { id: 'N', label: '일반' },
    ],

    //FAQ 정렬 순서
    FAQ_ORDER_OPTS: [
        { id: 'C', label: '최근등록순' },
        { id: 'M', label: '최종수정순' },
    ],

    /** -- FAQ관리 */

    /** -- 이용안내관리 */
    //유형
    INFO_TYPE_OPTS: [
        { id: 'BASIC', label: '기본' },
        { id: 'PHOTO', label: '사진' },
        { id: 'VIDEO', label: '영상' },
    ],
    
    /** -- 이용안내관리 */


    /** -- 쿠폰관리 */
    // 쿠폰유형
    COUPON_TYPE_OPTS: [
        { id: 'ONLINE', label: '온라인 쿠폰' },
        { id: 'OFFLINE', label: '오프라인 쿠폰' },        
        { id: 'WELCOME', label: '웰컴 쿠폰' },       
        { id: 'FIRST', label: '첫구매 쿠폰' },
    ],

    //쿠폰상태
    COUPON_STATUS_OPTS: [
        { id: 'PROGRESS', label: '진행중' },
        { id: 'WAITING', label: '대기' },
        { id: 'EXPIRED', label: '종료' },
        { id: 'STOP', label: '중지' },
    ],

    // 쿠폰 기간 검색구분
    COUPON_SEARCH_DATE_TYPE_OPTS: [
        { id: '10', label: '발급시작일' },
        { id: '20', label: '발급종료일' },
    ],
    
    // 할인 유형
    DISCOUNT_TYPE_OPTS: [
        { id: '10', label: '정액' },
        { id: '20', label: '정률' },
    ],

    // 적용주차권 유형
    PARKING_LOT_OPTS: [
        { id: 'TWO_TIME', label: '2시간권' },
        { id: 'THREE_TIME', label: '3시간권' },
        { id: 'TWELVE_TIME', label: '12시간권' },
        { id: 'FIXED', label: '당일권' },
        { id: 'NIGHT', label: '야간권' },
        { id: 'DAYS', label: '연박권' },
        { id: 'MONTHLY', label: '월정기권' },
        { id: 'WASH', label: '세차권' },
    ],

    // 유효기간 설정 유형
    VALID_DATE_SET_TYPE_OPTS: [
        { id: '10', label: '기간으로 설정' },
        { id: '20', label: '발급일 기준으로 설정' },
    ],

    // 발급 유형
    ISSUE_TYPE_OPTS: [
        { id: '10', label: '다운로드' },
        { id: '20', label: '직접등록' },
    ],

    // 발급수량제한여부
    ISSUE_COUNT_LIMIT_YN_OPTS: [
        { id: 'N', label: '제한없음' },
        { id: 'Y', label: '제한있음' },
    ],

    // 회원 주차장
    MEMBER_PARKING_LOT_OPTS: [
        { id: 'MEM', label: '회원' },
        { id: 'PARK', label: '주차장' },
    ],

    // 제외 회원 주차장
    EXC_MEMBER_PARKING_LOT_OPTS: [
        { id: 'EXC', label: '제외없음' },
        { id: 'MEM', label: '회원' },
        { id: 'PARK', label: '주차장' },
    ],

    // 회원 대상
    MEMBER_TARGET_OPTS: [
        { id: '10', label: '전체' },
        { id: '11', label: '회원별설정' },
    ],

    // 회원 대상
    PARKING_LOT_TARGET_OPTS: [
        { id: '20', label: '전체' },
        { id: '21', label: '주차장별설정' },
    ],

    // 쿠폰사용여부
    COUPON_USE_OPTS: [
        { id: 'Y', label: '사용완료' },
        { id: 'N', label: '미사용' },
        { id: 'E', label: '기간만료' },
    ],
    // 발행현황 검색 유형
    COUPON_ISSUE_SEARCH_TYPE_OPTS: [
        { id: '10', label: '휴대전화번호' },
        { id: '20', label: '회원명' },
    ],
    /** -- 쿠폰관리 */

    /** -- 포인트관리 */
    // 포인트 상태 옵션
    POINT_STATE_OPTS: [
        { id: 'EARN', label: '적립' },
        { id: 'USE', label: '사용' },
        { id: 'EXPIRE', label: '소멸' },
        { id: 'CANCEL', label: '취소' },
    ],
    // 유무상 구분 옵션
    POINT_GUBUN_OPTS: [
        { id: 'PAID', label: '유상' },
        { id: 'FREE', label: '무상' },
    ],

    // 종류 옵션
    POINT_TYPE_OPTS: [
        { id: 'CASHBACK', label: '구매포인트' },
        { id: 'EVENT', label: '이벤트포인트' },
        { id: 'CASH', label: '상품권등록' },
        { id: 'CS', label: '고객보상포인트' },
        { id: 'ASSIGNEE', label: '배정자 정산포인트' },
        { id: 'AFFILIATE', label: '제휴포인트' },
        { id: 'SUGGEST', label: '제보포인트' },
        { id: 'DISCOUNT_ASSIGNEE_FEE', label: '감면포인트전환' },
        { id: 'EXCHANGE_GIFT', label: '상품권전환' },
        { id: 'EXCHANGE_USER_POINT', label: '파프포인트' },
    ],

    // 포인트 전환 여부 옵션
    POINT_YN_OPTS: [
        { id: 'Y', label: '전환' },
        { id: 'N', label: '미전환' },
    ],

    // 상품권 지급 여부 옵션
    CASH_YN_OPTS: [
        { id: 'Y', label: '완료' },
        { id: 'N', label: '대기' },
    ],

    // 포인트 검색 유형 옵션
    POINT_SEARCH_TYPE_OPTS: [
        { id: '10', label: '휴대전화번호' },
        { id: '20', label: '차량번호' },
        { id: '30', label: '이름' },
    ],

    /** -- 포인트관리 */

    /** -- 포인트상품권 관리 */
    // 포인트상품권 판매처 옵션
    GIFT_PLACE_OPTS: [
        { id: 'SMARTSTORE', label: '스마트스토어' },
        { id: 'KAKAO', label: '카카오 쇼핑' },
    ],

    // 포인트상품권 검색 유형 옵션
    GIFT_SEARCH_TYPE_OPTS: [
        { id: '10', label: '상품권코드' },
        { id: '20', label: '상품권명' },
    ],


    // 포인트상품권 검색 날짜 유형 옵션
    GIFT_SEARCH_DATE_TYPE_OPTS: [
        { id: '30', label: '등록일자' },
        { id: '10', label: '판매시작일' },
        { id: '20', label: '판매종료일' },
    ],
    /** -- 포인트상품권 관리 */


    /** --- 계정신청관리 */
    // 계정 유형
    ACCOUNT_TYPE_OPTS: [
        { id: 'PARTNER', label: '파트너' },
        { id: 'ADMIN', label: '관리자' },
    ],

    // 계정 검색구분
    ACCOUNT_SEARCH_TYPE_OPTS : [
        {id: 'NAME', label: '이름' },
        {id: 'GROUP', label: '소속부서' },
        {id: 'COMPANY', label: '소속회사' },
    ],

    // 계정 상태
    ACCOUNT_STATUS_OPTS: [
        { id: 'WAIT', label: '승인대기' },
        { id: 'APPLY', label: '승인완료' },
        { id: 'REJECT', label: '승인반려' },
    ],
    /** --- 계정신청관리 */

    /** --- App Version 관리 */
    OS_TYPE_OPTS: [
        { id: 'Android', label: 'Android' },
        { id: 'IOS', label: 'IOS' },
    ],
    /** --- App Version 관리 */

    /** --- 유의사항관리 */
    CAUTION_TYPE_OPTS: [
        { id: 'WAIT', label: '주차장상세' },
        { id: 'COMFIRM', label: '주차권' },
        { id: 'REJECT', label: '결제' },
        { id: 'REJECT', label: '이벤트' },
        { id: 'REJECT', label: '기타' },
    ],
    /** --- 유의사항관리 */

    /** --- 회원관리 */
    // 회원관리
    MEMBER_ACCOUNT_STATE: [
        { id: "ACTIVE", label: "활성" },
        { id: "INACTIV", label: "비활성" },
        { id: "REVIEW", label: "검토" },
        { id: "STOP", label: "정지" }
    ],

    /** --- 관리자계정관리 */
    // 소속부서
    ADMIN_ACCOUNT_DEPARTMENT_TYPE_OPTS: [
        { id: 'PARTNER', label: '목록 추가' },
    ],

    // 검색어
    ADMIN_ACCOUNT_SEARCH_TYPE_OPTS2: [
        { id: 'NAME', label: '이름' },
        { id: 'COMPANY', label: '소속부서' },
    ],
     /** --- 관리자계정관리 */

    /** --- 시설관리 */
    FACILITY_ORDER_OPTS: [
        { id: 'C', label: '최근등록순' },
        { id: 'I', label: '설치일자순' },
        { id: 'M', label: '최종수정순' },
    ],

    // 주차장 종류
    PARKING_LOT_TYPE : [
        { id: 'RESIDENT_SECTION', label: '공유(구간제)' },
        { id: 'RESIDENT_SLOT', label: '공유(구획제)' },
        { id: 'RESIDENT_STREET', label: '공유(노외)' },
        { id: 'STREET_PUBLIC', label: '노상공영' },
        { id: 'OFFLOAD_PUBLIC', label: '노외공영' },
        { id: 'GREEN', label: '그린파킹' },
        { id: 'NORMAL_PARTNER', label: '일반제휴' },
    ],

    // 센서 상태
    AIOT_STATUS_OPTS: [
        { id: 'OPERATE', label: '운영중' },
        { id: 'CONSTRUCTION', label: '공사중' },
        { id: 'DEMOLISH', label: '철거' },
        { id: 'DISCARD', label: '폐기' },
    ],
    
    // AIOT 통신 개통 여부
    AIOT_IS_SUBSCRIPTION_OPTS: [
        { id: 'Y', label: '개통(Y)' },
        { id: 'N', label: '미개통(N)' },
    ],

    // AIOT 통신 상태
    AIOT_CONNECTION_OPTS: [
        { id: 'Y', label: 'ON' },
        { id: 'N', label: 'OFF' },
    ],

    // AIOT 검색어
    AIOT_SEARCH_TYPE_OPTS: [
        { id: '10', label: '주차장명' },
        { id: '20', label: '주차장번호' },
        { id: '30', label: '파트너명' },
        { id: '40', label: '시리얼번호' },
    ],

    // 기간
    AIOT_SEARCH_DATE_TYPE_OPTS: [
        { id: '10', label: '설치일자' },
        { id: '20', label: '최종수정일자' },
    ],
    
    // 점검/처리사유
    AIOT_CHECK_REASON_OPTS: [
        { id: '배터리교체', label: '배터리교체' },
        { id: '센서파손', label: '센서파손' },
        { id: '통신불량', label: '통신불량' },
        { id: '센서유실', label: '센서유실' },
    ],

    // CCTV 상태
    CCTV_STATUS_OPTS : [
        { id: 'OPERATE', label: '운영중' },
        { id: 'CONSTRUCTION', label: '공사중' },
        { id: 'DEMOLISH', label: '철거' },
    ],

    // CCTV 검색어 타입
    CCTV_SEARCH_TYPE_OPTS : [
        { id: 10, label: '주차장명' },
        { id: 20, label: '주차장번호' },
        { id: 30, label: '파트너명' },
    ],

    // 파프차단기 상태
    BARRIER_STATUS_OPTS : [
        { id: 'OPERATE', label: '운영중' },
        { id: 'CONSTRUCTION', label: '공사중' },
        { id: 'DEMOLISH', label: '철거' },
    ],

    // 파프차단기 검색어
    BARRIER_SEARCH_TYPE_OPTS: [
        { id: 10, label: '주차장명' },
        { id: 20, label: '주차장번호' },
        { id: 30, label: '파트너명' },
    ],

    // 키오스크
    KIOSK_STATUS_OPTS : [
        { id: 'OPERATE', label: '운영중' },
        { id: 'CONSTRUCTION', label: '공사중' },
        { id: 'DEMOLISH', label: '철거' },
    ],

    // 키오스크 검색어
    KIOSK_SEARCH_TYPE_OPTS: [
        { id: 10, label: '주차장명' },
        { id: 20, label: '주차장번호' },
        { id: 30, label: '파트너명' },
    ],

    // 안내판 검색어
    BOARD_SEARCH_TYPE_OPTS: [
        { id: 10, label: '주차장명' },
        { id: 20, label: '주차장번호' },
        { id: 30, label: '파트너명' },
    ],

    // 안내판 상태
    BOARD_STATUS_OPTS : [
        { id: 'INSTALL', label: '설치' },
        { id: 'DEMOLISH', label: '철거' },
        { id: 'RE_INSTALL', label: '재설치' },
    ],

    // 안내판
    BOARD_INSTALL_TYPE_OPTS : [
        { id: 'POMAX', label: '포맥스' },
        { id: 'BANNER', label: '배너' },
        { id: 'FLOOR', label: '바닥' },
        { id: 'NFC', label: 'NFC' }
    ],

    // 기타장비 상태
    ETC_STATUS_OPTS : [
        { id: 'INSTALL', label: '설치' },
        { id: 'DISPOSE', label: '철거' },
        { id: 'RE_INSTALL', label: '재설치' },
    ],

    // 기타장비 검색어
    ETC_SEARCH_TYPE_OPTS: [
        { id: 10, label: '주차장명' },
        { id: 20, label: '주차장번호' },
        { id: 30, label: '파트너명' },
        { id: 40, label: '시설명' },
    ],

    /**
     * 파트너 관리_주차장 등록관리
     */

    // 요금 정보 선택 정보
    PARKING_CHARGE_TYPE_OPTS : Object.freeze({
        a: { id: '초기무료기준', label: '초기무료기준' },
        b: { id: '기본요금', label: '기본요금' },
        c: { id: '추가요금', label: '추가요금' },
        d: { id: '당일최대', label: '당일최대' },
        e: { id: '할증기준시간', label: '할증기준시간' },
        f: { id: '할증요금', label: '할증요금' },
    }),

    // 주차 회차,기본요금 시간 기준
    PARKING_BASE_CHARGE_TIME_OPTS : [
        { id: 10, label: '10분' },
        { id: 20, label: '20분' },
        { id: 30, label: '30분' },
        { id: 60, label: '1시간' },
    ],

    // 주차 추가요금 시간 기준
    PARKING_ADD_CHARTE_TILE_OPTS: [
        { id: 10, label: '10분당' },
        { id: 20, label: '20분당' },
        { id: 30, label: '30분당' },
        { id: 60, label: '1시간당' },
    ],

    // 주차장 진행상태 
    PARKING_LOT_STATUS_OPTS: [
        { id: 'REGISTERING', label: '정보등록중' },
        { id: 'COMPLETED', label: '등록완료' },
        { id: 'SERVICE', label: '서비스중'},
        { id: 'EXPECTED', label: '서비스만료예정' }, // 수동 disabled
        { id: 'EXPIRED', label: '정보제공' },
    ],

    // 판매 여부
    SALE_OPTS: [
        { id: 'Y', label: '판매' },
        { id: 'N', label: '판매중지' },
    ],

    /**
     * 이력관리
     */
    // 다운로드이력관리 정렬 순서
    DOWNLOAD_HIST_ORDER_OPTS: [
        { id: 'C', label: '최근다운로드순'},
    ],
    //약관이력관리 정렬 순서
    TERMS_HIST_ORDER_OPTS: [
        { id: 'C', label: '최근등록순' },
        { id: 'M', label: '최종수정순' },
    ],

    /**** 공통 코드 관리 */
    // 공통코드 정렬 
    CODE_ORDER_OPTS: [
        {id: 'DESC', label: '최근등록순'},
        {id: 'ASC', label: '과거등록순'},
    ],

    /*** 메뉴 권한 관리 */
    MENU_AUTH_TYPE: [
        {id: 'GROUP', label: '부서'},
        {id: 'ADMIN', label: '개인'},
    ],

    handleOptions,
    addAllChecked,
    addChecked,
    getLabelById,
}

export default OPTS