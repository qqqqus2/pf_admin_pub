import COMMON from "@/constants/common"
import moment from "moment"

/**
 * addPreZero
 */
export const addPreZero = n => {
    return n < 10 ? `0${n}` : `${n}`
}

/**
 * 
 * @param {*} { startDate : dateObject, endDate : dateObject }
 * @returns { y: {n}, m: {n} }
 */
export const getMonthDiff = ({ startDate, endDate }) => {
    try {
        const s = moment(startDate) // .format(COMMON.DEFAULT_DATE_FORMAT)
        const e = moment(endDate) // .format(COMMON.DEFAULT_DATE_FORMAT)

        // console.log(`${s.format(COMMON.DEFAULT_DATE_FORMAT)}~${e.format(COMMON.DEFAULT_DATE_FORMAT)}`)
    
        if (!s.isValid() || !e.isValid()) {
            throw new Error(`startDate valid: ${s.isValid()}, endDate valid: ${e.isValid()}`)
        }

        const diff = e.diff(s, 'months')

        const y = Math.floor(diff / 12)
        const m = Math.floor(diff % 12)
    
        return {
            y, m,
            text: `${addPreZero(y)}년 ${addPreZero(m)}개월`
        }
    } catch(e) {
        console.warn(e)
        return {
            y: 0, m: 0, text: '00년 00개월'
        }
    }
}

/**
 * datetimeToDate
 * datetime format : YYYY-MM-DD HH:mm:ss
 */
export const datetimeToDate = datetime => {
    try {
        if (typeof datetime === 'string') {
            return datetime.slice(0, 10)
        }

        return dateObjToStr(datetime).slice(0, 10)
    } catch(e) {
        console.warn(e)
        return ''
    }
}

/**
 * dateObjToStr
 */
export const dateObjToStr = date => {
    try {
        const Y = addPreZero(date.getFullYear())
        const M = addPreZero(date.getMonth() + 1)
        const D = addPreZero(date.getDate())
        const H = addPreZero(date.getHours())
        const m = addPreZero(date.getMinutes())
        const s = addPreZero(date.getSeconds())

        return `${Y}-${M}-${D} ${H}:${m}:${s}`
    } catch(e) {
        console.warn(e)
        return ''
    }
}

export const convertDate = date => {
    return moment(date).format(COMMON.DEFAULT_DATE_FORMAT)
}

export const convertDateTime = date => {
    return moment(date).format("YYYY-MM-DD HH:mm")
}

export const convertDateFormat = (date,format) => {
    return moment(date).format(format)
}
/**
 * time object to dateObj
 */
export const timeToDateObj = ({ hour, min }={hour:0,min:0} ) => {
    const dateObj = new Date()
    dateObj.setHours(hour, min, 0, 0)
    return dateObj
}

/**
 * 
 * @returns { hour, min }
 */
export const getCurrentTimeObj = () => {
    const now = new Date()
    return { hour: now.getHours(), min: now.getMinutes() }
}

/**
 * 
 * @param {number} diff 
 */
export const getMidnightDateObj = (diff=0) => {
    // diff : 0 오늘 기준 00시00분
    // diff : 1 오늘 기준 24시00분

    const dateObj = new Date()
    dateObj.setHours(diff*24, 0, 0, 0)
    return dateObj
}

/**
 * 
 * @param {number} diff 
 */
export const getDateObj235959 = (diff=0) => {
    // diff : 0 오늘 기준 23시59분
    // diff : 1 내일 기준 23시59분

    const dateObj = new Date()
    dateObj.setHours((diff+1)*24-1, 59, 59, 0)
    return dateObj
}

/**
 * 날짜 범위 별 이전~오늘 
 * @param {*} type 
 * @return startDate, endData
 */
export const getDateRangeFromToday = (type) => {
    const today = moment();
    let startDate;
    let endDate = today.format('YYYY-MM-DD');

    switch (type) {
        case '0d':
            startDate = today.startOf('day');
            break;
        case '1w':
            startDate = today.subtract(1, 'week') 
            break;
        case '1m':
            startDate = today.subtract(1, 'months')
            break;
        case '3m':
            startDate = today.subtract(3, 'months')
            break;
        case '6m':
            startDate = today.subtract(6, 'months')
            break;
        case '1y':
            startDate = today.subtract(1, 'year')
            break;
        default:
            throw new Error(`지원하지 않는 ${type}입니다.`);
    }

    return {
        startDate: startDate.format('YYYY-MM-DD'),
        endDate: endDate
    };
}

/**
 * interval에 따라 분 단위를 설정하여 Date 객체를 반환
 * @param {number} interval - 분 단위 간격 (예: 5, 10, 15, 30 등)
 * @returns {Date} - interval로 설정된 시간의 Date 객체
 */
export const getDateObjTimeInterval = (interval = 30) => {
    const now = new Date();

    // 현재 분(minute)을 가져오기
    const currentMinutes = now.getMinutes();

    // interval에 따른 분 단위 계산 (현재 시간을 interval 단위로 반올림)
    const adjustedMinutes = Math.ceil(currentMinutes / interval) * interval;

    // 만약 분이 60 이상이 되면, 시간을 증가시키고 분을 0으로 설정
    if (adjustedMinutes >= 60) {
        now.setHours(now.getHours() + 1, 0, 0, 0);
    } else {
        now.setMinutes(adjustedMinutes, 0, 0);
    }

    return now;
}

/**
 * 시간 format 변경
 * @param {*} param0 
 * @returns 
 */
export const convertTimeFormat = ({ hour, min, format='hh:mm' }) => {
    if(format === 'hh:mm') return `${hour}:${min}`
    else if(format === 'hhmm') return `${hour}${min}`
}

/**
 * 자정 일시 가져오기
 */
export const getMidnightDatetimeObj = (addDay) => {
    return new Date(moment()
        .add(addDay, 'days')
        .startOf('day')
        .format('YYYY-MM-DD HH:mm'))
}

/**
 * 빠른 날짜 return
 * @param {Date} date1 
 * @param {Date} date2 
 * @returns 
 */
export const getEarlierDate = (date1, date2) => {
    const moment1 = moment(date1)
    const moment2 = moment(date2)
    const earlier = moment1.isBefore(moment2) ? moment1 : moment2
    return (new Date(earlier))
}