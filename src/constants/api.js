export const METHOD = {
    GET: 'get',
    POST: 'post',
}

export const RESPONSE_CODE = {
    SUCCESS: '200', // "OK"
    ERROR: '9999',

    /** 토큰 */
    EXPIRED_TOKEN: '4012002', // AccessToken Exception
    TOKEN_NOT_FOUND: '4012006', // AccessToken Exception
    MULTI_LOGIN_EXPIRED: '4012008', // AccessToken Exception
    AUTH_INVALID_TOKEN: "1105", // RefreshToken Exception

    /** 로그인 */
    INVALID_ID_PWD: '1002', // "비밀번호가 일치하지 않습니다."
    ACCOUNT_APPROVAL_WAIT: '1201', 
    ACCOUNT_APPROVAL_REJECT: '1202',
}

export default {
    METHOD,
    RESPONSE_CODE,
}