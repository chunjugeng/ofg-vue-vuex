function dateFormat(milliSeconds, isShowHour) {
    if (!milliSeconds) return;
    const n = Number.parseFloat(milliSeconds);
    const date = new Date(n);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const mth = month < 10 ? '0' + month : month;
    const d = day < 10 ? '0' + day : day;
    
    const h = date.getHours() + ':';
    const seconds = date.getSeconds();
    const s = (seconds < 10 ? '0' + seconds : seconds) + ':';
    const minutes = date.getMinutes();
    const m = minutes < 10 ? '0' + minutes : minutes;
    let time = null;
    if (isShowHour) {
        time = date.getFullYear() + '-' + mth + '-' + d + ' ' + h + s + m;
    } else {
        time = date.getFullYear() + '-' + mth + '-' + d;
    }

    return time;
}
export {dateFormat};
