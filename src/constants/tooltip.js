/**
 * 힌트 툴팁 내용
 */

// 계정상태
const USER_STATUS = "활성: 아이디(휴대폰번호)가 중복되지 않은 계정<br />비활성: 로그인 후 본인인증(휴대폰본인인증or간편인증)을 통해 본인 번호를 확인한 계정<br />검토:규칙에 의해 비정상 활동이 감지 되어 검토가 필요한 계정<br />정지:관리자가 검토 후 비정상활동 등에 의해 계정을 정지한 계정<br />";

// 회원유형
const USER_TYPE = "본인인증(휴대폰본인인증 또는 간편인증)을 로그인 후 최초1회 진행하면,<br/>CI값(온라인 주민번호 개념)을 획득하며 회원번호 외 내부 관리용 회원을 구분하는 시리얼키 개념입니다."

// 블랙리스트 여부
const BLACK_LIST = "비정상활동을 하거나, 업무방해 행위 등을 한 계정이라 판단하여 관리자가 블랙리스트로 속성을 부여한 계정이다. <br/>회원은 블랙리스트인지 알 수 없으며, 활동에 제약이 없고 모니터링 대상입니다.";

// 내부 리뷰 결과
const REVIEW_RESULT = "내부검토결과는 수정 및 업데이트 가능합니다.";

// 관리자 영역
const ADMIN_CONTENTS = "해당 회원 관련 관리가 필요한 경우에 진행합니다.";

// 메모 안내문(임시)
const MEMO = "수정 시 관리자 메모 입력을 권장합니다.";

const TOOLTIP_CONTENT = {
    USER_STATUS,
    USER_TYPE,
    BLACK_LIST,
    REVIEW_RESULT,
    ADMIN_CONTENTS,
    MEMO
}

export default TOOLTIP_CONTENT;