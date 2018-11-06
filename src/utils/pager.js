class Pager {
    constructor() {
        this.pager = {
            currPage: 1,
            countPage: 0,
            min: 0,
            max: 0,
        };
    }
    getPageRange() {

    }

    getPageCount(pagerParams) {
        const {pageSize, totalRecords} = pagerParams;
        // this.countPage = Math.ceil(totalRecords / pageSize);
        const pageCount = totalRecords % pageSize === 0 ? totalRecords / pageSize : ~~(totalRecords / pageSize) + 1;

        if (pageCount === 0) {
			return [];
        }
        let page = this.pager.currPage;
        // page = 1; pageCount=15;
		if (page > pageCount) {
			page = 1;
        }
        let visiblePageCount = 10;
        let min, max, v;
        let range = [];
        if (pageCount <= visiblePageCount) {
			min = 1;
			max = pageCount;
		} else {
            v = Math.floor(visiblePageCount / 2);
            min = Math.max(page - v, 1);
			max = Math.min(min + visiblePageCount - 1, pageCount);

            //15-10 < 5
			if (pageCount - max < v) {
				min = max - visiblePageCount + 1;
            }
            // console.log(min, max)
		}

		for (; min <= max; min++) {
			range.push(min);
        }

        
        return range;
    }

    changePage(page) {
        this.pager.currPage = page;
        return {
            page: --page,
            currPage: this.pager.currPage
        };
    }

    loadData() {
    }

    init(pagerParams) {
        // this.getPageCount(pagerParams);
        // this.loadData();
    }
}
export default new Pager();