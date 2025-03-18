const REGEX = {
    // 비밀번호 영문,숫자 조합 8자리 이상
    PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*?]{8,}$/,

    // 정수
    INTEGER: /^-?\d+$/,

    // 차량번호
    CAR_NUMBER: /^(?:[가-힣]{2}\d{2}[가-힣]{1}\d{4}|\d{2,3}[가-힣]{1}\d{4})$/,

    // 사업자번호
    // BUSINESS_NUMBER: ,

    // 주민등록번호
    PERSONAL_NUMBER: /^\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])\d{7}$/,

    // 휴대폰번호
    PHONE_NUMBER: /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/,

    // 이메일
    EMAIL:  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,

    // URL
    URL: /^https?:\/\/[^\s$.?#].[^\s]*$/,

    // FILE 경로
    FILE_PATH: /\\/g,

    // hex color code
    HEX_COLOR: /^#([a-f0-9]{6}|[a-f0-9]{3})$/i,
}

export const regexTest = (type, str) => {
    return REGEX[type].test(str)
}

/**
 * 비밀번호 정규식 체크
 * @param {*} str 
 * @returns 
 */
export const isValidPassword = str => regexTest('PASSWORD', str)

/**
 * 정수 정규식 체크
 * @param {*} str 
 * @returns 
 */
export const isInteger = str => regexTest('INTEGER', str)

/**
 * 차량번호 정규식 체크
 * @param {*} str 
 * @returns 
 */
export const isCarNumber = str => regexTest('CAR_NUMBER', str)

/**
 * 사업자번호 정규식 체크
 * @param {*} str 
 * @returns 
 */
export const isBusinessNumber = str => regexTest('BUSINESS_NUMBER', str)

/**
 * 주민등록번호 정규식 체크
 * @param {*} str 
 * @returns 
 */
export const isPersonalNumber = str => regexTest('PERSONAL_NUMBER', str)

/**
 * 휴대폰번호 정규식 체크
 * @param {*} str 
 * @returns 
 */
export const isPhoneNumber = str => regexTest('PHONE_NUMBER', str)

/**
 * 이메일 정규식 체크
 * @param {*} str 
 * @returns 
 */
export const isEmail = str => regexTest('EMAIL', str)

/**
 * URL 정규식 체크
 * @param {*} str 
 * @returns 
 */
export const isUrl = str => regexTest('URL', str)

/**
 * File Path 
 * @param {*} str 
 * @returns 
 */
export const replacePath = str => {
    return str.replace(REGEX.FILE_PATH, '/')
}

/**
 * HEX Color Code
 * @param {*} str
 * @returns
 */
export const isHexColor = str => regexTest('HEX_COLOR', str)