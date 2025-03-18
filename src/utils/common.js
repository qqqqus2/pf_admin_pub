import { imageDownload } from "@/api/common/common"
import { usePopupStore } from "@/store"
import JSZip from "jszip"
import { saveAs } from "file-saver";

/**
 * 유효성검사
 * checkValidation 응답
 * return { errMsg: '' }
 */
export const validation = (checkValidation=()=>{}) => {
    const { errMsg } = checkValidation()
    const { openConfirm } = usePopupStore.getState()

    if (errMsg) {
        openConfirm(true, {
            desc: errMsg,
            onConfirm: closeConfirm => {
                closeConfirm()
            },
        })
        return false
    }

    return true
}

/**
 * 
 * @param {*} value 
 * @param {*} defaultValue 
 * @returns 
 */
export const nvl = (value, defaultValue='') => {
    return value ?? defaultValue
}

/**
 * get size classname
 */
export const getSizeOrDefault = (size, defaultSize='s') => {
    return `size-${['s','m','l'].includes(size) ? size : defaultSize}`
}

/**
 * get item by id from object array
 * @param arr: [{id:'abc', key:valueA}, {id:'def', key:valueB}, ...]
 * @param id: 'def' (id)
 * @return  // {id:'def', key:valueB}
 */
export const getItemById = (arr=[], id='') => {
    return arr.find(v => v.id === id)
}

/**
 * get items by id list from object array
 * @param arr: [{id:'abc', key:valueA}, {id:'def', key:valueB}, {id:'ghi', key:valueC} ...]
 * @param idList: ['def', 'ghi'] (value)
 * @return  // [{id:'def', key:valueB}, {id:'ghi', key:valueC}]
 */
export const getItemsByIdList = (arr=[], idList=[]) => {
    return arr.filter(v => idList.includes(v.id))
}

/**
 * get item by key-value from object array
 * @param arr: [{id:'abc', key:valueA}, {id:'def', key:valueB}, ...]
 * @param key: 'id' (key name)
 * @param value: 'def' (value)
 * @return  // {id:'def', key:valueB}
 */
export const getItemByKeyValue = (arr=[], key='', value='') => {
    return arr.find(v => v[key] === value)
}

/**
 * get id values from object array
 * @param {*} arr : [{id: 'abc', ...}, {id: 'def', ...}]
 * @returns     // ['abc', 'def']
 */
export const getIdList = (arr=[], key="id") => {
    return arr.map(v => v[key])
}

/**
 * 
 * @param {*} arr // [{type:'user'}, {type:'admin'}, {type:'oper'}]
 * @param {*} key // 'type'
 * @param {*} separtor '/'
 * 
 * @return  'user/admin/oper'
 */
export const getValueListStr = (arr=[], key='', separtor=',') => {
    return arr.map(v => v[key]).join(separtor)
}

/**
 * 
 * @param {Array} 
 */
export const toggleArrayVal = (arr=[], val='') => {
    const isValueExist = arr.includes(val)
    
    if (isValueExist) {
        return popArrayVal(arr, val)
    }

    else {
        return [ ...arr, val ]
    }
}

/**
 * 
 * @param {Array} 
 */
export const popArrayVal = (arr=[], val='') => {
    const idx = arr.indexOf(val)
    if (~idx) {
        return [...arr.slice(0, idx), ...arr.slice(idx+1)]
    }
    console.log(`value:${val} not found from array:${arr}`)
    return arr
}

/**
 * 
 * @param {Array} 
 */
export const popArrayIdx = (arr=[], idx=-1) => {
    if (~idx) {
        return [...arr.slice(0, idx), ...arr.slice(idx+1)]
    }
    console.log(`idx:${idx} is invalid`)
    return arr
}

/**
 * 데이터 변환
 * @param {*} val 기준 값 
 * @param {*} modVal 수정 될 값
 * @param {*} compareVal 비교 값
 * @returns 
 */
export const convertVal = (val, modVal="", compareVal='ALL') => {
    if(val === compareVal) return modVal;
    else return val;
}

/**
 * val 변환
 * @param {*} val boolean 상태
 * @param {*} convertVal 변경 될 값 obj
 * @returns 
 */
export const convertBooleanToVal = (val, convertVal={false: 0, true: 1}) => {
    return convertVal[val];
}

/**
 * boolean 변환
 * @param {*} val val 상태
 * @param {*} convertVal boolean
 * @returns 
 */
export const convertValToBoolean = (val, convertBoolean={0: false, 1: true}) => {
    return convertBoolean[val];
}

/**
 * 문자열을 Quill 에디터의 HTML 형식으로 전환 (전환데이터에 필요함) 
 * @param {*} text 전환할 문자열
 * @returns 
 */
export const convertToEditorHtml = (text) => {
    if (!text || typeof text !== "string") return "<p></p>"; // 유효하지 않은 경우 빈 HTML 반환
    if (text.startsWith("<p>")) {
        return text
    }
    // 줄바꿈을 <br>로 변환하고 전체를 <p>로 감싸기
    const html = text
      .split("\n")
      .map((line) => `<p>${line}</p>`)
      .join(""); // 줄바꿈마다 <p></p> 생성
    return html;
}

/**
 * 숫자 3자리마다 콤마 추가
 * @param {*} num 숫자
 * @returns 
 */
export const setCommasWithNumber = number => {
    const num = Number(number)

    if (isNaN(num)) {
        return ''
    }

    return num.toLocaleString('en-US')
}


/**
 * 문자열에서 구분자를 찾아 제거
 * @param {*} inputString 입력문자열
 * @param {*} separator 구분자 (기본 -)
 * @returns 
 */
export const removeSeparator = (inputString, separators='-') => {
    //구분자 문자열에 포함된 모든 문자를 정규식으로 처리
    const regex = new RegExp(`[${separators}]`, 'g'); // 'g' 플래그는 모든 일치 항목을 찾음
    return inputString?.replace(regex, '');
}

/**
 * 이미지 파일 미리보기
 * @param {*} file 
 * @param {*} callback 
 */
export const previewReader = (file, callback) => {
    if (!file) {
        return callback('')
    }

    const reader = new FileReader()
    reader.onloadend = () => {
        callback(reader.result)
    }
    reader.readAsDataURL(file)
}

/**
 * 파일 MIME 타입 조회
 * @param {*} fileName 
 * @returns 
 */
export const getFileMimeType = (fileName) => {
    const fileExtension = fileName.split('.').pop().toLowerCase()
    const mimeTypes = {
        'jpg': 'image/jpeg',
        'jpeg': 'image/jpeg',
        'png': 'image/png',
        'gif': 'image/gif',
        'pdf': 'application/pdf',
        'txt': 'text/plain',
    }
    return mimeTypes[fileExtension]
}

/**
 * 전화번호 형식 변환
 * @param {string} phoneNumber 변환할 전화번호 문자열
 * @returns {string} 형식이 변환된 전화번호
 */
export const formatPhoneNumber = (phoneNumber) => {
    if (!phoneNumber || (phoneNumber.length !== 10 && phoneNumber.length !== 11)) {
        return phoneNumber; // 유효하지 않은 경우 원본 반환
    }
    if (phoneNumber.length === 10) {
        return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    }
    return phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
}

/**
 * 파일 다운로드
 */
export const downloadFile = async ({ url, name }) => {
    const response = await imageDownload(url)
    const file = new Blob([response], { type: 'image/jpeg' }) // #TODO: type 처리 필요

    const link = document.createElement('a')
    link.style.display = 'none'
    link.href = URL.createObjectURL(file)
    link.download = name
    document.body.appendChild(link)
    link.click()
    window.URL.revokeObjectURL(url)
}

/**
 * 이미지 목록 zip 파일로 다운로드
 */
export const downloadImagesZip = async (imgUrlList, zipFileName='images') => {
    const zip = new JSZip()
    const folder = zip.folder('images')

    for (const img of imgUrlList) {
        if (img.path !== '' && img.filename !== '') {
            const url = `${img.path}/${img.filename}`;
            const response = await imageDownload(url)
            const file = new Blob([response], { type: 'image/jpeg' })
            folder.file(img.filename, file);
        }
    }

    try {
        const content = await zip.generateAsync({ type: 'blob' })
        saveAs(content, `${zipFileName}`) 
    } catch (e) {
        console.warn(e)
    }
}
