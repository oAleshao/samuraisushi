import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mainList: [],
    filterList: [],
    sale: false,
    hot: false,
    spicy: false,
    maxPrice: 50,
    hasFilter: false,
};

export const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setMainList: (state, payload) => {
            state.mainList = payload.payload;
            state.filterList = [...state.mainList.sort((item, item2) => { return item2.discount - item.discount })];
        },
        openFilterBox: (state) => {
            state.hasFilter = state.hasFilter ? false : true;
        },
        setFilter: (state, payload) => {
            state.filterList = state.mainList;

            if (payload.payload === 'sale') {
                state.sale = !state.sale ? true : false;
                if (state.sale) {
                    console.log('work');
                    state.filterList = state.filterList.filter((item) => item.discount !== 0);
                }
            }
            else if (state.sale)
                state.filterList = state.filterList.filter((item) => item.discount !== 0);



            if (payload.payload === 'hot') {
                state.hot = !state.hot ? true : false;
                if (state.hot) {
                    console.log('work hot');
                    state.filterList = state.filterList.filter((item) => item.isHot);
                }
            }
            else if (state.hot)
                state.filterList = state.filterList.filter((item) => item.isHot);


            if (payload.payload === 'spicy') {
                state.spicy = !state.spicy ? true : false;
                if (state.spicy) {
                    console.log('work spicy');
                    state.filterList = state.filterList.filter((item) => item.isSpicy);
                }
            }
            else if (state.spicy)
                state.filterList = state.filterList.filter((item) => item.isSpicy);



        },
        removeFilter: (state) => {
            state.filterList = state.mainList;
            state.hot = false;
            state.sale = false;
            state.spicy = false;


        }
    }
});


export const { setMainList, setFilter, removeFilter, openFilterBox } = FilterSlice.actions;
export default FilterSlice.reducer;