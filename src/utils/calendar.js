class Calendar {
    constructor() {
        this.now = 0;
        this.year = null;
        this.month = null;
    }

    nextMonth() {
        this.now++;
        return this.getFullYear(this.now);
    }
    prevMonth() {
        this.now--;
        return this.getFullYear(this.now);
    }
    
    getDateText(e) {
        let val = e.currentTarget.innerHTML;
        val = val < 10 && '0' + val || val;
        return this.year + '-' + this.month + '-'+ val;
    }

    getFullYear(now) { 
        const d = new Date();
        d.setMonth(d.getMonth()+now);
        const year = d.getFullYear();
        
        let month = d.getMonth() + 1;
        month = ( month < 10 && '0' + month )|| month;
        this.year = year;
        this.month = month;
        const str = year + '年' + month + '月';
        const currMthData = this.calculateCurrMthDays(now);
        let calendarData = {
            fullYears: str,
            // week: ['一', '二', '三', '四', '五', '六', '日'],
            week: ['日', '一', '二', '三', '四', '五', '六'],
            currMthData: currMthData
        };
        return calendarData;
    }

    calculateEmptyDays(now) {
        let emptyDays = [];
        const d = new Date();
        const month = d.getMonth() + now;
        // d.setDate(1);	//本月第一天
        d.setMonth(month, 1);
        let m = d.getDay(); //本月第一天星期几
        if (m === 0) m = 0; //第一天是周末

        // if (m === 0) m = 7;//第一天是周一
        // --m; //算出有多少空天 
       
        let i = 0;
        while(i < m) {//补多少空天
            emptyDays.push({
                text: '',
                cl: ''
            });
            i ++;
        }
        
        return emptyDays;
    }

    calculateCurrMthDays(now) {
        let currMthDays = [];
        const d = new Date();
        d.setMonth(d.getMonth() + 1 + now, 0);
        const days = d.getDate();
        for (let i = 1; i <= days; i++) {
            currMthDays.push({
                text: i,
                cl: ''
            });
        }
        const empty = this.calculateEmptyDays(now);
        currMthDays = [...empty, ...currMthDays];
        return this.getPassDateClass(currMthDays, now);
    }

    getPassDateClass(currMthDays, now) {
        const d = new Date();
        d.setMonth(d.getMonth() + now);
        const day = d.getDate();
        now === 0 && currMthDays.map((days) => {
            if (days.text === day) {
                days.cl = 'today';
            } else if (days.text < day) {
                days.cl = 'pass';
            }
        });
        now < 0 && currMthDays.map((days) => {
            days.cl = 'pass';
        });
        return currMthDays;
    }


    init() {
        return this.getFullYear(0);
    }
}
export default new Calendar();