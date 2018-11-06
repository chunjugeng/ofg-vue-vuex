const pager = {
    INITPAGER:'INITPAGER',
    CALCELATPAGERANGE: 'CALCELATPAGERANGE',
    RESETPAGE: 'RESETPAGE',
    PREVPAGE: 'PREVPAGE',
    NEXTPAGE: 'NEXTPAGE'
}
export default {
    state: {
        range: [],
        currPage: 1,
        page: 0,
        pageSize: 10,
        totalRecords: 0,
        pageCount: 0
    },

    mutations: {
        [pager['INITPAGER']](state, payload) {
            state.currPage = 1;
            state.page = payload.page;
            state.pageSize = payload.pageSize;
            state.totalRecords = payload.totalRecords;
            
        },
        [pager['CALCELATPAGERANGE']](state, payload) {
            state.range = payload.range;
            state.currPage = payload.currPage;
            state.pageCount = payload.pageCount;
        },
        [pager['PREVPAGE']](state, page) {
            state.currPage = page;
        },
        [pager['NEXTPAGE']](state, page) {
            state.currPage = page;
        }
    },
    actions: {
        resetPage({dispatch}, payload) {
            dispatch('getPageCount', payload);
        },
        getPageCount({commit, state}, payload) {
            const pageSize = state.pageSize;
            const totalRecords = state.totalRecords;
            const pageCount = totalRecords % pageSize === 0 ? totalRecords / pageSize : ~~(totalRecords / pageSize) + 1;
            if (pageCount === 0) {
                return [];
            }
            
            let page = (payload && payload.currPage) || state.currPage;
            if (page > pageCount) {
                page = 1;
            }
            let visiblePageCount = 8;
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
    
            commit(pager['CALCELATPAGERANGE'], {
                range: range,
                currPage: page,
                pageCount: pageCount
            });

            payload && payload.onChangePage && payload.onChangePage(--page);
        },
        prevPage({commit, dispatch}, payload) {
            if (payload.currPage === 1) return; 
            payload.currPage--;
            commit(pager['PREVPAGE'], payload.currPage);
            dispatch('getPageCount', payload);
        },
        nextPage({commit, state, dispatch}, payload) {
            if ( payload.currPage === state.pageCount) return;
            payload.currPage++;
            commit(pager['NEXTPAGE'], payload.currPage);
            dispatch('getPageCount', payload);
        },
        initPage({commit, dispatch}, paramsPager) {
            commit(pager['INITPAGER'], paramsPager);
            dispatch('getPageCount');
            // console.log(paramsPager.pageSize, 'pager com mounted');
        },
    }
    
}
