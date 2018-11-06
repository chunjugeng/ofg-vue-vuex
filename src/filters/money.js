function money(str, fixed) {
    let num = Number(str);
    
    if (isNaN(num)) return '';
    if (~~fixed) {// ~~ 一种利用符号进行的类型转换,转换成数字类型
        num = num.toFixed(fixed);
        let dotIndex = num.indexOf('.');
        let intPart = Number(num.slice(0, dotIndex));
        let dotPart = num.slice(dotIndex);
        // intPart.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'}) //德国货币格式化
        
		return intPart.toLocaleString() + dotPart;
    }
    return num.toLocaleString();
}
export {money}