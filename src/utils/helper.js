export function onChange(e) {
    const target = e.currentTarget;
    let value = '';
    if(target.srcElement === 'select') {
        value = target.value;
    } else {
        const isBoolean = target.type ==='checkbox' || target.type === 'radio';
        value = isBoolean ? target.checked : target.value;
    }
    this[target.name] = value;
}


export function countPage(params) {
    const {totalRecords, pageSize} = params;
    return totalRecords % pageSize === 0 ? totalRecords / pageSize : ~~(totalRecords / pageSize) + 1;
}

export function calculateClientWidth(isCollapse) {
    const clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
    const pad = 50;
    const flexNav = isCollapse ? 64 : 230;
    
    return (clientWidth - pad - flexNav) + 'px';
}